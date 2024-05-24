import { IoLogOut } from "react-icons/io5";
import useLogout from "../../../hooks/useLogout";
export default function LogoutSection() {
  const { logout } = useLogout();
  return (
    <div className="mt-auto">
      <IoLogOut
        onClick={logout}
        className=" w-6 h-6 text-white cursor-pointer"
      />
    </div>
  );
}
