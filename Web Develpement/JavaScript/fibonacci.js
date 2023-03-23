
var fibonacci= [0, 1 ]

console.log(fibonacci)


for(i=2;i<=10;i++)
{
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
}
console.log(fibonacci);
fibonacci.pop()
console.log(fibonacci);