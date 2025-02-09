// Make sure to RETURN all of your results

const joinStrings = (str1, str2) => {
  // Return a string with both strings combined. You MUST include a space between the two strings when joining.
  return `${str1} ${str2}`
}

const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  let totalSum = 0
  arrNums.forEach((element) => {
    if (typeof element === 'number') {
      totalSum += element
    }
  })
  return totalSum
}

const returnAllValues = (object) => {
  // return all values from the provided object in a new array
  let newObject = Object.keys(object)
  const array = newObject.map((i) => {
    return object[i] // + 1 to match object keys starting at 1
  })
  return array
}

const countItems = (arr) => {
  // return total number of items in the provided array
  return arr.length
}

const returnAllEvens = (nums) => {
  // return all even numbers in a new array from the provided nums array.
  let evenNums = nums.map((element) => {
    if (element % 2 === 0) {
      return element
    }
  })
  return evenNums
}

const returnPower = (num, pow) => {
  // return the provided num to the power provided
  return Math.pow(num, pow)
}

module.exports = {
  joinStrings,
  absoluteSum,
  returnAllValues,
  countItems,
  returnAllEvens,
  returnPower
}
