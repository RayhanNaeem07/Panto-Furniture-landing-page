import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-center bg-cover h-[100vh]"
        style={{ backgroundImage: "url('src/assets/banner.png')" }}
      >
        <div className="pt-24 md:pt-30 text-center ">
          <h1 className="text-4xl md:text-6xl font-medium text-white md:w-1/2 mx-auto leading-snug  lg:leading-tight">
            Make your interior more minimalistic & modern
          </h1>
          <p className="text-white text-lg opacity-80 py-2 md:py-4 md:w-1/4 mx-auto">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>

          {/* Search field */}
          <div className="flex items-center justify-center px-6 py-2 bg-white/25 rounded-full border border-gray-300 w-60 mx-auto">
            <input type="text" placeholder="Search furniture" className="  focus:outline-none text-white placeholder:text-white/40" />
            <div className="rounded-full bg-primary p-1 cursor-pointer ml-1">
              <IoSearch />
            </div>
          </div>

        </div>

        {/* Bottom blur effect */}
      </div>
    </div>
  );
};

export default Hero;
