/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;
  if (arr.filter((n) => n != '--discard-next' && n != '--discard-prev' && n != '--double-next' && n != '--double-prev')) return arr;
  
}

module.exports = {
  transform
};
