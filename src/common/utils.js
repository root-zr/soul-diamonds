// 判断是否有数字
export function haveNumber(val) {
    let flag = /^.*\d.*$/;
    return flag.test(val);
}

// 判断是否有字母
export function haveLetter(val) {
    let flag = /^.*[A-Za-z].*$/;
    return flag.test(val)
}

// 返回一个由两个数组中的每个数组元素求和的数组
export function zipSum(a, b) {
    return a.length ? [a.shift() + b.shift()].concat(zipSum(a, b)) : []
}
