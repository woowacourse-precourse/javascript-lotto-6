class LottoResult {
  static CASE_3 = {
    description: '3개 일치',
    prize: 5000,
  };
  static CASE_4 = {
    description: '4개 일치',
    prize: 50000,
  };
  static CASE_5 = {
    description: '5개 일치',
    prize: 1500000,
  };
  static CASE_5_BONUS = {
    description: '5개 일치, 보너스 볼 일치',
    prize: 30000000,
  };
  static CASE_6 = {
    description: '6개 일치',
    prize: 2000000000,
  };

  static getPrize = (count, isBonus) => {
    if (count == 3) return LottoResult.CASE_3;
    if (count == 4) return LottoResult.CASE_4;
    if (count == 5 && !isBonus) return LottoResult.CASE_5;
    if (count == 5 && isBonus) return LottoResult.CASE_5_BONUS;
    if (count == 6) return LottoResult.CASE_6;
  };
}

export default LottoResult;
