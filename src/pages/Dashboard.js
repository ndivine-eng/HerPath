import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Make sure the path is correct
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState({}); // Store replies per message

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'messages'));
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesData);
      } catch (error) {
        console.error('Error fetching messages: ', error);
      }
    };

    fetchMessages();
  }, []);

  const handleReplyChange = (messageId, value) => {
    setReply((prevReplies) => ({
      ...prevReplies,
      [messageId]: value,
    }));
  };

  const handleSendReply = async (messageId) => {
    try {
      const messageDoc = doc(db, 'messages', messageId);
      await updateDoc(messageDoc, {
        reply: reply[messageId],
      });
      alert('Reply sent!');
      setReply((prevReplies) => ({ ...prevReplies, [messageId]: '' }));
    } catch (error) {
      console.error('Error sending reply: ', error);
    }
  };

  return (
    <div className="text-center p-5">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Here you will find messages and can send replies.</p>
      
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="p-4 border rounded shadow-md bg-white text-gray-800">
            <h2 className="font-semibold text-lg">{message.name}</h2>
            <p className="text-sm">Email: {message.email}</p>
            <p className="my-2">{message.message}</p>
            
            {/* Display any previous reply */}
            {message.reply && (
              <p className="text-green-600 mt-2">
                <strong>Reply:</strong> {message.reply}
              </p>
            )}

            {/* Reply form */}
            <textarea
              className="mt-2 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your reply..."
              rows="3"
              value={reply[message.id] || ''}
              onChange={(e) => handleReplyChange(message.id, e.target.value)}
            />
            <button
              onClick={() => handleSendReply(message.id)}
              className="bg-green-600 text-white px-4 py-2 mt-2 rounded-full font-bold hover:bg-green-500 transition duration-300"
            >
              Send Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
