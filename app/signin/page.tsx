"use client";
import React, { useState } from 'react';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';
import axios from 'axios'
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
const AuthPages = () => {
  const session=useSession();
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [floatingElements, setFloatingElements] = useState(
    Array(8).fill(null).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
  );

  const toggleAuthMode = () => setIsSignIn(!isSignIn);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (isSignIn) {
      try {
        const response=axios.post('/api/signin',{email,password}).then((res)=>{
          if(res.data.status!=403){signIn("credentials",{
          email,
          name,
          password,
          redirect:true, }).then((res)=>{console.log(res)})
          }

          //USE TOAST HERE TO NOTIFY THAT LOGIN FAILED
        }) .catch((err)=>{console.log(err)})
      } catch (error) {
        console.error('Sign in failed:', error);
      }
    } else {
      // Handle sign up logic
      try {
        // Example registration logic
        const response = axios.post('/api/signup',{name,email,password}).then((res)=>{
          console.log(res);
signIn("credentials",{
          email,
          name,
          password,
          redirect:true, }).then((res)=>{console.log(res)})

        }) .catch((err)=>{console.log(err)})
      } catch (error) {
        console.error('Sign up failed:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden text-white flex items-center justify-center px-4">

    {session.status=="unauthenticated"?"":redirect('/')}
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
            {i % 2 === 0 ? (
              <div className="h-16 w-16 rounded-full bg-purple-400" />
            ) : (
              <div className="h-12 w-12 rounded-full bg-indigo-400" />
            )}
          </div>
        ))}
      </div>

      {/* Auth Card */}
      <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-500/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
            {isSignIn ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-300">
            {isSignIn ? 'Sign in to continue your journey' : 'Begin your transformation today'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg py-3 font-semibold shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1 flex items-center justify-center"
          >
            {isSignIn ? 'Sign In' : 'Create Account'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800/50 text-gray-400">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-gray-900/50 text-white rounded-lg py-3 font-semibold border border-gray-700 hover:bg-gray-800/70 transition-all flex items-center justify-center gap-2"
            onClick={async()=>await signIn("google")}
          >
            <span className="text-lg font-bold text-red-500">G</span>
            Sign {isSignIn ? 'in' : 'up'} with Google
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleAuthMode}
            className="ml-2 text-purple-400 hover:text-purple-300 font-medium"
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPages;
