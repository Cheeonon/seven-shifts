import CalendarDay from "../CalendarDay/CalendarDay";
import CalendarEmployee from "../CalendarEmployee/CalendarEmployee";
import employeeList from "../../data/employees.json";
import "./Calendar.scss";
import { useState } from "react";
import ModalTest from "../ModalTest/ModalTest";

const Calendar = () => {
    const days = [
    {
        day: "Sun",
        date: "Sep 18"
    },
    {
        day: "Mon",
        date: "Sep 19"
    },
    {
        day: "Tue",
        date: "Sep 20"
    },
    {
        day: "Wed",
        date: "Sep 21"
    },
    {
        day: "Thu",
        date: "Sep 22"
    },
    {
        day: "Fri",
        date: "Sep 16"
    },
    {
        day: "Sat",
        date: "Sep 17"
    }
]


    const [isAddEmployee, setIsAddEmployee] = useState(false);
    const [activeEmployee, setActiveEmployee] = useState(null);

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

    return (
        <>
            {isAddEmployee && <ModalTest handleCancel={handleCancel} />}
            <div className="calendar">
                <div className="calendar__employees">
                    <div className="calendar__employees--title block block--title">
                        Employee
                        <button onClick={handleAddEmployee} className="calendar__employees__btn">Add employees</button>
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
