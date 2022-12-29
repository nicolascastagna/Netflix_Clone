"use client";

import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const InfoButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="hover:opacity-80 rounded-xl bg-gray-500 text-sm py-2 px-3 text-white flex items-center space-x-2"
    >
      <i>
        <InformationCircleIcon className="h-5 w-5" />
      </i>
      <span>More informations</span>
    </button>
  );
};

export default InfoButton;
