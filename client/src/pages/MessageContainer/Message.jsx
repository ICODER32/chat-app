export default function Message() {
  return (
    <div className=" chat chat-end">
      <div className=" chat-image avatar">
        <div className=" w-10 rounded-full">
          <img
            src="https://clipground.com/images/avatar-png-images-18.png"
            alt="avatar"
            className=" w-10 rounded-full"
          />
        </div>
      </div>
      <div className=" chat-bubble text-white bg-blue-500">Hello Whatsup</div>
      <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:40 am
      </div>
    </div>
  );
}
