import { MAGIC_NUMBER } from '../constants/number';

class Winning {
  static countMatchNumber(lottos, winningNumbers, bonusNumber) {
    const matchNumber = lottos.filter((number) => winningNumbers.includes(number)).length;
    if (matchNumber === MAGIC_NUMBER.three) return 0;
    if (matchNumber === MAGIC_NUMBER.four) return 1;
    if (matchNumber === MAGIC_NUMBER.five) return lottos.includes(bonusNumber) ? 3 : 2;
    if (matchNumber === MAGIC_NUMBER.six) return 4;
    return MAGIC_NUMBER.failure;
  }

  static countWinning(lottos, winningNumbers, bonusNumber) {
    const winnings = Array.from({ length: MAGIC_NUMBER.rank }).fill(MAGIC_NUMBER.zero);

    lottos.forEach((lotto) => {
      const result = this.countMatchNumber(lotto, winningNumbers, Number(bonusNumber));
      if (result !== MAGIC_NUMBER.failure) winnings[result] += 1;
    });

    return winnings;
  }
}

export default Winning;
