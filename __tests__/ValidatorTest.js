import { MissionUtils } from '@woowacourse/mission-utils';
import GetLotto from '../src/component/GetLotto';
import MatchingLotto from '../src/component/MatchingLotto';
import PrizeValidator from '../src/component/PrizeValidator';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

let getLotto;
let logSpy;

beforeEach(() => {
  getLotto = new GetLotto();
  logSpy = getLogSpy();
});

describe('로또 테스트', () => {
  const mockAmount = 5000;
  const InputNumber = '1,2,3,4,5,6';
  const InputBounsNumber = '7';

  test('로또구매 테스트', async () => {
    mockQuestions([mockAmount, InputNumber, InputBounsNumber]);
    await getLotto.lottoAmountGet();
    expect(getLotto.inputAmount).toBe(5000);
  });

  test('예외처리', async () => {
    mockQuestions(['5000j', mockAmount, InputNumber, InputBounsNumber]);
    await getLotto.lottoAmountGet();
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching('[ERROR]'));
  });

  test('랜덤 로또번호 생성 테스트', () => {
    const random = [[8, 21, 23, 41, 42, 43]];
    mockRandoms(random);

    const result = getLotto.lottoRandomNumber();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(6);
    expect(result).toEqual([8, 21, 23, 41, 42, 43]);
  });

  test('로또번호 입력받기 테스트', async () => {
    mockQuestions([InputNumber, InputBounsNumber]);

    await getLotto.lottoNumberGet();

    expect(getLotto.inputNumber).toBe(InputNumber);
    expect(getLotto.inputNumberList).toEqual([1, 2, 3, 4, 5, 6]);
    expect(getLotto.inputBounsNumber).toBe(7);
  });

  test('랜덤 로또번호 배열 저장 테스트', () => {
    const Numbers = [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
    ];
    getLotto.outputNumber = jest.fn();
    getLotto.matchingCalculator = jest.fn();

    getLotto.inputAmount = 2000;
    mockRandoms(Numbers);

    getLotto.output();

    expect(getLotto.lottoCount).toBe(2);
    expect(getLotto.lottoNumber).toEqual(Numbers);
    expect(getLotto.outputNumber).toHaveBeenCalled();
  });

  test('로또번호 출력테스트', () => {
    getLotto.lottoCount = 2;
    getLotto.lottoNumber = [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
    ];
    const outputText = [
      '2개를 구매했습니다',
      '[1, 2, 3, 4, 5, 6]',
      '[11, 12, 13, 14, 15, 16]',
    ];
    getLotto.lottoNumberGet = jest.fn();
    getLotto.outputNumber();

    outputText.forEach((text) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
    });
  });
});

describe('로또 검증 테스트', () => {
  test('로또 맞는 개수 출력 테스트', () => {
    const numberList = [1, 2, 3, 7, 8, 9];
    const bonusNumber = 10;
    const lottoNumber = [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
    ];
    const matchingLotto = new MatchingLotto(
      numberList,
      bonusNumber,
      lottoNumber,
    );

    const [matchingNumber, matchingBonus] = matchingLotto.matching();

    expect(matchingNumber).toEqual([3, 0]);
    expect(matchingBonus).toEqual([0, 0]);
  });

  test('로또 등수별 출력테스트', () => {
    const inputAmount = 2000;
    const matchingNumber = [3, 0];
    const matchingBonus = [0, 0];
    const prize = [
      '당첨 통계\n---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 250.0%입니다.',
    ];
    const validator = new PrizeValidator();
    validator.validate(matchingNumber, matchingBonus, inputAmount);

    prize.forEach((text) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
    });
  });
});
