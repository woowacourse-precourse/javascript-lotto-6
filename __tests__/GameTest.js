import {
  getMoney,
  makeLottos,
  getWinLottoInput,
  getWinLottoBonusInput,
  validateGetMoney,
  validateWinLottoInput,
  validateWinBonusInput,
  getResult,
  countStatistics,
  getStatistics,
  getEarningRate,
} from "../src/Game.js";

describe("getMoney 테스트", () => {
  test("입력 예외 테스트", async () => {
    expect(() => validateGetMoney("invalid")).toThrow("[ERROR]");
    expect(() => validateGetMoney(500)).toThrow("[ERROR]");
    expect(() => validateGetMoney(1000)).not.toThrow();
  });
});

describe("getWinLottoInput 함수", () => {
  test("입력 예외 테스트", async () => {
    expect(() => validateWinLottoInput([1, 2, 3, 4])).toThrow("[ERROR]");
    expect(() => validateWinLottoInput([1, 1, 2, 3, 4, 5])).toThrow("[ERROR]");
    expect(() => validateWinLottoInput([1, 2, 3, 4, 5, 46])).toThrow("[ERROR]");
    expect(() => validateWinLottoInput([1, 2, 3, 4, 5, "a"])).toThrow(
      "[ERROR]"
    );
    expect(() => validateWinLottoInput([1, 2, 3, 4, 5, 6])).not.toThrow();
  });
});

describe("getWinLottoBonusInput 함수", () => {
  test("입력 에외 테스트", async () => {
    expect(() => validateWinBonusInput([1, 2, 3, 4, 5, 6], 1)).toThrow(
      "[ERROR]"
    );
    expect(() => validateWinBonusInput([1, 2, 3, 4, 5, 6], "7")).not.toThrow(
      "[ERROR]"
    );
  });
});

describe("getResult 함수", () => {
  test("GetResult - 리턴값 확인", () => {
    const lottos = []; // Lotto 객체의 배열
    // Lotto 객체의 인스턴스 생성
    const lotto1 = { getCorrectNumberCount: () => [1, 0] }; // 임의의 getCorrectNumberCount 메서드 결과 값 설정
    const lotto2 = { getCorrectNumberCount: () => [0, 0] }; // 임의의 getCorrectNumberCount 메서드 결과 값 설정
    // Lotto 객체의 인스턴스를 배열에 추가
    lottos.push(lotto1, lotto2);

    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = getResult(lottos, numbers, bonusNumber);

    expect(result).toEqual([0, 0, 0, 0, 0]);
  });
  test("GetResult - 리턴값 확인 2", () => {
    const lottos = []; // Lotto 객체의 배열
    // Lotto 객체의 인스턴스 생성
    const lotto1 = { getCorrectNumberCount: () => [6, 0] }; // 임의의 getCorrectNumberCount 메서드 결과 값 설정
    const lotto2 = { getCorrectNumberCount: () => [0, 0] }; // 임의의 getCorrectNumberCount 메서드 결과 값 설정
    // Lotto 객체의 인스턴스를 배열에 추가
    lottos.push(lotto1, lotto2);

    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = getResult(lottos, numbers, bonusNumber);

    expect(result).toEqual([1, 0, 0, 0, 0]);
  });
});

describe("countStatistics 함수", () => {
  test("CountStatistics - 정확히 계산 되는지 확인", () => {
    const totalStatistics = [0, 0, 0, 0, 0];
    const lottoResult = [6, 0];
    countStatistics(lottoResult, totalStatistics);
    expect(totalStatistics).toEqual([1, 0, 0, 0, 0]);
  });
});

describe("getStatistics function", () => {
  test("GetStatistics - returns correct statistics string", () => {
    const money = 8000;
    const totalStatistics = [0, 0, 0, 0, 1];
    const mockPrint = jest.spyOn(console, "log");

    getStatistics(money, totalStatistics);

    // 콘솔 출력이 맞는지 검증
    expect(mockPrint).toHaveBeenNthCalledWith(1, "\n당첨 통계");
    expect(mockPrint).toHaveBeenNthCalledWith(2, "---");
    expect(mockPrint).toHaveBeenNthCalledWith(3, "3개 일치 (5,000원) - 1개");
    expect(mockPrint).toHaveBeenNthCalledWith(4, "4개 일치 (50,000원) - 0개");
    expect(mockPrint).toHaveBeenNthCalledWith(
      5,
      "5개 일치 (1,500,000원) - 0개"
    );
    expect(mockPrint).toHaveBeenNthCalledWith(
      6,
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개"
    );
    expect(mockPrint).toHaveBeenNthCalledWith(
      7,
      "6개 일치 (2,000,000,000원) - 0개"
    );
    expect(mockPrint).toHaveBeenNthCalledWith(8, "총 수익률은 62.5%입니다.");
  });
});

describe("getEarningRate 함수", () => {
  test("정확한 수익률을 내는지 테스트", () => {
    const money = 5_000;
    const totalStatistics = [1, 0, 0, 0, 0]; // Example statistics
    const earningRate = getEarningRate(money, totalStatistics);
    expect(earningRate).toBe("40000000.0");
  });
});
