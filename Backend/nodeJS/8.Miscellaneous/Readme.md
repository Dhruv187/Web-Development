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
