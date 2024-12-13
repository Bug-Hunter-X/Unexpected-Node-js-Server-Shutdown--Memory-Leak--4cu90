const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Bug: Unexpected Server Shutdown
//This bug may not happen frequently but can be difficult to debug. It happens when the server unexpectedly shuts down without any errors.
//This can be due to various reasons such as memory leaks, unhandled exceptions, or even OS issues. This example simulates a memory leak, which, with long runtime, may cause the server to crash.

let largeArray = [];
setInterval(() => {
  largeArray.push(new Array(1024 * 1024).fill(0)); // Pushing large array to simulate a memory leak
  console.log('Memory usage increasing...');
}, 1000);