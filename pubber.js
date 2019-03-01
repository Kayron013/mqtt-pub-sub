const mqtt = require('mqtt'),
    client = mqtt.connect('mqtt://localhost');

client.on('connect', _ => {
    setInterval(_ => {
        client.publish('test', 'Hello mqtt');
        client.publish('test2', 'hbjnkj');
        console.log('Message Sent');
    }, 5000);
});