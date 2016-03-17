


var addBinary = function(a){
    var c = Number.parseInt(a, 2);
    var b = Number.parseInt(a, 2);
    var result = b+c;
    return result.toString(2);
};



console.log(addBinary("01001011"));