import { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { getDrivers } from "../../apis/driver.api";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LoadingIndicator } from "../../components/Loading-Indicator";
import { TableContainer } from "../../components/TableContainer";
import Driver from "./components/driver";

function Drivers() {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Phone Number",
        accessor: "phone_number",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getDrivers();
      response.data.map((x) => (x.status = x.status ? "Active" : "Inactive"));
      // console.log(response);
      setData(response.data);
    })();
  }, []);

  // other template
  // const indexOfLastEmployee = currentPage * employeesPerPage;
  // const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  // const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  // const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  // useEffect(() => {
  //   (async () => {
  //     const response = await getDrivers();
  //     // console.log(response);
  //     setData(response.data);
  //   })();
  // }, []);

  return (
    <div>
      <Header />
      <div className="main-layout py-5">
        <Container>
          {data ? (
            <TableContainer columns={columns} data={data} title="Driver" />
          ) : (
            // <table className="table table-bordered table-striped table-hover">
            //   <thead>
            //     <tr>
            //       <th>ID</th>
            //       <th>Name</th>
            //       <th>Phone Number</th>
            //       <th>Status</th>
            //       <th>Actions</th>
            //     </tr>
            //   </thead>
            //   <tbody>
            //     {data.map((driver) => (
            //       <tr key={driver.id}>
            //         <Driver driver={driver} />
            //       </tr>
            //     ))}
            //   </tbody>
            // </table>
            <LoadingIndicator />
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Drivers;
