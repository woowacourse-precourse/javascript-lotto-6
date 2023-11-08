export const INPUT_MESSAGES = Object.freeze({
    buyLottoAmount: "구입금액을 입력해 주세요.",
    winningLottoNumbers: "당첨 번호를 입력해주세요.",
    bonusNumber: "보너스 번호를 입력해 주세요."
})

export const ERROR_MESSAGES = Object.freeze({
    prefix: "[ERROR]",
    invalidSingle: "1자리 숫자를 입력해주세요.",
    invalidNumber: "숫자를 입력해주세요.",
    invalidOnlyNumber: "숫자만 입력해주세요.",
    invalidBetweenOneAndFortyFive: "숫자 1부터 45까지 입력해주세요.",
    invalidNotIncludedLottoNumbers: "입력한 로또 번호와 다른 번호를 입력해주세요.",
    invalidNotOverlap: "중복되지 않은 숫자를 입력해주세요.",
    invalidThousandWonUnit: "1000원 단위로 입력해주세요. (예. 1000, 5000, 10000)",
    invalidMoreThousand: "1000원(1장) 이상 입력해주세요.",
})

export const BUY_MESSAGE = (buyAmount) => {
    return `${buyAmount}개를 구매했습니다.`
};