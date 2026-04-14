"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OrderDetails() {
  const params = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // Fetch order details
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/${params.id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data.order);
        setMessages(data.messages || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.id]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    // Mock sending message
    setMessages([...messages, {
      id: Date.now(),
      sender: "You",
      text: message,
      timestamp: new Date().toISOString(),
    }]);
    setMessage("");
  };

  if (loading) {
    return (
      <main className="w-full min-h-screen flex flex-col bg-black">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-14 h-14 border-4 border-zinc-800 border-t-yellow-400 rounded-full animate-spin" />
        </div>
        <Footer />
      </main>
    );
  }

  if (!order) {
    return (
      <main className="w-full min-h-screen flex flex-col bg-black">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-6xl mb-4">❌</p>
            <h1 className="text-3xl font-black text-white mb-4">Order Not Found</h1>
            <Link href="/dashboard/orders" className="text-yellow-400 hover:text-yellow-500">
              ← Back to Orders
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/dashboard/orders"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-yellow-400 transition-colors text-sm mb-8 font-bold"
            >
              ← Back to Orders
            </Link>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-2">
                  Order #{order.id}
                </p>
                <h1 className="text-4xl md:text-6xl font-black text-white">
                  {order.serviceName}
                </h1>
              </div>
              <div className="text-right">
                <p className="text-5xl font-black text-yellow-400 mb-2">
                  ${order.amount}
                </p>
                <span
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase ${
                    order.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : order.status === "active"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Progress */}
              {order.status === "active" && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-black text-white mb-6">Progress</h2>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-500 font-bold uppercase">Completion</span>
                      <span className="text-yellow-400 font-black">{order.progress || 0}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-700"
                        style={{ width: `${order.progress || 0}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Last updated: {new Date(order.updatedAt).toLocaleString()}
                  </p>
                </div>
              )}

              {/* Chat/Messages */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-2xl font-black text-white mb-6">Messages</h2>
                
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {messages.length === 0 ? (
                    <p className="text-center text-zinc-500 py-12">No messages yet</p>
                  ) : (
                    messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-4 rounded-xl ${
                          msg.sender === "You"
                            ? "bg-yellow-400 text-black ml-8"
                            : "bg-black text-white mr-8"
                        }`}
                      >
                        <p className="font-bold text-xs mb-1">{msg.sender}</p>
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-2 ${msg.sender === "You" ? "text-black/60" : "text-zinc-500"}`}>
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-5 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 transition-all text-white"
                  />
                  <button
                    onClick={sendMessage}
                    className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-bold hover:bg-yellow-500 transition-all"
                  >
                    Send
                  </button>
                </div>
              </div>

              {/* Files */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-2xl font-black text-white mb-6">Files & Deliverables</h2>
                
                {order.files?.length > 0 ? (
                  <div className="space-y-3">
                    {order.files.map((file: any, i: number) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl hover:border-yellow-400 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">📄</span>
                          <div>
                            <p className="font-bold text-white">{file.name}</p>
                            <p className="text-zinc-500 text-xs">{file.size}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-bold hover:bg-yellow-500">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-zinc-500 py-12">No files uploaded yet</p>
                )}
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Order Info */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-black text-white mb-4">Order Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-zinc-500 uppercase font-bold mb-1">Created</p>
                    <p className="text-white">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase font-bold mb-1">Deadline</p>
                    <p className="text-white">{order.deadline || "TBD"}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase font-bold mb-1">Payment</p>
                    <p className="text-green-400 font-bold">✓ Paid</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-500 transition-all">
                  Request Update
                </button>
                <button className="w-full bg-black text-white border border-zinc-700 py-3 rounded-full font-bold hover:border-yellow-400 transition-all">
                  Download Invoice
                </button>
                <button className="w-full bg-black text-white border border-zinc-700 py-3 rounded-full font-bold hover:border-yellow-400 transition-all">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
