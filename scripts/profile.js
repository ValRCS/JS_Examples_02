//Setup
var contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"]
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"]
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        // console.log(contacts[i]);
        // if (contacts[i].firstName === name) {
        if (contacts[i]["firstName"] === name) {
            console.log("Cool found match!");
            // console.log(contacts[i]);
            if (contacts[i].hasOwnProperty(prop)) {
                console.log("Found property", prop);
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }

    return "No such contact";
    // Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Akira", "dislikes"));
console.log(lookUpProfile("Valdis", "dislikes"));
