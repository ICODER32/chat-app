import useGetConversation from "../../../hooks/useGetConversation";
import Conversation from "./Conversation";

export default function Conversations() {
  const { conversation, loading } = useGetConversation();
  return (
    <div>
      {loading ? (
        <div className="loading loading-spinner mx-auto"></div>
      ) : (
        conversation.map((user) => <Conversation key={user._id} user={user} />)
      )}
    </div>
  );
}
