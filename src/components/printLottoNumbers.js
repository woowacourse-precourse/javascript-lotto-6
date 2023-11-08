function printLottoNumber(lottoNumber) {
  let str = "[";
  for (let i = 0; i < 5; i++) {
    str += String(lottoNumber[i]);
    str += ", ";
  }
  str += String(lottoNumber[5]);
  str += "]";
  return str;
}

export default printLottoNumber;
