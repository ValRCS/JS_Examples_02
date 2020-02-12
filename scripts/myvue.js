console.log("Running my View");


const app = new Vue({
    el: '#app',
    data: {
        message: 'RCS!',
        mynum: 5,
        mydate: new Date(),
        seen: true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        jobs: [
            "Buy Milk",
            "Buy potatoes",
            "Clean the garage!"
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})