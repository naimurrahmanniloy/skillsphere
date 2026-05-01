"use client";

import React from "react";
import {
  User,
  Mail,
  MapPin,
  Settings,
  LogOut,
  Camera,
  Award,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-12 text-slate-900">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Navigation / Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            Account
          </h1>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-white rounded-full transition-colors shadow-sm border border-slate-100">
              <Settings size={20} className="text-slate-500" />
            </button>
            <button className="p-2 hover:bg-red-50 rounded-full transition-colors shadow-sm border border-red-100 group">
              <LogOut
                size={20}
                className="text-slate-500 group-hover:text-red-500"
              />
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info Card */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl bg-slate-100 overflow-hidden border-4 border-white shadow-md flex items-center justify-center">
                <Image
                  src={user?.image}
                  alt="Student"
                  className="w-full h-full object-cover"
                  width={50}
                  height={50}
                />
              </div>
              <button className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-xl text-white shadow-lg hover:bg-blue-700 transition-transform hover:scale-110">
                <Camera size={16} />
              </button>
            </div>

            <div className="text-center md:text-left space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-800">
                {user?.name}
              </h2>
              <div className="flex flex-col md:flex-row gap-3 text-slate-500 text-sm">
                <span className="flex items-center justify-center md:justify-start gap-1">
                  <Mail size={14} /> {user?.email}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-[#0F172A] rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl shadow-blue-900/10">
            <h3 className="font-semibold opacity-70">Learning Progress</h3>
            <div className="py-4">
              <span className="text-5xl font-bold">84%</span>
              <p className="text-sm opacity-60 mt-1">Average Mastery</p>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[84%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            </div>
          </div>
        </div>

        {/* Secondary Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="bg-purple-50 p-3 rounded-2xl text-purple-600">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">
                Badges
              </p>
              <p className="text-xl font-bold">24</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="bg-orange-50 p-3 rounded-2xl text-orange-600">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">
                Courses
              </p>
              <p className="text-xl font-bold">12</p>
            </div>
          </div>

          <button className="sm:col-span-2 bg-blue-50 border border-blue-100 p-6 rounded-3xl text-blue-700 font-bold hover:bg-blue-100 transition-all flex items-center justify-center gap-2 group">
            Edit Detailed Biography
            <div className="bg-blue-600 text-white p-1 rounded-lg group-hover:translate-x-1 transition-transform">
              <User size={14} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
