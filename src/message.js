const ERROR_MESSAGE = Object.freeze({
    NOT_NUMBER : '[ERROR] 숫자가 잘못된 형식입니다.',
    MIN_PRICE : '[ERROR] 로또 최소 구입 금액은 1000원입니다.',
    THOUSAND_UNIT : '[ERROR] 금액은 1,000원 단위로 입력해주세요.',
    EMPTY : '[ERROR] 숫자를 입력하세요.',
    RANGE_BONUS : '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
});

const PRINT_MESSAGE = Object.freeze({
    PURCHASE : (amount) => `${this.lottoTicket}개를 구매했습니다.`,
    MATCH_STATS : '당첨 통계\n',
    LINE : '---\n',
    THREE_MATCHES : (match) => `3개 일치 (5,000원) - ${lottoResult[0]}개\n`,
    FOUR_MATCHES : (match) => `4개 일치 (50,000원) - ${lottoResult[1]}개\n`,
    FIVE_MATCHES : (match) => `5개 일치 (1,500,000원) - ${lottoResult[2]}개\n`,
    FIVE_BONUS : (match) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult[3]}개\n`,
    SIX_MATCHES : (match) => `6개 일치 (2,000,000,000원) - ${lottoResult[4]}개\n`,
    TOTAL_RATE : (rate) => `총 수익률은 ${lottoRate}%입니다.\n`,
});

export {ERROR_MESSAGE, PRINT_MESSAGE};