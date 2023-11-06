import { intersection } from '../../../utils/array/array.module.js';

/**
 * @param {number[]} lottoNumber - 로또 번호
 * @param {number} bonusNumber - 보너스 번호
 * @returns {boolean} 보너스 번호 정답 여부
 */
const isCorrectBonusNumber = (lottoNumber, bonusNumber) => lottoNumber.includes(bonusNumber);

/**
 * @param {number[]} lottoNumber - 로또 번호
 * @param {number[]} winningLottoNumber - 당첨 번호
 * @returns {number} 정답 갯수
 */
const calculateMatchingLottoNumbers = (lottoNumber, winningLottoNumber) =>
  intersection(lottoNumber, winningLottoNumber).length;

/**
 * @module lottoNumberMatching
 * 사용자가 구매한 로또 번호들과 당첨 번호들을 비교하여 각 로또의 매칭 결과를 생성하기 위한 모듈
 */
const lottoNumberMatching = {
  /**
   * @param {import('../../../utils/jsDoc.js').LottoNumberInfo} lottoNumberInfo - 구매한 로또 번호들, 보너스 번호, 당첨 번호가 있는 객체
   * @returns {import('../../../utils/jsDoc.js').LottoMatchingResult} 구매한 로또 만큼의 매칭 결과 (정답 갯수, 보너스 번호 정답 여부)
   */
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
