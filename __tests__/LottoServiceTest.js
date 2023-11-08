import { MissionUtils } from "@woowacourse/mission-utils";
import LottoService from "../src/LottoService.js";
import Lotto from "../src/LottoService.js";

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
  };

  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

describe("로또 클래스 테스트", () => {
  test("buyLotto를 호출했을 때 amount 만큼 db에 Lotto 인스턴스가 추가된다.", () => {
    


    const lottoService = new LottoService();

    mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],

      ]);

    lottoService.buyLotto(5000);
    
    
    expect(lottoService.db.map(lotto=>lotto.toString())).toStrictEqual([
        "[8, 21, 23, 41, 42, 43]",
        "[3, 5, 11, 16, 32, 38]",
        "[7, 11, 16, 35, 36, 44]",
        "[1, 8, 11, 31, 41, 42]",
        "[13, 14, 16, 38, 42, 45]",
      ])
  });

  test("getResult 테스트", () => {
    

    const lottoService = new LottoService();

    mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 2, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],

      ]);

    lottoService.buyLotto(5000);
    lottoService.setNumber([8,21,23,41,42,44])
    lottoService.setBonusNumber(43)
    const result = lottoService.getResult();
    
    expect(result).toStrictEqual([[0,0,0,0,0,0,0,1], 300000000])
  });

  test("printResult 테스트", () => {
    
    const logSpy = getLogSpy();
    const lottoService = new LottoService();
    lottoService.printRateOfReturn(8000,5000)

    expect(logSpy).toHaveBeenCalledWith(`총 수익률은 62.5%입니다.`)
  });

  // 아래에 추가 테스트 작성 가능
});
