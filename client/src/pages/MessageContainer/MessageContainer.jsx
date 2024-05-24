import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

export default function MessageContainer() {
  const nochatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {nochatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className=" bg-slate-400 flex items-center justify-center gap-2 px-4 py-2 mb-2">
            <span className=" text-black label-text">To:</span>
            <span className=" text-gray-900 font-bold">Ibtisam Anwar</span>
          </div>

          <Messages />

          <MessageInput />
        </>
      )}
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
const NoChatSelected = () => {
  return (
    <div className=" flex items-center justify-center h-full w-full">
      <div className=" px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold  flex flex-col items-center gap-2">
        <p>Welcome Ibtisam Anwar</p>
        <p>Select Chat and Start Chatting</p>
        <TiMessages className=" text-3xl md:text-6xl text-center" />
      </div>{" "}
    </div>
  );
};
