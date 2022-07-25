/*This week’s question:
Given a string that has a valid email address, write a function to hide the first part of the email (before the @ sign), minus the first and last character. For extra credit, add a flag to hide the second part after the @ sign to your function excluding the first character and the domain extension.

Examples:

> hideEmail('example@example.com')
> 'e*****e@example.com'

> hideEmail('example+test@example.co.uk', hideFull)
> 'e**********t@e******.co.uk'*/
function hideEmail(str) {
    str1=str.substring(0,str.indexOf("@"));
    str2=str.substring(str.indexOf("@"));
    let first=str1.charAt(0);
    let last=str1.charAt(str1.length-1);
    let n=str1.length-2;
    let part='*';
    return(`${first}${part.repeat(n)}${last}${str2}`);
}
hideEmail('example@example.com')

function hideEmail(str) {
    str1=str.substring(0,str.indexOf("@"));
    str2=str.substring(str.indexOf("@")+1,str.indexOf('.'))
    str3=str.substring(str.indexOf('.')+1)
    let s=str2.charAt(0);
    let first=str1.charAt(0);
    let last=str1.charAt(str1.length-1);
    let n=str1.length-2;
    let m=str2.length-1;
    let part='*';
    
    
    return (`${first}${part.repeat(n)}${last}@${s}${part.repeat(m)}.${str3}`)
}
hideEmail('example+test@example.co.uk');
