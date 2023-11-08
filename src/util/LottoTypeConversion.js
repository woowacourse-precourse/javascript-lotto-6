import { DELIMITER } from '../Constants/LottoGame.js';

const LottoTypeConversion = {
  issuedLotto(lotto) {
    return lotto.sort((a, b) => a - b).join(DELIMITER.issuedLotto);
  },

  winningNumbers(winningNumbers) {
    return winningNumbers.split(DELIMITER.winningNumbers);
  },

  Numbers(numbers) {
    return numbers.map((number) => Number(number));
  },

  NumberCommas(str) {
    return Number(str).toLocaleString();
  },
};

export default LottoTypeConversion;
