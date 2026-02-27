import { WebSocketServer } from "ws";

export class HMRServer {
    private wss: WebSocketServer;

    constructor(port: number) {
        this.wss = new WebSocketServer({ port });
        console.log(`🔥 HMR WebSocket running on ws://localhost:${port}`);
    }

    sendUpdate(file: string) {
        const message = JSON.stringify({
            type: "update",
            file
        });

        this.wss.clients.forEach(client => {
            if (client.readyState === 1) {
                client.send(message);
            }
        });
    }
}
