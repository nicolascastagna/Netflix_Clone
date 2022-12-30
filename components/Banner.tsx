import Image from "next/image";
import InfoButton from "./InfoButton";
import PlayButton from "./PlayButton";

interface Props {
  movie: Movie;
}

const Banner = ({ movie }: Props) => {
  return (
    <section className="h-screen bg-transparent w-full relative">
      <div className="relative w-full h-full opacity-40">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          fill
          alt="picture-movie"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-5">
        <h1 className="text-5xl font-semibold">{movie.title}</h1>
        <p className="text-sm pt-5 w-96 line-clamp-6">{movie.overview}</p>
        <div className="flex items-center space-x-5 pt-5">
          <PlayButton />
          <InfoButton />
        </div>
      </div>
    </section>
  );
};

export default Banner;
