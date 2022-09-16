import CalendarDayBlock from "../CalendarDayBlock/CalendarDayBlock";
import "./CalendarDay.scss";

const CalendarDay = ({ day, employeeList, activeEmployee }) => {

    return (
        <>
            <div className="day">
                <div className="day-title block block--title">
                    <span className="day__day">
                        {day.day}
                    </span>
                    <span className="day__date">
                        {day.date}
                    </span>
 
                </div>
                {employeeList.map((employee) => {
                    return (
                        <CalendarDayBlock
                            activeEmployee={activeEmployee}
                            employee={employee}
                            day={day}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default CalendarDay;
