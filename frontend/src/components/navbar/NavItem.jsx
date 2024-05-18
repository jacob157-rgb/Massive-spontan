import { NavLink } from 'react-router-dom';

function NavItem({ to, label, icon }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "p-3" : "p-3 hover:bg-highlight"
            }
        >
            <h1 className="flex text-lg text-white">
                {label}
                <span className="ml-2 material-symbols-outlined">
                    {icon}
                </span>
            </h1>
        </NavLink>
    );
}

function Navigation() {
    return (
        <div className='flex w-auto gap-7'>
            <NavItem to="/jelajahi" label="Jelajahi" icon="explore" />
            <NavItem to="/buat-event" label="Buat Event" icon="calendar_add_on" />
            <NavItem to="/signin-register" label="Sign In/Register" icon="login" />
        </div>
    );
}

export default Navigation;
