import RankItem from '../src/RankItem.js';

describe('RankItem 클래스 테스트', () => {
  test('1등 당첨됐다면 1등 당첨금을 받는다.', () => {
    // given
    const FIRST_RANKITEM = {
      RANKING: 1,
      STANDARD: {
        numbers: 6,
        bonus: false,
      },
      PRIZE: 2000000000,
    };

    const { numbers, bonus } = FIRST_RANKITEM.STANDARD;

    const rankItem = new RankItem(
      FIRST_RANKITEM.RANKING,
      FIRST_RANKITEM.STANDARD,
      FIRST_RANKITEM.PRIZE
    );

    // when
    rankItem.win(numbers, bonus);

    // then
    expect(rankItem.getWinnings()).toBe(FIRST_RANKITEM.PRIZE);
  });

  test('2등 당첨됐다면 2등 당첨금을 받는다.', () => {
    // given
    const SECOND_RANKITEM = {
      RANKING: 2,
      STANDARD: {
        numbers: 5,
        bonus: true,
      },
      PRIZE: 30000000,
    };

    const rankItem = new RankItem(
      SECOND_RANKITEM.RANKING,
      SECOND_RANKITEM.STANDARD,
      SECOND_RANKITEM.PRIZE
    );

    const { numbers, bonus } = SECOND_RANKITEM.STANDARD;

    // when
    rankItem.win(numbers, bonus);

    // then
    expect(rankItem.getWinnings()).toBe(SECOND_RANKITEM.PRIZE);
  });

  test('3등에 5개 당첨됐다면 3등 당첨금의 5배를 받는다.', () => {
    // given
    const THIRD_RANKITEM = {
      RANKING: 3,
      STANDARD: {
        numbers: 5,
        bonus: false,
      },
      PRIZE: 1500000,
    };

    const rankItem = new RankItem(
      THIRD_RANKITEM.RANKING,
      THIRD_RANKITEM.STANDARD,
      THIRD_RANKITEM.PRIZE
    );

    const { numbers, bonus } = THIRD_RANKITEM.STANDARD;

    // when
    rankItem.win(numbers, bonus);
    rankItem.win(numbers, bonus);
    rankItem.win(numbers, bonus);
    rankItem.win(numbers, bonus);
    rankItem.win(numbers, bonus);

    // then
    expect(rankItem.getWinnings()).toBe(THIRD_RANKITEM.PRIZE * 5);
  });

  test('4등에 2번 당첨됐다면 4등 당첨금의 2배를 받는다.', () => {
    // given
    const FOURTH_RANKITEM = {
      RANKING: 4,
      STANDARD: {
        numbers: 4,
        bonus: false,
      },
      PRIZE: 50000,
    };

    const rankItem = new RankItem(
      FOURTH_RANKITEM.RANKING,
      FOURTH_RANKITEM.STANDARD,
      FOURTH_RANKITEM.PRIZE
    );

    const { numbers, bonus } = FOURTH_RANKITEM.STANDARD;

    // when
    rankItem.win(numbers, bonus);
    rankItem.win(numbers, bonus);

    // then
    expect(rankItem.getWinnings()).toBe(FOURTH_RANKITEM.PRIZE * 2);
  });

  test('5등에 3번 당첨됐다면 5등 당첨금의 3배를 받는다.', () => {
    // given
    const FIFTH_RANKITEM = {
      RANKING: 5,
      STANDARD: {
        numbers: 3,
        bonus: false,
      },
      PRIZE: 5000,
    };

    const rankItem = new RankItem(
      FIFTH_RANKITEM.RANKING,
      FIFTH_RANKITEM.STANDARD,
      FIFTH_RANKITEM.PRIZE
    );

    const { numbers, bonus } = FIFTH_RANKITEM.STANDARD;

    // when
    rankItem.win(numbers, bonus);
    rankItem.win(numbers, bonus);
    rankItem.win(numbers, bonus);

    // then
    expect(rankItem.getWinnings()).toBe(FIFTH_RANKITEM.PRIZE * 3);
  });
});
