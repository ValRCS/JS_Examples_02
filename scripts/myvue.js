console.log("Running my View");

//we gain ability to use <todo-item> in our main vue app
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>Jobs:<em>{{ todo.text }}</em></li>'
})

const app = new Vue({
    el: '#app',
    data: {
        message: 'RCS!',
        mynum: 5,
        mydate: new Date(),
        seen: true,
        todos: [
            { id: 0, text: 'Learn JavaScript' },
            { id: 1, text: 'Learn Vue' },
            { id: 2, text: 'Build something awesome' }
        ],
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
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
        },
        toggleSeen: function () {
            this.seen = !this.seen;
        }
    }
})