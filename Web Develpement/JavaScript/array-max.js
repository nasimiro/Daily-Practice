var marks= [90,88,79,100,82,89,79,78,67,23,98,78,69,68,69,60,50,101,50,67];
var max= marks[0];
for(i=0;i< marks.length;i++)
{
    var element= marks[i];
    // console.log(marks.indexOf(marks[i]),' ',element);
    if(element>max)
    {
        max=element;
    }
}
console.log('The Highest Value is: ',max);