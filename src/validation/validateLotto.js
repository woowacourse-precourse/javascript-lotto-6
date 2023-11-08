import { LOTTO_ERROR } from "../errorMessages/errorMessage";

const validateLotto = (lottos) => {
  const lottoToNumbers = lottos.map((lotto) => parseInt(lotto, 10));

  if (!lottoToNumbers.length) throw new Error(LOTTO_ERROR.none);

  if (lottoToNumbers.some(isNaN)) throw new Error(LOTTO_ERROR.type);

  if (lottoToNumbers.length > 6) throw new Error(LOTTO_ERROR.digits);

  if (lottoToNumbers.length !== new Set(lottoToNumbers).size)
    throw new Error(LOTTO_ERROR.duplication);

  if (!lottoToNumbers.every((number) => number >= 1 && number <= 45))
    throw new Error(LOTTO_ERROR.range);
};

export default validateLotto;
