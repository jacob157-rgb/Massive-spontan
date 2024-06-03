import NavItem from "./NavItem";

function Navigation() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-5">
      <NavItem to="/explore" label="Jelajahi" icon="explore" />
      <NavItem to="/create-event" label="Buat Event" icon="calendar_add_on" />
      <NavItem to="/auth" label="Sign In/Register" icon="login" />
    </div>
  );
}

export default Navigation;
