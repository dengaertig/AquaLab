# waterdata/models.py
from django.db import models

class WaterValue(models.Model):
    date = models.DateField()
    kh = models.FloatField(verbose_name="Karbonathärte (KH)")
    no3 = models.FloatField(verbose_name="Nitrat (NO3)")
    no2 = models.FloatField(verbose_name="Nitrit (NO2)")
    po4 = models.FloatField(verbose_name="Phosphat (PO4)")
    potassium = models.FloatField(verbose_name="Kalium (K)")
    iron = models.FloatField(verbose_name="Eisen (Fe)")
    ph = models.FloatField(verbose_name="pH-Wert")
    nh4 = models.FloatField(verbose_name="Ammonium (NH4)")

def __str__(self):
    return (f"{self.date} - KH: {self.kh}, "
            f"NO3: {self.no3} mg/L, NO2: {self.no2} mg/L, "
            f"PO4: {self.po4} mg/L, Kalium: {self.potassium} mg/L, "
            f"Eisen: {self.iron} mg/L, pH: {self.ph}, NH4: {self.nh4} mg/L")
