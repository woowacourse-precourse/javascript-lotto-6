import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  describe("T-2-1 구입 금액에 따른 로또 발행 테스트", () => {
    test("입력받은 금액에 따라 적절한 수의 로또가 발행되어야 한다", () => {
      const amount = 5000;
      const lottos = Lotto.generateMultipleLottos(amount);
      expect(lottos).toHaveLength(amount / 1000);
    });
  });

  describe("T-2-2 로또 번호 중복 없이 생성 테스트", () => {
    test("각 로또 번호는 6개이며 서로 중복되지 않아야 한다", () => {
      const numbers = Lotto.generateNumbers();
      expect(numbers).toHaveLength(6);
      expect(new Set(numbers).size).toBe(6);
    });
  });

  describe("T-2-3 발행한 로또 수량 및 번호 출력 테스트", () => {
    test("발행한 로또 수량과 번호가 콘솔에 출력되어야 한다", () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const lottos = Lotto.generateMultipleLottos(3000);
      Lotto.printLottos(lottos);
      expect(consoleSpy).toHaveBeenCalledWith("3개를 구매했습니다.");
      lottos.forEach(lotto => {
        expect(consoleSpy).toHaveBeenCalledWith(`[${lotto.numbers.join(', ')}]`);
      });
      consoleSpy.mockRestore();
    });
  });
});
