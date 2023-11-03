export const getCommonElementCount = (list1, list2) =>
  list1.length + list2.length - new Set([...list1, ...list2]).size;
