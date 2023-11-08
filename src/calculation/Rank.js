class Rank {
  static calculate(count, bonus) {
    if (count === 6) return 1;
    if (count === 5 && bonus) return 2;
    if (count === 5 && !bonus) return 3;
    if (count === 4) return 4;
    if (count === 3) return 5;
    return 0;
  }
}

export default Rank;
