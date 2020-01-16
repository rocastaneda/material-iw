// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Layout from '../src/Layout';
import Navigation from '../src/Navigation';
import Button from '../src/Button';

const WrapperComponent = ({ title, children }) => {
  return (
    <Layout.Row>
      <Layout.Col md={12}>
        <h2>{title}</h2>
        {children}
      </Layout.Col>
    </Layout.Row>
  );
};

WrapperComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Layout.Container>
      <>
        <h1>InterWare</h1>
        <WrapperComponent title="Navbar">
          <Navigation.Navbar expand="lg">
            <Navigation.Navbar.Brand href="#home">
              Material InterWare
            </Navigation.Navbar.Brand>
            <Navigation.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navigation.Navbar.Collapse id="basic-navbar-nav">
              <Navigation.Nav className="mr-auto">
                <Navigation.Nav.Link href="#home">Home</Navigation.Nav.Link>
                <Navigation.Nav.Link href="#link">Link</Navigation.Nav.Link>
                <Navigation.NavDropdown
                  title="Dropdown"
                  id="basic-nav-dropdown"
                >
                  <Navigation.NavDropdown.Item href="#action/3.1">
                    Action
                  </Navigation.NavDropdown.Item>
                  <Navigation.NavDropdown.Item href="#action/3.2">
                    Another action
                  </Navigation.NavDropdown.Item>
                  <Navigation.NavDropdown.Item href="#action/3.3">
                    Something
                  </Navigation.NavDropdown.Item>
                  <Navigation.NavDropdown.Divider />
                  <Navigation.NavDropdown.Item href="#action/3.4">
                    Separated link
                  </Navigation.NavDropdown.Item>
                </Navigation.NavDropdown>
              </Navigation.Nav>
            </Navigation.Navbar.Collapse>
          </Navigation.Navbar>
        </WrapperComponent>

        <WrapperComponent title="Button">
          <Button
            id="example-button"
            name="example-button"
            variant="primary"
            label="Click me!"
            type="button"
            // eslint-disable-next-line no-console
            onClick={() => console.log('Clicked!')}
          />
        </WrapperComponent>
      </>
    </Layout.Container>
  );
};

export default App;
