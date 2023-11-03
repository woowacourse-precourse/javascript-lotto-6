import LOTTO_TEMPLATE from '../constants/template';

/**
 * Lotto 번호를 받아 출력 템플릿을 만들어 리턴합니다.
 * @param {number[]} lottoNumbers
 * @param {string} joinSeparator - 번호 사이에 사용할 구분자
 * @return {string} - 포맷팅된 로또 번호 문자열 (ex : [ 1, 2, 3, 4, 5, 6 ])
 */
const formatLottoNumbers = (
  lottoNumbers,
  joinSeparator = LOTTO_TEMPLATE.SEPARATOR,
) => {
  return `[ ${lottoNumbers.join(joinSeparator)} ]`;
};

export default formatLottoNumbers;
