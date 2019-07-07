// print process.argv
var args = process.argv.slice(2);
args.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})


/**
 * returns an integer random number between minimum and maximum; min/max are included!
 * @param {*} minimum min of the intervall
 * @param {*} maximum max of the intervall
 */
function getRandomInt(minimum, maximum) {
    let min = parseInt(minimum);
    let max = parseInt(maximum) + 1;

    let n = parseInt((Math.random() * (max - min))) + min
    return n;
}

