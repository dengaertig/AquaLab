import React, { useState, useEffect } from 'react';
import axiosInstance from '../services/AxiosInstance'; // Verwende die zentrale Axios-Instanz
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, TimeScale, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';

ChartJS.register(
  TimeScale,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WaterValues = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newValue, setNewValue] = useState({
    date: '',
    ph: '',
    kh: '',
    no3: '',
    no2: '',
    po4: '',
    potassium: '',
    iron: '',
    nh4: '',
  });

  // Daten abrufen
  useEffect(() => {
    axiosInstance
      .get('/api/watervalues/')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Fehler beim Abrufen der Daten! Bitte überprüfen Sie Ihre Anmeldung.');
        setLoading(false);
      });
  }, []); // Läuft nur einmal bei der Komponentenerstellung

  // Neuen Wasserwert hinzufügen
  const handleAddWaterValue = (e) => {
    e.preventDefault();

    axiosInstance
      .post('/api/watervalues/', newValue)
      .then((response) => {
        setData([...data, response.data]);
        setNewValue({
          date: '',
          ph: '',
          kh: '',
          no3: '',
          no2: '',
          po4: '',
          potassium: '',
          iron: '',
          nh4: '',
        });
      })
      .catch((err) => {
        setError('Fehler beim Hinzufügen der Daten! Stellen Sie sicher, dass Sie eingeloggt sind.');
      });
  };

  const handleDelete = (id) => {
    axiosInstance
      .delete(`/api/watervalues/${id}/`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => {
        setError('Fehler beim Löschen der Daten! Möglicherweise keine Berechtigung.');
      });
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Lädt...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  const calculateTrend = (values) => {
    const sum = values.reduce((acc, val) => acc + val, 0);
    const avg = sum / values.length;
    return new Array(values.length).fill(avg); 
  };

  const createChartData = (label, valueData) => {
    const trend = calculateTrend(valueData);
    return {
      labels: data.map(item => format(new Date(item.date), 'dd.MM.yyyy')), // X-Achse: Datum
      datasets: [
        {
          label: label,
          data: valueData,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)', // Linie für den Wert
          tension: 0.1,
        },
        {
          label: 'Trendlinie',
          data: trend,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)', // Linie für die Trendlinie
          borderDash: [5, 5], // gestrichelte Linie für die Trendlinie
          tension: 0.1,
        },
      ],
    };
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Aquarium Wasserwerte</h5>

        {/* Formular für das Hinzufügen von Wasserwerten */}
        <form onSubmit={handleAddWaterValue} className="mb-4">
          <h6 className="mb-3">Neuen Wasserwert hinzufügen</h6>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="date" className="form-label">Datum</label>
              <input
                type="date"
                id="date"
                className="form-control form-control-sm"
                value={newValue.date}
                onChange={(e) => setNewValue({ ...newValue, date: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="ph" className="form-label">pH Wert</label>
              <input
                type="number"
                id="ph"
                className="form-control form-control-sm"
                value={newValue.ph}
                onChange={(e) => setNewValue({ ...newValue, ph: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="kh" className="form-label">Karbonathärte</label>
              <input
                type="number"
                id="kh"
                className="form-control form-control-sm"
                value={newValue.kh}
                onChange={(e) => setNewValue({ ...newValue, kh: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="no3" className="form-label">NO3 (Nitrat)</label>
              <input
                type="number"
                id="no3"
                className="form-control form-control-sm"
                value={newValue.no3}
                onChange={(e) => setNewValue({ ...newValue, no3: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="no2" className="form-label">NO2 (Nitrit)</label>
              <input
                type="number"
                id="no2"
                className="form-control form-control-sm"
                value={newValue.no2}
                onChange={(e) => setNewValue({ ...newValue, no2: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="po4" className="form-label">PO4 (Phosphat)</label>
              <input
                type="number"
                id="po4"
                className="form-control form-control-sm"
                value={newValue.po4}
                onChange={(e) => setNewValue({ ...newValue, po4: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="potassium" className="form-label">Kalium</label>
              <input
                type="number"
                id="potassium"
                className="form-control form-control-sm"
                value={newValue.potassium}
                onChange={(e) => setNewValue({ ...newValue, potassium: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="iron" className="form-label">Eisen</label>
              <input
                type="number"
                id="iron"
                className="form-control form-control-sm"
                value={newValue.iron}
                onChange={(e) => setNewValue({ ...newValue, iron: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="nh4" className="form-label">NH4 (Ammonium)</label>
              <input
                type="number"
                id="nh4"
                className="form-control form-control-sm"
                value={newValue.nh4}
                onChange={(e) => setNewValue({ ...newValue, nh4: e.target.value })}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">Wert hinzufügen</button>
        </form>

    
        
        {/* Tabelle zur Anzeige der Wasserwerte */}
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Datum</th>
              <th>pH Wert</th>
              <th>Karbonathärte</th>
              <th>NO3 (Nitrat)</th>
              <th>NO2 (Nitrit)</th>
              <th>PO4 (Phosphat)</th>
              <th>Kalium</th>
              <th>Eisen</th>
              <th>NH4 (Ammonium)</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center">Keine Daten verfügbar</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id}>
                   <td>{format(new Date(item.date), 'dd.MM.yyyy')}</td>
                  <td>{item.ph}</td>
                  <td>{item.kh} °dKH</td>
                  <td>{item.no3} mg/l</td>
                  <td>{item.no2} mg/l</td>
                  <td>{item.po4} mg/l</td>
                  <td>{item.potassium} mg/l</td>
                  <td>{item.iron} mg/l</td>
                  <td>{item.nh4} mg/l</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Löschen
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
            {/* Anzeige der Diagramme */}
            <div className="row">
          {['ph', 'kh', 'no3', 'no2', 'po4', 'potassium', 'iron', 'nh4'].map((key) => {
            const chartData = {
              datasets: [
                {
                  label: key.toUpperCase(),
                  data: data.map(item => ({ x: item.date, y: item[key] })), // Daten mit Zeitstempeln
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  tension: 0.4, 
                },
              ],
            };

            const options = {
              responsive: true,
              scales: {
                x: {
                  type: 'time', 
                  time: {
                    unit: 'week', 
                  },
                  title: {
                    display: true,
                    text: 'Datum',
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: key.toUpperCase(),
                  },
                },
              },
            };

            return (
              <div className="col-md-6 mb-4" key={key}>
                <h6>{key.toUpperCase()}</h6>
                <Line data={chartData} options={options} />
              </div>
    );
  })}
</div>
      </div>
    </div>
  );
};

export default WaterValues;
