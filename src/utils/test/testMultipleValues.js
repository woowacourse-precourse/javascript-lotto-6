export const testMultipleValues = (testValues, fn) => {
  testValues.forEach(({ param, expectedValue }) => {
    if (typeof param !== 'object' && typeof expectedValue !== 'object') {
      expect(fn(param)).toBe(expectedValue);
    } else {
      expect(fn(param)).toEqual(expectedValue);
    }
  });
};
