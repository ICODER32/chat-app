import Sidebar from "./components/Sidebar";
import MessageContainer from "./MessageContainer/MessageContainer";

export default function Home() {
  return (
    <div className="flex sm-h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
