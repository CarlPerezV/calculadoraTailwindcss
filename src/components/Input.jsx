const Input = ({ value }) => {
  return (
    <input
      type="text"
      className="block h-24 w-full rounded-xl border-x-8 border-b-8 border-t-2 border-zinc-950 bg-gradient-to-r from-green-300 to-emerald-200 px-3 text-right text-6xl text-gray-700"
      value={value}
      //onChange={handleChange}
    />
  );
};

export default Input;
