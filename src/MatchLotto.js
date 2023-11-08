const NUMBER = {
  NUMBER_ZERO: 0,
  LOTTO_LENGTH: 6,
  NUMBER_FIVE: 5,
  BONUS_NUMBER: 1
}

const KEY = {
  LOTTO_MATCH: "lottoMatch",
  BONUS_MATCH: "bonusMatch"
}

export function matchLotto(randomLottoArr, lotto, bonus) {
  const matchList = []
  for (let i = NUMBER.NUMBER_ZERO; i < randomLottoArr.length; i++) {
    matchList.push(matchLottoNumber(randomLottoArr[i], lotto, bonus))
  }
  return matchList;
}


function matchLottoNumber(randomLottoArr, lotto, bonus) {
  const match = { lottoMatch: NUMBER.NUMBER_ZERO, bonusMatch: NUMBER.NUMBER_ZERO }
  for (let i = NUMBER.NUMBER_ZERO; i < NUMBER.LOTTO_LENGTH; i++) {
    if (randomLottoArr.includes(parseInt(lotto[i]))) {
      match[KEY.LOTTO_MATCH]++;
    }
  }
  if (match[KEY.LOTTO_MATCH] === NUMBER.NUMBER_FIVE) {
    if (randomLottoArr.includes(parseInt(bonus))) {
      match[KEY.BONUS_MATCH] = NUMBER.BONUS_NUMBER;
    }
  }
  return match;
}