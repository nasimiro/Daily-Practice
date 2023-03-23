var sentence="hello   world!"
var count=0;
for(i=0;i<sentence.length;i++)
{
    var character= sentence[i];
    console.log(character)
    if(character==" " && sentence[i-1] != " ")
    {
        count++;
    }
}
count++;
console.log('Total word: ',count);
console.log('sentence length',sentence.length);
var sentence= 'abu ittum'+ sentence + ' ';
console.log(sentence)