// Dependencies
import 'babel-polyfill'; // Required for Runtime
import React from 'react';
import PropTypes from 'prop-types';

// Icons
import EyeIcon from 'bootstrap-icons/icons/eye.svg';

// Components
import {
  Container,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  ButtonToolbar,
  Form,
  ReactSelectInput,
  TextInput,
  Formik,
  yup,
  questionMessage,
  warningMessage,
  closeModal,
  Modal,
  Loading,
  GlobalState,
} from '../src';

// Resources
import { getPosts } from './resources/posts';

import './styles.pcss';

const schema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email('Email inválido')
    .required(''),
  options: yup.string().required(''),
});

const WrapperComponent = ({ title, children }) => {
  return (
    <div className="DemoWrapper">
      <h3>{title}</h3>
      <div className="ComponentWrapper">{children}</div>
    </div>
  );
};

const createModalMesaage = type => {
  if (type === 'question') {
    return questionMessage(
      'Title question message',
      'Third argument must be a function',
      () => {
        // eslint-disable-next-line no-console
        console.info('Accept question message');
        closeModal();
      }
    );
  } else {
    warningMessage(
      'Title warning',
      'Just receive a string param message'
    );
  }
};

const loadPosts = async () => {
  const res = await getPosts({
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
  console.info(res);
};

WrapperComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <GlobalState>
      <Modal />
      <Loading />
      <Container>
        <>
          <h1 className="text-center">InterWare UI</h1>
          <WrapperComponent title="Navbar">
            <Navbar expand="lg">
              <Navbar.Brand href="#home">Material InterWare</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
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
                onClick={() => console.info('Clicked primary!')}
              />
              &emsp;
              <Button
                id="example-button-default"
                name="example-button-default"
                variant="default"
                label="Button default"
                type="button"
                // eslint-disable-next-line no-console
                onClick={() => console.info('Clicked default!')}
              />
              &emsp;
              <Button
                id="example-button-link"
                name="example-button-link"
                variant="light"
                label="Button light"
                type="button"
                // eslint-disable-next-line no-console
                onClick={() => console.info('Clicked link!')}
                icon={<EyeIcon fill="#883682" width="25" height="25" />}
              />
            </ButtonToolbar>
          </WrapperComponent>

          <WrapperComponent title="Text Input">
            <Formik
              initialValues={{
                name: '',
                lastName: '',
                email: '',
                options: '',
              }}
              validationSchema={schema}
              validateOnChange={false}
              // eslint-disable-next-line no-console
              onSubmit={e => console.log(e)}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <div>{JSON.stringify(values)}</div>
                  <div>{JSON.stringify(errors)}</div>
                  <div>{JSON.stringify(touched)}</div>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomName"
                    >
                      <TextInput
                        name="name"
                        label="Name"
                        placeholder="Name"
                        value={values.name}
                        handleChange={handleChange}
                        isInvalid={!!errors.name}
                        isValid={touched.name && !errors.name}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomLastName"
                    >
                      <TextInput
                        name="lastName"
                        label="Last Name"
                        placeholder="Last Name"
                        value={values.lastName}
                        handleChange={handleChange}
                        isInvalid={!!errors.lastName}
                        isValid={touched.lastName && !errors.lastName}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomMail"
                    >
                      <TextInput
                        name="email"
                        label="Mail"
                        placeholder="E-Mail"
                        value={values.email}
                        handleChange={handleChange}
                        isInvalid={!!errors.email}
                        isValid={touched.email && !errors.email}
                        textInvalid={errors.email}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomOptions"
                    >
                      <ReactSelectInput
                        name="options"
                        value={values.options}
                        label="Options"
                        options={[
                          {
                            value: 1,
                            label: 'Option1',
                          },
                        ]}
                        handleChange={handleChange}
                        isInvalid={!!errors.options}
                        isValid={touched.options && !errors.options}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Button
                    id="example-submit-button"
                    name="example-submit-button"
                    variant="primary"
                    label="Submit primary"
                    type="submit"
                  />
                </Form>
              )}
            </Formik>
          </WrapperComponent>

          <WrapperComponent title="Modal">
            <ButtonToolbar>
              <Button
                id="example-modal-message"
                name="example-modal-message"
                variant="primary"
                label="Modal warning message"
                type="button"
                onClick={() => {
                  createModalMesaage('warning');
                }}
              />
              &emsp;
              <Button
                id="example-question-modal-message"
                name="example-question-modal-message"
                variant="primary"
                label="Modal question message"
                type="button"
                // eslint-disable-next-line no-console
                onClick={() => {
                  createModalMesaage('question');
                }}
              />
              &emsp;
              <Button
                id="example-fetch-data"
                name="example-fetch-data"
                variant="default"
                label="Fetch data"
                type="button"
                // eslint-disable-next-line no-console
                onClick={loadPosts}
              />
            </ButtonToolbar>
          </WrapperComponent>
        </>
      </Container>
    </GlobalState>
  );
};

export default App;
