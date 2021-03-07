import wsConfig from "../../config/websocket.json";

class HermesWS {
  constructor() {
    this.ws;
    this.serveUrl = wsConfig.host;
  }

  getWs() {
    return this.ws;
  }

  connect() {
    this.ws = new WebSocket("ws://", this.serveUrl + "/ws");

    this.ws.onopen = () => {
      console.log(
        "Openned websocket connection on endpoint ws://",
        this.serveUrl + "/ws"
      );
    };

    this.ws.onclose = (e) => {
      console.log("Websocket connection closed", e.code, e.reason);
    };
  }
}
