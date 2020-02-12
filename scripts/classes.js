console.log("Class Examples");

function add(a, b) {
    console.log(a + b);
    return a + b;
}

//original JS way
const myObj = {
    myarr: [1, 2, 3, 5],
    mynum: 55,
    mystr: "Valdis",
    myfun: function () {
        console.log(this.mystr, this.mynum + 10);
    },
    myaddfun: add
}

myObj.myfun();
myObj.myaddfun(5, 10);

//classes in Javascript
class Rectangle {
    otherval = 150
    //so constructor will be called when we create with new
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    showVals() {
        console.log(this.height, this.width, this.otherval);
    }

}

let sq = new Rectangle(10, 10);

console.log(sq.height);
sq.showVals();

//create another class instance
const taisnsturis = new Rectangle(20, 40);
taisnsturis.showVals();

//class instance is still and object and we can do regular object thing to it..
taisnsturis.myOwnVal = 300;
console.log(taisnsturis.myOwnVal);
console.log(taisnsturis["myOwnVal"]);
