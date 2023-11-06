const Home_1st = () => {
  return (
    <>
      {" "}
      <div className="home1 flex flex-col justify-center gap-[50px]">
        <div className="content text-center  pt-[20px]  ">
          <h2 className="text-[25px] font-[650]"> Lorem ipsum dolor sit </h2>

          <p> amet consectetur adipisicing elit. Aspernatur, assumenda!</p>
        </div>
        <div className=" w-full h-[300px] grid grid-cols-3 gap-5 p-5">
          <div className="w-[400px] h-[300px] bg-orange-400"></div>
          <div className="w-[400px] h-[300px] bg-blue-400"></div>
          <div className="w-[400px] h-[300px] bg-yellow-400"></div>
        </div>
        <div className="circle flex justify-center gap-5">
          <div className=" bg-red-700 w-5 h-5 rounded-full"></div>
          <div className=" bg-gray-400 w-5 h-5 rounded-full"></div>
          <div className=" bg-gray-400 w-5 h-5 rounded-full"></div>
        </div>
      </div>
    </>
  );
};
export default Home_1st;
