// 53. Global Event Bus (Custom Event System) 
// Task 
// Create a simple publish/subscribe event system. 
// Example 
// eventBus.subscribe("userLogin", callback) 
// eventBus.publish("userLogin", {name:"John"}) 
// Behaviour 
// Multiple components can listen to same event. 

const component1 = document.getElementById('comp1')
const component2 = document.getElementById('comp2')


const eventBus = {
    events: {},
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    },

    publish(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => cb(data))
        }
    }
}

eventBus.subscribe("userLogin1", (data) => {
    const p = document.createElement('li');
    p.textContent = `
    Hello ${data.name} this is component - 1
    `
    component1.appendChild(p)

})

eventBus.subscribe("userLogin2", (data) => {
    const p = document.createElement('li');
    p.textContent = `
    Hello ${data.name} this is component - 2
    `
    component2.appendChild(p)

})

function loginUser() {
    eventBus.publish("userLogin1", { name: "John" })
    eventBus.publish("userLogin1", { name: "sam" })

    eventBus.publish("userLogin2", { name: "Mark" })
    eventBus.publish("userLogin2", { name: "ravi" })


}
