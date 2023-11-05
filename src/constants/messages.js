const MATCH = {
    THREE: "3개 일치",
    FOUR: "4개 일치",
    FIVE: "5개 일치",
    FIVE_BONUS: "5개 일치, 보너스 볼 일치",
    SIX: "6개 일치",
};

const MATCH_ARRAY = [
    MATCH.SIX,
    MATCH.FIVE_BONUS,
    MATCH.FIVE,
    MATCH.FOUR,
    MATCH.THREE,
];

const ERROR = {
    AMOUNT_NUMBER: "[ERROR] 로또 금액은 숫자만 입력해야 합니다.",
    AMOUNT_UNIT: "[ERROR] 로또 금액은 천원 단위로 입력해야 합니다.",
    LOTTO_LENGTH: "[ERROR] 당첨 번호는 6개를 입력해야 합니다.",
    LOTTO_RANGE: "[ERROR] 당첨 번호는 1~45 사이의 번호만 입력해야 합니다.",
    LOTTO_DIVISION: "[ERROR] 당첨 번호 사이에 쉼표만 입력해야 합니다.",
    LOTTO_DUPILICATE: "[ERROR] 당첨 번호는 중복되지 않아야 합니다.",
    BONUS_RANGE: "[ERROR] 보너스 번호는 1~45 사이의 번호만 입력해야 합니다.", 
    BONUS_DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
    BONUS_INCLUDE: "[ERROR] 보너스 번호에 문자가 포함되지 않아야 합니다.",
};

const INPUT = {
    MONEY: "구입금액을 입력해 주세요.\n",
    LOTTO: "당첨 번호를 입력해 주세요.\n",
    BONUS: "보너스 번호를 입력해 주세요.\n",
};

const OUTPUT = {
    PURCHASE: (quantity) => `${quantity}개를 구매했습니다.`,
    RESULT_TITLE: "당첨 통계\n---",
    RESULT: (match, reward, quantity) => `${match} (${reward}원) - ${quantity}개`,
    RETURN: (returns) => `총 수익률은 ${returns}%입니다.`,
    LINE: "\n",
};

export { MATCH, MATCH_ARRAY, ERROR, INPUT, OUTPUT };