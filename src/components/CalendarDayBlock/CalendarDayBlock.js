import { useState } from "react";
import ModalTest from "../ModalTest/ModalTest";
import "./CalendarDayBlock.scss";

const CalendarDayBlock = ({ employee, day, activeEmployee }) => {

    const workDayList = employee.days;
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
            {updateSchedule && <ModalTest handleCancel={handleCancel} />}
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
                    <div className="day-block__ticket">
                        <div className="day-block__type"></div>
                    </div>
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
