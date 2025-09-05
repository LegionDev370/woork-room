import "../assets/styles/sidebar.css";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import SideBarLink from "./ui/sidebar-link";
const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen p-[22px]">
      <div>
        <Icon.companyLogo />

        <ul className="flex flex-col gap-2">
          <SideBarLink path="/" isActive={true}>
            <Icon.SideBarDashboardIcon /> Dashboard
          </SideBarLink>
          <SideBarLink path="/" isActive={false}>
            <Icon.SideBarProjectIcon /> Projects
          </SideBarLink>
          <SideBarLink path="/" isActive={false}>
            <Icon.SideBarCalendarIcon /> Calendar
          </SideBarLink>
          <SideBarLink path="/" isActive={false}>
            <Icon.SideBarVacationIcon /> Vacations
          </SideBarLink>
          <SideBarLink path="/" isActive={false}>
            <Icon.SideBarEmployees /> Employees
          </SideBarLink>
          <SideBarLink path="/" isActive={false}>
            <Icon.SideBarMessanger /> Messenger
          </SideBarLink>
          <SideBarLink path="/" isActive={false}>
            <Icon.SideBarInfoPortal /> Info Portal
          </SideBarLink>
        </ul>
      </div>
      <div className="flex flex-col rounded-[24px] ">
        <Icon.SideBarPirsonIcon className={"relative "} />
        <Button type="button" variant="small" className="flex gap-x-2">
          <Icon.SideBadrSupportButtonIcon /> Support{" "}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
