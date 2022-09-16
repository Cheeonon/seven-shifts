import './Dashboard.scss';

const Dashboard = () => {
  return (
    <aside className="dashboard">
        <div className="dashboard__content">
            <h1 className="dashboard__title">Dashboard</h1>
            <ul className="dashboard__list">
                <li>Shift Pool</li>
                <li>Avalibility</li>
                <li>Time Off</li>
                <li>Employees</li>
                <li className="dashboard__item--active">
                    <span className="dashboard__active-title">
                        <div className='dashboard__active-border'></div>
                        Hire
                    </span>
                    <ul className="dashboard__active-item">
                        <li className="dashboard__active-subitem">Job Posting</li>
                        <li className="dashboard__active-subitem">Candidates</li>
                        <li className="dashboard__active-title dashboard__active-subitem">Candidates survey results</li>
                    </ul>  
                </li>
                <li>Events</li>
                <li>My Timesheets</li>
                <li>Calendar Sync</li>
                <li>Time Clocking</li>
                <li>Departments and Roles</li>
                <li>Notification Settings</li>
            </ul>
        </div>
        
    </aside>
  )
}

export default Dashboard