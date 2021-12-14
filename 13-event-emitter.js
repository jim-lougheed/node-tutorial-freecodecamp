const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received: ${name} ${id}`)
})

customEmitter.on('response', () => {
    console.log(`no data passed into this callback`)
})

customEmitter.emit('response', 'john', 34)