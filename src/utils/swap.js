import CONSTANTS from '../constants/constants.js';

const swap = winningStatisticsString => {
  const temp = winningStatisticsString[CONSTANTS.match.threeMatch];
  winningStatisticsString[CONSTANTS.match.threeMatch] =
    winningStatisticsString[CONSTANTS.match.fourMatch];
  winningStatisticsString[CONSTANTS.match.fourMatch] = temp;
};

export default swap;
