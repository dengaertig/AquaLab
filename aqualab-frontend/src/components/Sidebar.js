import React from 'react';
import {
  CBadge,
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavTitle,
  CButton,
} from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cilLayers, cilSpeedometer, cilHome, cilExitToApp } from '@coreui/icons';

export const SidebarDark = ({ logout }) => {
  return (
    <CSidebar className="border-end" colorScheme="dark">
      <CSidebarNav>
        <CNavTitle>Navigation</CNavTitle>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilHome} /> Home
        </CNavItem>
        <CNavItem href="/">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Analytics{' '}
          <CBadge color="primary ms-auto">BETA</CBadge>
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilLayers} /> Login
        </CNavItem>


        {/* Kompakter Logout-Button */}
        <div className="px-3 py-2">
          <CButton
            color="danger"
            variant="outline"
            size="sm"
            onClick={logout}
            className="logout-button"
          >
            <CIcon customClassName="me-2" icon={cilExitToApp} />
            Logout
          </CButton>
        </div>
      </CSidebarNav>
    </CSidebar>
  );
};
