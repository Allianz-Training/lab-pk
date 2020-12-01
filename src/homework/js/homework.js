console.log("=================== Home work =====================")
// hw1
let array1 = [1,2,30,400]
let array2 = array1.map(n => n *2)
console.log('1.1', array2)

// hw2
array1 = [1,2,3,4]
array2 = array1.map(i => i + '')
console.log('1.2', array2)

// hw3
array1 = [1, '1', 2, {}]
array2 = array1.map(e => typeof e )
console.log('1.3', array2)

// hw4
array1 = ['apple', 'banana', 'orange']
array2 = array1.map(e => e.toUpperCase())
console.log('1.4', array2)

// hw5
array1 = [
    {name: 'apple', age: 14},
    {name: 'banana', age: 18},
    {name: 'watermelon', age: 32},
]

array2 = array1.map(obj => obj.name)
console.log('1.5', array2)

// hw6
array2 = array1.map(obj => obj.age)
console.log('1.6', array2)

// hw7
array1 = [
    {name: 'apple', surname: 'London'},
    {name: 'banana', surname: 'Bangkok'},
    {name: 'watermelon', surname: 'Singapore'},
]

array2 = array1.map(obj => obj.name + ' ' + obj.surname)
console.log('1.7', array2)

// hw8
array1 = [1, 3, 4, 5, 6, 7, 8]
array2 = array1.map(num => num % 2 === 0 ? 'even' : 'odd')
console.log('1.8', array2)

// hw9
array1 = [1, -3, 2, 8 ,-3, 5]
array2 = array1.map(num => Math.abs(num))
console.log('1.9', array2)

// hw10
array1 = [100, 200.25, 300.84, 400.3]
array2 = array1.map(n => n.toFixed(2) + '')
console.log('1.10', array2)

// hw11
array1 = [
    {name: 'apple', birth: '2000-01-01'},
    {name: 'banana', birth: '1990-10-01'},
    {name: 'watermelon', birth: '1985-12-01'},
]
array2 = array1.map(obj => {
    const year = obj.birth.split('-')[0]
    return {...obj, age: 2019-year}
})
console.log('1.11', array2)


// hw12
array2 = array1.map(obj => {
    return `<tr> <td>${obj.name}</td> <td>${new Date(obj.birth).toUTCString().slice(5, 16).toLowerCase()}</td></tr>`
})
console.log('1.12', array2)

// hw2.1
array1 = [1,2,30,400]
array2 = array1.filter(num => num > 10)
console.log('2.1', array2)

// hw2.2
array1 = [1,2,3,4]
array2 = array1.filter(n => n % 2 !==0)
console.log('2.2', array2)

// hw2.3
array1 = [1,'1', 2, {}]
array2 = array1.filter(e => typeof e === 'number')
console.log('2.3', array2)

// hw2.4
array1 = ['apple', 'banana', 'orange', 'pineapple', 'watermelon']
array2 = array1.filter(s => s.length > 6)
console.log('2.4', array2)

// hw2.5
array1 = [
    {name: 'apple', age: 14},
    {name: 'banana', age: 18},
    {name: 'watermelon', age: 32},
    {name: 'pineapple', age: 16},
    {name: 'peach', age: 24},
]
array2 = array1.filter(obj => obj.age < 18)
console.log('2.5', array2)

// hw2.6
array2 = array1.filter(obj => obj.age !== 32)
console.log('2.6', array2)

// hw2.7
array1 = [1,-3,2,8,-4,5]
array2 = array1.filter(num => num > 0)
console.log('2.7 ', array2)

// hw2.8
array1 = [1,3,4,5,6,7,8]
array2 = array1.filter(num => num % 3 === 0)
console.log('2.8 ', array2)

// hw2.9
array1 = ['peach', 1, -3, '2', {}, []]
array2 = array1.filter(e => typeof e === 'string')
console.log('2.9', array2)

// hw2.10
array1 = ['APPLE', 'appLE', 'PEACH', 'PEach']
array2 = array1.filter(s => s.toUpperCase() === s)
console.log('2.10', array2)

// hw2.11
array1 = [
    {name: 'apple', birth: '2001-01-01'},
    {name: 'banana', birth: '1990-10-10'},
    {name: 'watermelon', birth: '1985-12-30'},
    {name: 'peach', birth: '2002-10-13'},
]

array2 = array1.filter(obj => (new Date(obj.birth)).getMonth() === 9)
console.log('2.11', array2)

// hw2.12
array2 = array1.filter(obj => (new Date(obj.birth)).getFullYear() < 2000)
console.log('2.12', array2)