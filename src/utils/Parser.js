const Parser = {
  valueToNumber(value) {
    return Number(value.trim());
  },  

  sort(value) {
    return value.sort((a, b) => a - b);
  }  
};

export default Parser;