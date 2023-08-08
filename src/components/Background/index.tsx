import Video from "@/assets/videos/lake-house-outside/outside_day_rain.mp4";


const Background = () => {
  return <video className="w-[100vw] h-[100vh] object-cover z-[-1]" src={Video} autoPlay loop muted></video>;
};

export default Background;
