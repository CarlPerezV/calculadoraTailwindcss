const Screen = ({ input }) => {
  return (
    <input
      type='number'
      className='block h-24 w-full rounded-xl border-x-8 border-b-8 border-t-2 border-zinc-950 bg-gradient-to-r from-green-300 to-emerald-200 p-2 px-2 text-right font-digit text-7xl text-gray-700'
      disabled
    >
      {input}
    </input>
  );
};

export default Screen;
