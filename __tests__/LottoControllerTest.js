import LottoController from "../src/LottoController.js";
import PRICE from "../src/constant/PRICE.js";

const createLottoFunc = () => {
  return 1;
};

describe("로또 컨트롤러 클래스 테스트", () => {
  test("사용자가 입력한 구입 금액이 숫자 외의 문자로 이루어졌다면 예외가 발생한다", () => {
    const totalPrice = "1000o0";
    expect(() => {
      new LottoController(totalPrice, createLottoFunc);
    }).toThrow(PRICE.ERROR.NOT_NUMBER);
  });

  test("사용자가 입력한 구입 금액이 0으로 시작하면 예외가 발생한다", () => {
    const totalPrice = "015000";
    expect(() => {
      new LottoController(totalPrice, createLottoFunc);
    }).toThrow(PRICE.ERROR.START_WITH_ZERO);
  });

  test("사용자가 입력한 구입 금액이 티켓 구입 가격인 1000 단위가 아니라면 예외가 발생한다", () => {
    const totalPrice = "10010";
    expect(() => {
      new LottoController(totalPrice, createLottoFunc);
    }).toThrow(PRICE.ERROR.NOT_DIVISIBLE_BY_TICKET);
  });

  test.each([["10000"], ["15000"]])(
    "사용자가 입력한 구입 금액의 티켓 장수만큼 로또 티켓을 발행한다 - %s원",
    (money) => {
      const lottoController = new LottoController(money, createLottoFunc);
      expect(lottoController.lottoArray.length).toBe(+money / PRICE.TICKET);
    }
  );
});
