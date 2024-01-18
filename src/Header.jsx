import { useRef } from "react";

const Header = () => {
  let srcimg = useRef(null);
  let navDiv = useRef(null);
  let src = `./images/icon-hamburger.svg`;
  const HandelClickOpen = () => {
    if (src === `./images/icon-hamburger.svg`) {
      src = `./images/icon-close.svg`;
      srcimg.current.src = src;
      navDiv.current.classList.toggle(`h-0`);
      navDiv.current.classList.toggle(`h-[300px]`);
      navDiv.current.classList.toggle(`p-5`);
    } else {
      src = `./images/icon-hamburger.svg`;
      srcimg.current.src = src;
      navDiv.current.classList.toggle(`p-5`);
      navDiv.current.classList.toggle(`h-0`);
      navDiv.current.classList.toggle(`h-[300px]`);
    }
  };
  return (
    <header className="relative  ">
      <div className="flex justify-between  items-center">
        <img className="w-7" src="./images/logo.svg" alt="" />
        <img
          className="w-7 md:hidden "
          onClick={HandelClickOpen}
          src="./images/icon-hamburger.svg"
          alt=""
          ref={srcimg}
        />
        <ul ref={navDiv}>
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <div>
            <span></span>
          </div>
          <li className="text-[#a0a1ac]">Login</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
