import Image from "next/image";

import DateTimeDisplay from "./dateTimeDisplay";
import litIcon from "../../assets/Hero/images/icon-fire.png";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex flex-row items-center justify-center rounded-full border border-[#F69F21] w-52 mt-3 p-2 md:p-0 md:mt-0 ">
      <DateTimeDisplay value={days} type={"Days"} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"Hours"} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} />
      <p className="text-sm font-Montserrat">left</p>
      <Image src={litIcon} width={20} height={20} className="ml-2" />
    </div>
  );
};
