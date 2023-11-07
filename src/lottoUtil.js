import { MissionUtils } from '@woowacourse/mission-utils';

const LOTTO_REWARD = {
    5: 5_000,
    4: 50_000,
    3: 1_500_000,
    2: 30_000_000,
    1: 2_000_000_000,
};

const RANK_DESCRIPTION = {
    5: '3개 일치',
    4: '4개 일치',
    3: '5개 일치',
    2: '5개 일치, 보너스 볼 일치',
    1: '6개 일치',
};

/**
 * @param {number} lottoPay
 */
export function validateLottoPay(lottoPay) {
    if (!(typeof lottoPay === 'number' && lottoPay)) {
        throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    }
    if (lottoPay % 1000 !== 0) {
        throw new Error('[ERROR] 1000의 배수만 입력 가능합니다.');
    }
}

export async function inputLottoPay() {
    while (true) {
        try {
            const lottoPay = Number(await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n'));
            validateLottoPay(lottoPay);
            return lottoPay;
        } catch (error) {
            MissionUtils.Console.print(error.message);
        }
    }
}
