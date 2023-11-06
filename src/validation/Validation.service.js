export default class ValidationService {
  isNumber(num) {
    return !Number.isNaN(+num);
  }
}
