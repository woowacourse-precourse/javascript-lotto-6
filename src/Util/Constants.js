export default class Constants {
  static input = {
    askAmount: "구입금액을 천 원 단위로 입력해 주세요.\n",

    numbers:
      "여섯 자리의 당첨 번호를 입력해 주세요.\n번호는 1~45 사이에서 선택 후 쉼표로 구분해주세요.\n",

    bonus: "보너스 번호를 입력해 주세요.\n",
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
}
