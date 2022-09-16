import CalendarDayBlock from "../CalendarDayBlock/CalendarDayBlock";
import "./CalendarDay.scss";

const CalendarDay = ({ day, employeeList, activeEmployee }) => {
  return (
    <>
      <div className="day">
        <div className="day-title block block--title">{day}</div>
        {employeeList.map((employee) => {
          return (
            <CalendarDayBlock
              employeeList={employeeList}
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
