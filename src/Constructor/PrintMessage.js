// import SETTING from "./Setting.js";

const PRINT_MESSAGE = Object.freeze({
  RESULT: Object.freeze({
    TITLE: "당첨 통계\n" + "---\n",
    NUMBER: ({ matched, prize, count }) =>
      `${matched}개 일치 (${prize.toLocaleString()}원) - ${count}개\n`,
    BONUS: ({ matched, prize, count }) =>
      `${matched}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${count}개\n`,
  }),
  BUY: (count, ticketList) => {
    return (
      `${count}개를 구매했습니다.\n` +
      ticketList.map((ticket) => `[${ticket.join(", ")}]`).join("\n")
    );
  },
});

export default PRINT_MESSAGE;
