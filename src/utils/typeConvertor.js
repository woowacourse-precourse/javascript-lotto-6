import { CONVERTER_VAR } from '../constants/constant';

const TYPE_CONVERTOR = {
  stringToArr: (str) => str.split(CONVERTER_VAR.strToArr),
  strArrToNumArr: (strArr) => strArr.map(str => Number(str)),
  strToNumArr: (str) => {
    const strArr = this.strToArr(str);
    return this.strArrToNumArr(strArr);
  },
}

export default TYPE_CONVERTOR;