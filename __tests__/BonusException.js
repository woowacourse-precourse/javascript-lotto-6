import App from '../src/App.js';
import { mockQuestions, mockRandoms, getLogSpy } from './ApplicationTest.js';

const runException = async input => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_START = ['1000', '1,2,3,4,5,6'];
  const INPUT_NUMBERS_TO_END = ['7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...INPUT_NUMBERS_TO_START, input, ...INPUT_NUMBERS_TO_END]);

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

  test('보너스 번호가 숫자가 아닌 경우', async () => {
    await runException('j');
  });

  test('보너스 번호가 1부터 45 사이의 숫자가 아닌 경우', async () => {
    await runException('60');
  });

  test('보너스 번호가 당첨 번호에 포함된 경우', async () => {
    await runException('6');
  });
});
