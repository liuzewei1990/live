const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname.split('/');

  if (path[1] === 'webhook' && path.length === 4) {
    const nickName = decodeURIComponent(path[2]);
    const comment = decodeURIComponent(path[3]);

    // 触发websocket的send消息
    wss.clients.forEach(client => {
      client.send(JSON.stringify({ nickName, comment }));
    });

    console.log("🚀", nickName, "：", comment);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Webhook triggered successfully');
  } else if (url.pathname === '/') {
    fs.readFile('html/index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (url.pathname.endsWith('.css')) {

    fs.readFile(__dirname + url.pathname, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else if (url.pathname.endsWith('.js')) {

    fs.readFile(__dirname + url.pathname,
      (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'application/javascript' });
          res.end(data);
        }
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    console.log(`Received message: ${message}`);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});