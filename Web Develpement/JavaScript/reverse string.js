function reverseString(string){
    var reverse='';
    for(var i =0; i<string.length;i++)
    {
        var char= string[i];
        reverse=char+ reverse;
    }
    return reverse;

}
var statement="imran mia khalifa"
console.log(reverseString(statement));
console.log(reverseString('009790'));