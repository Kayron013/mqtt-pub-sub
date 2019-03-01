const mqtt = require('mqtt'),
    client = mqtt.connect('mqtt://localhost');

client.on('connect', _ => {
    client.subscribe('test');
    client.subscribe('test2')
});

client.on('message', (topic, msg) => console.log(topic, msg.toString()));
//client.on('message', (t, m) => console.log(t, m.toString()));