import LottoController from '../src/controller/LottoController';
import { ERROR_MESSAGE } from '../src/utils/constants';
import { getLogSpy, mockQuestions, mockRandoms } from './utils';

describe('LottoController', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('성공', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    const instance = new LottoController();
    await instance.start();

    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('실패 - 구입 금액이 숫자가 아닌 경우', async () => {
    const logSpy = getLogSpy();

    mockQuestions(['a']);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.not_number),
    );
  });

  test('실패 - 구입 금액이 빈값일 경우', async () => {
    const logSpy = getLogSpy();

    mockQuestions(['']);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.empty),
    );
  });

  test('실패 - 구입 금액이 1000원 미만일 경우', async () => {
    const logSpy = getLogSpy();

    mockQuestions(['500']);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.amount_division),
    );
  });

  test('실패 - 구입 금액이 1000원 단위가 아닌 경우', async () => {
    const logSpy = getLogSpy();

    mockQuestions(['1500']);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.amount_division),
    );
  });

  test('실패 - 당첨 번호가 숫자가 아닌 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', 'a,b,c,d,e,f', '7'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.not_number),
    );
  });

  test('실패 - 당첨 번호가 빈값인 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '', '7'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.empty),
    );
  });

  test('실패 - 당첨 번호가 6개가 아닌 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5', '7'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.numbers_length),
    );
  });

  test('실패 - 당첨 번호에 중복된 숫자가 있는 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,5', '7'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.numbers_duplicate),
    );
  });

  test('실패 - 당첨 번호가 1에서 45사이가 아닐 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,46', '7'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.numbers_range),
    );
  });

  test('실패 - 보너스 번호가 숫자가 아닌 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', 'a'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.not_number),
    );
  });

  test('실패 - 보너스 번호가 빈값인 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', ''];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.empty),
    );
  });

  test('실패 - 보너스 번호가 당첨 번호와 중복될 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '1'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.bonus_number_duplicate),
    );
  });

  test('실패 - 보너스 번호가 1에서 45사이가 아닐 경우', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '46'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const instance = new LottoController();
    await instance.start();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGE.numbers_range),
    );
  });
});
