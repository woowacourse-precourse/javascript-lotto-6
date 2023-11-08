import { ERROR_MSG } from "../src/constants/constants.js";
import {
  validateLottoPrice,
  validateLottoResult,
  validateBonusNum,
} from "../src/utility/validation.js";

describe("사용자 입력 유효성 검사", () => {
  it("로또 가격이 유효한 경우 오류를 던지지 않아야 한다.", () => {
    expect(() => validateLottoPrice(2000)).not.toThrow();
  });

  it("로또 가격이 유효하지 않은 경우 오류를 던져야 한다.", () => {
    expect(() => validateLottoPrice(1500)).toThrowError(ERROR_MSG.PRICE);
  });

  it("로또 당첨번호가 유효하지 않은 경우 오류를 던져야 한다.", () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => validateLottoResult("invalid", lottoNumbers)).toThrowError(
      ERROR_MSG.NUMBER_ERROR
    );
  });

  it("로또 당첨번호가 범위를 벗어나는 경우 오류를 던져야 한다.", () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => validateLottoResult(46, lottoNumbers)).toThrowError(
      ERROR_MSG.NUMBER_RANGE
    );
  });

  it("보너스 숫자가 유효한 경우 오류를 던지지 않아야 한다.", () => {
    const lottoResult = [1, 2, 3, 4, 5, 6];
    expect(() => validateBonusNum(7, lottoResult)).not.toThrow();
  });

  it("보너스 숫자가 유효하지 않은 경우 오류를 던져야 한다.", () => {
    const lottoResult = [1, 2, 3, 4, 5, 6];
    expect(() => validateBonusNum(1, lottoResult)).toThrowError(
      ERROR_MSG.EXISTING_NUM
    );
  });
});
