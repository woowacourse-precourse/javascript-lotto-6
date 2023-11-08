const CountMatchedNumber = (lottoNumbers, userNumbers, bonusNumber) => {
  let lottoScore = 0;
  let bonusScore = 0;

  for (const NUMBER of userNumbers) {
    if (lottoNumbers.includes(NUMBER)) lottoScore++;
    if (lottoNumbers.includes(bonusNumber)) bonusScore++;
  }

  return [lottoScore, bonusScore];
};

export default CountMatchedNumber;
