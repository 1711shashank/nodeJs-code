const student = {
    name: 'Shashank',
    printName: function () {
        console.log(this.name)
    }
}

const student2 = {
    name: 'Jay',
}

student.printName.call(student2);

//apply => same as call but takes [student2, student3]



// bind
// Returns a new function with the `this`

const obj1 = {
    name: "Shashank",
    sayHi() {
        console.log("Hi " + this.name);
    }
};
const obj2 = {
    name: "Kumar",
};

setTimeout(obj1.sayHi, 1000); // ❌ undefined (this lost)
setTimeout(obj1.sayHi.bind(obj2), 1000); // ✅ Hi Shashank

