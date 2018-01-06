// functional tick
const tickFactory = () => {
    // counter local to the tickFactory function scope
    let counter = 0

    // internal function that when called updates counter 
    // and returns it's current value
    const tick = () => {
        counter += 1
        return counter
    }

    // tick function is returned making it the only access 
    // point to the counter value
    return tick
}

// create two separate counters
const tickA = tickFactory()
const tickB = tickFactory()

// show the counters are independent from each other
console.log('===========================================')
console.log('            Example 1')
console.log('===========================================')
console.log(`>>> tickA()  ------------>  A: ${tickA()}`)
console.log(`>>> tickA()  ------------>  A: ${tickA()}`)
console.log(`>>> tickB()  ------------>          B: ${tickB()}`)
console.log(`>>> tickA()  ------------>  A: ${tickA()}`)
console.log(`>>> tickB()  ------------>          B: ${tickB()}`)
console.log(`>>> tickA()  ------------>  A: ${tickA()}`)
console.log(`>>> tickB()  ------------>          B: ${tickB()}`)



// pseudo object-orientation in functional world
const counterFactory = () => {
    // counter local to the tickFactory function scope
    let counter = 0

    // internal access function to the counter value
    const getValue = () => counter
    
    // internal function that updates the counter 
    // and returns it's current value
    const nextTick = () => { 
        counter += 1
        return counter
    }

    // an object is returned providing two methods
    // for accessing and manipulating the counter
    return {
        value: getValue,
        tick: nextTick
    }
}

// create two separate counters
const counterA = counterFactory()
const counterB = counterFactory()

// show the counters are independent from each other
console.log('===========================================')
console.log('            Example 2')
console.log('===========================================')
console.log(`>>> counterA.value()  --->  A: ${counterA.value()}`)
console.log(`>>> counterA.tick()   --->  A: ${counterA.tick()}`)
console.log(`>>> counterB.value()  --->          B: ${counterB.value()}`)
console.log(`>>> counterB.tick()   --->          B: ${counterB.tick()}`)
console.log(`>>> counterA.value()  --->  A: ${counterA.value()}`)
console.log(`>>> counterA.tick()   --->  A: ${counterA.tick()}`)
console.log(`>>> counterB.tick()   --->          B: ${counterB.tick()}`)
console.log(`>>> counterB.value()  --->          B: ${counterB.value()}`)
console.log(`>>> counterA.tick()   --->  A: ${counterA.tick()}`)
console.log(`>>> counterB.tick()   --->          B: ${counterB.tick()}`)



// partial application
const partialFactory = (startTime) => {
    // initialize local counter variable with value 
    // provided as argument of partialFactory
    let counter = startTime

    // local function progressing the counter with 
    // a value provided through it's parameter
    const progressCounter = (delta) => {
        counter += delta
        return counter
    }

    // progressCounter is returned providing interface
    // to arbitrarly update the counter 
    return progressCounter
}

// create two separate counters initialized with separate values
const partialA = partialFactory(0)
const partialB = partialFactory(100)

// show the counters are independent from each other
console.log('===========================================')
console.log('            Example 3')
console.log('===========================================')
console.log(`>>> partialA(1)   ------->  A: ${partialA(1)}`)
console.log(`>>> partialA(3)   ------->  A: ${partialA(3)}`)
console.log(`>>> partialB(10)  ------->          B: ${partialB(10)}`)
console.log(`>>> partialA(2)   ------->  A: ${partialA(2)}`)
console.log(`>>> partialB(5)   ------->          B: ${partialB(5)}`)
console.log(`>>> partialA(4)   ------->  A: ${partialA(4)}`)
console.log(`>>> partialB(10)  ------->          B: ${partialB(10)}`)




// function wrappers
// logger is a function that takes another function as an argument 
// and wraps it around with additional logging capabilities
const logger = (someFunction) => {
    // the assumption here is that someFunction 
    // is a function of two arguments
    return (a, b) => {
        // log time and type of operation
        console.log(`>>> Timestamp  ---------->  ${Date.now()}`)
        console.log(`>>> Running    ---------->  ${someFunction.name}(${a}, ${b})`)

        // make the actual computation
        const result = someFunction(a, b)

        // log the result
        console.log('>>> Result     ----------> ', result)

        // return the result just as someFunction 
        // would do when not wrapped
        return result
    }
}

// three test functions all of three arguments 
// serving completely different purpose
const sum = (a, b) => a + b
const egt = (a, b) => a >= b ? `${a} wins` : `${b} wins`
const obj = (k, v) => ({ [k]: v })

// wrap all test functions with logger
const logSum = logger(sum)
const logEgt = logger(egt)
const logObj = logger(obj)

// show the logger works just the same for each function
// without changing its original functionality
console.log('===========================================')
console.log('            Example 4')
console.log('===========================================')
logSum(3, 5)
logEgt(5, 7)
logObj('a', 5)


// universal wrapper
const uniLogger = (someFunction) => {
    // using rest operator we can make no assumption 
    /// about number of someFuction arguments
    return (...args) => {
        // log time and type of operation
        console.log(`>>> Timestamp  ---------->  ${Date.now()}`)
        console.log(`>>> Running    ---------->  ${someFunction.name}(${args.join(', ')})`)

        // make the actual computation using spread operator
        const result = someFunction(...args)

        // log the result
        console.log('>>> Result     ----------> ', result)

        // return the result just as someFunction 
        // would do when not wrapped
        return result
    }
}

// three test functions all of three arguments 
// serving completely different purpose
const uniSum = (a, b, c) => a + b + c
const uniEgt = (a, b) => a >= b ? `${b} loses` : `${a} loses`
const uniObj = (n) => ({ name: n })

// wrap all test functions with logger
const uniLogSum = uniLogger(uniSum)
const uniLogEgt = uniLogger(uniEgt)
const uniLogObj = uniLogger(uniObj)

// show the logger works just the same for each function
// without changing its original functionality
console.log('===========================================')
console.log('            Example 5')
console.log('===========================================')
uniLogSum(3, 5, 2)
uniLogEgt(5, 3)
uniLogObj('Jon')
console.log('===========================================')
