//Review arrow function ES6
//Arrow functions don't bind their own "this" value



// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

// const event = {
//     name: 'Wedding Party',
//     printGuestList: function() { 
//         console.log('Guest list for ' + this.name)
//     }
// }

// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }

const event = {
    name: 'Wedding Party',
    guesList: ['Jules', 'Fern', 'Tesla'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guesList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()