// Objectives:
// select all span's with .number
// iterate over and log each span
// create updateCount function
// accept el as argument
// invoke and pass each span el in iteration

// select all span's with .number
const items = [...document.querySelectorAll('.number')]

// create updateCount function
// accept el as argument
const updateCount = (el) => {
    // parseInt() function parses a string argument and 
    // returns an integer of the specified radix 
    // (the base in mathematical numeral systems).
    const value = parseInt(el.dataset.value)
    // Math.ceil() function always rounds a number up to the next largest integer.
    const increment = Math.ceil(value / 1000)
    let intialValue = 0

    // setInterval() method, offered on the Window and Worker interfaces, 
    // repeatedly calls a function or executes a code snippet, with a fixed time delay 
    // between each call.
    const increaseCount = setInterval(() => {
        intialValue += increment
        // invoke and pass each span el in iteration
        if (intialValue > value) {
            el.textContent = `${value}+`
            clearInterval(increaseCount)
            return
        }
        // iterate over and log each span
        el.textContent = `${intialValue}+`
    }, 1)
    console.log(increaseCount)
}

items.forEach((item) => {
    updateCount(item)
})

// console.log('numbers project');
