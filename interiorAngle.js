/* This week’s question:
Given an integer n representing the number of sides of a regular polygon, 
return the measure of each interior angle. Bonus points: implement some of the other functions listed in the linked Wikipedia page!

Example:

$ interiorAngleSize(3)
$ 60 // Each angle in a triangle that is a regular polygon is 60 degrees

$ interiorAngleSize(8)
$ 135 */
function interiorAngleSize(n) {
    return 180*(n-2)/n
}
console.log(interiorAngleSize(8))
//The area of a convex regular n-sided polygon having side s=1
function area(n) {
    return (n/4)*((Math.tan(Math.PI/n))**(-1))
}
console.log(area(6))

