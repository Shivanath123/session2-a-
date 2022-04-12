module.exports = function(val, error){
    let n = val.length;
    let s = '!';
    if (error==undefined)
    {
        /* if error value is undefined then string should repeat upto length of val*/
        return val+s.repeat(n);
    }
    else{
        /*  repeat the string upto the given value*/
        return val+s.repeat(error);
    }
}