const LottoTypeConversion = {
  issuedLotto(lotto) {
    return lotto.sort((a, b) => a - b).join(', ');
  },

  winningNumbers(winningNumbers) {
    return winningNumbers.split(',');
  },

  Numbers(numbers) {
    return numbers.map((number) => Number(number));
  },
  
  NumberCommas(str) {
    return Number(str).toLocaleString();
  }
}

export default LottoTypeConversion;