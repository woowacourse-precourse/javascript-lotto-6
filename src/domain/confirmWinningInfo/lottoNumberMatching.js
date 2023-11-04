import { intersection } from '../../utils/array.js';

const isCorrectBonusNumber = (lottoNumber, bonusNumber) => lottoNumber.includes(bonusNumber);

const calculateMatchingLottoNumbers = (lottoNumber, winningLottoNumber) =>
  intersection(lottoNumber, winningLottoNumber).length;

const lottoNumberMatching = {
  createLottoMatchingResult({
    lottoNumbers,
    winningLottoInfo: { bonusNumber, winningLottoNumber },
  }) {
    return lottoNumbers.map((lottoNumber) => ({
      matchCount: calculateMatchingLottoNumbers(lottoNumber, winningLottoNumber),
      hasBonusNumber: isCorrectBonusNumber(lottoNumber, bonusNumber),
    }));
  },
};

export default lottoNumberMatching;
