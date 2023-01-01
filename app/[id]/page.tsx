import Image from "next/image";
import Link from "next/link";
import PlayButton from "../../components/PlayButton";
import { fetchMovie } from "../../utils/fetchMovies";

interface Props {
  params: {
    id: string;
  };
}

const MovieDetailPage = async ({ params }: Props) => {
  const movie: Movie = await fetchMovie(params.id);

  return (
    <div className="h-screen bg-transparent w-full relative">
      <div className="relative w-full h-full opacity-40">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie?.backdrop_path || movie?.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          fill
          alt="film"
        />
      </div>
      {movie.genres ? (
        <div className="absolute top-1/2 -translate-y-1/2 left-5">
          <h1 className="text-5xl font-semibold">{movie.title}</h1>
          <p className="text-sm pt-5 w-8/12 sm:w-6/12">{movie.overview}</p>
          <div className="flex items-center space-x-1 text-xs pt-5">
            <h3 className="font-bold">Genre: </h3>
            {movie?.genres?.map((genre, index) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <div className="flex items-center space-x-5 pt-5">
            <PlayButton movie={movie} />
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col text-center items-center space-x-1 text-lg pt-5">
            Aucun contenu disponible
            <Link href="/">
              <button className="border-solid border-2 border-white p-3 mt-5">
                Cliquer pour actualiser
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
