export const Message = {
  INIT: "구입금액을 입력해 주세요.",
  LOTTOINPUT: "당첨 번호를 입력해 주세요.\n",
  BONUSINPUT: "보너스 번호를 입력해 주세요.\n",
  END: "\n당첨 통계\n---\n",
};

export const ErrorMessage = {
  WRONGTYPE: "[ERROR] 숫자가 잘못된 형식입니다.",
  WRONGMONEY: "[ERROR] 0원 이상의 돈을 입력하세요",
  WRONGWON: "[ERROR] 1000원 단위가 아닙니다.",
  WRONGRANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  ISDUPLICATE: "[ERROR] 중복된 번호가 있습니다.",
  WRONGBONUS: "[ERROR] 보너스숫자가 1개가 아닙니다.",
  WRONGSIX: "[ERROR]6개만 입력",
};

export const FIRST_PRIZE = 2000000000;
export const SECOND_PRIZE = 30000000;
export const THIRD_PRIZE = 1500000;
export const FOURTH_PRIZE = 50000;
export const FIFTH_PRIZE = 5000;

export const PRIZE = [
  "3개 일치 (5,000원) - ",
  "4개 일치 (50,000원) - ",
  "5개 일치 (1,500,000원) - ",
  "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  "6개 일치 (2,000,000,000원) - ",
];
