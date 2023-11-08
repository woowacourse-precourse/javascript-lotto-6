import App from '../src/App.js';
import { mockQuestions, mockRandoms, getLogSpy } from './ApplicationTest.js';

const runException = async input => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_START = ['1000'];
  const INPUT_NUMBERS_TO_END = ['1,2,3,4,5,6', '7'];

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

  test('당첨 번호가 6개가 아닌 경우', async () => {
    await runException('1,2,3,4');
  });

  test('당첨 번호 중 하나가 1부터 45 사이의 숫자가 아닌 경우', async () => {
    await runException('1,2,3,4,5,50');
  });

  test('당첨 번호 중 중복된 숫자가 있는 경우', async () => {
    await runException('1,2,3,4,5,5');
  });
});
