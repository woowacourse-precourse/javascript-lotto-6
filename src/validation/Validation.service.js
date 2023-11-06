export default class ValidationService {
  isNumber(num) {
    return !Number.isNaN(+num);
  }

  isDividedBy1000(num) {
    return num > 0 && +num % 1000 === 0;
  }
}
