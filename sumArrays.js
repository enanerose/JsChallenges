function sumArray(ar)
{
    var sum = 0;
    
    for(var i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}

var ar = [1,2,3,4,5,6,7,8,9];
var sum = sumArray(ar);
console.log(sum);