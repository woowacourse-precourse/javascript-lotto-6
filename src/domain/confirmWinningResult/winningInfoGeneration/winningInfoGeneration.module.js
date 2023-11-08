import { countBy } from '../../../utils/array/array.module.js';
import { isEmptyObject } from '../../../utils/object/object.module.js';

/**
 * @param {import('../../../utils/jsDoc.js').PrizeTable} prizeInfo - 등수 별 당첨 금액이 있는 hash table (jsDoc.js 참고)
 * @param {import('../../../utils/jsDoc.js').RankDistributionTable} rankDistributionTable - 각 등수 별 분포 수가 담긴 객체 반환 (모든 프로퍼티가 존재하는 것은 아님)
 * @returns {number} 총 당첨 금액
 */
const calculatePrize = (prizeInfo, rankDistributionTable) =>
  Object.entries(rankDistributionTable).reduce(
    (prevPrize, [rank, count]) => prevPrize + prizeInfo[rank] * count,
    0,
  );

/**
 * @param {import('../../../utils/jsDoc.js').RankInfo} rankInfo - 등수 정보를 담고 있는 객체
 * @returns {import('../../../utils/jsDoc.js').PrizeTable} 등수 별 당첨 금액이 있는 hash table (jsDoc.js 참고)
 */
const createPrizeInfo = (rankInfo) =>
  Object.values(rankInfo).reduce(
    (prevInfo, { rank, prizeAmount }) => ({ ...prevInfo, [rank]: prizeAmount }),
    {},
  );

/**
 * @param {object} param - createPrizeRank 매개 변수 정보를 담은 객체
 * @param {{ matchCount: number, hasBonusNumber: boolean }} param.lottoMatchingInfo - 로또 매칭 정보 객체
 * @param {import('../../../utils/jsDoc.js').RankInfo} param.rankInfo - 등수 정보를 담고 있는 객체
 * @returns {import('../../../utils/jsDoc.js').LottoRank | null} 매칭된 등수 또는 null
 */
const createPrizeRank = ({ lottoMatchingInfo: { matchCount, hasBonusNumber }, rankInfo }) => {
  const rankCategories = Object.values(rankInfo);

  const matchingRankCategory = rankCategories.find(
    (category) =>
      category?.matchCount === matchCount && category?.hasBonusNumber === hasBonusNumber,
  );

  return matchingRankCategory?.rank ?? null;
};

/**
 * @param {{lottoMatchingResult : import('../../../utils/jsDoc.js').LottoMatchingResult, rankInfo: import('../../../utils/jsDoc.js').RankInfo}} params - createRankDistributionTable의 매개 변수
 * @returns {import('../../../utils/jsDoc.js').RankDistributionTable} - 각 등수 별 분포 수가 담긴 객체 반환 (모든 프로퍼티가 존재하는 것은 아님)
 */
const createRankDistributionTable = ({ lottoMatchingResult, rankInfo }) => {
  const matchedPrizeRanks = lottoMatchingResult.map((lottoMatchingInfo) =>
    createPrizeRank({ lottoMatchingInfo, rankInfo }),
  );

  return countBy(matchedPrizeRanks);
};

/**
 * @module winningInfoGeneration
 * 로또 매칭 결과를 바탕으로 각 등수 별 빈도 수와 총 당첨 금액을 계산하기 위한 모듈
 */
const winningInfoGeneration = Object.freeze({
  constants: Object.freeze({
    rankInfo: Object.freeze({
      '1st': Object.freeze({
        matchCount: 6,
        hasBonusNumber: false,
        prizeAmount: 2_000_000_000,
        rank: '1st',
      }),
      '2nd': Object.freeze({
        matchCount: 5,
        hasBonusNumber: true,
        prizeAmount: 30_000_000,
        rank: '2nd',
      }),
      '3rd': Object.freeze({
        matchCount: 5,
        hasBonusNumber: false,
        prizeAmount: 1_500_000,
        rank: '3rd',
      }),
      '4th': Object.freeze({
        matchCount: 4,
        hasBonusNumber: false,
        prizeAmount: 50_000,
        rank: '4th',
      }),
      '5th': Object.freeze({
        matchCount: 3,
        hasBonusNumber: false,
        prizeAmount: 5_000,
        rank: '5th',
      }),
    }),
  }),

  /**
   * @param {import('../../../utils/jsDoc.js').LottoMatchingResult} lottoMatchingResult - 로또 매칭 결과 (정답 갯수, 보너스 번호 정답 여부)
   * @returns {import('../../../utils/jsDoc.js').WinningInfo} 당첨 정보 (등수 분포 객체, 총 당첨 금액)
   */
  createWinningInfo(lottoMatchingResult) {
    const rankDistributionTable = createRankDistributionTable({
      lottoMatchingResult,
      rankInfo: this.constants.rankInfo,
    });

    if (isEmptyObject(rankDistributionTable)) return { rankDistributionTable: null, prize: 0 };

    const prizeInfo = createPrizeInfo(this.constants.rankInfo);
    const prize = calculatePrize(prizeInfo, rankDistributionTable);

    return { rankDistributionTable, prize };
  },
});

export default winningInfoGeneration;
