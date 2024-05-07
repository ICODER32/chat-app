import Conversations from "./sidebar/Conversations";
import LogoutSection from "./sidebar/LogoutSection";
import SearchInput from "./sidebar/SearchInput";

export default function Sidebar() {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutSection />
    </div>
  );
}
