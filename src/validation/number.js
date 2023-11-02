export const getValidatedNumbers = (numbers) => {
  validateNumbers(numbers);
  return numbers.map((number) => {
    const N = +number;
    validateNumber(N);
    return N;
  });
};
export const getValidatedNumber = (number) => {
  const N = +number;

  validateNumber(N);

  return N;
};

const validateNumber = (N) => {
  if (isNaN(N)) throw new Error("숫자가 아님");
  if (N < 1 || N > 45) throw new Error("범위 밖임");
  if (Math.floor(N) !== N) throw new Error("정수가 아님");
};

const validateNumbers = (numbers) => {
  if (numbers.length !== 6) throw new Error("6개여야함");
  if (new Set(numbers).size !== numbers.length)
    throw new Error("중복된 숫자가 있음");
};
