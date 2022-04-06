function logText<T>(text: T): T {
	console.log(text)
	return text
}
logText<string>('하이')

// 제네릭 타입 제한 - 정의된 타입 이용
interface LengthType {
	length: number
}
function logTextLength<T extends LengthType>(text: T): T {
	console.log(text.length)
	return text
}

// 제네릭 타입 제한 - keyof
interface ShoppingItem {
	name: string
	price: number
	stock: number
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
	console.log(itemOption)
	return itemOption
}

getShoppingItemOption('name')
