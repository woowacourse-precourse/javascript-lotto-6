import WinningChecker from "../src/game/WinningChecker";

describe("WinningChecker 클래스 테스트", () => {
  test("WinningChecker 인스턴스 생성", () => {
    const winningChecker = new WinningChecker([1, 2, 3, 4, 5, 6], 7);
    expect(winningChecker).toBeInstanceOf(WinningChecker);
  });

  test("당첨 결과 계산", () => {
    const winningChecker = new WinningChecker([1, 2, 3, 4, 5, 6], 7);

    expect(winningChecker.getWinningResult([1, 2, 3, 4, 5, 6])).toBe("FIRST");
    expect(winningChecker.getWinningResult([1, 2, 3, 4, 5, 7])).toBe("SECOND");
    expect(winningChecker.getWinningResult([1, 2, 3, 4, 5, 8])).toBe("THIRD");
    expect(winningChecker.getWinningResult([1, 2, 3, 4, 7, 8])).toBe("FOURTH");
    expect(winningChecker.getWinningResult([1, 2, 3, 7, 8, 9])).toBe("FIFTH");
    expect(winningChecker.getWinningResult([1, 2, 7, 8, 9, 10])).toBe("NONE");
  });
});
