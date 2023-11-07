export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}
