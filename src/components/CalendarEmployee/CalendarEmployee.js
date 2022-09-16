import { useState } from "react";
import "./CalendarEmployee.scss";

const CalendarEmployee = ({ employee, handleHovering, handleNotHovering }) => {
    return (
        <>
            <div
                className="employee block"
                onMouseOver={() => {
                    handleHovering(employee.name);
                }}
                onMouseLeave={handleNotHovering}
            >
                {employee.name}
            </div>
        </>
    );
};

export default CalendarEmployee;
