export default function Dropdown({ item }) {
  const { _id, question, answer } = item;
  return (
    <div
      key={_id}
      className="collapse collapse-plus rounded-lg w-[16rem] lg:w-[20rem] md:w-[30rem] m-3 "
    >
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-lg md:text-xl text-white font-Sora p-5 peer-checked:text-[#F78C1F]">
        {question}
      </div>
      <div className="collapse-content ease-in-out">
        <p className="secondary-text p-5">{answer}</p>
      </div>
    </div>
  );
}
