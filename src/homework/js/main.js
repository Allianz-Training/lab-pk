console.log("================ 1 ===============")
const draw1 = (n = 2) => {
    let str = '';
    for(let i = 0; i < n; i++){
        str += '*';
    }
    console.log(str)
}
draw1(3);

console.log("\n================ 2 ===============")
const draw2 = (n = 2) => {
    const star = '*'
    for(let i = 0; i < n; i++) {
        console.log(star.repeat(n))
    }
}

draw2()

console.log("\n================ 3 ===============")
const draw3 = (n = 2) => {
    let str = ''
    for(let i = 1, j = 1; i <= (n**2); i++) {
        if(i % n == 0) {
            str += `${j}\n`
            j = 1
        } 
        else str += j++
    }
    console.log(str)
}

draw3(3)

console.log("\n================ 4 ===============")
const draw4 = (n = 2) => {
    for(let i = 0; i < n; i++) {
        console.log(String(i+1).repeat(n))
    }
}

draw4(3)
console.log("\n================ 5 ===============")
const draw5 = (n = 2) => {
    for(let i = n; i > 0; i--) {
        console.log(String(i).repeat(n))
    }
}

draw5(3)

console.log("\n================ 6 ===============")
const draw6 = (n = 2) => {
    let str = ''
    for(let i = 1; i <= (n**2); i++) {
        if(i % n == 0) str += `${i}\n`
        else str += i
    }
    console.log(str)
}

draw6(3)

console.log("\n================ 7 ===============")
const draw7 = (n = 2) => {
    let str = ''
    for(let i = 1, j = n**2; i <= (n**2); i++, j--) {
        if(i % n == 0) str += `${j}\n`
        else str += j
    }
    console.log(str)
}

draw7(3)

console.log("\n================ 8 ===============")
const draw8 = (n = 2) => {
    // let j = 0;
    for(let i = 0, j = 0; i < n; i++, j += 2) {
        console.log(j)
    }
}

draw8(4)
console.log("\n================ 9 ===============")
const draw9 = (n = 2) => {
    for(let i = 0, j = 2; i < n; i++, j += 2) {
        console.log(j)
    }
}

draw9(3)
console.log("\n================ 10 ===============")
const draw10 = (n = 2) => {
    let str = ''
    for(let i = 0; i < n; i++) {
        for(let j = 1; j <= n; j++) {
            str += j*(i+1)
        }
        str += '\n'
    }
    console.log(str)
}

draw10(3)
console.log("\n================ 11 ===============")
const draw11 = (n = 2) => {
    let str = ''
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            str += i === j ? '-' : '*'
        }
        str += '\n'
    }
    console.log(str)
}

draw11(3)
console.log("\n================ 12 ===============")
const draw12 = (n = 2) => {
    let str = ''
    let col = n
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            str += j === col -1 ? '-' : '*'
        }
        str += '\n'
        col--
    }
    console.log(str)
}

draw12(3)
console.log("\n================ 13 ===============")
const draw13 = (n = 2) => {
    let row = n;
    let str = ''
    for(let i = 0; i < n; i++) {
        str += '*'.repeat(i+1)
        str += '-'.repeat(--row)
        str += '\n'
    }
    console.log(str)
}

draw13(4)
console.log("\n================ 14 ===============")
const draw14 = (n = 2) => {
    let str = ''
    for(let i = n, row = 0; i > 0; i--, row++) {
        str += '*'.repeat(i)
        str += '-'.repeat(row)
        str += '\n'
    }
    console.log(str)
}

draw14(4)
console.log("\n================ 15 ===============")
const draw15 = (n = 2) => {
    let str = ''
    for(let i = 0, row = n; i < n; i++) {
        str += '*'.repeat(i+1)
        str += '-'.repeat(--row)
        str += '\n'
    }
    for(let i = n-1, row = 1; i > 0; i--, row++) {
        str += '*'.repeat(i)
        str += '-'.repeat(row)
        str += '\n'
    }
    console.log(str)
}

draw15(2)
console.log("\n================ 17 ===============")
const draw17 = (n = 2) => {
    let str = ''
    let row = n
    for(let i = 0; i < n; i++) {
        str += '-'.repeat(--row)
        str += '*'.repeat(i+1)
        str += '\n'
    }
    console.log(str)
}

draw17(3)
console.log("\n================ 18 ===============")
const draw18 = (n = 2) => {
    let str = ''
    let row = n
    for(let i = 0; i < n; i++) {
        str += '-'.repeat(i)
        str += '*'.repeat(row--)
        str += '\n'
    }
    console.log(str)
}

draw18(3)
console.log("\n================ 19 ===============")
const draw19 = (n = 2 ) => {
    let str = ''
    for(let i = 0, row = n; i < n; i++) {
        str += '-'.repeat(--row)
        str += '*'.repeat(i+1)
        str += '\n'
    }
    for(let i = 1, row = n; i < n; i++) {
        str += '-'.repeat(i)
        str += '*'.repeat(--row)
        str += '\n'
    }
    console.log(str)
}

draw19(3)
console.log("\n================ 20 ===============")
const draw20 = (n = 2 ) => {
    let str = ''
    let count = 1
    for(let i = 0, row = n; i < n; i++) {
        str += '-'.repeat(--row)
        for(let j = 0; j < i+1; j++) {
            str += count++
        }
        str += '\n'
    }
    for(let i = 1, row = n; i < n; i++) {
        str += '-'.repeat(i)
        for(let j = 0; j < n-i; j++) {
            str += count++
        }
        str += '\n'
    }
    console.log(str)
}

draw20(2)
console.log("\n================ 21 ===============")
const draw21 = (n = 2) => {
    let str = ''
    for (let i = 1; i < n+1; i++) {
        str += '-'.repeat(n-i)
        str += '*'.repeat(2*i-1)
        str += '-'.repeat(n-i)
        str += '\n'
    }
    console.log(str)
}

draw21(3)
console.log("\n================ 22 ===============")
const draw22 = (n = 2) => {
    let str = ''
    for (let i = n; i > 0; i--) {
        str += '-'.repeat(n-i)
        str += '*'.repeat(2*i-1)
        str += '-'.repeat(n-i)
        str += '\n'
    }
    console.log(str)
}

draw22(3)
console.log("\n================ 23 ===============")
const draw23 = (n = 2) => {
    let str = ''
    for (let i = 1; i < n+1; i++) {
        str += '-'.repeat(n-i)
        str += '*'.repeat(2*i-1)
        str += '-'.repeat(n-i)
        str += '\n'
    }

    for (let i = n-1; i > 0; i--) {
        str += '-'.repeat(n-i)
        str += '*'.repeat(2*i-1)
        str += '-'.repeat(n-i)
        str += '\n'
    }
    console.log(str)
}

draw23(3)
console.log("\n================ 24 ===============")
const draw24 = (n = 2) => {
    let str = ''
    let count = 1
    for (let i = 1; i < n+1; i++) {
        str += '-'.repeat(n-i)
        for(let j = 0; j < 2*i-1; j++) {
            str += count++ + ''
        }
        str += '-'.repeat(n-i)
        str += '\n'
    }
    for (let i = n-1; i > 0; i--) {
        str += '-'.repeat(n-i)
        for(let j = 0; j < 2*i-1; j++) {
            str += count++ + ''
        }
        str += '-'.repeat(n-i)
        str += '\n'
    }
    console.log(str)
}

draw24(3)