import { RANK } from '../constant/constant.js';

class Profit {
  static calculate(rank) {
    if (rank === 1) return RANK[1];
    if (rank === 2) return RANK[2];
    if (rank === 3) return RANK[3];
    if (rank === 4) return RANK[4];
    if (rank === 5) return RANK[5];
    return RANK[0];
  }
}

export default Profit;
