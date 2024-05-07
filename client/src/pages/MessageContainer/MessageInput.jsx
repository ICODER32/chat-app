import { BiPaperPlane } from "react-icons/bi";
export default function MessageInput() {
  return (
    <form className=" px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-e-gray-600 text-white"
          placeholder="Send a message..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-4"
        >
          <BiPaperPlane className=" text-white" />
        </button>
      </div>
    </form>
  );
}
