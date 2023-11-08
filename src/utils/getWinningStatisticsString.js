import swap from './swap.js';
import MESSAGE from '../constants/message.js';

const getWinningStatisticsString = matchCounts => {
  const winningStatisticsString = Object.keys(MESSAGE.winningStatistics).map(key => {
    const count = matchCounts.filter(winningstatistic => winningstatistic === Number(key)).length;
    return `${MESSAGE.winningStatistics[key]}${count}개`;
  });
  swap(winningStatisticsString);
  return winningStatisticsString;
};

export default getWinningStatisticsString;
