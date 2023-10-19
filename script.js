// // first task
// let numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// let sortedNumbers = numbers.join(",");

// console.log(sortedNumbers);

// // second task
// function union(arr1, arr2) {
//   const combinedArray = arr1.concat(arr2);

//   const unique = new Set(combinedArray);

//   const unionArray = Array.from(unique);

//   return unionArray;
// }

// const inp1 = [1, 2, 3];
// const inp2 = [100, 2, 1, 10];

// const result = union(inp1, inp2);
// console.log(result);

// // third task
// function cleanArray(array) {
//     return array.filter(item => {
//       return item !== null && item !== 0 && item !== "" && item !== false && item !== undefined && !Number.isNaN(item);
//     });
//   }

//   const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
//   const cleanedArray = cleanArray(sampleArray);
//   console.log(cleanedArray);

// // fourth task
// function Sort(library) {
//     return library.sort((a, b) => {
//       const titleA = a.title.toLowerCase();
//       const titleB = b.title.toLowerCase();
  
//       if (titleA < titleB) {
//         return -1;
//       }
//       if (titleA > titleB) {
//         return 1;
//       }
//       return 0;
//     });
//   }
  
//   let library = [
//     { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
//     { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
//     {
//       author: "Suzanne Collins",
//       title: "Mockingjay: The Final Book of The Hunger Games",
//       libraryID: 3245,
//     },
//   ];
  
//   const sortedLibrary = Sort(library);
  
//   console.log(sortedLibrary);
  

// // fifth task
// function IsFactor(arr) {
//   if (arr.length < 2) {
//     return true;
//   }

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] % arr[i] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(IsFactor([2, 4, 8, 16, 32]));
// console.log(IsFactor([2, 4, 16, 32, 64]));
// console.log(IsFactor([2, 4, 16, 32, 68]));