const LottoTypeConversion = {
  issuedLotto(lotto) {
    return lotto.sort((a, b) => a - b).join(', ');
  },

  winningNumbers(winningNumbers) {
    return winningNumbers.split(',');
  },

  parseNumbers(numbers) {
    return numbers.map((number) => Number(number));
  }
}

export default LottoTypeConversion;