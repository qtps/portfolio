export function HeroSection() {
  const services = [
    ["01", "Frontend Development", "Building responsive and interactive user interfaces with modern web technologies."],
    ["02", "Backend & API Integration", "Developing robust backend systems and integrating APIs for seamless data flow."],
    ["03", "Full-Stack Solutions", "Creating complete web applications from the frontend to the backend."],

  ];
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center">
          <img
            src="/images/banner-image.png"
            alt="Murad Hossain"
            className="mx-auto w-full max-w-lg"
          />
        </div>
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Designer / Developer
          </span>
          <h1 className="mt-5 text-7xl font-bold leading-none tracking-tight text-ink md:text-9xl">
            Murad
            <br />
            Hossain
          </h1>
        </div>
      </div>
      <div className="mt-20 grid gap-8 md:grid-cols-4">
        {services.map(([number, title , description]) => (
          <div key={number}>
            <span className="text-sm text-gray-500">{number}</span>
            <h3 className="mt-3 text-xl font-bold text-ink">{title}</h3>
            <p className="mt-3 text-gray-600">
              {description}
            </p>
          </div>
        ))}
        <a
          href="#portfolio"
          className="self-end bg-ink px-8 py-5 text-center font-bold text-white transition hover:bg-coral"
        >
          View my works
        </a>
      </div>
    </section>
  );
}
