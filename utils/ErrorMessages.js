import CONSTANTS from './Constants.js';

const PREFIX = '[ERROR]';

const ERROR_MESSAGES = Object.freeze({
  invalidLottoPrice: `${PREFIX}구매 금액은 ${CONSTANTS.eachLottoPrice}의 배수인 양의 정수 값을 입력해주세요.`,
  invalidWinningNumber: `${PREFIX}서로 중복되지 않는 ${CONSTANTS.minimumNumber}에서 ${CONSTANTS.maximumNumber}사이의 정수 6자리를 ${CONSTANTS.numberDelimiter}로 구분해 입력해 주세요.`,
  invalidBonusNumber: `${PREFIX}메인 번호와 중복되지 않는 ${CONSTANTS.minimumNumber} 에서 ${CONSTANTS.maximumNumber}사이의 정수를 입력해주세요.`,
  invalidLottoNumber: `${PREFIX}로또 번호는 1에서 45사이의 중복되지 않은 6개의 숫자로 이루어져야 합니다.`,
});

export default ERROR_MESSAGES;
