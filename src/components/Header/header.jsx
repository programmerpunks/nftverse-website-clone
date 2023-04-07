export default function Header({ tag, heading }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-Montserrat uppercase text-center secondary-text tracking-widest">
        {tag}
      </p>
      <h1
        className=" bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
            text-transparent bg-clip-text text-4xl py-3 text-center"
      >
        {heading}
      </h1>
    </div>
  );
}
