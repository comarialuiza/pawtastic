import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, FormMenu, FormMenuItem } from './styles';

function Menu() {
  return (
      <Container>
          <Logo>Pawtastic</Logo>

          <FormMenu>
              <FormMenuItem><span className="formMenuSelect"></span>Human profile</FormMenuItem>
              <FormMenuItem><span className="formMenuSelect"></span>Pet basics</FormMenuItem>
              <FormMenuItem><span className="formMenuSelect"></span>Pet details</FormMenuItem>
              <FormMenuItem><span className="formMenuSelect"></span>Confirm</FormMenuItem>
          </FormMenu>

          <Link to="/reviews" className="saveAndExit">Save and exit</Link>
      </Container>
  );
}

export default Menu;