import { ValanceTypeError } from "../../src/error/Errors";
import Validator from "../../src/utils/Validator"

describe('구입 금액 유효성 검사 테스트', () => {
  test.each(
    ['오백원', '0', '400', '3578', '-2000']
    )('1000의 배수인 자연수가 아닌 경우, ValanceTypeError을 반환한다.', (input) => {
      const result = () => Validator.isValidValance(input);

      expect(result).toThrowError(ValanceTypeError);
  });
});
