const Main = () => {
  return (
    <article className="parent-main">
      <p className=" tracking-[4px]  text-[##474855] font-Barlow">
        <span className="px-2 p-1 mr-4 tracking-wider    text-sm  bg-[#242942] rounded-3xl text-white">
          New
        </span>
        Monograph Dashboard
      </p>
      <h2 className="text-[#242942] text-nowrap font-bold text-4xl md:text-5xl font-Barlow">
        <p>
          Powerful insights
          <br />
          into your team
        </p>
      </h2>
      <div className=" capitalize text-[#474855]">
        <p>
          Project planning and time tracking
          <br /> for agile teams
        </p>
      </div>
      <div className="flex gap-5 text-sm items-center text-[#474855]">
        <button>Schedule a demo </button>
        <p className="text-nowrap md:[word-spacing:10px]">to see a preview</p>
      </div>
    </article>
  );
};

export default Main;
