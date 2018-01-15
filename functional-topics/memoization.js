// memo is a wrapper function that will take any function as an argument
// and return a new function acting in the name of f but enhanced with cache
const memo = f => {
    // cache to store values once computed by f function
    const cache = {}

    // memo – a wrapper function – returns a function that takes an
    // arbitrary number of arguments turning them into an array
    // with rest operator (...args)
    return (...args) => {
        // make a list of arguments a string, so it can serve
        // as a key in the cache object
        const key = JSON.stringify(args)

        console.log('>>> Running with arguments: ', key)
        console.log('>>> Current cache:          ', cache)

        // if the value for the current args is not yet cached
        if (cache[key] === undefined) {
            console.log('--- Updating cache')

            // run wrapped function with current arguments using
            // spread operator (...args) to turns an array of
            // arguments into separate function arguments
            // store the result under stringified arguments key
            // in cache for future use
            cache[key] = f(...args)

            console.log('>>> Updated cache:          ', cache)
        }

        // retrieve value from the cache and return it
        return cache[key]
    }
}

// --------------- Example 1 ---------------
const sum = (a, b) => {
    // use console.log in the function to see if the result
    // is computed or taken from cache
    console.log('--- SUM: Computing')

    return a + b
}

// wrap the function with memoization provider – memo
const memoSum = memo(sum)
const memoSum2 = memo(sum)

// show the results for each set arguments are computed only for the first function call
console.log('================================================================================')
console.log('                                   Example 1')
console.log('================================================================================')
console.log(`>>> memoSum(1, 2)  ------->  ${memoSum(1, 2)}`)
console.log('================================================================================')
console.log(`>>> memoSum(1, 2)  ------->  ${memoSum(1, 2)}`)
console.log('================================================================================')
console.log(`>>> memoSum(1, 2)  ------->  ${memoSum(1, 2)}`)
console.log('================================================================================')
console.log(`>>> memoSum(2, 1)  ------->  ${memoSum(2, 1)}`)
console.log('================================================================================')
console.log(`>>> memoSum(2, 1)  ------->  ${memoSum(2, 1)}`)
console.log('================================================================================')
console.log(`>>> memoSum(2, 1)  ------->  ${memoSum(2, 1)}`)
console.log('================================================================================')
console.log(`>>> memoSum2(2, 1)  ------->  ${memoSum2(2, 1)}`)




// --------------- Example 2 ---------------
const counter = (xs) => {
    // use console.log in the function to see if the result
    // is computed or taken from cache
    console.log('--- COUNTER: Computing')

    return Object.keys(xs).length
}

// test data
const objA = { n: 'a', m: 'b' }
const objB = { x: 1, y: 2 }

// wrap the function with memoization provider – memo
const memoCounter = memo(counter)

// show the results for each set arguments are computed only for the first function call
console.log('================================================================================')
console.log('                                   Example 2')
console.log('================================================================================')
console.log('>>> memoCounter(objA)  --> ', memoCounter(objA))
console.log('================================================================================')
console.log('>>> memoCounter(objA)  --> ', memoCounter(objA))
console.log('================================================================================')
console.log('>>> memoCounter(objB)  --> ', memoCounter(objB))
console.log('================================================================================')
console.log('>>> memoCounter(objA)  --> ', memoCounter(objA))




// --------------- Example 3 ---------------
const timely = (n) => {
    // use console.log in the function to see if the result
    // is computed or taken from cache
    console.log('--- TIMELY: Computing')

    // make something time consuming
    let count = n * 1000000
    while (count > 0) {
        count -= 1
    }

    return (x) => x * n
}

// wrap the function with memoization provider – memo
const memoTimely = memo(timely)

// helper for tracking time performance of
let timerStart

// show the results for each set arguments are computed only for the first function call
// and difference in time needed for computing the results and using cached ones
console.log('================================================================================')
console.log('                                   Example 3')
console.log('================================================================================')
timerStart = Date.now()
console.log('>>> memoTimely(50)  ------> ', memoTimely(50))
console.log('>>> memoTimely(50)(10)  --> ', memoTimely(50)(10))
console.log('>>> Time elapsed:           ', Date.now() - timerStart, 'ms')
console.log('================================================================================')
timerStart = Date.now()
console.log('>>> memoTimely(50)  ------> ', memoTimely(50))
console.log('>>> memoTimely(50)(10)  --> ', memoTimely(50)(10))
console.log('>>> Time elapsed:           ', Date.now() - timerStart, 'ms')
console.log('================================================================================')
timerStart = Date.now()
console.log('>>> memoTimely(30)  ------> ', memoTimely(30))
console.log('>>> memoTimely(30)(10)  --> ', memoTimely(30)(10))
console.log('>>> Time elapsed:           ', Date.now() - timerStart, 'ms')
console.log('================================================================================')
timerStart = Date.now()
console.log('>>> memoTimely(30)  ------> ', memoTimely(30))
console.log('>>> memoTimely(30)(10)  --> ', memoTimely(30)(10))
console.log('>>> Time elapsed:           ', Date.now() - timerStart, 'ms')
console.log('================================================================================')
