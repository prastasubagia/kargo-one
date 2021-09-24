import { Form, Button, Container } from "react-bootstrap";

import { useContext, useState } from "react";
import { createDriver } from "../../../apis/driver.api";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Redirect, useHistory } from "react-router";

const AddForm = () => {
  const history = useHistory();
  const [driver, setDriver] = useState({
    name: "",
    phone_number: "",
    status: true,
  });

  const onInputChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const { name, phone_number, status } = driver;

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const response = await createDriver({ name, phone_number, status });
      console.log(response);
      if (response.status == 201) {
        console.log(response);
        history.push("/driver");
        // return <Redirect to="/driver" />;
      }
    })();
  };

  return (
    <div>
      <Header />
      <div className="main-layout py-5">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name *"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Phone Number *"
                name="phone_number"
                value={phone_number}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit" block>
              Add Driver
            </Button>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AddForm;
