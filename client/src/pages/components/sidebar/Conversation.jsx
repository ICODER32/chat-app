export default function Conversation() {
  return (
    <>
      <div className=" flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className=" avatar online">
          <div className=" w-12 rounded-full ">
            <img
              src="https://clipground.com/images/avatar-png-images-18.png"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className=" flex  gap-3 justify-between">
            <p className=" text-lg font-bold text-gray-200">John Doe</p>
            <span className=" text-xs text-gray-400">❤️</span>
          </div>
        </div>
      </div>
      <div className=" divider p-0 m-0 h-1"></div>
    </>
  );
}
