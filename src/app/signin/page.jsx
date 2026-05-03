"use client";

import { authClient } from "@/lib/auth-client";
import { GraduationCap, LogIn } from "lucide-react"; // Using Lucide for the icons
import { Button, Form, Input, Link } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (!error) {
      router.push("/");
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="bg-[#0056D2] p-3.5 rounded-2xl shadow-xl mb-4">
          <GraduationCap size={36} className="text-white" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#003B95] tracking-tight">
          SkillSphere
        </h1>
        <p className="text-gray-500 font-medium mt-1">
          Curating your path to mastery
        </p>
      </div>

      <div className="w-full max-w-120 bg-white rounded-[3rem] shadow-sm border border-gray-100 p-8 md:p-14">
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-left">
            Login to SkillSphere
          </h2>
          <p className="text-gray-500 leading-relaxed text-left">
            Enter your credentials to access your curated library.
          </p>
        </header>

        <Form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1">
              Email
            </label>
            <Input
              required
              name="email"
              type="email"
              placeholder="name@example.com"
              variant="flat"
              className={{
                inputWrapper: "bg-[#EDF0F7] rounded-2xl h-14 px-5 border-none",
                input: "text-gray-800 placeholder:text-gray-400 font-medium",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                Password
              </label>
            </div>
            <Input
              required
              name="password"
              type="password"
              placeholder="••••••••"
              variant="flat"
              className={{
                inputWrapper: "bg-[#EDF0F7] rounded-2xl h-14 px-5 border-none",
                input: "text-gray-800 placeholder:text-gray-400 font-medium",
              }}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0056D2] text-white font-bold h-14 rounded-full shadow-[0_12px_24px_rgba(0,86,210,0.25)] hover:bg-[#004bb8] transition-all mt-2"
          >
            Login
          </Button>
        </Form>

        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="bg-white px-4 text-gray-400">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <Button
          onClick={handleGoogleSignIn}
          variant="flat"
          className="w-full bg-[#F3F5FB] text-gray-800 font-bold h-14 rounded-full hover:bg-[#EAECEF] transition-all flex items-center justify-center gap-3"
        >
          <FcGoogle size={18} className="text-gray-600" />
          Google
        </Button>

        <footer className="text-center mt-12">
          <p className="text-sm text-gray-500 font-medium">
            Don t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#0056D2] font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignInPage;
