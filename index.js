// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
document.writeln(a instanceof Array);
document.writeln(b instanceof Array);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++)
{
    a[i] = a[i] * 2;
}
document.writeln(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = "";
var case2 = "";
var case3 = "";
for (let i = 0; i < colors.length; i++)
{
    case1 += colors[i] + ' ';
    case2 += colors[i] + '+';
    case3 += colors[i] + ',';
}
case1 = case1.trim();
case2 = case2.substring(0, case2.length - 1);
case3 = case3.substring(0, case3.length - 1);
document.writeln(case1);
document.writeln(case2);
document.writeln(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a = a.sort(function(a, b){return b - a});
document.writeln(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var k = [];
var v = [];
for (let i = 0; i < a.length; i++)
{
    if (k.indexOf(a[i]) >= 0)
    {
        v[k.indexOf(a[i])]++;
    }
    else
    {
        k.push(a[i]);
        v.push(0);
    }
}
var max = -1;
var index = -1;
for (let i = 0; i < k.length; i++)
{
    if (v[i] > max)
    {
        max = v[i];
        index = i;
    }
}
document.writeln(k[index]);