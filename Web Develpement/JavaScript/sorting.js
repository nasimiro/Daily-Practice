var marks= [30,10,70];
for(let i=0;i<marks.length;i++){
    for(let j=i+1;j<marks.length;j++)
    {
        if(marks[i]>marks[j])
        {
            temp=marks[i];
            marks[i]=marks[j];
            marks[j]=temp;
        }
        // console.log(marks);
    }
    // console.log(marks);
}
console.log(marks);


// let arr = [4, 32, 2, 5, 8];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log("Sorted array=>", arr);