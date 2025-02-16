# Graceful Error Handling for File I/O in Node.js

This repository demonstrates best practices for handling file reading errors in Node.js using asynchronous operations and promises.  The code is designed to avoid common pitfalls and provide a robust solution for reading JSON data from files.

## Problem

When reading files, especially JSON files, several errors can occur:

* **File not found (`ENOENT`):** The specified file path does not exist.
* **Invalid JSON (`SyntaxError`):** The file's content is not valid JSON.
* **Other I/O errors:** System-level issues may prevent file reading.

Incorrectly handling these errors can lead to application crashes or unexpected behavior.

## Solution

The provided code uses `fs.promises.readFile` with `async/await` for clean asynchronous error handling. It specifically checks for `ENOENT` and `SyntaxError` and handles them gracefully. Other errors are re-thrown to allow higher-level error handling mechanisms to take effect.

## Usage

1.  Ensure you have Node.js installed.
2.  Clone this repository.
3.  Create a `data.json` file in the same directory (optional).
4.  Run the code using `node bug.js`.

The code will attempt to read `data.json`. If the file is not found or contains invalid JSON, informative error messages will be displayed to the console without causing the program to crash.
