import InputError from "./InputError.js";

const checkPrice = (price) => {
  if (isNaN(+price))
    throw new InputError("숫자를 입력해야 합니다.");
  if (+price % 1000 !== 0)
    throw new InputError("1,000 단위의 수를 입력해야 합니다.");
};

export { checkPrice };
