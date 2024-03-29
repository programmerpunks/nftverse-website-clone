import Image from "next/image";

export default function Card({ item }) {
  const { _id, image, name, designation } = item;
  return (
    <div className="flex flex-col m-5 justify-center mt-8" key={_id}>
      <div className="mb-10">
        <div className="w-[13.5rem] h-[15rem] backdrop-opacity-10 bg-neutral-400/20 rounded-lg border border-[#373737] ml-3"></div>
        <Image
          src={image}
          width={200}
          height={200}
          alt="card"
          className="relative z-30  mt-[-16.5rem] w-[13rem] h-[15rem] rounded-lg"
        />
      </div>

      <h1 className="text-lg">{name}</h1>
      <p className="secondary-text">{designation}</p>
    </div>
  );
}
