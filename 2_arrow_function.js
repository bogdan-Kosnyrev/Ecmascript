// function sum(a, b) {
//   return a + b
// }

// function cube(a) {
//   return a ** 3
// }

// const sum = (a, b) => a + b

// const cube = a => a ** 3

// console.log(sum(41, 1))
// console.log(cube(2))

// setTimeout(() => console.log('After one second'), 1000)

// Context
function log() {
  console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
  name: "Ekaterina",
  age: 25,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    // const self = this
    global.setTimeout(() => {
      console.log(this.name + ' ' + this.age)
    }, 500)
  }
}

// console.log(global)
// person.arrowLog()

person.delayLog()



