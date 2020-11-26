'use strict'

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request
  }


  onMessage(message) {
    console.log(message);
    console.log("mesaj");
    // listening for message event
  }

  onTest(message) {
    console.log(message);
    console.log("test");
    // listening for message event
  }

  onClose(message) {
    console.log(message);
    console.log("close");
    // listening for message event
  }
}

module.exports = ChatController
