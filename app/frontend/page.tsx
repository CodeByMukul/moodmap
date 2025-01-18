
"use client";

import { Heart, Brain, Smile, Sparkles, ArrowRight, Moon, Star, Flame } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [floatingElements, setFloatingElements] = useState<Array<{ left: number; top: number }>>([]);

  useEffect(() => {
    setFloatingElements(
      Array(8).fill(null).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((pos, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${i * 1.5}s`,
              opacity: 0.15
            }}
          >
            {i % 3 === 0 ? (
              <Moon className="h-16 w-16 text-purple-400" />
            ) : i % 3 === 1 ? (
              <Star className="h-12 w-12 text-indigo-400" />
            ) : (
              <Sparkles className="h-10 w-10 text-pink-400" />
            )}
          </div>
        ))}
      </div>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm mb-8 border border-purple-500/20">
              <Flame className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-300">Transform Your Life Today</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
                Transform Your Mind,
              </span>
              <span className="block text-white">
                Find Your Peace
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
              Discover a sanctuary of tranquility in your daily life. Our proven techniques help you manage stress, reduce anxiety, and cultivate lasting inner peace.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1 border border-purple-500/20 hover:bg-gray-800/70">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-900/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your Path to Mental Wellness
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Discover our comprehensive approach to mental well-being, with guided exercises, expert advice, and a community that supports your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: Heart, title: "Emotional Resilience", desc: "Build strength to face life's challenges with confidence." },
              { Icon: Brain, title: "Mental Clarity", desc: "Improve focus and reduce mental clutter with proven techniques." },
              { Icon: Smile, title: "Positive Outlook", desc: "Cultivate gratitude and embrace a more optimistic perspective." },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gray-800/50 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-800/70 transition-all">
                <feature.Icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

