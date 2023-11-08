class LottoResult {
  static MATCH_3 = {
    description: '3개 일치',
    prize: 5000,
  };
  static MATCH_4 = {
    description: '4개 일치',
    prize: 50000,
  };
  static MATCH_5 = {
    description: '5개 일치',
    prize: 1500000,
  };
  static MATCH_5_BONUS = {
    description: '5개 일치, 보너스 볼 일치',
    prize: 30000000,
  };
  static MATCH_6 = {
    description: '6개 일치',
    prize: 2000000000,
  };

  static getPrize = (count, isBonus) => {
    if (count == 3) return LottoResult.MATCH_3;
    if (count == 4) return LottoResult.MATCH_4;
    if (count == 5 && !isBonus) return LottoResult.MATCH_5;
    if (count == 5 && isBonus) return LottoResult.MATCH_5_BONUS;
    if (count == 6) return LottoResult.MATCH_6;
  };
}

export default LottoResult;
