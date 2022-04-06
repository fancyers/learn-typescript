var user = { name: 'capt', age: 100 }
var admin = { role: 'admin' }
admin.__proto__ = user
console.log(admin.name)
console.log(admin.age)
