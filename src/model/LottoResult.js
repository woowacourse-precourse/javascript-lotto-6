import { SETTING } from "../constants/Settings.js";

class LottoResult {
  #lottoRank;
  #lottoPrize;
  #bonusNumber;
  #prize;

  constructor() {
    this.#lottoRank = [0, 0, 0, 0, 0];
    this.#lottoPrize = 0;
    this.#bonusNumber = 0;
    this.#prize = [
      SETTING.first_prize,
      SETTING.second_prize,
      SETTING.third_prize,
      SETTING.fourth_prize,
      SETTING.fifth_prize,
    ];
  }

  setRank(userNumbers, answerNumbers) {
    const isBonusNumberMatch = userNumbers.includes(this.#bonusNumber);
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

  setLottoPrize() {
    this.#lottoRank.reduce((acc, cur, idx) => {
      acc += cur * this.#prize[idx];
      return (this.#lottoPrize = acc);
    }, 0);
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  getLottoRank() {
    return this.#lottoRank;
  }

  getLottoPrize() {
    return this.#lottoPrize;
  }
}

export default LottoResult;
