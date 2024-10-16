export const ButtonStyles = (btn) => {
  const numberButton =
    "m-2 h-11 w-20 rounded-md border border-r-2 border-t-2 border-zinc-600 bg-gradient-to-r from-neutral-400 to-neutral-500 text-4xl font-medium text-gray-200 ring-zinc-700 hover:bg-gradient-to-r hover:from-neutral-500 hover:to-neutral-600 focus:ring-4";

  const operatorButton =
    "m-2 h-11 w-20 rounded-md border border-r-2 border-t-2 border-zinc-500 bg-gradient-to-r from-neutral-600 to-gray-800  text-3xl font-medium text-gray-200 ring-zinc-700 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-gray-900 focus:ring-4";

  const acButton =
    "m-2 h-11 w-20 rounded-md border border-r-2 border-t-2 border-zinc-500 bg-gradient-to-r from-orange-400 to-amber-600 px-4 text-sm font-medium text-gray-200 ring-zinc-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-700 focus:ring-4";
  const sumButton =
    "row-span-3 w-20 m-2 rounded-md border border-r-2 border-t-2 border-zinc-500 bg-gradient-to-r from-neutral-600 to-gray-800 text-3xl font-medium text-gray-200 ring-zinc-700 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-gray-900 focus:ring-4";

  const className = {
    MU: operatorButton,
    "%": operatorButton,
    MR: operatorButton,
    MC: operatorButton,
    "M-": operatorButton,
    "M+": operatorButton,
    "/": operatorButton,
    minus: operatorButton,
    "*": operatorButton,
    "-": operatorButton,
    DEL: operatorButton,
    C: acButton,
    "+": sumButton,
    "=": operatorButton,

    9: numberButton,
    8: numberButton,
    7: numberButton,
    6: numberButton,
    5: numberButton,
    4: numberButton,
    3: numberButton,
    2: numberButton,
    1: numberButton,
    0: numberButton,
    "00": numberButton,
    ".": numberButton,
  };
  return className[btn];
};
