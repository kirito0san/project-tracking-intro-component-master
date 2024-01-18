const Main = () => {
  return (
    <article className="parent-main">
      <p className=" tracking-[4px] text-[#a0a1ac] font-Barlow">
        <span className="px-2 p-1 tracking-wider    text-sm  bg-[#242942] rounded-3xl text-white">
          {" "}
          New
        </span>{" "}
        Monograph Dashboard{" "}
      </p>
      <h2 className="text-[#242942] text-nowrap font-bold text-4xl md:text-5xl font-Barlow">
        {" "}
        <p>Powerful insights </p>
        <p>into your team</p>
      </h2>
      <div className=" capitalize text-[#a0a1ac]">
        <p>Project planning and time tracking</p>
        <p> for agile teams </p>
      </div>
      <div className="flex gap-5 text-sm items-center text-[#a0a1ac]">
        {" "}
        <button>Schedule a demo </button>
        <p className="text-nowrap md:[word-spacing:10px]">to see a preview</p>
      </div>
    </article>
  );
};

export default Main;
