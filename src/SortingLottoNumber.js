const SortingLottoNumber = (lottoArray) => {
  return lottoArray.sort((a, b) => a - b).map(String);
};

export default SortingLottoNumber;
