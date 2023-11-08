class Rate {

  rateOfReturn(statistics, lottoEach) {
    const total = statistics[0] * 5000 + statistics[1] * 50_000 + statistics[2] * 1_500_000
    + statistics[4] * 30_000_000 + statistics[3] * 2_000_000_000;
    const rate = Math.round((total / (lottoEach * 10)) * 10) / 10;
    
    return rate;
  }
}

export default Rate;