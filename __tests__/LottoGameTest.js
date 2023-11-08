import Lotto from "../src/Lotto.js";
import LottoGame from "../src/LottoGame.js";

describe("로또게임 클래스 테스트", () => {
  test("구입금액이 1000 미만이면 예외 발생", () => {
    expect(() => LottoGame.validatePurchaseAmount('-1000')).toThrow("[ERROR]");
  });

  test("구입금액이 문자가 입력되면 예외 발생", () => {
    expect(() => LottoGame.validatePurchaseAmount('wer34')).toThrow("[ERROR]");
  });

  test("구입금액이 1000원 단위가 아닌 경우 예외 발생", () => {
    expect(() => LottoGame.validatePurchaseAmount('10001')).toThrow("[ERROR]");
  });

  test("로또 번호 사이에 공백이 있는 경우 공백 제거", () => {
    expect(LottoGame.winningNumberToWinningNumberArray('1,2,3,4, 5,6')).toEqual([1,2,3,4,5,6]);
  });

  test('보너스 번호에 1~45 정수 이외의 문자인 경우 예외 발생', () => {
    expect(() => LottoGame.validateBonusNumber('0.8', [1,2,3,4,5,6])).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호에 중복 시 예외 발생', () => {
    expect(() => LottoGame.validateBonusNumber('1', [1,2,3,4,5,6])).toThrow('[ERROR]');
  });

  test('당첨 번호와 랜덤 번호와 count', () => {
    const tickets = [new Lotto([1,2,3,4,5,6])]
    expect(LottoGame.calculateResult(23, tickets, [1,2,3,8,9,10])).toEqual([1,0,0,0,0]);
  });

  test('수익률 계산 테스트', () => {
    expect(LottoGame.calculateEarningsRate(8, [1, 0, 0, 0, 0])).toEqual('62.5');
  });
});
