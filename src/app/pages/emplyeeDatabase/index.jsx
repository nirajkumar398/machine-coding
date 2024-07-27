import "./style.css";
import initialEmployeeData from "./data/data.json";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";

const EmployeeDataBase = () => {
  const [employeesData, setEmployeesData] = useState(initialEmployeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDelete = (e, employeeId) => {
    e.stopPropagation();
    const updatedEmployees = employeesData.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployeesData(updatedEmployees);

    if (selectedEmployee && selectedEmployee.id === employeeId) {
      setSelectedEmployee(null);
    }
  };

  return (
    <div className="employee-container">
      <h1>Employee Database Management System</h1>
      <AddEmployee setEmployeesData={setEmployeesData} />
      <div className="employee-main">
        <div className="employee-left">
          <h1>Employee List</h1>
          <div className="employee-list">
            {employeesData.map((employee) => (
              <div
                key={employee.id}
                className="employee-item"
                onClick={() => setSelectedEmployee(employee)}
              >
                <span>{`${employee.firstName} ${employee.lastName}`}</span>
                <span onClick={(e) => handleDelete(e, employee.id)}>❌</span>
              </div>
            ))}
          </div>
        </div>
        <div className="employee-right">
          <h1>Employee Information</h1>
          {selectedEmployee && (
            <div className="employee-info">
              <img src={selectedEmployee.imageUrl} alt={`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} />
              <span>{`${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})`}</span>
              <span>{selectedEmployee.address}</span>
              <span>{selectedEmployee.email}</span>
              <span>Mobile: {selectedEmployee.contactNumber}</span>
              <span>DOB: {selectedEmployee.dob}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDataBase;
