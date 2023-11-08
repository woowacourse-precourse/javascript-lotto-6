import { Console } from '@woowacourse/mission-utils';
import View from '../src/View/View';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const goalLotto = [1, 2, 3, 4, 5, 6];

describe('보너스 번호 테스트', () => {
  test('보너스 번호가 숫자가 아닌 경우 예외가 발생한다.', async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions(['a', '7']);

    // when
    await View.getBonusNumber(goalLotto);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 입력한 로또 번호에 포함되는 경우 예외가 발생한다.', async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions(['6', '7']);

    // when
    await View.getBonusNumber(goalLotto);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 범위 외의 숫자인 경우 예외가 발생한다.', async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions(['0', '7']);

    // when
    await View.getBonusNumber(goalLotto);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});
