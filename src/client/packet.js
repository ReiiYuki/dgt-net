////////////////////////////////////////////////////////////////////////////////
// Project: NodeJS Socket Template
// File: packet.js
// Author: 0angelic0
// Created Date: Dec 3, 2015
// Copyright: 2015 Digitopolis Co., Ltd.
////////////////////////////////////////////////////////////////////////////////

var packet_writer = require('./packet_writer.js');

var packet = {

  ////////////////////////////////////////////////////////////////////////////////
  // DO NOT MODIFY THESE VALUES
  PACKET_HEADER_SIZE: 2,
  PACKET_ID_SIZE: 2,
  ////////////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////
  // Client to Server
  ////////////////////////////////////////////////////////////////////////////////

  CS_LOGIN: 10001,
  CS_PING: 10002,
  CS_QUESTION: 10003,
  CS_CHAT: 10004,


  ////////////////////////////////////////////////////////////////////////////////
  // Server to Client
  ////////////////////////////////////////////////////////////////////////////////

  SC_ERROR: 20000,
  SC_LOGGED_IN: 20001,
  SC_PING_SUCCESS: 20002,
  SC_QUESTION: 20003,
  SC_CHAT: 20004,
};

////////////////////////////////////////////////////////////////////////////////
// Received Packets
////////////////////////////////////////////////////////////////////////////////

// packet[packet.SC_ERROR] = function (socket, data) {
//     var msg = data.read_string();
//     if (!data.completed()) return true;
// }
//
// packet[packet.SC_LOGGED_IN] = function (socket, data) {
//     if (!data.completed()) return true;
// }
//
// packet[packet.SC_PING_SUCCESS] = function (socket, data) {
//     var ping_time = data.read_uint8();
//     if (!data.completed()) return true;
// }
//
// packet[packet.SC_CHAT] = function (socket, data) {
//     var msg = data.read_string();
//     if (!data.completed()) return true;
// }



////////////////////////////////////////////////////////////////////////////////
// Send Packets
////////////////////////////////////////////////////////////////////////////////

packet.make_log_in = function () {
  var o = new packet_writer(packet.CS_LOGIN);
  o.finish();
  return o.buffer;
}

packet.make_ping = function (ping_time) {
  var o = new packet_writer(packet.CS_PING);
  o.append_uint8(ping_time);
  o.finish();
  return o.buffer;
}

packet.make_chat = function (msg) {
  var o = new packet_writer(packet.CS_CHAT);
  o.append_string(msg);
  o.finish();
  return o.buffer;
}


////////////////////////////////////////////////////////////////////////////////
// Export Module
////////////////////////////////////////////////////////////////////////////////

module.exports = packet;