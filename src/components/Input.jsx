const Input = ({ input }) => {
  return (
    <input
      type="text"
      className="mt-2 block w-full rounded-xl border-8 border-y-8 border-gray-500 border-b-black bg-emerald-200 text-right  text-7xl text-gray-700"
      value={input}
      maxLength={12}
    />
  );
};

export default Input;
