import React from "react";
import Link from "next/link";
import Image from "next/image";

const Thumbnail = () => {
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Link href={"/"}>
        <Image
          src={
            "https://occ-0-7208-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXErLwqyljXtI6mMH6VMnF6B1L4085vOdGb62ZhaqZTL04oFjCUhzdkkK434vs50cKZVHoPJ2pNc-JY4dSw0UoyBRAZiD7sNADpJ.jpg?r=615"
          }
          fill
          alt="pic-movie"
          className="rounded-sm object-cover md-rounded"
        />
      </Link>
    </div>
  );
};

export default Thumbnail;
