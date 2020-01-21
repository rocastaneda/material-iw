// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

// Components
import { Container, Row, Col } from '../src/Layout';
import { Nav, Navbar, NavDropdown } from '../src/Navigation';
import { Button, ButtonToolbar } from '../src/Button';
import Form from '../src/Form';
import TextInput from '../src/TextInput';

// Static
import Icon from '../src/static/svg/icon-eye.svg';

const schema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().required(),
  mail: yup
    .string()
    .email('Email inválido')
    .required('Este campo es requerido'),
});

const WrapperComponent = ({ title, children }) => {
  return (
    <Row>
      <Col md={12}>
        <h2>{title}</h2>
        {children}
      </Col>
    </Row>
  );
};

WrapperComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Container>
      <>
        <h1>InterWare</h1>
        <WrapperComponent title="Navbar">
          <Navbar expand="lg">
            <Navbar.Brand href="#home">Material InterWare</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </WrapperComponent>

        <WrapperComponent title="Button">
          <ButtonToolbar>
            <Button
              id="example-button-primary"
              name="example-button-primary"
              variant="primary"
              label="Button primary"
              type="button"
              // eslint-disable-next-line no-console
              onClick={() => console.log('Clicked primary!')}
            />
            &emsp;
            <Button
              id="example-button-default"
              name="example-button-default"
              variant="default"
              label="Button default"
              type="button"
              // eslint-disable-next-line no-console
              onClick={() => console.log('Clicked default!')}
            />
            &emsp;
            <Button
              id="example-button-link"
              name="example-button-link"
              variant="link"
              label="Button link"
              type="button"
              // eslint-disable-next-line no-console
              onClick={() => console.log('Clicked link!')}
              icon={<Icon />}
            />
          </ButtonToolbar>
        </WrapperComponent>
        <WrapperComponent title="Text Input">
          <Formik
            initialValues={{
              name: '',
              lastName: '',
              email: '',
            }}
            validationSchema={schema}
            // eslint-disable-next-line no-console
            onSubmit={e => console.log(e)}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustomName">
                    <TextInput
                      id="name"
                      name="name"
                      label="Name"
                      placeholder="Name"
                      value={values.name}
                      handleChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomLastName"
                  >
                    <TextInput
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      placeholder="Last Name"
                      value={values.lastName}
                      handleChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustomMail">
                    <TextInput
                      id="mail"
                      name="mail"
                      label="Mail"
                      placeholder="E-Mail"
                      value={values.mail}
                      handleChange={handleChange}
                      isInvalid={!!errors.mail}
                      textInvalid={errors.mail}
                    />
                  </Form.Group>
                </Form.Row>
                <Button
                  id="example-submit-button"
                  name="example-submit-button"
                  variant="primary"
                  label="Submit"
                  type="submit"
                />
              </Form>
            )}
          </Formik>
        </WrapperComponent>
      </>
    </Container>
  );
};

export default App;
