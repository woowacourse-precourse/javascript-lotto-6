import Prize from '../../src/Domain/Prize';
import PRIZE from '../../src/constants/prize';

describe('Prize 클래스 테스트', () => {
  // 각 당첨 등수에 대한 상금 정보
  const matchSix = PRIZE[6];
  const matchFiveWithBonus = PRIZE.matchFiveAndBonus;
  const matchFive = PRIZE[5];
  const matchFour = PRIZE[4];
  const matchThree = PRIZE[3];

  describe('getPrize 메서드는 matchCount와 matchBonus를 입력받아 상금(Prize)에 대한 정보를 반환한다. ', () => {
    const cases = [
      {
        matchCount: 3,
        matchBonus: false,
        expected: matchThree,
      },
      {
        matchCount: 3,
        matchBonus: true,
        expected: matchThree,
      },
      {
        matchCount: 4,
        matchBonus: false,
        expected: matchFour,
      },
      {
        matchCount: 4,
        matchBonus: true,
        expected: matchFour,
      },
      {
        matchCount: 5,
        matchBonus: false,
        expected: matchFive,
      },
      {
        matchCount: 5,
        matchBonus: true,
        expected: matchFiveWithBonus,
      },
      {
        matchCount: 6,
        matchBonus: false,
        expected: matchSix,
      },
      {
        matchCount: 6,
        matchBonus: true,
        expected: matchSix,
      },
    ];

    describe('winningPrize 프로퍼티는 상금에 대한 정보를 가지고 있다.', () => {
      test.each(cases)(
        `맞춘 숫자 : $matchCount개 | 보너스번호 : $matchBonus | 상금 : $expected.winningPrize원`,
        ({ matchCount, matchBonus, expected }) => {
          // when
          const { winningPrize } = Prize.getPrize({ matchCount, matchBonus });

          // then
          expect(winningPrize).toBe(expected.winningPrize);
        },
      );
    });

    describe('status 프로퍼티는 PRIZE 상수의 key값을 가지고있다.', () => {
      test.each(cases)(
        `맞춘 숫자 : $matchCount | 보너스 번호 : $matchBonus | 키값 : $expected.status`,
        ({ matchCount, matchBonus }) => {
          // when
          const { status } = Prize.getPrize({ matchCount, matchBonus });

          // then
          expect(PRIZE[status]).toEqual(Prize.prizeMap.get(status));
        },
      );
    });
  });
});
