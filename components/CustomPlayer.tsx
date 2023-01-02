"use client";

import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/movieState";
import ReactPlayer from "react-player";
import Link from "next/link";

const CustomPlayer = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [selectedMovie, setSelectedMovie] = useRecoilState(movieState);

  return (
    <div
      onClick={() => setModal(false)}
      className={`${
        !modal && "hidden"
      } fixed inset-0 z-30 bg-black bg-opacity-50`}
    >
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        {modal && selectedMovie[0]?.key ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${selectedMovie[0]?.key}`}
            width="80%"
            height="80%"
            style={{ top: "20", left: "20", position: "absolute" }}
            muted={true}
            playing
            controls={true}
          />
        ) : (
          <div className="fixed flex flex-col text-center items-center space-x-1 text-lg pt-5">
            Aucun contenu disponible
            <Link href="/">
              <button className="border-solid border-2 border-white p-3 mt-5">
                Cliquer pour actualiser
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomPlayer;
