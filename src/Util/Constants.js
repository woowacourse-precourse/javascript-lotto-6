export default class Constants {
  static input = {
    askAmount: "구입금액을 천 원 단위로 입력해 주세요.\n",

    numbers:
      "여섯 자리의 당첨 번호를 입력해 주세요.\n번호는 1~45 사이에서 선택 후 쉼표로 구분해주세요.\n",

    bonus: "보너스 번호를 입력해 주세요.\n",
  };

  static output = {
    confirmAmount: "개를 구매했습니다.",
  };

  static error = {
    money: "[ERROR] 숫자가 잘못된 형식입니다.",

    nan: "[ERROR] 숫자를 입력해주세요.",

    sixUnits: "[ERROR] 중복되지 않는 여섯 자리의 숫자를 입력해주세요.",

    outOfRange: "[ERROR] 1에서 45 사이의 숫자를 입력해주세요.",

    singleUnit: "[ERROR] 한 자리 숫자를 입력해주세요.",

    duplicate:
      "[ERROR] 이전에 입력한 숫자와 중복되지 않는 숫자를 입력해주세요.",
  };

  static wins = {
    3: "3개 일치 (5,000원) - ",
    4: "4개 일치 (50,000원) - ",
    5: "5개 일치 (1,500,000원) - ",
    5.1: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    6: "6개 일치 (2,000,000,000원) - ",
  };
}
