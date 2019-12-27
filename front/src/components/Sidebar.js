import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBook, faChartLine, faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

function Sidebar() {

  return (
    <div id="lifeplan-sidebar" className="sidebar-view">
      <div className="sidebar-header">
        <div className="sidebar-title">Lifemap</div>
      </div>
      <div className="sidebar-nav">
        <Nav defaultActiveKey="/app" className="flex-column">
          <LinkContainer to="/app">
            <Nav.Link><FontAwesomeIcon icon={faHome} className="mr-2 fa-fw"/>ホーム</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/app/members">
            <Nav.Link><FontAwesomeIcon icon={faUsers} className="mr-2 fa-fw" />メンバー</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/app/budget">
            <Nav.Link><FontAwesomeIcon icon={faBook} className="mr-2 fa-fw"/>家計</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/app/cashflow">
            <Nav.Link><FontAwesomeIcon icon={faChartLine} className="mr-2 fa-fw"/>キャッシュフロー</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/app/profile">
            <Nav.Link><FontAwesomeIcon icon={faCog} className="mr-2 fa-fw"/>設定</Nav.Link>
          </LinkContainer>
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar;