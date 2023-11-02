const calculate = (excution, number, bonusNumber) => {
  console.log(excution);
  for (let i = 0; i < excution.length; i++) {
    console.log("loop, ", excution[i]);
    const result = excution[i].filter((item) => number.includes(item));
    console.log(result);
  }
  // return result;
};

export default calculate;
