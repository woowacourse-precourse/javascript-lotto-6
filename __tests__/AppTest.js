import App from "../src/App.js";

describe('App', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test('validateMoney should throw an error for invalid input', () => {
    expect(() => app.validateMoney('invalid_input')).toThrowError(
      "[ERROR] 구입 금액은 쉼표를 제외한 1,000원 단위의 수로만 입력할 수 있습니다."
    );

    expect(() => app.validateMoney(1500)).toThrowError(
      "[ERROR] 구입 금액은 1,000원 단위의 수로만 입력할 수 있습니다."
    );
  });

  test('validateBonus should throw an error for invalid input', () => {
    expect(() => app.validateBonus('invalid_input')).toThrowError(
      "[ERROR] 보너스 번호는 1에서 45사이의 자연수여야 합니다."
    );

    expect(() => app.validateBonus(46)).toThrowError(
      "[ERROR] 보너스 번호는 1에서 45사이의 자연수여야 합니다."
    );

    expect(() => app.validateBonus(0)).toThrowError(
      "[ERROR] 보너스 번호는 1에서 45사이의 자연수여야 합니다."
    );

    expect(() => app.validateBonus('invalid_length')).toThrowError(
      "[ERROR] 보너스 번호는 1에서 45사이의 자연수여야 합니다."
    );
  });

});