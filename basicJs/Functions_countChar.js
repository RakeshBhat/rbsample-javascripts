function countChar(string, chr){
    var counted = 0;
    console.log(string);
    for(var i = 0; i < string.length; i++)
        if(string.charAt(i) == chr)
        counted += 1;
    return counted;        
}
