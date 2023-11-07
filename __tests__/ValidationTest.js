import ErrorMessage from "../src/domain/errors/ErrorMessage";
import { validateNumber } from "../src/domain/validator/InputValidator";

describe ('Number Validation', () => {
  test('숫자가 아닌 문자를 입력', () => {
    expect(() => {
      validateNumber("string");
    }).toThrow(ErrorMessage);
  });

});