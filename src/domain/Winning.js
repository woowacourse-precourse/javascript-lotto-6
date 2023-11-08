import { 
  MAGIC_NUMBER, 
  MATCH_NUMBER, 
  WINNING_INDEX 
} from '../constants/number';

class Winning {
  static countMatchNumber(lottos, winningNumbers, bonusNumber) {
    const matchNumber = lottos.filter((number) => winningNumbers.includes(number)).length;
    if (matchNumber === MATCH_NUMBER.three) return WINNING_INDEX.zero;
    if (matchNumber === MATCH_NUMBER.four) return WINNING_INDEX.first;

    if (matchNumber === MATCH_NUMBER.five) {
      return lottos.includes(bonusNumber) ? WINNING_INDEX.third : WINNING_INDEX.second;
    }

    if (matchNumber === MATCH_NUMBER.six) return WINNING_INDEX.fourth;

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
