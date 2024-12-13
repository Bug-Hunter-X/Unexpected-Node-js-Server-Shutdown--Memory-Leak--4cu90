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

// Solution: Preventing Memory Leak
//Instead of continuously adding to the array, we will use a fixed-size circular buffer to limit the memory usage.

let circularBuffer = [];
let bufferSize = 10; // Adjust as needed

setInterval(() => {
  circularBuffer.push(new Array(1024 * 10).fill(0)); // Reduced array size
  if(circularBuffer.length > bufferSize){
    circularBuffer.shift();
  }
  console.log('Memory usage controlled...');
}, 1000);
// Implementing more sophisticated memory management techniques, such as using streams instead of loading large datasets into memory, would improve the robustness of the application further.