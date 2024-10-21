/*

You are given an array containing 5 integers. The first two integers define the starting and ending points of one range, 
while the next two integers define the starting and ending points of a second range. The last integer in the array is a number, X. 
Your task is to check if the two ranges overlap by at least X numbers. If they do, return true; otherwise, return false.

Example 1:

The ranges are:

5 to 15
8 to 12

These ranges overlap by at least 4 numbers (8, 9, 10, 11), so the result should be true.

Example 2:

Array: [2, 6, 8, 12, 3]

The ranges are:

2 to 6
8 to 12

In this case, there is no overlap between the two ranges (2-6 and 8-12). So, the result should be false.


*/

function checkOverlap(arr) {}

module.exports = checkOverlap;

function checkOverlap(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  if (arr.length === 0) {
    return false;
  }

  let range1Start = arr[0];
  let range1End = arr[1];
  let range2Start = arr[2];
  let range2End = arr[3];
  let target = arr[4];

  let overlapCount = 0;

  for (let i = range1Start; i <= range1End; i++) {
    if (i >= range2Start && i <= range2End) {
      overlapCount++;
    }

    if (overlapCount >= target) {
      return true;
    }
  }

  return false;
}

module.exports = checkOverlap;
