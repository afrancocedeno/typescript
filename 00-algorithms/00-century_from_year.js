function centuryFromYear(year) {
    var century = Math.ceil(year / 100);
    return (century);
}
var v = centuryFromYear(1900);
console.log(v);
