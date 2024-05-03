export const returnSummationText = (array, index) => {
  if (index < array.length - 2) return ', ';
  else if (index < array.length - 1) return ' and ';
  else return '';
};
