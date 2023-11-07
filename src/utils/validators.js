import ERRORPREFIX from '../constants/errorConstant.js';

export const commomValidator = (inputValue) => {
  if (Number.isNaN(inputValue)) throw Error('숫자 형식이 아닙니다.');
  if (!Number.isInteger(inputValue)) throw Error('정수가 아닙니다.');
  if (inputValue <= 0) throw Error('앙의 정수가 아닙니다.');
};

// payMoney를 param으로 받게 변경.
export const checkPayMoneyUnit = (payMoney) => {
  if (payMoney % 1000 !== 0) throw Error('1000원 단위가 아닙니다.');
};

// winningNumberList를 param으로 받게 변경.
export const checkTheNumberOfWinningNumber = (winningNumberList) => {
  if (winningNumberList.length !== 6)
    throw Error('6개의 번호가 아니거나 ","로 구분하지 않았습니다');
};

// winningNumber의 array 내부 탐색 함수 안에서, bonusNumber에서.
export const checkWinningNumberRange = (targetNumber) => {
  if (targetNumber < 1 || targetNumber > 45)
    throw Error('각 번호가 1~45 사이 자연수이지 않습니다.');
};

// array 내부 탐색 함수 안에서. winningNumberList를 param에 추가.
export const checkOverlapInWinningNumbers = (winningNumbers, targetNumber) => {
  if (winningNumbers.filter((number) => number === targetNumber).length > 1)
    throw Error('중복된 번호가 존재합니다.');
};

// bonumNumber에서, winningNumberList랑 bonusNumber를 param에서 갖도록.
export const checkOverlapOnBonusNumber = (winningNumberList, bonusNumber) => {
  if (winningNumberList.includes(bonusNumber))
    throw Error('당첨 번호와 중복됩니다.');
};

// Lotto에서 validate안에. numbers를 param으로 가짐
export const checkTheNumberOfLottoNumbers = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(`${ERRORPREFIX} 로또 번호는 6개여야 합니다.`);
  }
};
export const checkOverlapInLottoNumbers = (lottoNumbers, targetNumber) => {
  if (lottoNumbers.filter((number) => number === targetNumber).length > 1)
    throw Error(`${ERRORPREFIX} 중복된 번호가 존재합니다.`);
};
