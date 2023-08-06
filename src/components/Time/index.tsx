import { useState, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/24/solid";
import { TypeTime } from "@/shared/types";
import { motion } from "framer-motion";

const Time = () => {
  const [time, setTime] = useState<TypeTime>({
    hours: "0",
    minutes: "0",
    seconds: "0",
    period: "AM",
  });
  useEffect(() => {
    const idTimeout = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => {
      clearInterval(idTimeout);
    };
  }, []);

  const getCurrentTime = (): TypeTime => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours < 12 ? "AM" : "PM";

    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return {
      hours: formattedHours,
      minutes: formattedMinutes,
      seconds: formattedSeconds,
      period: period,
    };
  };

  return (
    <motion.div
      className="flex items-center absolute top-6 right-6 p-4 bg-black-primary border rounded-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <ClockIcon className="text-white w-6 h-6 inline-block mr-2" />
      <div className="inline-block min-w-[70px]">
        <span className="text-white">{time.hours}:</span>
        <span className="text-white">{time.minutes}:</span>
        <span className="text-white">{time.seconds}</span>
      </div>
      <span className="text-white"> {time.period}</span>
    </motion.div>
  );
};

export default Time;
