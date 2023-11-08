const ERROR_MESSAGE = Object.freeze({
    NOT_NUMBER : '[ERROR] 숫자가 잘못된 형식입니다.',
    MIN_PRICE : '[ERROR] 로또 최소 구입 금액은 1000원입니다.',
    THOUSAND_UNIT : '[ERROR] 금액은 1,000원 단위로 입력해주세요.',
    NUMBER_EMPTY : '[ERROR] 숫자를 입력하세요.',
    RANGE_BONUS : '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    LOTTO_EMPTY : '[ERROR] 당첨 번호를 입력하세요.',
    SIX_NUMBERS : '[ERROR] 당첨 번호는 6개여야 합니다.',
    LOTTO_RANGE : '[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
    SAME_NUMBERS : '[ERROR] 중복되지 않는 숫자를 입력하세요.',
});

const PRINT_MESSAGE = Object.freeze({
    PURCHASE : (amount) => `${amount}개를 구매했습니다.`,
    MATCH_STATS : '당첨 통계\n',
    LINE : '---\n',
    THREE_MATCHES : (match) => `3개 일치 (5,000원) - ${match}개\n`,
    FOUR_MATCHES : (match) => `4개 일치 (50,000원) - ${match}개\n`,
    FIVE_MATCHES : (match) => `5개 일치 (1,500,000원) - ${match}개\n`,
    FIVE_BONUS : (match) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${match}개\n`,
    SIX_MATCHES : (match) => `6개 일치 (2,000,000,000원) - ${match}개\n`,
    TOTAL_RATE : (rate) => `총 수익률은 ${rate}%입니다.\n`,
});

const INPUT_MESSAGE = ({
    PRICE : '구입 금액을 입력해 주세요.\n',
    MATCH_NUMBERS : '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER : '보너스 번호를 입력해 주세요.\n',
});

export {ERROR_MESSAGE, PRINT_MESSAGE, INPUT_MESSAGE};
