import App from '../src/App.js';
import { mockQuestions, mockRandoms, getLogSpy } from './ApplicationTest.js';

const runException = async input => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('금액이 숫자가 아닌 경우', async () => {
    await runException('abcd');
  });

  test('금액이 숫자가 아닌 값이 있는 경우', async () => {
    await runException('1000j');
  });

  test('금액이 1000원 미만인 경우', async () => {
    await runException('999');
  });

  test('금액이 1000원의 배수가 아닌 경우', async () => {
    await runException('1500');
  });
});
