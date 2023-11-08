export const LOTTO = {
    UNIT: 1000,
    LENGTH: 6,
    MIN_RANGE: 1,
    MAX_RANGE: 45,
    
    FIFTH_PRIZE: 5000,
    FOURTH_PRIZE: 50000,
    THIRD_PRIZE: 1500000,
    SECOND_PRIZE: 30000000,
    FIRST_PRIZE: 2000000000,
}

export const INPUT_MSG = {
    PURCHASE: '구입금액을 입력해 주세요.\n',
    WINNING_NUM: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUM: '보너스 번호를 입력해 주세요.\n',
}

export const OUTPUT_MSG = {
    PURCHASE: (ea) => `${ea}개를 구매했습니다.\n`,

    TOTAL_WIN: '당첨 통계\n---\n',
    FIFTH: '3개 일치 (5,000원) - ',
    FOURTH: '4개 일치 (50,000원) - ',
    THIRD: '5개 일치 (1,500,000원) - ',
    SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    FIRST: '6개 일치 (2,000,000,000원) - ',
    EA: '개\n',

    TOTAL_RETURN: (rate) => `총 수익률은 ${rate}%입니다.\n`,
}

export const ERROR_MSG = {
    INPUT_NAN: '[ERROR] 입력된 숫자가 잘못된 형식입니다.',
    NUM_UNIT: '[ERROR] 1,000원 단위로만 입력 가능합니다.',
    NUM_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    NUM_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    NUM_DUPE: '[ERROR] 중복된 숫자는 입력할 수 없습니다.',
};