import React from 'react'
import {
  CBadge,
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavTitle,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react';

import { cilLayers, cilSpeedometer, cilHome } from '@coreui/icons'

export const SidebarDark = () => {
  return (
    <CSidebar className="border-end" colorScheme="dark"> 
      <CSidebarNav>
        <CNavTitle>Navigation</CNavTitle>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilHome} /> Home
        </CNavItem>
        <CNavItem href="/">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Analytics{' '}
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilLayers} /> Login
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  )
}
