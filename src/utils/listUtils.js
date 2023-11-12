export const getCommonElementCount = (list1, list2) =>
  list1.length + list2.length - new Set([...list1, ...list2]).size;

export const checkListSameValue = (list) => new Set(list).size !== list.length;

export const checkListItemLongerThan = (list, maxLength) =>
  list.filter((value) => value.length > maxLength).length > 0;

export const checkListValues = (list, minValue, maxValue) =>
  list.filter((value) => value > maxValue || value < minValue).length;
