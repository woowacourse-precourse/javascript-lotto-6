import OutputHandler from '../View/OutputHandler.js';

/**
 * 객체의 모든 하위 객체까지 불변성을 보장하는 함수
 *
 * @param {Object} object 불변성을 보장하고자 하는 객체
 * @returns {Object} 모든 하위 객체까지 불변성이 보장된 객체
 */
export const deepFreeze = (object) => {
  for (let key in object) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      deepFreeze(object[key]);
    }
  }
  return Object.freeze(object);
};

/**
 * 입력 메서드를 실행하고, 오류가 발생하면 재시도 한다.
 *
 * @param {function} inputMethod 사용자 입력을 처리하는 함수
 * @param {Array} winningNumbers 당첨 번호 배열
 *
 * @returns {Promise} 입력 메서드의 실행 결과를 반환하는 Promise 객체
 *
 * @throws {Error} 입력 메서드 실행 중 오류가 발생하면 콘솔에 오류 메시지를 출력
 */
export const inputWithRetry = async (inputMethod, winningNumbers) => {
  while (true) {
    try {
      return await inputMethod(winningNumbers);
    } catch (error) {
      OutputHandler.printError(error);
    }
  }
};

/**
 * 숫자를 1000 단위마다 콤마(,) 를 추가하고, 소수점 첫 번째 자리까지 보이도록 포맷팅한다.
 *
 * @param {Number} number 포맷팅할 숫자
 * @returns {String} 콤마와 소수점 첫 번째 자리까지 포맷팅된 문자열
 *
 */
export const formatNumberWithCommasAndDecimals = (number) => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};
