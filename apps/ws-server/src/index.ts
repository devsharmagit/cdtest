import { WebSocketServer } from 'ws';
import { client } from '@repo/db/client';

const wss = new WebSocketServer({ port: 3003 });

wss.on('connection', function connection(ws) {
  
    client.user.create({
        data: {
            name: Math.random().toString(),
            password: Math.random().toString(),
            email : Math.random().toString(),
        }
    })
  
    ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('your ws connection is good to go');
});