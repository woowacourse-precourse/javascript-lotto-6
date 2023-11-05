const validateLotto = (lottos) => {
  const lottoToNumbers = lottos.map((lotto) => parseInt(lotto, 10));

  if (!lottoToNumbers.length) throw new Error('[ERROR]');

  if (lottoToNumbers.some(isNaN)) throw new Error('[ERROR]');

  if (lottoToNumbers.length > 6) throw new Error('[ERROR]');

  if (lottoToNumbers.length !== new Set(lottoToNumbers).size)
    throw new Error('[ERROR]');

  if (!lottoToNumbers.every((number) => number >= 1 && number <= 45))
    throw new Error('[ERROR]');
};

export default validateLotto;
