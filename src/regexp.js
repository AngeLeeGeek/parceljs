/*
 正则表达式的学习跟练习
 2018-3-7	
 */

// 给数字添加千分位
const str = '123456789100';

// 零宽断言
const str1 = str.replace(/\d{1,3}(?=(\d{3})+$)/g, function(s) {
	return s + ',';
})
console.log(str1);
/**
 * 正则内容
 * \d{3}: 三个数字
 * (\d{3})+: 重复一次或者多次的三个数字
 * (\d{3})+$: 从尾部开始，重复一次或者多次的三个数字
 * (?=(\d{3})+$): 这是一个零宽正预测先行断言，表示从尾部开始，(\d{3})匹配内容的位置，重复一次或者多次的匹配那个位置
 * /\d{1,3}(?=(\d{3}))/: 因为千分位最前面的千分位数字长度是1到3，所以加一个\d{1,3};
 */

// 子项
const str2 = str.replace(/(\d{1,3})(?=(\d{3})+$)/g, function($1) {
	return $1 = $1 + ',';
});
console.log(str2);

// 先将字符串转化为数组，将数组反转，反转后的数组转化成字符串，把字符串从前面开始每三位加上,逗号，去掉最后的逗号，转化成数组，把数组反转，转换成字符串
const str3 = str.split('').reverse().join('').replace(/(\d{3})+?/g, function ($1) {
	return $1 = $1 + ',';
}).replace(/,$/, '').split('').reverse().join('');
console.log(str3);

console.log(str.split('').reverse().join('').replace(/(\d{3})+?/g, function ($1) {
	return `${$1},`;
}).replace(/,$/, '').split('').reverse().join(''));