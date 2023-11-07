const INPUT = {
  LOTTO_MONEY: "구입금액을 입력해 주세요.\n",
};

const OUTPUT = {
  BLANK: "",
  LOTTO_TICKETS_COUNT: (ticketNumber) => `${ticketNumber}개를 구매했습니다.`,
};

Object.freeze(INPUT);
Object.freeze(OUTPUT);
export default { INPUT, OUTPUT };
