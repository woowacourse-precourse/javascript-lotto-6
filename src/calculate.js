const calculate = (excution, number, bonusNumber) => {
  let results = [];
  for (let i = 0; i < excution.length; i++) {
    console.log("loop, ", excution[i]);
    const result = excution[i].filter((item) => number.includes(item)).length;
    results.push(result);
  }
  return results;
};

export default calculate;
