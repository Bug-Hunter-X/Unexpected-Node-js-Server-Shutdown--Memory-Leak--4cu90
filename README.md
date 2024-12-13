# Unexpected Node.js Server Shutdown

This repository demonstrates an uncommon Node.js bug: an unexpected server shutdown caused by a simulated memory leak. The server starts and seems to function correctly initially but eventually crashes without providing detailed error messages.

## Bug Description
The bug involves a gradual increase in memory usage, eventually exhausting system resources and leading to the server's abrupt termination.  Identifying this type of error necessitates careful monitoring of memory usage and potential resource leaks.

## How to Reproduce
1. Clone the repository.
2. Run `node bug.js`.
3. Observe the server running and printing 'Memory usage increasing...' messages.
4. After some time (the duration depends on system resources), the server will unexpectedly shut down.

## Solution
The solution involves preventing the memory leak by managing the array size or implementing appropriate memory cleanup strategies.  The solution file provides an example of addressing this issue.
