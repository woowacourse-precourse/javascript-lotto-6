import { MissionUtils } from '@woowacourse/mission-utils';
import Player from '../src/model/Player';
import { PRIZE_TABLE } from '../src/constants/lotto';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

describe('로또 플레이어 클래스 테스트', () => {
  test.each([[600], [1500], [0]])(
    '1000원 단위가 아닌 금액이 예산으로 들어올 때 예외가 발생한다.',
    (budget) => {
      expect(() => {
        new Player(budget);
      }).toThrow('[ERROR]');
    }
  );

  test.each([
    [6000, 6],
    [8000, 8],
    [10000, 10],
  ])('플레이어는 예산만큼 로또를 구매한다.', (budget, amountOfLottos) => {
    const player = new Player(budget);
    player.buyLottos();

    expect(player.getNumOfLottos()).toEqual(amountOfLottos);
  });

  test.each([
    [
      [1, 2, 3, 4, 5, 6],
      7,
      [[1, 2, 3, 4, 5, 6]],
      {
        '1등': 1,
        '2등': 0,
        '3등': 0,
        '4등': 0,
        '5등': 0,
      },
    ],
    [
      [1, 2, 3, 4, 5, 6],
      8,
      [[1, 2, 3, 4, 5, 8]],
      {
        '1등': 0,
        '2등': 1,
        '3등': 0,
        '4등': 0,
        '5등': 0,
      },
    ],
    [
      [1, 2, 3, 4, 5, 6],
      9,
      [[1, 2, 3, 4, 5, 8]],
      {
        '1등': 0,
        '2등': 0,
        '3등': 1,
        '4등': 0,
        '5등': 0,
      },
    ],
    [
      [1, 2, 3, 4, 5, 6],
      15,
      [[1, 2, 3, 4, 9, 10]],
      {
        '1등': 0,
        '2등': 0,
        '3등': 0,
        '4등': 1,
        '5등': 0,
      },
    ],
  ])(
    '플레이어는 로또를 채점한다.',
    (winningNumbers, bonusNumber, mockedRandomNumber, expectedScoreBoard) => {
      mockRandoms(mockedRandomNumber);

      const player = new Player(1000);
      player.buyLottos();
      expect(player.getNumOfLottos()).toEqual(1);

      expect(
        player.checkLottos(winningNumbers, bonusNumber).getScoreCard()
      ).toEqual(expectedScoreBoard);
    }
  );

  test.each([
    [[1, 2, 3, 4, 5, 6], 7, [[1, 2, 3, 4, 5, 6]], PRIZE_TABLE['1등']],
    [[1, 2, 3, 4, 5, 6], 8, [[1, 2, 3, 4, 5, 8]], PRIZE_TABLE['2등']],
    [[1, 2, 3, 4, 5, 6], 9, [[1, 2, 3, 4, 5, 8]], PRIZE_TABLE['3등']],
    [[1, 2, 3, 4, 5, 6], 15, [[1, 2, 3, 4, 9, 10]], PRIZE_TABLE['4등']],
  ])(
    '플레이어는 맞은 로또만큼 당첨금액을 지급받는다.',
    (winningNumbers, bonusNumber, mockedRandomNumber, prize) => {
      mockRandoms(mockedRandomNumber);

      const player = new Player(1000);
      player.buyLottos();
      expect(player.getNumOfLottos()).toEqual(1);

      expect(
        player.checkLottos(winningNumbers, bonusNumber).getPrize()
      ).toEqual(prize);
    }
  );
});
