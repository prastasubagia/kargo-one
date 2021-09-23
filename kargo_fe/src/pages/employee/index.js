import React from "react";
import EmployeeList from "../../components/EmployeeList";
import EmployeeContextProvider from "../../contexts/EmployeeContext";

const Home = () => {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <EmployeeList />
          </EmployeeContextProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;
