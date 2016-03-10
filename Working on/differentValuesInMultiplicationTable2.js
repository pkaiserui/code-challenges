// Define a multiplication table of size n by m as follows: such table consists of n rows and m columns. Cell on the intersection of the i-th row and the j-th column (i, j > 0) contains the value of i * j.

// Given integers n and m, find the number of different values that are found in the table.

// Example

// for n = 3, m = 2 output should be 5

// [input] integer n

// positive integer
// [input] integer m

// positive integer
// [output] integer

// Input(s)
// n: 4
// m: 4
 
// Expected Output
// 9

// Input(s)
// n: 2
// m: 3

// Expected Output
// 5
// int differentValuesInMultiplicationTable2(int n, int m) {
//     std::set<int> s;
//     for (int i= 1; i <= n; ++i)
//         for (int j = 1; j <= m; ++j)
//           s.insert(i*j);
//     return s.size();    
// }


function differentValuesInMultiplicationTable2(n, m) {
    var holder = [];
    for(var i = 1; i <=n; i++){
        for(var j = 1; j <= m;j++){
            if(holder.indexOf(i*j) === -1){
               holder.push(i*j); 
            }
            
        }
    }
    return holder.length;
}

console.log(differentValuesInMultiplicationTable2(5,3))

