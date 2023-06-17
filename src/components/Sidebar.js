import React from 'react'
import "../styles/Sidebar.css"
import { Col, Row } from 'reactstrap'
import {FaUserCircle} from 'react-icons/fa'
import{CiBoxes,CiSettings,CiDollar, CiCreditCard1, CiShop, CiChat2,CiUser,CiBadgeDollar,CiCreditCard2,CiMedal} from "react-icons/ci"
import Profile from './Profile'


const Sidebar = () => {
  return (
    <div className='container-fluid'>
      <Row>
        <Col md={2} className='sidebar_container'>
            <ul>
                <Profile />
                <li>
                   <CiBoxes size={17} className='icons'/> Insights
                </li>
                <li>
                <CiDollar size={17} className='icons'/> Transactions
                </li>
                <li>
                <CiCreditCard1 size={17} className='icons'/> Card
                </li>
                <li>
                <CiShop size={17} className='icons'/> Vendors
                </li>
                <li>
                <CiChat2 size={17} className='icons'/> Accouting
                </li>
                <li>
                <CiUser size={17} className='icons'/> People
                </li>
                <li>
                <CiBadgeDollar size={17} className='icons'/> Reimburse
                </li>
                <li>
                <CiCreditCard2 size={17} className='icons'/> My Fillo
                </li>
                <li>
                <CiMedal size={17} className='icons'/> Refer & Earn
                </li>
                <li>
                <CiSettings size={17} className='icons'/>  Settings
                </li>
            </ul>
        </Col>
        {/* <Col md={9}>Hello</Col> */}
      </Row>
    </div>
  )
}

export default Sidebar
