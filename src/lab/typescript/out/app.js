let text;
text = 'Hello';
console.log(text.length);
console.log(text.charAt(0));
console.log(text[0]);
console.log(text.concat(' World'));
console.log('========== Lab 2 =========');
console.log('microsoft excel'.toUpperCase());
console.log('GOOGLE AND APPLE'.toLowerCase());
let hello = 'hello world';
console.log("H" + hello.slice(1, 6) + 'W' + hello.slice(7));
console.log('\n========== Lab 3 =========');
console.log('Hello World');
console.log('Start With Hello ' + 'Hello World'.startsWith('Hello'));
console.log('Start With World ' + 'Hello World'.startsWith('World'));
console.log('End With Hello ' + 'Hello World'.endsWith('Hello'));
console.log('End With World ' + 'Hello World'.endsWith('World'));
console.log('Computer -> ' + 'Computer'.slice(3, 6));
console.log('Death Race -> ' + 'Death Race'.slice(0, 5));
console.log('Republican -> ' + 'Republican'.slice(2, 8));
console.log('\n========== Lab 4 =========');
console.log('1,000,000 ', 1e6);
console.log('10,000,000 ', 1e7);
console.log('43,000,000,000 ', 43e9);
console.log('0.000012 ', 1.2e-5);
console.log('0.0000001234 ', 1.234e-7);
console.log('1e10 = ', Math.pow(10, 10));
console.log('2e5 = ', 2 * Math.pow(10, 5));
console.log('122e8 = ', 122 * Math.pow(10, 8));
console.log('1e-8 = ', Math.pow(10, -8));
console.log('12e-5 = ', (1.2 * Math.pow(10, -4)).toFixed(5));
console.log('\n========== Lab 5 =========');
let nums = [100, 111, 55, 21, 99];
nums.map(e => console.log(`${e} to Octa => ${e.toString(8)}`));
nums.map(e => console.log(`${e} to Hexa => ${e.toString(16)}`));
console.log('round 12.423 =>', Math.round(12.423));
console.log('round 31313.135 =>', Math.round(31313.135));
console.log('round 42.809 =>', Math.round(42.809));
console.log('\n========== Lab 09/12 =========');
const randomMinMax = (min, max) => {
    return Math.random() * (max - min) + min;
};
console.log(randomMinMax(1, 2));
let a, c = false;
let b = true;
console.log('a || (b && c) =>', a || (b && c));
console.log('b || a || c =>', b || a || c);
console.log('b && (a || c) =>', b && (a || c));
let arr = [false, 'ABC', 113113, null, '', '13qed'];
arr.map(e => console.log(`Typeof ${e} =>`, typeof e));
let student = {
    name: 'John',
    isGraduate: true,
    gpax: 3.56,
    age: 18,
    address: {
        zipcode: 0,
    }
};
let student2 = Object.assign({}, student);
student2.address = null;
for (let key in student2) {
    console.log(`${key} : ${student2[key]}`);
}
student.isActive = true;
for (let key in student) {
    console.log(`${key} : ${student[key]}`);
}
delete student.isActive;
for (let key in student) {
    console.log(`${key} : ${student[key]}`);
}
let str = 'Apple, Cat, Zoo, Brid, Dog';
let strArr = str.split(', ').sort();
console.log(strArr);
nums = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
console.log(nums.filter(num => (num + '').startsWith('1')));
strArr = ['Apple', 'Mango', 'Cat', 'Banana'];
strArr.splice(2, 1, 'Orange');
console.log(strArr);
const heroes = [
    {
        id: 'a001',
        name: 'thor',
        weapons: ['axe, hammer']
    },
    {
        id: 'a002',
        name: 'Tony',
        weapons: ['iron suite']
    }
];
let heroesMap = new Map();
heroes.map(item => heroesMap.set(item.id, item));
console.log(heroesMap);
console.log('ID a001 =>', heroesMap.get('a001'));
heroesMap.delete('a002');
console.log(heroesMap);
const areaRectangle = (width, length) => {
    return width * length;
};
const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return false;
    }
    return number > 1;
};
var translationEnum;
(function (translationEnum) {
    translationEnum["English"] = "English";
    translationEnum["Thai"] = "Thai";
    translationEnum["French"] = "French";
    translationEnum["Dutch"] = "Dutch";
})(translationEnum || (translationEnum = {}));
let translation = (input) => {
    switch (input) {
        case 1:
            return translationEnum.English;
        case 2:
            return translationEnum.Thai;
        case 3:
            return translationEnum.French;
        case 4:
            return translationEnum.Dutch;
        default:
            return translationEnum.English;
    }
};
console.log(translation(1));
console.log(translation(3));
//# sourceMappingURL=app.js.map