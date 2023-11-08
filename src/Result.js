import WinLotto from './WinLotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

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

export async function inputWinNumber() {
    const winNumberStr = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    MissionUtils.Console.print('');
    return winNumberStr.split(',').map(str => Number(str));
}

export async function inputBonusNumber() {
    const bonusNumberStr = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    MissionUtils.Console.print('');
    return Number(bonusNumberStr);
}

export async function winLottoGenerate() {
    let lotto;
    while (true) {
        try {
            const winNumbers = await inputWinNumber();
            lotto = new Lotto(winNumbers);
            break;
        } catch (error) {
            MissionUtils.Console.print(error.message);
        }
    }
    while (true) {
        try {
            const bonusNumber = await inputBonusNumber();
            const winLotto = new WinLotto(lotto, bonusNumber);
            return winLotto;
        } catch (error) {
            MissionUtils.Console.print(error.message);
        }
    }
}

export function lottoGenerate(amount) {
    return [...Array(amount)].map(
        () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b))
    );
}

export function checkAnswerCnt(lottoNumbers, winLottoSet) {
    return lottoNumbers.reduce((acc, cur) => (acc += winLottoSet.has(cur) ? 1 : 0), 0);
}

export function checkHasBonus(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
}

export function lottoRank(answerCnt, hasBonusNumber) {
    if (answerCnt < 3) return -1;
    if (answerCnt === 3) return 5;
    if (answerCnt === 4) return 4;
    if (answerCnt === 5 && !hasBonusNumber) return 3;
    if (answerCnt === 5 && hasBonusNumber) return 2;
    if (answerCnt === 6) return 1;
    return -1;
}

export function getRankMap(ranks) {
    const resultMap = new Map([
        [5, 0],
        [4, 0],
        [3, 0],
        [2, 0],
        [1, 0],
    ]);
    ranks.filter(rank => resultMap.has(rank)).forEach(rank => resultMap.set(rank, resultMap.get(rank) + 1));
    return resultMap;
}

export function runCalculate(lottos, winLotto) {
    const winLottoSet = new Set([...winLotto.getLotto().getNumbers()]);
    const ranks = lottos
        .map(lotto => lotto.getNumbers())
        .map(lottoNumbers => [
            checkAnswerCnt(lottoNumbers, winLottoSet),
            checkHasBonus(lottoNumbers, winLotto.getBonusNumber()),
        ])
        .map(([answerCnt, hasBonusNumber]) => lottoRank(answerCnt, hasBonusNumber));
    return getRankMap(ranks);
}

export function printLottoNumbers(lottos) {
    MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
        MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
    MissionUtils.Console.print('');
}

function getRankStatisticsMsg(rank, rankMap) {
    return [
        RANK_DESCRIPTION[rank],
        `(${LOTTO_REWARD[rank].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원)`,
        '-',
        `${rankMap
            .get(rank)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}개`,
    ].join(' ');
}

function printRankStatistics(rankMap) {
    const targetRanks = [5, 4, 3, 2, 1];
    targetRanks
        .map(rank => getRankStatisticsMsg(rank, rankMap))
        .forEach(msg => {
            MissionUtils.Console.print(msg);
        });
}

export function getReturnRate(lottoPay, rankMap) {
    const returnSum = [...rankMap.keys()].reduce((acc, cur) => acc + LOTTO_REWARD[cur] * rankMap.get(cur), 0);
    return ((returnSum / lottoPay) * 100).toFixed(1);
}

function printReturnRate(lottoPay, rankMap) {
    MissionUtils.Console.print(`총 수익률은 ${getReturnRate(lottoPay, rankMap)}%입니다.`);
}

export function printStatistics(lottoPay, rankMap) {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    printRankStatistics(rankMap);
    printReturnRate(lottoPay, rankMap);
}