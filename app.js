// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log(this); //object reference
//         console.log("outer func:  this.foo = " + this.foo); //bar
//         console.log("outer func:  self.foo = " + self.foo); //bar --
//         (function() {
//         console.log(this);
//         console.log(self);
//             console.log("inner func:  this.foo = " + this.foo); //undefined
//             console.log("inner func:  self.foo = " + self.foo); //undefined
//         }());
//     }
// };
// myObject.func();
// var s = eval("10*10+5");
// console.log(typeof s);
// function variableDemo() {
//   var i = "Hello World!";
//   for (let i = 1; i < 3; i++) {
//     console.log(i); //1 2 3
//   }
//   console.log(i); //hello worl
// }

// variableDemo();
// let i;
// console.log(i); //not defined
// i = 20;
// 4. Picking TicketsConsider an array of n ticket prices, tickets. A number, m, is defined as the size of some subsequence of tickets, s, where each element covers an unbroken range of integers. That is, if the elements in s are sorted, the absolute difference between any elements j and j + 1 is either 0 or 1. Determine the maximum length of a subsequence chosen from the tickets array. Exampletickets = [8, 5, 4, 8, 4] Valid subsequences, sorted, are {4, 4, 5} and {8, 8}. These subsequences have m values of 3 and 2, respectively. Return 3. Function Description Complete the function maxTickets in the editor below. maxTickets has the following parameter(s): int tickets[n]: the ticket prices Returns int: the maximum possible value of mConstraints1 ≤ n ≤ 1051 ≤ tickets[i] ≤ 109 Input Format For Custom TestingSample Case 0Sample Input 0STDIN Function----- --------4 → tickets[] size n = 44 → tickets = [4, 13, 2, 3]1323 Sample Output 03 Explanation 0 There are two subsequences of tickets that contain consecutive integers when sorted: {2, 3, 4} and {13}. These subsequences have m values of 3 and 1, respectively.

var tickets = [4, 13, 2, 3, 5];

let arr = tickets.sort((a, b) => a - b);
let n = arr.length;
// console.log(arr);
let max = 0;
for (let i = 0; i < n; i++) {
  let countArr = [];
  countArr.push(arr[i]);
  for (let j = 0; j < n; j++) {
    let temp = i;
    if (temp != j && Math.abs(arr[temp] - arr[j]) <= 1) {
      countArr.push(arr[j]);
      temp += 1;
    }
  }
  console.log(arr[i], countArr);
  if (countArr.length > max) max = countArr.length;
}
console.log(max);
