import { Handle_Input } from '../src/view/InputUI';
import { mockQuestions, getLogSpy } from './ApplicationTest';
import { ERROR_MESSAGE } from '../src/utils/constant';

describe('값 입력 함수 테스트', () => {
  test('돈을 숫자가 아닌 값을 입력한 경우 예외로 처리', () => {
    const inputs = ['a', '2000d', ' %$%', '1000'];
    const result = ERROR_MESSAGE.IS_NOT_NUMBER;

    const logspy = getLogSpy();
    mockQuestions(inputs);
    Handle_Input.moneyInput();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(result));
  });
});
