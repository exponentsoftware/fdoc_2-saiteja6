const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

function createArrayOfArrays(nations) {
    const dataOfNations = nations.map(nation => {
        return (
            `${nation.charAt(0).toUpperCase()}${nation.substring(1).toLowerCase()}`
        )
    })
    return dataOfNations
}

console.log(createArrayOfArrays(countries))

// console.log('Hello, World!')