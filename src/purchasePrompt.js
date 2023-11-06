import { Console } from '@woowacourse/mission-utils';

function isNonNumeric(input) {
    return isNaN(input);
}

function isNotPositiveInteger(input) {
    return !Number.isInteger(input) || input <= 0;
}

function isNotMultipleOfThousand(input) {
    return input % 1000 !== 0;
}

export async function printPurchasePrompt() {
    await Console.print('구입금액을 입력해주세요.');

    const input = await Console.readLineAsync();
    const purchaseAmount = parseInt(input, 10);

    if (isNonNumeric(input) || isNotPositiveInteger(purchaseAmount) || isNotMultipleOfThousand(purchaseAmount)) {
        throw new Error('[ERROR] 올바른 금액을 입력하세요.');
    }

    return purchaseAmount;
}

export function calculateLottoCount(purchaseAmount) {
    if (typeof purchaseAmount !== 'number') {
        throw new Error('[ERROR] 구입 금액이 올바르지 않습니다.');
    }

    return Math.floor(purchaseAmount / 1000);
}
