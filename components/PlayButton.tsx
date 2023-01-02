"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/movieState";

interface Props {
  movie: Movie;
  videos?: string;
}

const PlayButton = ({ movie, videos }: Props) => {
  const [modal, setModal] = useRecoilState(modalState);
  const [selectedMovie, setSelectedMovie] = useRecoilState(movieState);
  return (
    <button
      onClick={() => {
        setSelectedMovie(videos);
        setModal(true);
      }}
      className="hover:opacity-80 rounded-xl bg-white text-sm py-2 px-3 text-slate-900 flex items-center space-x-2"
    >
      <i>
        <PlayIcon className="h-5 w-5" />
      </i>
      <span>Lecture</span>
    </button>
  );
};

export default PlayButton;
