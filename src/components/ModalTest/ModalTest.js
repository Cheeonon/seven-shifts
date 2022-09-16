import "./ModalTest.scss";
import axios from 'axios';




const ModalTest = ({ employeeList, handleCancel, employeeName }) => {
  const URLpostShift = 'http://localhost:5050/employees';
  function handleSubmit (event) {
        axios.post(URLpostShift, {
          name: event.target.employee.value,
          day: event.target.day.value,
          timeslot: event.target.timeslot.value,
          type: 'shift'

        })
        .then((response) =>{
          console.log(response);
        })
  }


  return (
    <div className="modal">
     
      <div className="modal__content">
      <div className="modal__cancel" onClick={handleCancel}>
        <span className="modal__X">X</span>
        </div>
        <div className="modal__add-shift">
            <h2>Add new Shift:</h2>
          <form action="" onSubmit={handleSubmit}>
          <select name="employee" id="">
            Employee:
            <option value="default" disable selected>Please choose an employee:</option>
            {employeeList.map ((employee)=>{
                return <option value={employee.name}>{employee.name}</option>
            })}
           
            </select>
          <select name="day" id="">
            Day:
            <option value="default" disable selected>Please choose a day</option>
            <option value="Mon">Monday</option>
              <option value="Tue">Tuesday</option>
              <option value="Wed">Wednesday</option>
              <option value="Thu">Thursday</option>
              <option value="Fri">Friday</option>
              <option value="Sat">Saturday</option>
              <option value="Sun">Sunday</option>
           
            </select>
            <select name="timeslot" id="">
            <option value="default" disable selected>Please choose a time slot</option>
            <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
            </select>
            <button>Create Shift</button>
          </form>

        </div>
        Schedule a One on One meeting with: <span className="modal__employee">{employeeName}</span> 
       
        <div>
          <form  action="">
            At:
            <select className="modal__select" name="time-slot" id="">
            <option value="Tue" disable selected>Please choose a time slot</option>
              <option value="1">12:00</option>
              <option value="2">12:30</option>
              <option value="3">13:00</option>
              <option value="4">13:30</option>
              <option value="5">14:00</option>
              <option value="6">14:30</option>
              <option value="7">15:00</option>
              <option value="8">15:30</option>
              <option value="9">16:00</option>
              <option value="10">16:30</option>
            
            </select>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ModalTest;
