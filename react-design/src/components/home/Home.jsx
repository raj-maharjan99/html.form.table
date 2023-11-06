import Home_1st from "./home_1st";
import Home_2nd from "./home_2nd";

const Home = () => {
  return (
    <>
      {" "}
      <div className="main_home">
        <div className="overlay w-[100%] h-[500px] bg-green-500 flex flex-col justify-center gap-[50px] items-center    ">
          <div className="titleContent w-[500px] font-[700] text-black text-center text-[35px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
          <div className="homeContent w-[500px] text-black text-center text-[25px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            <p className="text-[16px] ">
              totam similique corporis veniam ratione et error nobis.
              Perferendis, dolore animi?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[100px]">
        <Home_1st />
        <Home_2nd />
      </div>
    </>
  );
};
export default Home;
