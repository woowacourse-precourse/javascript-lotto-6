const Sanitizer = class {
  static sanitizeEmpty(value) {
    value.trim();
  }
};

export default Sanitizer;
