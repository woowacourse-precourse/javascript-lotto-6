const SizeMeasurer = class {
  static getArrSize(value) {
    return value.length;
  }

  static getSetStructureSize(value) {
    return value.size;
  }
};

export default SizeMeasurer;
