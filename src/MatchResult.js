const NUMBER = {
  MATCH_THREE: 3,
  MATCH_FOUR: 4,
  MATCH_FIVE: 5,
  MATCH_SIX: 6,
  BONUS_MATCH: 1
}

const KEY = {
  LOTTO_MATCH: "lottoMatch",
  BONUS_MATCH: "bonusMatch"
}

const getLottoMatch = (arr, el) => arr.filter(value => value[KEY.LOTTO_MATCH] === el).length;
const getBonusMatch = (arr, el) => arr.filter(value => value[KEY.BONUS_MATCH] === el).length;

export function matchResult(matchList) {
  const matchFifth = getLottoMatch(matchList, NUMBER.MATCH_THREE);
  const matchFourth = getLottoMatch(matchList, NUMBER.MATCH_FOUR);
  const matchSecond = getBonusMatch(matchList, NUMBER.BONUS_MATCH);
  const matchThird = getLottoMatch(matchList, NUMBER.MATCH_FIVE) - matchSecond;
  const matchFirst = getLottoMatch(matchList, NUMBER.MATCH_SIX);

  return [matchFifth, matchFourth, matchThird, matchSecond, matchFirst];
}