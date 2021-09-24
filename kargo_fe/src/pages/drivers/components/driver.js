import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaCircle, FaEdit, FaTrash } from "react-icons/fa";
// import EditForm from './EditForm'

const Driver = ({ driver }) => {
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <td>{driver.id}</td>
      <td>{driver.name}</td>
      <td>{driver.phone_number}</td>
      <td>
        {driver.status ? (
          <div>
            <FaCircle className="text-success mr-1" />
            Active
          </div>
        ) : (
          <div>
            <FaCircle className="text-muted mr-1" />
            Inactive
          </div>
        )}
      </td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <FaEdit />
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            // onClick={() => deleteEmployee(driver.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <FaTrash />
          </button>
        </OverlayTrigger>
      </td>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm driver={driver} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Driver;
