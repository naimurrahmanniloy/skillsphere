"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRight, LogIn } from "lucide-react";
import { Button, Form, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
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
    <div className="min-h-screen bg-[#F8FAFF] flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-137.5 mb-6 px-4">
        <h2 className="text-[#0056D2] text-xl font-bold tracking-tight">
          SkillSphere
        </h2>
      </div>

      <div className="w-full max-w-137.5 bg-white rounded-[2.5rem] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 p-8 md:p-16">
        <header className="mb-10">
          <h1 className="text-[2.5rem] leading-tight font-bold text-gray-900 mb-4">
            Join SkillSphere
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-100">
            Step into a curated gallery of knowledge designed for the modern
            professional.
          </p>
        </header>

        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-700 ml-1">
              Full Name
            </label>
            <Input
              name="name"
              placeholder="Alex Rivera"
              variant="flat"
              required
              className={{
                inputWrapper: "bg-[#E9EBF3] rounded-xl h-14 px-5 border-none",
                input: "text-gray-800 placeholder:text-gray-400 font-medium",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-700 ml-1">
              Email Address
            </label>
            <Input
              name="email"
              type="email"
              placeholder="alex@skillsphere.com"
              variant="flat"
              required
              className={{
                inputWrapper: "bg-[#E9EBF3] rounded-xl h-14 px-5 border-none",
                input: "text-gray-800 placeholder:text-gray-400 font-medium",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-700 ml-1">
              Photo URL
            </label>
            <Input
              name="image"
              placeholder="https://images.unsplash.com/your-profile"
              variant="flat"
              required
              className={{
                inputWrapper: "bg-[#E9EBF3] rounded-xl h-14 px-5 border-none",
                input: "text-gray-800 placeholder:text-gray-400 font-medium",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-700 ml-1">
              Password
            </label>
            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              variant="flat"
              required
              className={{
                inputWrapper: "bg-[#E9EBF3] rounded-xl h-14 px-5 border-none",
                input: "text-gray-800 placeholder:text-gray-400 font-medium",
              }}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0056D2] text-white font-bold h-14 rounded-full shadow-[0_8px_16px_rgba(0,86,210,0.2)] hover:bg-[#004bb8] transition-all flex items-center justify-center gap-2 mt-4"
          >
            Register <ArrowRight size={18} />
          </Button>
        </Form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <span className="bg-white px-4">OR CONTINUE WITH</span>
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

        {/* Footer Link */}
        <p className="text-center mt-10 text-gray-500 font-medium text-sm">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-[#0056D2] font-bold hover:underline"
          >
            Login
          </button>
        </p>
      </div>

      <footer className="w-full max-w-137.5 mt-10 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs font-medium border-t border-gray-100 pt-6">
        <p>© 2024 SkillSphere. The Digital Curator.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-600">
            Help Center
          </a>
          <a href="#" className="hover:text-gray-600">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
