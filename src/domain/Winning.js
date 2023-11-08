class Winning {
  static countMatchNumber(lottos, winningNumbers, bonusNumber) {
    const matchNumber = lottos.filter((number) => winningNumbers.includes(number)).length;
    if (matchNumber === 3) return 0;
    if (matchNumber === 4) return 1;
    if (matchNumber === 5) return lottos.includes(bonusNumber) ? 3 : 2;
    if (matchNumber === 6) return 4;
    return -1;
  }

  static countWinning(lottos, winningNumbers, bonusNumber) {
    const winnings = Array.from({ length: 5 }).fill(0);

    lottos.forEach((lotto) => {
      const result = this.countMatchNumber(lotto, winningNumbers, Number(bonusNumber));
      if (result !== -1) winnings[result] += 1;
    });

    return winnings;
  }
}

export default Winning;
