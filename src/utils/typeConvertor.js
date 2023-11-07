import { CONVERTER_VAR } from '../constants/constant';

const { comma } = CONVERTER_VAR

const TYPE_CONVERTOR = {
  strToArr: (str) => str.split(comma),
  strArrToNumArr: (strArr) => strArr.map(str => Number(str)),
  strToNumArr: (str) => {
    const strArr = str.split(comma);
    return strArr.map(strEl => Number(strEl));
  },
  strToNum: (str) => Number(str),
}

export default TYPE_CONVERTOR;