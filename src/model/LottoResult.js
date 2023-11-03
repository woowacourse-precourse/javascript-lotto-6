import { SETTING } from "../constants/Settings.js";
class LottoResult {
  #lottoRank;

  constructor() {
    this.#lottoRank = [0, 0, 0, 0, 0];
  }

  setRank(userNumbers, answerNumbers, bonusNumber) {
    const isBonusNumberMatch = userNumbers.includes(Number(bonusNumber));

    userNumbers = userNumbers.map((number) => Number(number));
    answerNumbers = answerNumbers.map((number) => Number(number));

    let matchCount = answerNumbers.filter((number) =>
      userNumbers.includes(number)
    ).length;

    const ranking = [
      SETTING.no_rank,
      SETTING.no_rank,
      SETTING.no_rank,
      SETTING.fifth_rank,
      SETTING.fourth_rank,
      isBonusNumberMatch ? SETTING.second_rank : SETTING.third_rank,
      SETTING.first_rank,
    ];
    if (matchCount >= 3) this.#lottoRank[ranking[matchCount] - 1] += 1;
  }

  getLottoRank() {
    return this.#lottoRank;
  }
}

export default LottoResult;
