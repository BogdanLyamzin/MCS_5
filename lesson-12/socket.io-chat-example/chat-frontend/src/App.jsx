import { useState, useCallback } from "react";
import {nanoid} from "nanoid";
import io from "socket.io-client";

import SigninChatForm from "./components/SigninChatForm/SigninChatForm";
import ChatForm from "./components/ChatForm/ChatForm";
import Chat from "./components/Chat/Chat";

function App() {
  const [nickname, setNickname] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const addNickname = useCallback(({nickname})=> {
    setNickname(nickname);
    const socket = io.connect("http://localhost:5000");
    setSocket(socket);
    socket.on("chat-message", data=> {
      const {message, nickname} = JSON.parse(data);
      setMessages(prevMessages => {
        const newMessage = {
          id: nanoid(),
          type: "user",
          message,
          nickname
        }
        return [...prevMessages, newMessage];
      })
    })
  }, []);

  const addMessage = ({message})=> {
    setMessages(prevMessages => {
      const newMessage = {
        id: nanoid(),
        type: "you",
        message,
        nickname,
      };
      return [...prevMessages, newMessage];
    });
    socket.emit("chat-message", JSON.stringify({message, nickname}));
  }

  const closeChat = ()=> {
    socket.disconnect(true);
    setSocket(null);
  }
  
  return (
    <div className="App">
      {!nickname && <SigninChatForm onSubmit={addNickname} />}
      {nickname && <ChatForm onSubmit={addMessage} />}
      {nickname && <Chat items={messages} />}
      {(nickname && socket) && <button onClick={closeChat} type="button">Close chat</button>}
    </div>
  )
}

export default App;
