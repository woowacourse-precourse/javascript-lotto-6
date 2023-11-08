export const INPUT_MESSAGE = {
    inputPurchaseAmount : "구입 금액을 입력해 주세요.\n",
    inputWinningNumbers : "\n당첨 번호를 입력해 주세요.\n",
    inputBonusNumber : "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGE = {
    printPurchaseNumber : (count) => `\n${count}개 구매했습니다.`,
    printWinningStatistics : "\n당첨 통계\n---",
    printFifth : (count) => `3개 일치 (5,000원) - ${count}개`,
    printFourth : (count) => `4개 일치 (50,000원) - ${count}개`,
    printThird : (count) => `5개 일치 (1,500,000원) - ${count}개`,
    printSecond : (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    printFirst : (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
    printRateReturn : (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const ERROR_MESSAGE = {
    purchaseError : "[ERROR] 구입 금액은 1000으로 나누어 떨어지는 수 입니다.",
    purchaseRangeError : "[ERROR] 구입 금액 범위는 양수인 정수입니다.",
    lottoLengthError : "[ERROR] 로또 번호는 6개여야 합니다.",
    lottoDuplicatedError : "[ERROR] 로또 번호는 중복될 수 없습니다.",
    lottoRangeError : "[ERROR] 로또 번호의 범위는 1~45 폐구간 입니다.",
    lottoTypeError : "[ERROR] 로또 번호는 자연수입니다.",
    bonusLengthError : "[ERROR] 보너스 번호는 1개여야 합니다.",
};