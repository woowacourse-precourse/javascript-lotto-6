// Number(), toString() 메서드는 직접적으로 사용
const TYPE_CONVERTOR = {
    strToArr: (str) => str.split(','),
    strArrToNumArr: (strArr) => strArr.map(str => Number(str)),
    strToNumArr: (str) => {
      const strArr = str.split(',');
      return strArr.map(strEl => Number(strEl));
    },
    arrTostrArr: (arr) => {
      let str = '';
      arr.forEach((num, idx)=> {
        if(idx === 0) str += `[${num}, `;
        if(idx > 0 && idx < 5) str += `${num}, `;
        if(idx === 5) str += `${num}]`;
      })
      return str;
    },
  }
  
  export default TYPE_CONVERTOR;