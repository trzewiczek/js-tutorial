// test function
const sum = (a, b, c) => a + b + c

// helper variables for repetitive testing of three different
// currying implementations
let cSum
let inc, incTwo, incThree
let inc2, inc2Two, inc2Three

// wrap any function to enhance it with partial application
const superNaiveCurry = f => {
    // create a closure with an empty list collecting all partially
    // applied parameters till we get all we need to run function f
    let totalArgs = []

    // define a function of any parameters with two responsibilities:
    // » update totalArgs collection with newly provided parameters
    // » return result if all needed param,eters are already present
    //   in totalArgs or return itself, i.e. a function of any...
    const curriedFun = (...args) => {
	// udate partially collected list of arguments
	totalArgs = totalArgs.concat(args)

	// check if we have all parameters we need to run function f
	return totalArgs.length >= f.length
	    ? f(...totalArgs)   // run it if so
	    : curriedFun        // stay ready for next set of params
    }

    // return wrapped function
    return curriedFun
}


// wrap sum function for testing
cSum = superNaiveCurry(sum)

// first incrementator
inc = cSum(1)
incTwo = inc(2)
incThree = inc(3)

console.log('================== EXAMPLE ONE =================')
console.log('------------- First incrementator --------------')
console.log('Test if partial application returns functions:')
console.log('inc  -----------> ', typeof inc === 'function')
console.log('incTwo  --------> ', typeof incTwo === 'function')
console.log('incThree  ------> ', typeof incThree === 'function')
console.log('')
console.log('Apply all arguments to see resulting value:')
console.log('inc(4, 5)  -----> ', inc(4, 5), '     // Expected: 10')
console.log('incTwo(6)  -----> ', incTwo(6), '     // Expected:  9')
console.log('incThree(4)  --->  ERROR')
console.log('')

// second incrementator
inc2 = cSum(1)
// inc2Two = inc2(2)   --> ERROR
// inc2Three = inc2(3) --> ERROR
console.log('------------- Second incrementator -------------')
console.log('Test if partial application returns functions:')
console.log('inc2  ----------> ', typeof inc2 === 'function')
console.log('inc2Two  -------> ', typeof inc2Two === 'function')
console.log('inc2Three  -----> ', typeof inc2Three === 'function')
console.log('')
console.log('Apply all arguments to see resulting value:')
console.log('inc2(5, 6)  ---->  ERROR')
console.log('inc2Two(4)  ---->  ERROR')
console.log('inc2Three(2)  -->  ERROR')
console.log('------------------------------------------------')
console.log('')


const naiveCurry = f => {
    // add extra layer to create a closure every time
    // wrapped function is called
    return (...initialArgs) => {
	  let totalArgs = []

	  const curriedFun = (...args) => {
	      totalArgs = totalArgs.concat(...args)

	      return totalArgs.length >= f.length
		  ? f(...totalArgs)
		  : curriedFun
	  }

	  // when run first pass the initial arguments
	  // to curriedFun and return its value:
	  // » original function result or
	  // » curriedFun itself with initalArgs
	  //   stored in totalArgs
	  return curriedFun(...initialArgs)
      }
}

cSum = naiveCurry(sum)
// first incrementator
inc = cSum(1)
incTwo = inc(2)
incThree = inc(3)

console.log('================== EXAMPLE TWO =================')
console.log('------------- First incrementator --------------')
console.log('Test if partial application returns functions:')
console.log('inc  -----------> ', typeof inc === 'function')
console.log('incTwo  --------> ', typeof incTwo === 'function')
console.log('incThree  ------> ', typeof incThree === 'function')
console.log('')
console.log('Apply all arguments to see resulting value:')
console.log('inc(4, 5)  -----> ', inc(4, 5), '     // Expected: 10')
console.log('incTwo(6)  -----> ', incTwo(7), '     // Expected:  9')
console.log('incThree(4)  --->  ERROR')
console.log('')

// second incrementator
inc2 = cSum(1)
inc2Two = inc2(2)
inc2Three = inc2(3)
console.log('------------- Second incrementator -------------')
console.log('Test if partial application returns functions:')
console.log('inc2  ----------> ', typeof inc2 === 'function')
console.log('inc2Two  -------> ', typeof inc2Two === 'function')
console.log('inc2Three  -----> ', typeof inc2Three === 'function')
console.log('')
console.log('Apply all arguments to see resulting value:')
console.log('inc2(5, 6)  -----> ', inc2(5, 6), '     // Expected: 12')
console.log('inc2Two(4)  -----> ', inc2Two(4), '     // Expected:  7')
console.log('inc2Three(2)  -->  ERROR')
console.log('------------------------------------------------')
console.log('')


const curry = f => {
    const curriedFun = (...args) => {
      return args.length >= f.length
          ? f(...args)
          : (...nextArgs) => curriedFun(...args.concat(nextArgs))
    }
    return curriedFun
}

cSum = curry(sum)
// first incrementator
inc = cSum(1)
incTwo = inc(2)
incThree = inc(3)

console.log('================== EXAMPLE THREE ===============')
console.log('------------- First incrementator --------------')
console.log('Test if partial application returns functions:')
console.log('inc  -----------> ', typeof inc === 'function')
console.log('incTwo  --------> ', typeof incTwo === 'function')
console.log('incThree  ------> ', typeof incThree === 'function')
console.log('')
console.log('Apply all arguments to see resulting value:')
console.log('inc(4, 5)  -----> ', inc(4, 5), '     // Expected: 10')
console.log('incTwo(6)  -----> ', incTwo(6), '      // Expected:  9')
console.log('incThree(4)  ---> ', incThree(4), '      // Expected:  8')
console.log('')

// second incrementator
inc2 = cSum(1)
inc2Two = inc2(2)
inc2Three = inc2(3)
console.log('------------- Second incrementator -------------')
console.log('Test if partial application returns functions:')
console.log('inc2  ----------> ', typeof inc2 === 'function')
console.log('inc2Two  -------> ', typeof inc2Two === 'function')
console.log('inc2Three  -----> ', typeof inc2Three === 'function')
console.log('')
console.log('Apply all arguments to see resulting value:')
console.log('inc2(5, 6)  -----> ', inc2(5, 6), '     // Expected: 12')
console.log('inc2Two(4)  -----> ', inc2Two(4), '      // Expected:  7')
console.log('inc2Three(2)  ---> ', inc2Three(2), '      // Expected:  6')
console.log('------------------------------------------------')
console.log('')
