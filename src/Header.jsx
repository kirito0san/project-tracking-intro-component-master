import { useRef } from "react";
const Header = () => {
  let srcimg = useRef(null);
  let navDiv = useRef(null);
  let src = `./images/icon-hamburger.svg`;
  const HandelClickOpen = () => {
    if (src === `./images/icon-hamburger.svg`) {
      src = `./images/icon-close.svg`;
      srcimg.current.src = src;
      navDiv.current.classList.toggle(`open`);
    } else {
      src = `./images/icon-hamburger.svg`;
      srcimg.current.src = src;
      navDiv.current.classList.toggle(`open`);
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
          <li className="not flex justify-center py-3 w-full">
            <span></span>
          </li>
          <li className="text-[#a0a1ac]">Login</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
