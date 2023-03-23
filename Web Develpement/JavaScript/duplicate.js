var marks=[10,11,12,17,10,11,20,17];
for(i=0;i<marks.length;i++)
{
    console.log(marks.indexOf(marks[i]),marks[i]);
}

var withoutDuplicate=[];

for(i=0;i< marks.length;i++)
{
    var element= marks[i];
    var index =withoutDuplicate.indexOf(element);
    if (index==-1){
        withoutDuplicate.push(element);
    }
}
console.log(withoutDuplicate);
