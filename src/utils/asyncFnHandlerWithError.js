import { OutputView } from '../views/OutputView.js';

/**
 * 비동기 함수 핸들러 입니다.
 * 에러 발생시, 해당 에러 메세지를 출력하고 재귀적으로 비동기 함수를 다시 호출합니다.
 * @param { Function } asyncFn  실행할 비동기 함수
 * @param { object } context  함수가 실행될 컨텍스트
 * @returns {Promise<*>}
 */

export const asyncFnHandlerWithError = async (asyncFn, context) => {
  try {
    return await asyncFn.call(context);
  } catch (error) {
    OutputView.printLine(error.message);
    return asyncFnHandlerWithError(asyncFn, context);
  }
};
