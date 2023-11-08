const Converter = class {
  static stringToArray(string) {
    return string.split(',');
  }

  static arrToSetStructure(arr) {
    return new Set(...arr);
  }
};

export default Converter;
