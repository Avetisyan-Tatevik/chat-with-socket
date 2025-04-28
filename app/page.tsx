import ChatForm from "./components/ChatForm";

export default function Home() {
  return (
    <div className="flex flex-col max-w-[700px] mx-auto mt-24 justify-center w-full">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="mb-4 text-2xl text-bold">Room: 1</h1>
      </div>
      <div>TODO: Add chat room</div>
      <ChatForm
        onSendMessage={(message) => {
          console.log(message);
        }}
      />
    </div>
  );
}
