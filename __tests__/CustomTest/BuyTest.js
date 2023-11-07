/* eslint-disable max-lines-per-function */
import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../../src/domain/views/InputView.js';
import LottoUtill from '../../src/domain/utils/LottoUtill.js';
import InputValidate from '../../src/domain/utils/InputValidate.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
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

  test('로또 구입(음수) 예외 테스트', async () => {
    mockQuestions(['-1000']);
    const Input = new InputView();
    const money = await Input.purchaseMoney();
    const InputVal = await new InputValidate();
    await expect(InputVal.inputMoney(money)).rejects.toThrow(Error);
  });

  test('로또 구입(문자포함) 예외 테스트', async () => {
    mockQuestions(['1a00']);
    const Input = new InputView();
    const money = await Input.purchaseMoney();
    const InputVal = await new InputValidate();
    await expect(InputVal.inputMoney(money)).rejects.toThrow(Error);
  });

  test('로또 구입(공백) 예외 테스트', async () => {
    mockQuestions([' 1000']);
    const Input = new InputView();
    const money = await Input.purchaseMoney();
    const InputVal = await new InputValidate();
    await expect(InputVal.inputMoney(money)).rejects.toThrow(Error);
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

  test('보너스 번호(문자) 예외케이스', async () => {
    const BONUS_NUMBER = 'a';
    const WIN_NUMBER = [1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(
      LottoVal.bonusNumber(BONUS_NUMBER, WIN_NUMBER),
    ).rejects.toThrow(Error);
  });

  test('보너스 번호(음수) 예외케이스', async () => {
    const BONUS_NUMBER = -1;
    const WIN_NUMBER = [1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(
      LottoVal.bonusNumber(BONUS_NUMBER, WIN_NUMBER),
    ).rejects.toThrow(Error);
  });

  test('보너스 번호(범위) 예외케이스', async () => {
    const BONUS_NUMBER = 0;
    const WIN_NUMBER = [1, 2, 3, 4, 5];
    const LottoVal = new InputValidate();

    await expect(
      LottoVal.bonusNumber(BONUS_NUMBER, WIN_NUMBER),
    ).rejects.toThrow(Error);
  });

  test('보너스 번호(범위) 예외케이스', async () => {
    const BONUS_NUMBER = 46;
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
