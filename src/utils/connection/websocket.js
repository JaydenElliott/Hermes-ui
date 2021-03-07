import wsConfig from "../../config/websocket.json";

export default class HermesWS {
  constructor() {
    this.ws = null;
    this.serveUrl = wsConfig.host;
  }

  getWs() {
    return this.ws;
  }

  connect() {
    this.ws = new WebSocket("ws://" + wsConfig.host + "/ws");

    this.ws.onopen = () => {
      console.log(
        "Openned websocket connection on endpoint ws://",
        this.serveUrl + "/ws"
      );
    };

    this.ws.onclose = (e) => {
      console.log("Websocket connection closed", e.code, e.reason);
    };

    this.ws.onmessage = (e) => {
      console.log(e.data);
    };
  }
}
