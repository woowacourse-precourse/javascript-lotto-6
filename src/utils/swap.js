import CONSTANTS from '../constants/constants.js';

const swap = winningStatisticsString => {
  const threeMatchValue = winningStatisticsString[CONSTANTS.match.threeMatch];
  winningStatisticsString[CONSTANTS.match.threeMatch] =
    winningStatisticsString[CONSTANTS.match.fourMatch];
  winningStatisticsString[CONSTANTS.match.fourMatch] = threeMatchValue;
};

export default swap;
