const RESULT_ARRAY = [
    '3개 일치 (5,000원) - ',
    '4개 일치 (50,000원) - ',
    '5개 일치 (1,500,000원) - ',
    '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    '6개 일치 (2,000,000,000원) - '
];

const ERROR = {
    PURCHASE: "[ERROR] 로또 금액은 천원 단위로 숫자만 입력해야 합니다.",
    LOTTO: "[ERROR] 당첨 번호는 중복없이 1~45 사이의 6개의 숫자를 쉼표로 구분하여 입력해야 합니다.",
    BONUS: "[ERROR] 보너스 번호는 1~45 사이의 당첨 번호와 중복되지 않는 번호 1개를 입력해야 합니다.", 
};

const INPUT = {
    MONEY: "구입금액을 입력해 주세요.\n",
    LOTTO: "당첨 번호를 입력해 주세요.\n",
    BONUS: "보너스 번호를 입력해 주세요.\n",
};

const OUTPUT = {
    PURCHASE: (quantity) => `${quantity}개를 구매했습니다.\n`,
    RESULT_TITLE: "당첨 통계\n---\n",
    RETURN: (returns) => `총 수익률은 ${returns}%입니다.\n`,
    LINE: "\n",
};

export { RESULT_ARRAY, ERROR, INPUT, OUTPUT };