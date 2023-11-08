/**
 * 메시지를 모아둔 상수 객체
 */
const MESSAGES = Object.freeze({
    PUT_MONEY: "구입금액을 입력해 주세요.",
    PURCHASED: "개를 구매했습니다.",
    PUT_NUMBER: "당첨 번호를 입력해 주세요.",
    PUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
    WINNING_LOTTERY_NUMBER: "당첨 통계---",
    THREE_NUMBER_MATCH: "3개 일치 (5,000원) - ",
    FOUR_NUMBER_MATCH: "4개 일치 (50,000원) - ",
    FIVE_NUMBER_MATCH: "5개 일치 (1,500,000원) - ",
    FIVE_NUMBER_BONUS_MATCH: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    SIX_NUMBER_MATCH: "6개 일치 (2,000,000,000원) - ",
    COUNT: "개",
    EARNINGS_RATE: "총 수익률은 ",
});

export default MESSAGES;

// 궁금한 점 : 문장과 문장 사이에 변화하는 숫자가 들어갈 때, 메시지 오브젝트를 어떤식으로 정리하는지?
// ex. 총 수익률은 (변화하는 숫자)입니다.
