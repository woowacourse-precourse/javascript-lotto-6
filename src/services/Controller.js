import { WINNING_RANK_COUNT } from '../constants/lotto/numbers';
import { INPUT } from '../constants/message/view';
import shop from '../domain/shop';
import validationUtils from './utils/validation';
import { consoleInput } from './view';

/**
 * 구입한 로또 번호를 반환합니다
 */

const COMMA = ',';

const buyLotto = (purchaseAmount) => {
  const lottos = shop.lotterySales(purchaseAmount);
  return lottos;
};

/**
 * 쉼표(,)를 기준으로 구문을 나누어 반환한다
 * @param {string} winningNumber - 당첨 번호
 */
const commaSplit = (winningNumber) => {
  const winningNumbers = winningNumber.split(COMMA);
  return winningNumbers;
};

/**
 * 당첨번호에 사용될 함수들의 목록입니다
 * @param {string} number - 하나의 당첨 번호
 */
const validateConvertStringToNumber = (number) => {
  validationUtils.isString(number);
  validationUtils.checkStringLength(number);
  validationUtils.zeroIndexValueNotZero(number);
  validationUtils.checkConvertStringToNumber(number);
  validationUtils.checkRange(Number(number));
};

/**
 * 문자열 배열을 숫자 배열로 반환합니다
 * @param {string} stringList
 */
const convertStringArrayToNumberArray = (stringList) => {
  const splitArray = commaSplit(stringList);
  const numberList = splitArray.map((str) => Number(str));
  return numberList;
};

/**
 * 당첨 번호 유효성 검사
 * @param {string[]} winningNumbers - 당첨 번호 배열
 */
const validateInputWinningNumber = (winningNumbers) => {
  validationUtils.isArray(winningNumbers);
  validationUtils.checkArrayDuplicate(winningNumbers);
  winningNumbers.forEach((number) => {
    validateConvertStringToNumber(number);
  });
};

/**
 *
 * @param {number[]} lottos - Lotto 클래스 배열
 * @param {number[]} winningNumbers
 * @param {number} bonusNumber
 */
const saveRank = (lottos, winningNumbers, bonusNumber) => {
  const rank = {
    [WINNING_RANK_COUNT.firstPlace]: 0,
    [WINNING_RANK_COUNT.secondPlace]: 0,
    [WINNING_RANK_COUNT.thirdPlace]: 0,
    [WINNING_RANK_COUNT.fourthPlace]: 0,
    [WINNING_RANK_COUNT.fifthPlace]: 0,
  };
  lottos.forEach((lotto) => {
    rank[`${lotto.getWinningRank(winningNumbers, bonusNumber)}`] += 1;
  });
  return rank;
};

const play = async () => {
  const purchaseAmount = consoleInput(INPUT.purchaseAmount);
  const lottos = buyLotto(purchaseAmount);
  const inputWinningNumber = consoleInput(INPUT.bonusNumber);
  const inputBonusNumber = consoleInput(INPUT.winningNumber);
  validateInputWinningNumber(inputWinningNumber);
  validateConvertStringToNumber(inputBonusNumber);
  const winningNumbers = convertStringArrayToNumberArray(inputWinningNumber);
  const bonusNumber = Number(inputBonusNumber);
  const rank = saveRank(lottos, winningNumbers, bonusNumber);
  outputRank(rank);
};

export default play;
