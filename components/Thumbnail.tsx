import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Link href={`/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          fill
          alt="film"
          className="rounded-sm object-cover md-rounded"
        />
      </Link>
    </div>
  );
};

export default Thumbnail;
