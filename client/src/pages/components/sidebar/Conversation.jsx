import { useConversation } from "../../../hooks/useConversation";
import random_gen from "../../../utils/emojigen";

export default function Conversation({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const empoji = random_gen();

  const isSelected = selectedConversation?._id === user._id;
  console.log(isSelected);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected && "bg-sky-500"
        }`}
        onClick={() => setSelectedConversation(user)}
      >
        <div className=" avatar online">
          <div className=" w-12 rounded-full ">
            <img src={user.profilePicture} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className=" flex  gap-3 justify-between">
            <p className=" text-lg font-bold text-gray-200">{user.fullname}</p>
            <span className=" text-lg text-gray-400">{empoji}</span>
          </div>
        </div>
      </div>
      <div className=" divider p-0 m-0 h-1"></div>
    </>
  );
}
