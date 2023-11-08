import { LOTTO_SETTINGS, LottoSettings } from "../../src/config/gameSetting";

describe("LottoSettings 클래스 테스트", () => {
  const setting = new LottoSettings();

  test("등수로 그 등수의 상금을 리턴해야한다.", () => {
    const prize = setting.getPrizeForRank("FIFTH_PRIZE");

    expect(prize).toBe(5000);
  });

  test("등수로 그 등수의 번호 일치 갯수를 리턴해야한다.", () => {
    const matchNum = setting.getMatchNumberForRank("FIRST_PRIZE");

    expect(matchNum).toBe(6);
  });

  test("LOTTO_SETTINGS에서 2등을 뜻하는 상수명을 리턴해야한다.", () => {
    const secondPrizeRank = setting.getSecondPrizeRank();

    expect(secondPrizeRank).toBe("SECOND_PRIZE");
  });

  test("1등부터 5등까지 모든 등수의 상금과 숫자 일치갯수를 리턴해야한다.", () => {
    const prizes = setting.getAllPrizeDetails();
    expect(prizes).toEqual({
      FIFTH_PRIZE: { prize: 5000, matchNum: 3 },
      FOURTH_PRIZE: { prize: 50000, matchNum: 4 },
      THIRD_PRIZE: { prize: 1500000, matchNum: 5 },
      SECOND_PRIZE: { prize: 30000000, matchNum: 5 },
      FIRST_PRIZE: { prize: 2000000000, matchNum: 6 },
    });
  });

  test("로또 숫자 범위를 리턴해야한다.", () => {
    const numberRange = setting.getLottoNumberRange();

    expect(numberRange).toEqual({
      minOfLottoNumberRange: 1,
      maxOfLottoNumberRange: 45,
    });
  });

  test("로또 당 번호 갯수를 리턴해야한다.", () => {
    const numberPerLotto = setting.getNumberPerLotto();

    expect(numberPerLotto).toBe(6);
  });

  test("로또 가격을 리턴해야한다.", () => {
    const lottoPrice = setting.getLottoPrice();

    expect(lottoPrice).toBe(1000);
  });

  test("LOTTO_SETTINGS 값을 변경할려 할 때 에러가 발생해야한다.", () => {
    expect(() => (LOTTO_SETTINGS.NUMBERS_PER_TICKET = 8)).toThrow();
  });
});
