import MessageInput from "./MessageInput";
import Messages from "./Messages";

export default function MessageContainer() {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        <div className=" bg-slate-400 flex items-center justify-center gap-2 px-4 py-2 mb-2">
          <span className=" text-black label-text">To:</span>
          <span className=" text-gray-900 font-bold">Ibtisam Anwar</span>
        </div>

        <Messages />

        <MessageInput />
      </>
    </div>
  );
}
