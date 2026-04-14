import { Plus } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-14 md:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col gap-5 items-center text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading font-extrabold leading-tight tracking-tight">
          Friends to keep close in your life
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-muted max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Button */}
        <button className="mt-1 px-6 py-2.5 flex gap-2 justify-center items-center rounded-md text-sm font-semibold transition-colors duration-200 text-white bg-primary hover:bg-hover-primary shadow-sm active:scale-95">
          <Plus size={18} />
          Add a Friend
        </button>
      </div>
    </section>
  );
};

export default Hero;
