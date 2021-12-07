/* This week’s question:
You have to order wrapping paper for presents. Given the length, width, and height of the boxes you need to wrap, return the number of square feet (or whatever units you want) of wrapping paper you need to order. Extra credit: allow for other shapes of presents and their dimensions!

Example:

$ wrap(2, 3, 4)
$ 52 square feet */

let wrap=(a,b,c)=> 2*(a*b+b*c+a*c)
console.log(wrap(2, 3, 4));
