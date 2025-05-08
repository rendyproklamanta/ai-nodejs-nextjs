'use client'

import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPaperPlane,
   faRobot, // AI icon
   faSpinner,
   faUserCircle, // User icon
} from "@fortawesome/free-solid-svg-icons";

function ChatBox() {

   const [messages, setMessages] = useState([]);
   const [input, setInput] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   const handleSend = async (e) => {
      e.preventDefault();
      const trimmed = input.trim();
      if (trimmed) {
         setMessages([...messages, { text: trimmed, sender: "user" }]);
         setInput("");
         setIsLoading(true);
         setIsError(false);

         try {
            const response = await axios.post("http://localhost:5000/chat", {
               messageContent: trimmed,
            });
            console.log(response?.data);
            if (response?.data?.messages && response?.data?.messages.length > 0) {
               const aiMessage = response?.data?.messages[0]?.text;
               setMessages((prevMessages) => [
                  ...prevMessages,
                  { text: aiMessage, sender: "ai" },
               ]);
            }
         } catch (error) {
            setIsError(true);
            console.error("Error fetching AI response:", error);
            const message = error?.response?.data?.error?.message || error?.code || "Error fetching AI response";
            alert(message);
         }
      }
   };

   const handleInputChange = (e) => {
      setInput(e.target.value);
   };

   return (
      <div className="flex-grow flex flex-col items-center justify-center w-full">
         <div className="w-full max-w-2xl h-full bg-gray-800 rounded-lg flex flex-col pt-10">
            <div className="flex-grow p-4 overflow-y-auto">
               {messages.length === 0 && (
                  <div className="text-white text-center mt-2 font-bold">
                     How can I help you today?
                  </div>
               )}
               {messages.map((message, index) => (
                  <div key={index} className="flex items-center text-white mb-2">
                     <FontAwesomeIcon
                        icon={message.sender === "user" ? faUserCircle : faRobot}
                        className="mr-2"
                     />
                     {message.text}
                  </div>
               ))}
               {isLoading && !isError && (
                  <div className="flex items-center justify-center text-white mb-2">
                     <div className="mr-2 animate-spin">
                        <FontAwesomeIcon icon={faSpinner} />
                     </div>
                     Typing...
                  </div>
               )}
            </div>
            <div className="flex justify-center p-4">
               <form onSubmit={handleSend} className="relative w-full">
                  <input
                     className="w-full p-4 pl-4 pr-10 text-white bg-gray-800 rounded-2xl border border-white focus:outline-none"
                     placeholder="Send a message"
                     value={input}
                     onChange={handleInputChange}
                  />
                  <button
                     type="submit"
                     className="absolute inset-y-0 right-0 pr-3 flex items-center text-white cursor-pointer"
                  >
                     <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ color: "#fff" }}
                     />
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default ChatBox;
