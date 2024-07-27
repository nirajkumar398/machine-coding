import { useRef, useState } from "react";
import "./style.css";
import Modal from "./Modal/Modal";

const AddEmployee = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const imageUrlRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculateAge = (dob) => {
      const birthdate = new Date(dob);
      const today = new Date();
      let age = birthdate.getFullYear() - today.getFullYear();
      const monthDiff = birthdate.getMonth() - today.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff == 0 && birthdate.getDate() > today.getDate())
      ) {
        age--;
      }
      return Math.abs(age);
    };
    const formateDate = (dateString) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(date);
    };
    const newEmp = {
      id: Date.now(),
      imageUrl:
        imageUrlRef?.current?.value ||
        "https://cdn-icons-png.flaticon.com/512/0/93.png",
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      email: emailInputRef.current.value,
      contactNumber: mobileInputRef.current.value,
      age: calculateAge(dateInputRef.current.value),
      dob: formateDate(dateInputRef.current.value),
      salary: 0,
      address: addressInputRef.current.value,
    };
    props.setEmployeesData((prevData) => [...prevData, newEmp]);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        className="add-employee-button"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Add Employee
      </button>

      <Modal onClose={() => setIsModalOpen(!isModalOpen)} isOpen={isModalOpen}>
        <div className="input-wrap">
          <h1>Add Employee Details</h1>
          <form onSubmit={handleSubmit}>
            <input
              ref={firstNameInputRef}
              placeholder="Enter First Name"
              required
            />
            <input
              ref={lastNameInputRef}
              placeholder="Enter Last Name"
              required
            />
            <input
              ref={imageUrlRef}
              placeholder="Enter Image url"
              type="text"
            />
            <textarea
              ref={addressInputRef}
              placeholder="Enter Address"
              required
            />
            <input
              ref={mobileInputRef}
              placeholder="Enter Mobile"
              type="tel"
              required
            />
            <input
              ref={emailInputRef}
              placeholder="Enter Email"
              type="email"
              required
            />
            <input
              ref={dateInputRef}
              placeholder="Enter DOB"
              type="date"
              required
            />
            <button type="submit" className="details-submit-button">
              ADD Details
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddEmployee;
