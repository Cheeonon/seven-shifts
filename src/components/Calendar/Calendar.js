import CalendarDay from "../CalendarDay/CalendarDay";
import CalendarEmployee from "../CalendarEmployee/CalendarEmployee";
// import employeeList from "../../data/employees.json";
import "./Calendar.scss";
import { useEffect, useState } from "react";
import ModalTest from "../ModalTest/ModalTest";
import axios from 'axios';

const Calendar = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    const [isAddEmployee, setIsAddEmployee] = useState(false);
    const [activeEmployee, setActiveEmployee] = useState(null);
    const [employeeList, setEmployeeList] = useState([]);
    const URLget = "http://localhost:5050/employees";

    useEffect(()=>{
        axios.get(URLget)
        .then((response)=>{
            setEmployeeList(response.data)
            console.log(response.data);
        }).catch((error)=>{
            console.log(error)
        })
    },[])  
 

    const handleHovering = (activeEmployee) => {
        setActiveEmployee(activeEmployee);
    };

    const handleNotHovering = () => {
        setActiveEmployee(null);
    };

    const handleAddEmployee = () => {
      setIsAddEmployee(true);
    }

    const handleCancel = () => {
      setIsAddEmployee(false);
  };

  if( !employeeList) {
    return <h1>Loading Data...</h1>
  }

    return (
        <>
            {/* {isAddEmployee && <ModalTest handleCancel={handleCancel} />} */}
            <div className="calendar">
                <div className="calendar__employees">
                    <div className="calendar__employees--title block block--title">
                        Employee
                        
                    </div>
                    {employeeList.map((employee) => {
                        return (
                            <CalendarEmployee
                                handleHovering={handleHovering}
                                handleNotHovering={handleNotHovering}
                                employee={employee}
                            />
                        );
                    })}
                </div>
                <div className="calendar__days">
                    {days.map((day, index) => {
                        return (
                            <CalendarDay
                                day={day}
                                employeeList={employeeList}
                                activeEmployee={activeEmployee}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Calendar;
