function isPalindrom2(str) {
    const temtStr = str.split('').reverse().join('');
    return str === temtStr;
}

const name = isPalindrom2('aziza');
console.log(name);