# Express.js Middleware and HTTP Essentials

## 📚 Middleware in Express.js

Middleware functions in Express.js are functions that have access to the:

- Request object (`req`)
- Response object (`res`)
- Next middleware function in the application’s request-response cycle (`next`)

These functions form the backbone of request processing in Express and are essential in building robust, maintainable applications.

### ✅ Key Capabilities of Middleware Functions

Middleware functions can:

- Execute any code
- Modify the `req` and `res` objects
- End the request-response cycle
- Call the next middleware in the stack

> **Important**: If a middleware function does not end the request-response cycle, it **must** call `next()` to avoid leaving the request hanging.

### 🧱 Types of Middleware in Express

1. **Application-level middleware**  
   Bound to an instance of `express()` and executed during every request unless scoped.

2. **Router-level middleware**  
   Works similarly to application-level middleware but is bound to an instance of `express.Router()`.

3. **Error-handling middleware**  
   Defined with four arguments (`err, req, res, next`) to handle exceptions and errors in the app.

4. **Built-in middleware**  
   Provided by Express (e.g., `express.static`, `express.json`, etc.).

5. **Third-party middleware**  
   Installed via npm (e.g., `body-parser`, `morgan`, etc.).

---

## 🌐 HTTP Headers

HTTP headers are key-value pairs used in requests and responses to communicate additional information about the HTTP transaction.

### 🔑 Types of HTTP Headers

- **General Headers**: Apply to both request and response but don’t relate to the message body (e.g., `Cache-Control`, `Connection`).
- **Request Headers**: Sent by the client to provide information (e.g., `User-Agent`, `Authorization`).
- **Response Headers**: Sent by the server to provide response-related metadata (e.g., `Set-Cookie`, `Location`).
- **Entity Headers**: Describe the content body (e.g., `Content-Type`, `Content-Length`).

---

## 📊 HTTP Response Status Codes

HTTP status codes indicate the result of an HTTP request.

### 🔢 Status Code Classes

- **1xx – Informational**  
  The request was received, continuing process.

- **2xx – Successful**  
  The request was successfully received, understood, and accepted.

- **3xx – Redirection**  
  Further action needs to be taken to complete the request.

- **4xx – Client Error**  
  The request contains bad syntax or cannot be fulfilled (e.g., `404 Not Found`).

- **5xx – Server Error**  
  The server failed to fulfill an apparently valid request (e.g., `500 Internal Server Error`).

---

### ✅ Common HTTP Status Codes

| Code | Meaning               | Description                                                    |
| ---- | --------------------- | -------------------------------------------------------------- |
| 200  | OK                    | The request has succeeded.                                     |
| 201  | Created               | The request has succeeded and a resource was created.          |
| 204  | No Content            | The server processed the request but returns no body.          |
| 301  | Moved Permanently     | The resource has been moved to a new URI.                      |
| 302  | Found                 | Temporary redirection to a different URI.                      |
| 400  | Bad Request           | The server could not understand the request.                   |
| 401  | Unauthorized          | Authentication is required.                                    |
| 403  | Forbidden             | The server understood the request but refuses to authorize it. |
| 404  | Not Found             | The requested resource could not be found.                     |
| 500  | Internal Server Error | Generic server error.                                          |
| 502  | Bad Gateway           | Invalid response from an upstream server.                      |
| 503  | Service Unavailable   | The server is currently unable to handle the request.          |

---

# Node.js Interview Essentials: Modules, Packages & Versioning

This document covers core concepts in Node.js related to modules, package management, and versioning — frequently asked in technical interviews.

---

## 1. `require()` vs `import`

| Feature         | `require()` (CommonJS)     | `import` (ES Modules)                         |
| --------------- | -------------------------- | --------------------------------------------- |
| Syntax          | `const fs = require('fs')` | `import fs from 'fs'`                         |
| Module system   | CommonJS                   | ES Modules (ESM)                              |
| Node.js support | Default in Node.js         | Supported in Node 14+ with `"type": "module"` |
| Exports         | `module.exports`           | `export`, `export default`                    |
| Dynamic loading | Yes                        | Yes (via `import()`)                          |

> Use `require()` for legacy and most backend Node.js apps. Use `import` for modern, frontend-compatible or ES Module-based apps.

---

## 2. Creating and Using Custom Modules

### Creating a module

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

### Using the module

```js
// app.js
const math = require("./math");
console.log(math.add(2, 3)); // Output: 5
```

### For ES Modules:

```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

---

## 3. `package.json` vs `package-lock.json`

### `package.json`

- Manifest file for your Node.js project.
- Contains:

  - Project metadata (`name`, `version`)
  - Scripts
  - Dependencies

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

### `package-lock.json`

- Auto-generated after `npm install`.
- Records exact versions of installed packages and their dependencies.
- Ensures consistent installs across environments.
- Should be committed to version control.

---

## 4. Semantic Versioning (`^`, `~`, etc.)

Format: `MAJOR.MINOR.PATCH` → `1.4.2`

- `MAJOR` → Breaking changes
- `MINOR` → New features
- `PATCH` → Bug fixes

### Prefixes:

- `^1.4.2` → Allows `1.x.x` (but not `2.0.0`)
- `~1.4.2` → Allows only patch updates: `1.4.x`
- `1.4.2` → Fixed version

Example:

```json
"dependencies": {
  "express": "^4.18.0",
  "lodash": "~4.17.21"
}
```

---

## 5. NPM vs Yarn

| Feature      | NPM                      | Yarn                       |
| ------------ | ------------------------ | -------------------------- |
| Default tool | Comes with Node.js       | Requires installation      |
| Lock file    | `package-lock.json`      | `yarn.lock`                |
| Speed        | Slightly slower          | Faster due to caching      |
| Commands     | `npm install`, `npm run` | `yarn install`, `yarn run` |

> Both are good. Use what the project/team prefers. Yarn was faster before, but npm v7+ has improved performance.

---

## 6. Global vs Local Packages

### Local Packages

- Installed in project folder (`node_modules`)
- Used **only** within the project

```bash
npm install express
```

### Global Packages

- Installed system-wide
- Available in terminal anywhere

```bash
npm install -g nodemon
```

### When to use:

- **Local**: Project-specific libraries (`express`, `mongoose`)
- **Global**: Tools and CLIs (`nodemon`, `eslint`, `typescript`)

---

## 📌 Interview Tip

- Know how modules (`require`, `import`) work in Node.js.
- Understand dependency management with `npm`, `package.json`, and lock files.
- Be clear on semantic versioning with `^`, `~`, and fixed versions.
- Practice creating and using custom modules.
- Familiarize yourself with global vs local packages and when to use them.

---
