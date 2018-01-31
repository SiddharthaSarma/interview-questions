/*
 * Given a non-empty array of integers, return the k most frequent elements.
 * For example,
 * Given [1,1,1,2,2,3] and k = 2, return [1,2].
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), 
 * where n is the array's size.
*/

function findKFrequentElement(arr, k) {
  if (!Array.isArray(arr)) {
    return false;
  }

  const hash = arr.reduce((pre, next) => {
    pre[next] = (pre[next] || 0) + 1;
    return pre;
  }, {});

  return Object.keys(hash)
    .sort((a, b) => hash[b] - hash[a])
    .slice(0, k)
    .map(x => parseInt(x, 10));
}


module.exports = findKFrequentElement;