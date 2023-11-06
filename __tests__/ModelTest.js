import LottoManageModel from '../src/model/LottoManageModel.js';
import UserLottoModel from '../src/model/UserLottoModel.js';
import { ERROR_MESSAGE, LOTTO } from '../src/utils/constants.js';
import { mockRandoms } from './utils.js';

describe('UserLottoModel', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구매 금액 설정시 로또 구매', async () => {
    const instance = new UserLottoModel();
    const amount = 5000;
    const randoms = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
    ];
    mockRandoms(randoms);

    instance.setAmount(amount);

    expect(instance.getUserLottos().length).toBe(amount / LOTTO.amount_unit);
    expect(instance.getUserLottos()).toEqual(randoms);
  });

  test('구매한 로또들의 일치 여부를 받아 통계 생성', () => {
    const instance = new UserLottoModel();
    const matchCountByLottos = [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [5, 1],
      [6, 0],
      [4, 1],
    ];
    const result = [1, 2, 1, 1, 1];

    instance.setStatistics(matchCountByLottos);

    expect(instance.getStatistics()).toEqual(result);
  });

  test('싪패 - amount가 1000 단위가 아닐 경우', async () => {
    const instance = new UserLottoModel();

    const numbers = [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008];

    const callback = async (number) => {
      instance.setAmount(number);
    };

    numbers.forEach((number) => {
      expect(callback(number)).rejects.toThrow('[ERROR]');
      expect(callback(number)).rejects.toThrow(ERROR_MESSAGE.amount_division);
    });
  });

  test('실패 - amount가 1000원 이하일 경우', () => {
    const instance = new UserLottoModel();

    const numbers = [1, 2, 3, 4, 5, 6, 7];

    const callback = async (number) => {
      instance.setAmount(number);
    };

    numbers.forEach((number) => {
      expect(callback(number)).rejects.toThrow('[ERROR]');
      expect(callback(number)).rejects.toThrow(ERROR_MESSAGE.amount_division);
    });
  });
});

describe('LottoManageModel', () => {
  test('당첨 번호를 설정', () => {
    const instance = new LottoManageModel();
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    instance.setWinningNumbers(winningNumbers);

    expect(instance.getWinningNumbers()).toEqual(winningNumbers);
  });

  describe('보너스 번호 설정', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    let instance;

    beforeEach(() => {
      instance = new LottoManageModel();
      instance.setWinningNumbers(winningNumbers);
    });

    test('성공', () => {
      const bonusNumber = 7;

      instance.setBonusNumber(bonusNumber);

      expect(instance.getBonusNumber()).toEqual(bonusNumber);
    });

    test('실패 - 보너스 번호가 당첨 번호와 중복시', () => {
      const bonusNumber = 1;

      const callback = () => {
        instance.setBonusNumber(bonusNumber);
      };

      expect(callback).toThrow('[ERROR]');
      expect(callback).toThrow(ERROR_MESSAGE.bonus_number_duplicate);
    });

    test('실패 - 보너스 번호가 1~45가 아닐 경우', () => {
      const bonusNumber = 46;

      const callback = () => {
        instance.setBonusNumber(bonusNumber);
      };

      expect(callback).toThrow('[ERROR]');
      expect(callback).toThrow(ERROR_MESSAGE.numbers_range);
    });
  });

  test('로또 번호와 당첨 번호를 비교하여 일치하는 개수 반환', () => {
    const instance = new LottoManageModel();
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 9, 10],
      [1, 2, 3, 11, 12, 13],
      [1, 2, 14, 15, 16, 17],
      [1, 18, 19, 20, 21, 22],
      [23, 24, 25, 26, 27, 28],
    ];

    const result = [
      [6, 0],
      [5, 1],
      [5, 0],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
    ];

    instance.setWinningNumbers(winningNumbers);
    instance.setBonusNumber(bonusNumber);

    const matchCountByLottos = lottos.map((lotto) =>
      instance.returnMatchCountByLotto(lotto),
    );

    expect(matchCountByLottos).toEqual(result);
  });
});
