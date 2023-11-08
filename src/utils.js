export function toSorted(array, compareFunction) {
  const copied = [...array];
  copied.sort(compareFunction);

  return copied;
}
