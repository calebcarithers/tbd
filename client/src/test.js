
const sum = (arr) => {
    let sum = 0;
    for (const ele of arr) {
        sum += ele;
    }
    console.log(`add this shit ${arr}`)
    console.log(`sum: ${sum}`)
}

export default sum
