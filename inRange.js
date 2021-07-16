/* This week’s question:
Given an IPv4 address and a netmask in CIDR notation, return a boolean specifying whether the IP address is inside the given range.

Example:

$ inRange("192.168.4.27", "192.168.0.0/16")
$ true

$ inRange("192.168.4.27", "192.168.1.0/24")
$ false */
function inRange(str1,str2) {
    const isa=str1.split('.');
    var a=isa[2];
    var b=isa[3];
    const searchFrom='/';
    const word=str2.indexOf(searchFrom);
    var newstr=str2.slice(word+1);
    if(newstr==16){
        if(a<256 && b<256){
            console.log(true);
        }else{
            console.log(false);
        }
    }
    if(newstr==24){
        if(a==0 && b<256){
            console.log('true');
        }else{
            console.log(false);
        }
    }

    
}
inRange("192.168.4.27", "192.168.0.0/16")
inRange("192.168.4.27", "192.168.1.0/24")
inRange("192.168.255.27", "192.168.0.0/16")
inRange("192.168.0.259", "192.168.1.0/24")