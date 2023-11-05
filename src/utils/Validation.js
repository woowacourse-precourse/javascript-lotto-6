export const checkBonus = (lotto, bonusNumber) => (
    lotto.getNumbers().includes(bonusNumber)
);

export const checkBonusNumbers = (bonusNumber, winningNumbers) => {
    if (isNaN(bonusNumber)) {
        throw new Error('보너스 볼은 당첨 번호와 달라야 하며, 1부터 45 사이의 숫자여야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
        throw new Error('보너스 볼은 당첨 번호와 달라야 하며, 1부터 45 사이의 숫자여야 합니다.');
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
        throw new Error('보너스 볼은 당첨 번호와 달라야 하며, 1부터 45 사이의 숫자여야 합니다.');
    }
};

export const checkPurchaseAmount = (amount) => {
    if (isNaN(amount) || amount % 1000 !== 0) {
        throw new Error('구매 금액은 1,000원 단위여야 합니다.');
    }
};