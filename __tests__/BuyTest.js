/* eslint-disable max-lines-per-function */
import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../src/views/InputView.js';
import LottoUtill from '../src/utils/LottoUtill.js';
import LottoController from '../src/controllers/LottoController.js';
import InputValidate from '../src/utils/InputValidate.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const buyNumberException = async (input) => {
  const INPUT_NUMBERS_TO_END = ['8000', '1,2,3,4,5,6', '7'];
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  const LottoCon = new LottoController();
  await LottoCon.inputPurchaseMoney();
};

describe('로또 구입 테스트', () => {
  test('로또 구입 테스트', async () => {
    mockQuestions(['1000']);

    const Input = new InputView();

    const money = await Input.purchaseMoney();
    const amount = await new LottoUtill(money);

    expect(amount.howManyToBuy()).toBe(1);
  });

  test('로또 구입 테스트', async () => {
    mockQuestions(['5000']);

    const Input = new InputView();

    const money = await Input.purchaseMoney();
    const amount = await new LottoUtill(money);

    expect(amount.howManyToBuy()).toBe(5);
  });

  test('로또 구입 예외 테스트', async () => {
    buyNumberException('1500');
    expect(() => buyNumberException('1500').toThrow(Error));
  });

  test('로또 구입 예외 테스트', async () => {
    buyNumberException('10000.5');
    expect(() => buyNumberException('1500').toThrow(Error));
  });

  test('로또 번호(중복) 예외 테스트', async () => {
    const NUMBER = [1, 1, 1, 1, 1, 1];
    const LottoVal = new InputValidate();

    await expect(LottoVal.lottoNumber(NUMBER)).rejects.toThrow(Error);
  });

  test('로또 번호(문자 포함) 예외 테스트', async () => {
    const NUMBER = ['a', 1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(LottoVal.lottoNumber(NUMBER)).rejects.toThrow(Error);
  });

  test('로또 번호(음수) 예외 테스트', async () => {
    const NUMBER = [-1, 1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(LottoVal.lottoNumber(NUMBER)).rejects.toThrow(Error);
  });

  test('로또 번호(범위) 예외 테스트', async () => {
    const NUMBER = [0, 1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(LottoVal.lottoNumber(NUMBER)).rejects.toThrow(Error);
  });

  test('로또 번호(범위) 예외 테스트', async () => {
    const NUMBER = [1, 2, 3, 4, 5, 46];
    const LottoVal = new InputValidate();

    await expect(LottoVal.lottoNumber(NUMBER)).rejects.toThrow(Error);
  });

  test('보너스 번호 예외 테스트', async () => {
    const BONUS_NUMBER = 'a';
    const WIN_NUMBER = [1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(
      LottoVal.bonusNumber(BONUS_NUMBER, WIN_NUMBER),
    ).rejects.toThrow(Error);
  });

  test('보너스 번호 범위는 1부터 45 예외 테스트', async () => {
    const BONUS_NUMBER = 46;
    const WIN_NUMBER = [1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(
      LottoVal.bonusNumber(BONUS_NUMBER, WIN_NUMBER),
    ).rejects.toThrow(Error);
  });

  test('보너스 번호 범위는 1부터 45 예외 테스트', async () => {
    const BONUS_NUMBER = 0;
    const WIN_NUMBER = [1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(
      LottoVal.bonusNumber(BONUS_NUMBER, WIN_NUMBER),
    ).rejects.toThrow(Error);
  });

  test('보너스 번호(음수) 테스트', async () => {
    const BONUS_NUMBER = -1;
    const WIN_NUMBER = [1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(
      LottoVal.bonusNumber(BONUS_NUMBER, WIN_NUMBER),
    ).rejects.toThrow(Error);
  });

  test('당첨번호, 보너스번호 중복 예외 테스트', async () => {
    const BONUS_NUMBER = 1;
    const WIN_NUMBER = [1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(
      LottoVal.bonusNumber(BONUS_NUMBER, WIN_NUMBER),
    ).rejects.toThrow(Error);
  });
});
