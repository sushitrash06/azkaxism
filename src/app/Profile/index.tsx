import * as React from "react";
import data from "../data.json";
import Image from "next/image";

const Profile: React.FunctionComponent= () => {
  return (
    <div className="flex justify-between p-20 m-auto">
      <div className="w-full p-20 m-10 text-justify">
        <h1 className="font-bold text-4xl">{data.name}</h1>
        <h2 className="italic text-xl">{data.headlLine}</h2>
        <p className="font-medium text-base py-10">{data.summary}</p>
      </div>
      <div className="w-full m-10">
        <Image 
          width={50}
          height={50}
          src={"/profileUsagyuuun.gif"}
          alt="profile"
          className="w-[450px] m-auto"
        />
      </div>
    </div>
  );
};

export default Profile;
