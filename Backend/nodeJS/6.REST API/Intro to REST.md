# 📡 REST API – A Standard for Web Communication

## 📘 What is a REST API?

A **REST API (Representational State Transfer API)** is a widely adopted architectural standard used for designing networked applications. It enables communication between a **client** (such as a web browser or mobile app) and a **server** by following specific principles and conventions over the HTTP protocol.

A RESTful API ensures that both the client and the server understand how to send requests and receive responses in a predictable, structured manner.

---

## 🧱 REST API Architectural Standards

To be considered RESTful, an application must follow a set of fundamental architectural constraints. Below are two of the most important:

### 1. 🔁 Client-Server Architecture

The first principle of REST is the **Client-Server Architecture**. In this model:

- A **client** initiates a request for a resource or action.
- A **server** processes the request and returns a response.

#### 📥 Request-Response Cycle:

- When the **client** is a **browser**, the server often responds with:

  - HTML pages
  - Blog content
  - Images
  - Plain text

- When the **client** is a **mobile app or any electronic device**, the server typically responds with:
  - **JSON (JavaScript Object Notation)** data — a lightweight and widely supported data format suitable for structured information exchange.

This separation of concerns (UI on the client, logic/data on the server) promotes scalability and simplicity.

---

### 2. 🌐 Respect for HTTP Methods

A REST API must strictly adhere to standard HTTP methods, which represent specific actions on resources:

| Method   | Description                                                 |
| -------- | ----------------------------------------------------------- |
| `GET`    | Retrieves data from the server (e.g., fetch a list or item) |
| `POST`   | Sends new data to the server to create a resource           |
| `PUT`    | Replaces an existing resource with new data                 |
| `PATCH`  | Partially updates an existing resource                      |
| `DELETE` | Removes a resource from the server                          |

Each HTTP method should only be used for its intended purpose. Misusing these methods breaks RESTful principles and can lead to unpredictable or insecure behavior.

---

## 📝 Summary

A REST API is not just about accessing data—it's about **organizing and structuring communication** between clients and servers in a clear, scalable, and standard way. By:

- Following the **Client-Server** architecture
- Respecting the use of **HTTP methods**

...developers can create efficient, reusable, and interoperable web services.
