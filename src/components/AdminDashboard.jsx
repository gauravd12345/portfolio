import React, { useState, useEffect } from 'react';
import { Trash2, Eye } from 'lucide-react';
import { storage } from '../utils/storage';

export default function AdminDashboard({ setIsAdmin }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = () => {
    setLoading(true);
    const loadedMessages = storage.getMessages();
    setMessages(loadedMessages);
    setLoading(false);
  };

  const deleteMessage = (id) => {
    storage.remove(`message:${id}`);
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const markAsRead = (msg) => {
    const updatedMsg = { ...msg, read: true };
    storage.set(`message:${msg.id}`, updatedMsg);
    setMessages(messages.map(m => m.id === msg.id ? updatedMsg : m));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setIsAdmin(false)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">Contact Messages ({messages.length})</h2>
          
          {loading ? (
            <p className="text-gray-600">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-gray-600">No messages yet.</p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`border rounded-lg p-4 ${msg.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{msg.name}</h3>
                      <p className="text-sm text-gray-600">{msg.email}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(msg.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      {!msg.read && (
                        <button
                          onClick={() => markAsRead(msg)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                          title="Mark as read"
                        >
                          <Eye size={18} />
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}