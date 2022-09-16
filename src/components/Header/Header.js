import './Header.scss';
import sevenShiftLogoURL from '.././../assets/icons/7shiftslogowhite.png';
import companyLogoURL from '.././../assets/icons/Company Logo.png';
import profileURL from '.././../assets/icons/ProfilePic.png';
import calendarAltURL from '.././../assets/icons/Icons_CalendarAlt.svg';
import checkURL from '.././../assets/icons/Icons_Check.svg';
import ClipboardListURL from '.././../assets/icons/Icons_ClipboardList.svg';
import CommentLinesURL from '.././../assets/icons/Icons_CommentLines.svg';
import MegaphoneURL from '.././../assets/icons/Icons_Megaphone.svg';
import StopwatchURL from '.././../assets/icons/Icons_Stopwatch.svg';
import TachometerURL from '.././../assets/icons/Icons_Tachometer.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <img src={companyLogoURL} className="header__logo-img"></img>
            <span className="header__logo-text">
                Shakes and Entrees
            </span>
        </div>
        <nav className="nav">
            <ul className="nav__list">
                <Link to="/dashboard" className="nav__item">
                    <img className="nav__item-icon" src={TachometerURL}/>
                    <span className="nav__item-text">Dashboard</span>
                </Link>
                <Link to="/calendar" className="nav__item">
                    <img className="nav__item-icon" src={calendarAltURL}/>
                    <span className="nav__item-text">Schedules</span>
                </Link>
                <li className="nav__item">
                    <img className="nav__item-icon" src={StopwatchURL}/>
                    <span className="nav__item-text">Availability</span>
                </li>
                <li className="nav__item">
                    <img className="nav__item-icon" src={ClipboardListURL}/>
                    <span className="nav__item-text">Shift Pool</span>
                </li>
                <li className="nav__item">
                    <img className="nav__item-icon" src={checkURL}/>
                    <span className="nav__item-text">Time off</span>
                </li>
            </ul>
        </nav>

        <div className="profile">
            <img src={MegaphoneURL} className="profile__icon" />
            <img src={CommentLinesURL} className="profile__icon" />
            <img src={profileURL} className="profile__avatar" />
            <img src={sevenShiftLogoURL} className="profile__logo" />
        </div>
    </header>
  )
}

export default Header