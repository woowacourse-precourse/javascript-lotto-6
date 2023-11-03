import { MESSAGES } from "../../src/constants";
import { LottoSeller } from "../../src/domain";
import { CustomError } from "../../src/exception";

const LOTTO_PRICE = 1000;

describe("LottoSeller 유닛 테스트", () => {
  let lottoSeller;

  beforeEach(() => {
    lottoSeller = new LottoSeller(LOTTO_PRICE);
  });

  test("로또 판매자 인스턴스 생성", () => {
    expect(lottoSeller).toBeInstanceOf(LottoSeller);
  });

  describe("로또 가격 유효성 검증", () => {
    const { NOT_NUMBER, NOT_POSITIVE, NOT_INTEGER } = MESSAGES.ERROR.COMMON;
    const validLottoPrice = [[1000], [2000], [5000]];
    const inValidLottoPricesAndErrorMessages = [
      ["오천냥", NOT_NUMBER],
      [-1000, NOT_POSITIVE],
      [1000.15, NOT_INTEGER],
    ];

    test.each(validLottoPrice)("올바른 케이스", (lottoPrice) => {
      expect(() => new LottoSeller(lottoPrice)).not.toThrow();
    });

    test.each(inValidLottoPricesAndErrorMessages)(
      "틀린 케이스",
      (lottoPrice, errorMessage) => {
        expect(() => new LottoSeller(lottoPrice)).toThrow(
          new CustomError(errorMessage)
        );
      }
    );
  });

  describe("지불한 금액 유효성 검증", () => {
    // given
    const { NOT_NUMBER, NOT_POSITIVE, NOT_MULTIPLE_OF } = MESSAGES.ERROR.BUY;
    const validPaidAmounts = [[10000, 15000, 20000]];
    const inValidPaidAmountsAndErrorMessages = [
      ["오천냥", NOT_NUMBER],
      [-1000, NOT_POSITIVE],
      [1000.15, NOT_MULTIPLE_OF(LOTTO_PRICE)],
      [1500, NOT_MULTIPLE_OF(LOTTO_PRICE)],
    ];

    test.each(validPaidAmounts)("올바른 케이스", (paidAmount) => {
      expect(() => lottoSeller.sellLotto(paidAmount)).not.toThrow();
    });

    test.each(inValidPaidAmountsAndErrorMessages)(
      "틀린 케이스",
      (paidAmount, errorMessage) => {
        expect(() => lottoSeller.sellLotto(paidAmount)).toThrow(
          new CustomError(errorMessage)
        );
      }
    );
  });
});
