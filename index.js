frequency counter problem 

function charCount(str) {
  // make object to return 
  // loop over string for each character 
  // of char is in objcet add one to count 
  // if uf it is not add it to the object set the count to  1
  // only sdd number and letters 
  // how to tell if a character 
  // ->> regex, askey codes [a-z0-9]
  // return object 
  const chars = {}
  for(let i  = 0; i < str.length;i++) {
    let char = str[i].toLowerCase()
    if(/[a-z0-9]/.test(char)) {   
      if(chars[char] > 0) {

     chars[char]++
   } else {
     chars[char] = 1;
   }
  }
  }
  console.log(chars)
}

charCount('hello HEy

charcodeat  47 -58 is numeric 



function charCountRefactor(str) {
  let result ={}

  for(var char of str) {
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1
    }
  }
  console.log(result)
}

charCountRefactor('Hi Trevor Buddy boy')




function anagram(str1,str2) {
if(str1.length !== str2.length) {
  return false 
}  
 const frequencyCounter1 = {}
 const frequencyCounter2 = {} 
  for(let char of str1) {
   frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1 
  }

  for(let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }

  return 
}

anagram('aaaz','z');
anagram('rat','tva');

function isValidAnagaram(first,second) {
  if(first.length !== second.length) {
    return false 
  }
  const lookup = {}
  for(let i = 0; i < first.length;i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 
  }
  for(let i = 0; i < second.length;i++) {
    let letter = second[i]
    if(!lookup[letter]) {
      return false 
    }
    else {
      lookup[letter] -= 1
    }
  }
  console.log('true')
}

isValidAnagaram('trevor', 'trevor')

Multiple pointer pattern 

function zeroSum(arr) {
 for(let i = 0; i < arr.length; i++) {
 for(let j = i + 1; j < arr.length;j++) {
   if(arr[i] + arr[j] === 0) {
     console.log([arr[i],arr[j]])
     break;
   } else {
//   console.log(undefined)
   }
 }  
 } 
}

// zeroSum([-3-2,-1,0,1,2,3])
zeroSum([12,-12])
// nested loop O(n^2) time space is O(1);


zerosum refactor 

function zeroSumTwo(arr) {
  let left = 0; 
  let right = arr.length -1;
  while(left < right) {
  let sum = arr[left] + arr[right]
  if(sum === 0) {
    return [arr[left], arr[right]]
  } else if(sum > 0 ) {
    right--
  } else {
    left++
  }
  }
}

zeroSumTwo([8-2,-1,0,9,2,3,10])

countUniqueValues(arr) {
let uniqueValues = 0; 

  for(let i = 0; i < arr.length-1;i++) {
    for(let j = i + 1; j < arr.lengt;j++) {
      if (arr[i] !== arr[j]) {
        uniqueValues++
      }
    }
    return uniqieValues
  }
}


// countUniq refactor 


 function uniqVals(arr) {
  let i = 0;
   for(let j =  1; j < arr.length;j++){
    if(arr[i] !== arr[j]) {
       i++
      arr[i] = arr[j]
     }
     console.log(i,j)
   }
 }


uniqVals([1,1,2,3,3])

// sliding window patttern 

 function maxSubSum(arr,n) {
  if(n  > arr.length) {
    return null; 
  }
  let max = -Infinity;
  for(let i = 0 ; i < arr.length - n + 1 ;i++) {
     temp = 0;
     for(let j = 0; j < n; j++) {
      temp += arr[i = j]
     }
     if(temp > max) {
      max = temp;
     }
  }
console.log(max)
}

maxSubSum([1,2,377,88],3)

function maxSub(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

maxSub([1, 199, 222, 88, 99, 990, 989], 4) // 2166
Time Complexity O(n)

Divide and conquer 
 function search(arr,val) {
 for(let i = 0; i < arr.length;i++) {
   if(arr[i] == val) {
     return i
   }
 } 
   return - 1
} 

// O(n)

 function search(arr,val) {

   return arr.indexOf(val) || -1
 }

search([1,2,3,11],99)



[1,2,3,4,15,25]

binary search 

function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1
    }
    else {
      return middle
    }
  }
  return - 1
}

Log(N)

function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1
    }
    else {
      return middle
    }
  }
  return - 1
}


search([1,2,3,4,15,25],3) 



sorting

function numberCompare(a,b) {
    return b - a
}

[1,3,4,5,99,99,200].sort(numberCompare);



 function sortByLength(str1,str2) {
    return str1.length - str2.length 
}


['a','aaaaaaa','aaaaaaaaaa','aa'].sort(sortByLength)



swapping 

function swap(arr,id1,id2) {
  let temp = arr[id1];
  arr[id1] = arr[id2];
  arr[idx2] = temp
}



function sort(arr) {
  for(let i = 0; i < arr.length;i++) {
   for(let j = 0; j < arr.length; j++) {
    if(arr[j] > arr[j + 1])
       let temp = arr[j]
           arr[j] = arr[j + 1]
       arr[j + 1] = temp;
   }
   }   
  }  
    return arr
}


sort([1,99,22,33])

insertion sort



function insertionSort(arr) {
    for(let i = 0; i < arr.length;i++) {
     let current = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > current;j--) {
         arr[j+1] = arr[j];   
        }
        arr[j+1] = current
    }
    return arr;
}


insertionSort([2,1,9,76,4])


just merging

 function merge(arr1,arr2) {
     
const results = [];
    let i = 0;
    let j = 0;

     while(i < arr1.length && j < arr2.length) {
       if(arr2[j] > arr1[i]) {
           results.push(arr1[i])
           i++
       }  else {
           results.push(arr2[j])
           j++
       }
     }
     while(i < arr1.length) {
         results.push(arr1[i]);
         i++
     }
          while(j < arr2.length) {
         results.push(arr2[j]);
         j++
     }

 return results    
    
}

merge([1,10,50],[2,14,99,100])


Quick sort with helper 

function quickSort(arr,left=0,right=arr.length - 1) {

    if(left < right) {
let piviotIndex = pivot(arr, left, right)
 quickSort(arr,left,piviotIndex - 1)

    quickSort(arr,piviotIndex + 1, right)
}
    return arr;
}


function swap(arr,id1,id2) {
  let temp = arr[id1];
  arr[id1] = arr[id2];
  arr[id2] = temp
}


function pivot(arr,start=0,end=arr.length + 1) {
 var pivot  = arr[start]
  var swapindex = start;

    for(let i = start + 1; i < arr.length;i++) {
        
      if(pivot > arr[i]) {
          swapindex++
          swap(arr,swapindex,i)
          console.log(arr)
      }  
    }
       swap(arr,start,swapindex)
     console.log(arr)
    return swapindex
}

quickSort([4,8,2,1,5,7,6,3])