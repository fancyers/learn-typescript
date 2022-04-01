// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
	(a: number, b: number): number
}

var sum: SumFunction
sum = function (a: number, b: number): number {
	return a + b
}

// 인덱싱
interface StringArray {
	[index: number]: string
}
var arr: StringArray = ['a', 'b', 'c']
arr[0]

// 딕셔너리 패턴
interface StringRegexDictionary {
	[key: string]: RegExp
}

var obj: StringRegexDictionary = {
	cssFile: /\.css$/,
	fsFile: /\.js$/,
}

// 인터페이스 확장
interface Person {
	name: string
	age: number
}

interface Developer extends Person{
	language: string
}
