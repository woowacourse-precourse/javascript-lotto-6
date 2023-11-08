const getLottoMatch = (arr, el) => arr.filter(value => value["lottoMatch"] === el).length;
const getBonusMatch = (arr, el) => arr.filter(value => value["bonusMatch"] === el).length;

export function matchResult(matchList) {
    const matchFifth = getLottoMatch(matchList, 3);
    const matchFourth = getLottoMatch(matchList, 4);
    const matchSecond = getBonusMatch(matchList, 1);
    const matchThird = getLottoMatch(matchList, 5) - matchSecond;
    const matchFirst = getLottoMatch(matchList, 6);

    return [matchFifth, matchFourth, matchThird, matchSecond, matchFirst];
}