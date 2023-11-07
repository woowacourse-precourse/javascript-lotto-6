function getTotalPrize(lottoArray) {
  let totalPrize = 0;
  for (let i = 0; i < lottoArray.length; i++) {
    totalPrize += lottoArray[i].Prize;
  }
  return totalPrize;
}

export { getTotalPrize };