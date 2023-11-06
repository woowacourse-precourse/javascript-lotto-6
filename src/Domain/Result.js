class Result {
  static objToString(obj) {
    const string = Object.keys(obj).map((el) => `${el} - ${obj[el]}개`);

    return string;
  }
}

export default Result;
