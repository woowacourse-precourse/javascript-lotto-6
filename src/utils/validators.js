import ERROR_PREFIX from '../constants/errorConstant.js';

export const commomValidator = (inputValue) => {
  if (Number.isNaN(inputValue)) throw Error('숫자 형식이 아닙니다.');
  if (!Number.isInteger(inputValue)) throw Error('정수가 아닙니다.');
  if (inputValue <= 0) throw Error('앙의 정수가 아닙니다.');
};

export const checkPayMoneyUnit = (payMoney) => {
  if (payMoney % 1000 !== 0) throw Error('1000원 단위가 아닙니다.');
};

export const checkTheNumberOfWinningNumber = (winningNumberList) => {
  if (winningNumberList.length !== 6)
    throw Error('6개의 번호가 아니거나 ","로 구분하지 않았습니다');
};

export const checkWinningNumberRange = (targetNumber) => {
  if (targetNumber < 1 || targetNumber > 45)
    throw Error('각 번호가 1~45 사이 자연수이지 않습니다.');
};

export const checkOverlapInWinningNumbers = (winningNumbers, targetNumber) => {
  if (winningNumbers.filter((number) => number === targetNumber).length > 1)
    throw Error('중복된 번호가 존재합니다.');
};

export const checkOverlapOnBonusNumber = (winningNumberList, bonusNumber) => {
  if (winningNumberList.includes(bonusNumber))
    throw Error('당첨 번호와 중복됩니다.');
};

export const checkTheNumberOfLottoNumbers = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(`${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`);
  }
};
export const checkOverlapInLottoNumbers = (lottoNumbers, targetNumber) => {
  if (lottoNumbers.filter((number) => number === targetNumber).length > 1)
    throw Error(`${ERROR_PREFIX} 중복된 번호가 존재합니다.`);
};
