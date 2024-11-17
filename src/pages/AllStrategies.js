import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, TrendingUp, Clock, User, ArrowRight } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-gray-900 border border-gray-800 rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 pb-2">{children}</div>
);

const CardTitle = ({ children }) => (
  <div className="text-lg font-semibold text-gray-100">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-4 pt-0">{children}</div>
);


export default function AllStrategies() {
  const [showChat, setShowChat] = useState(false);

  const strategies = [
    {
      id: 1,
      user: "trader.eth",
      strategy: "BTC/USD Long Position",
      profit: "+12.5%",
      timeAgo: "5m ago",
      description: "Entry at support level 42,500, stop loss at 41,800, take profit at 44,000"
    },
    {
      id: 2,
      user: "cryptowhale.eth",
      strategy: "ETH/USD Short Position",
      profit: "+8.2%",
      timeAgo: "15m ago",
      description: "Short at resistance 2,800, stop loss 2,900, take profit 2,600"
    },
    {
      id: 3,
      user: "tradepro.eth",
      strategy: "SOL/USD Long Position",
      profit: "+15.3%",
      timeAgo: "1h ago",
      description: "Breakout trade above 110, stop loss 105, take profit 120"
    }
  ];

  if (showChat) {
    return (
      <div className="flex flex-col h-screen bg-gray-950">
        <div className="flex items-center p-4 bg-gray-900 border-b border-gray-800">
          <button 
            onClick={() => setShowChat(false)}
            className="mr-4 text-gray-400 hover:text-gray-200 transition-colors"
          >
            <ArrowRight className="rotate-180" />
          </button>
          <h1 className="text-lg font-semibold text-gray-100">AI Trading Assistant</h1>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-blue-900 text-blue-100 rounded-lg p-3 mb-4 max-w-[80%]">
            Hello! I'm your AI trading assistant. How can I help you today?
          </div>
        </div>

        <div className="p-4 bg-gray-900 border-t border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors">
              <MessageCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      <header className="bg-gray-900 p-8 justify-center flex flex-row border-b border-gray-800">
        <h1 className="text-xl font-bold text-gray-100">TeFi</h1>
      </header>

      <main className="p-4 space-y-4">
        {strategies.map(strategy => (
          <Card key={strategy.id} className="shadow-lg p-3">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <User size={16} className="text-gray-400" />
                  <span className="text-sm font-medium text-gray-100">{strategy.user}</span>
                </div>
                <span className="text-green-400 font-semibold">{strategy.profit}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-blue-400" />
                  <span className="font-medium text-gray-100">{strategy.strategy}</span>
                </div>
                <p className="text-sm text-gray-400">{strategy.description}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock size={14} />
                  <span>{strategy.timeAgo}</span>
                </div>
              </div>
            </CardContent>
            <div className='flex gap-3'>
            <button
                onClick={() => setShowChat(true)}
                className="w-full bg-white bg-opacity-20 hover:bg-gray-500 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg transition-colors"
              >
                <span>Validate with AI</span>
              </button>

              <button
                onClick={() => setShowChat(true)}
                className="w-full bg-white bg-opacity-20 hover:bg-gray-500 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg transition-colors"
              >
                <span>Execute</span>
              </button>
            </div>

          </Card>
        ))}
      </main>

      {/* <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800">
        <button
          onClick={() => setShowChat(true)}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg transition-colors"
        >
          <MessageCircle size={20} />
          <span>Chat with AI Assistant</span>
        </button>
      </div> */}
    </div>
  );
}
