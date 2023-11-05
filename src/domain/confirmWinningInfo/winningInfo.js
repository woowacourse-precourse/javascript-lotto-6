import { countBy } from '../../utils/array.js';
import { isEmptyObject } from '../../utils/object.js';

const calculatePrize = (prizeInfo, rankDistributionTable) =>
  Object.entries(rankDistributionTable).reduce(
    (prevPrize, [rank, count]) => prevPrize + (prizeInfo[rank] ?? 0) * count,
    0,
  );

const createPrizeInfo = (rankInfo) =>
  Object.values(rankInfo).reduce(
    (prevInfo, { rank, prizeAmount }) => ({ ...prevInfo, [rank]: prizeAmount }),
    {},
  );

const createPrizeRank = ({ lottoMatchingInfo: { matchCount, hasBonusNumber }, rankInfo }) => {
  const rankCategories = Object.values(rankInfo);

  const matchingRankCategory = rankCategories.find(
    (category) =>
      category?.matchCount === matchCount && category?.hasBonusNumber === hasBonusNumber,
  );

  return matchingRankCategory?.rank ?? null;
};

const createRankDistributionTable = ({ lottoMatchingResult, rankInfo }) => {
  const matchedPrizeRanks = lottoMatchingResult.map((lottoMatchingInfo) =>
    createPrizeRank({ lottoMatchingInfo, rankInfo }),
  );

  return countBy(matchedPrizeRanks);
};

const winningInfo = Object.freeze({
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

export default winningInfo;
