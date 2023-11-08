export const LOTTO_NUM = Object.freeze({
    MIN_NUMBER: 1,
    MAX_NUMBER: 45,
    LENGTH: 6,
});

export const RANK_DATA = [
    { ranking: 5, standard: { numbers: 3, bonus: false }, prize: 5000 },
    { ranking: 4, standard: { numbers: 4, bonus: false }, prize: 50000 },
    { ranking: 3, standard: { numbers: 5, bonus: false }, prize: 1500000 },
    { ranking: 2, standard: { numbers: 5, bonus: true }, prize: 30000000 },
    { ranking: 1, standard: { numbers: 6, bonus: false }, prize: 2000000000 },
];

export const INPUT_MESSAGE = Object.freeze({
    // 입력받는 메시지
    PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
    // 매개변수를 통하여 반환
    PURCASE_QUANTITY: (count) => `\n${count}개를 구매했습니다.`,
    WINNINGS_RATE: (winningsRate) => `총 수익률은 ${winningsRate}%입니다.`,
    WINNING_RESULT: (numbers, bonus, prize, winningAmount) =>
        `${numbers}개 일치${bonus ? ', 보너스 볼 일치' : ''} (${prize}원) - ${winningAmount}개`,
});

export const ERROR_MESSAGE = Object.freeze({
    UNIT: `[ERROR] 구매 금액은 1000원 단위여야 합니다.`,
    AVAILABILITY: `[ERROR] 구매 금액은 1000원 이상이어야 합니다.`,
    NUMBER_TYPE: `[ERROR] 구매 금액은 1000원 단위로 된 숫자여야 합니다.`,
    LENGTH: `[ERROR] 로또 번호는 ${LOTTO_NUM.LENGTH}개여야 합니다.`,
    RANGE: `[ERROR] 로또 번호는 ${LOTTO_NUM.MIN_NUMBER}부터 ${LOTTO_NUM.MAX_NUMBER} 사이의 숫자여야 합니다.`,
    DUPLICATION: `[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.`,
    INCLUSION: `[ERROR] 보너스 번호는 당첨 번호에 포함되지 않은 숫자여야 합니다.`,
});