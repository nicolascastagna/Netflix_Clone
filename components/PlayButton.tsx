"use client";

import { PlayIcon } from "@heroicons/react/24/solid";

interface Props {
  movie: Movie;
}

const PlayButton = ({ movie }: Props) => {
  return (
    <button className="hover:opacity-80 rounded-xl bg-white text-sm py-2 px-3 text-slate-900 flex items-center space-x-2">
      <i>
        <PlayIcon className="h-5 w-5" />
      </i>
      <span>Play</span>
    </button>
  );
};

export default PlayButton;
