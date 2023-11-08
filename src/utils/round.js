const round = (rationalNumber) => {
  const PLACE = 10;
  const roundResult = Math.round((rationalNumber * PLACE).toPrecision(15)) / PLACE;

  return roundResult;
};

export default round;
