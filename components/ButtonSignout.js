/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import config from "@/config";

// A simple button to sign in with our providers (Google & Magic Links).
// It automatically redirects user to callbackUrl (config.auth.callbackUrl) after login, which is normally a private page for users to manage their accounts.
// If the user is already logged in, it will show their profile picture & redirect them to callbackUrl immediately.
const ButtonSignout = ({ text = "Logout", extraStyle }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleClick = () => {
    localStorage.removeItem("loginStatus", "200");
    router.push("/");
    // if (!status === "authenticated") {
    //   router.push(config.auth.callbackUrl);
    // } else {
    //   signIn(undefined, { callbackUrl: config.auth.callbackUrl });
    // }
  };

  // if (status === "authenticated") {
  //   return (
  //     <Link
  //       href={config.auth.callbackUrl}
  //       className={`btn ${extraStyle ? extraStyle : ""}`}
  //     >
  //       {session.user?.image ? (
  //         <img
  //           src={session.user?.image}
  //           alt={session.user?.name || "Account"}
  //           className="w-6 h-6 rounded-full shrink-0"
  //           referrerPolicy="no-referrer"
  //           width={24}
  //           height={24}
  //         />
  //       ) : (
  //         <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
  //           {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
  //         </span>
  //       )}
  //       {session.user?.name || session.user?.email || "Account"}
  //     </Link>
  //   );
  // }

  return (
    <button
      className={`btn bg-black text-white hover:text-black `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonSignout;