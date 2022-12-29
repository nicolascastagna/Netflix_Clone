import Image from "next/image";

const Banner = () => {
  return (
    <section className="h-screen bg-transparent w-full relative">
      <div className="relative w-full h-full opacity-40">
        <Image
          src="https://occ-0-7208-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXErLwqyljXtI6mMH6VMnF6B1L4085vOdGb62ZhaqZTL04oFjCUhzdkkK434vs50cKZVHoPJ2pNc-JY4dSw0UoyBRAZiD7sNADpJ.jpg?r=615"
          className="rounded-sm object-cover md:rounded"
          fill
          alt="picture-movie"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-5">
        <h1 className="text-5xl font-semibold">Title</h1>
        <p className="text-sm pt-5 w-96">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          velit voluptatibus facere voluptates odio, dolorum provident facilis
          tenetur cumque aperiam id, error nostrum incidunt, quasi omnis! Rem
          animi nesciunt quam. Esse consequatur sunt, distinctio corporis
          veritatis nam odio harum aliquid soluta molestias dolores quam
          reiciendis vitae qui. Dolor porro reprehenderit exercitationem quia
          ipsa voluptas consequuntur eius, nesciunt alias, assumenda
          voluptatibus magni impedit, repellat ex error necessitatibus natus
          provident vitae quis et dolorem illum tempore fugiat similique. At
          neque iure iusto molestias suscipit assumenda, sit dolor quasi aliquam
          explicabo! Doloribus nulla totam exercitationem tempore itaque
          excepturi explicabo tempora officia dignissimos minus!
        </p>
      </div>
    </section>
  );
};

export default Banner;
