var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();


function sendPing(connection) {
  setInterval(() => {
    connection.send(JSON.stringify(
      {
        t: 8
      }
    ));

  }, 2000);
}



function sendSubscribe(connection) {
  connection.send(JSON.stringify(
    {
      t: 1,
      d: {
        topic: "chat",
      }
    }
  ));
}


function sendTestEvent(connection) {

  connection.send(JSON.stringify(
    {
      "t": 7,
      "d": {
        "topic": "chat",
        "event": "test",
        "data": "nasılsın"

      }
    }
  ));

}

function sendMessageEvent(connection) {

  connection.send(JSON.stringify(
    {
      "t": 7,
      "d": {
        "topic": "chat",
        "event": "message",
        "data": "nasılsın"

      }
    }
  ));

}



client.on('connect', function (connection) {
  console.log('WebSocket Client Connected');
  connection.on('error', function (error) {
    console.log("Connection Error: " + error.toString());
  });
  connection.on('close', function () {
    console.log('echo-protocol Connection Closed');
  });
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log("Received: '" + message.utf8Data + "'");
    }
  });


  sendPing(connection);
  sendSubscribe(connection);
  sendTestEvent(connection);
  sendMessageEvent(connection);


});

client.connect('ws://127.0.0.1:5010/adonis-ws');

