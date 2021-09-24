import { Form, Button, Container } from "react-bootstrap";

import { useState } from "react";
import { editDriver } from "../../../apis/driver.api";
import { useHistory } from "react-router";
// import { Header } from "../../../components/Header";
// import { Footer } from "../../../components/Footer";

const EditForm = ({ driver }) => {
  const history = useHistory();
  const id = driver.id;
  const [name, setName] = useState(driver.name);
  const [phone_number, setPhone] = useState(driver.phone_number);
  const [status, setStatus] = useState(driver.status);

  const updatedDriver = { name, phone_number, status };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(updatedDriver);
    (async () => {
      const response = await editDriver(id, updatedDriver);
      // console.log(response);
      if (response.status === 200) {
        console.log(response);
        history.push("/driver");
        // return <Redirect to="/driver" />;
      }
    })();
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="main-layout py-5">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name *"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Phone Number *"
                name="phone_number"
                value={phone_number}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit" block>
              Edit Driver
            </Button>
          </Form>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default EditForm;
