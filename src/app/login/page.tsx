"use client";

import { loginAction } from "@/actions/users";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";

function LoginPage() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickLoginButton = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await loginAction(formData);
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        router.push("/admin");
      }
    });
  };

  return (
    <div className="flex justify-center bg-[#4c4c4c] h-screen p-44">      
      <form
        className="flex flex-col bg-[#444444] w-96 h-96 p-20 rounded-lg gap-y-4"
        action={handleClickLoginButton}
      >
        <div className="flex gap-2 items-center justify-center">
          <Image
                  src="/images/icons/user.png"
                  alt="food"
                  width={40}
                  height={40}
                  className=""/>
          <h1 className="text-4xl font-bold">Admin</h1>
        </div>

        <input
          type="text"
          name="email"
          className="rounded-lg p-2 bg-[#222222] text-[#949494]"
          placeholder="Email"
          disabled={isPending}
        />
        <input
          type="password"
          name="password"
          className="rounded-lg p-2 bg-[#222222] text-[#949494]"
          placeholder="Password"
          disabled={isPending}
        />

        <button
          className="bg-[#c7c7c7] rounded-lg p-2 mt-2"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
        <button className="font-semibold text-lg">Forgot Password?</button>
      </form>
    </div>



  );
}

export default LoginPage;