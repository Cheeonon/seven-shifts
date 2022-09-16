import { useState } from "react";
import ModalTest from "../ModalTest/ModalTest";
import TicketShift from "../TicketShift/TicketShift";
import "./CalendarDayBlock.scss";

const CalendarDayBlock = ({employeeList, employee, day, activeEmployee }) => {

    const workDayList = [employee.days.day1[0].day, employee.days.day2[0]]
    console.log(workDayList)

    const foundDay = workDayList.find((workDay) => {
        return workDay === day;
    });
    const [isAddButton, setIsAddButton] = useState(false);
    const [updateSchedule, setUpdateSchedule] = useState(false);

    const handleAddButton = () => {
        setIsAddButton(true);
    };

    const handleNoAddButton = () => {
        setIsAddButton(false);
    };

    const handleUpdateSchedule = () => {
        setUpdateSchedule(true);
    };

    const handleCancel = () => {
        setUpdateSchedule(false);
    };
    

    return (
        <>
            {updateSchedule && <ModalTest employeeList={employeeList} employeeName={employee.name} handleCancel={handleCancel} />}
            <div
                className={
                    activeEmployee === employee.name
                        ? "day-block block block--active"
                        : "day-block block"
                }
                onMouseOver={handleAddButton}
                onMouseLeave={handleNoAddButton}

            >
                {foundDay && (
                  <TicketShift />
                )}

                    {isAddButton && (
                    <div
                        className="day-block__add"
                        onClick={handleUpdateSchedule}
                    >
                        +
                    </div>
                )}
            </div>
        </>
    );
};

export default CalendarDayBlock;
