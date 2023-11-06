const Header = () => {
  return (
    <>
      <div className="header w-[1280px] h-[80px] bg-pink-400 flex justify-between items-center px-4">
        <div className="logo  text-white p-5">
          <img className="w-[100px] " src="logo1.svg" alt="" />
        </div>
        <div className="navBar flex justify-end  gap-[50px] text-[22px] font-semibold text-white items-center pr-5 ">
          <div className="navTitle">ABOUT</div>
          <div className="navTitle">SERVICE</div>
          <div className="navTitle">INFO</div>
          <div className="navTitle">FAQ</div>
          <div className="navTitle">CONTACT</div>
        </div>
      </div>
    </>
  );
};
export default Header;
