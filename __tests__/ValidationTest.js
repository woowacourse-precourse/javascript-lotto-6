import ValidateInput from "../src/utils/ValidateInput.js";

describe("입력 유효성 검사 테스트", () => {
  // 구입 금액
  test("구입 금액이 자연수가 아니면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateAmount("A");
    }).toThrow("[ERROR] 구입 금액은 자연수로 입력해주세요.\n");
  });

  test("구입 금액이 1000보다 작으면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateAmount(500);
    }).toThrow("[ERROR] 구입금액은 최소 1000원부터 가능합니다.\n");
  });

  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateAmount(2500);
    }).toThrow("[ERROR] 구입금액은 1,000원 단위만 가능합니다.\n");
  });

  // 당첨번호
  test("당첨번호가 6개가 아니면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateWinningNumber([1, 2, 3, 4]);
    }).toThrow("[ERROR] 당첨 번호는 쉼표(,)로 구분하여 6개 입력해주세요.\n");
    expect(() => {
      ValidateInput.validateWinningNumber([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 당첨 번호는 쉼표(,)로 구분하여 6개 입력해주세요.\n");
  });

  test("당첨번호 중 중복된 값이 존재하면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateWinningNumber([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 번호들 중 중복된 값이 존재합니다.\n");
  });

  test("당첨번호가 자연수가 아니면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateWinningNumber([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR] 당첨 번호는 자연수로 입력해주세요.\n");

    expect(() => {
      ValidateInput.validateWinningNumber([1, 2, 3, 4, 5, 7.1]);
    }).toThrow("[ERROR] 당첨 번호는 자연수로 입력해주세요.\n");

    expect(() => {
      ValidateInput.validateWinningNumber([-1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 당첨 번호는 자연수로 입력해주세요.\n");
  });

  test("당첨번호가 1부터 45사이의 값이 아니면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateWinningNumber([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 당첨 번호는 1부터 45사이의 값을 입력해주세요.\n");
  });

  // 보너스 번호
  test("보너스 번호 중 당첨번호와 중복된 값이 존재하면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateBonusNumber(7, [1, 7, 8, 9, 10]);
    }).toThrow(
      "[ERROR] 당첨 번호들 중 보너스 번호와 중복된 값이 존재합니다.\n",
    );
  });

  test("보너스 번호가 자연수가 아니면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateBonusNumber("a");
    }).toThrow("[ERROR] 보너스 번호는 자연수로 입력해주세요.\n");

    expect(() => {
      ValidateInput.validateBonusNumber(7.1);
    }).toThrow("[ERROR] 보너스 번호는 자연수로 입력해주세요.\n");

    expect(() => {
      ValidateInput.validateBonusNumber(-1);
    }).toThrow("[ERROR] 보너스 번호는 자연수로 입력해주세요.\n");
  });

  test("보너스 번호가 1부터 45사이의 값이 아니면 예외가 발생한다", () => {
    expect(() => {
      ValidateInput.validateBonusNumber(46);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45사이의 값을 입력해주세요.\n");
  });
});
