import LottoController from "../src/LottoController.js";
import LOTTO_CONTROLLER from "../src/constant/LOTTO_CONTROLLER.js";

describe("로또 컨트롤러 클래스 테스트", () => {
  test("사용자가 입력한 구입 금액이 숫자 외의 문자로 이루어졌다면 예외가 발생한다", () => {
    const totalPrice = "1000o0";
    expect(() => {
      new LottoController(totalPrice);
    }).toThrow(LOTTO_CONTROLLER.ERROR.PRICE_NOT_NUMBER);
  });

  test("사용자가 입력한 구입 금액이 티켓 구입 가격인 1000 단위가 아니라면 예외가 발생한다", () => {
    const totalPrice = "10010";
    expect(() => {
      new LottoController(totalPrice);
    }).toThrow(LOTTO_CONTROLLER.ERROR.PRICE_NOT_DIVISIBLE);
  });
});
