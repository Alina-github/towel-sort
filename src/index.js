
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!Array.isArray(matrix) || !matrix.length) {return [];}

  let array = [];
  
  for (i = 0; i < matrix.length; i++) {
  
  if (i % 2 !== 0) {matrix[i] = matrix[i].sort((a, b) => b-a);}
  
  array = array.concat(matrix[i]);}
  
  return array;}