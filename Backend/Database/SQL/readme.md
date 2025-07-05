# 📚 Introduction to Databases and SQL

This document provides a beginner-friendly overview of databases, the difference between SQL and NoSQL, what SQL is, and an explanation of tables in SQL.

---

## 📂 What is a Database?

A **database** is an organized collection of data that is stored and accessed electronically. Databases are used to efficiently store, manage, and retrieve large amounts of data.

### 🔑 Key Features:

- Organized storage of data
- Easy retrieval using queries
- Supports CRUD operations (Create, Read, Update, Delete)

---

## ⚖️ SQL vs NoSQL

| Feature           | SQL (Relational DB)                       | NoSQL (Non-Relational DB)                     |
| ----------------- | ----------------------------------------- | --------------------------------------------- |
| 📄 Structure      | Structured (tables with rows and columns) | Flexible (documents, key-value, graph, etc.)  |
| 📐 Schema         | Fixed schema                              | Dynamic schema                                |
| 📊 Data Storage   | Tables                                    | JSON, BSON, XML, key-value pairs, etc.        |
| 🔍 Query Language | SQL                                       | Varies (e.g., MongoDB uses BSON-like queries) |
| 🤝 Relationships  | Supports joins and relationships          | Generally not relational                      |
| 🚀 Scalability    | Vertical (scale-up)                       | Horizontal (scale-out)                        |
| 🧠 Examples       | MySQL, PostgreSQL, SQLite, Oracle         | MongoDB, Redis, Cassandra, Firebase           |

---

## 🧾 What is SQL?

**SQL (Structured Query Language)** is the standard programming language used to manage and manipulate relational databases. It allows users to:

- Create and modify database structures (tables, indexes)
- Insert, update, and delete records
- Query data using powerful filters and conditions

### 🔧 Basic SQL Operations:

- `SELECT` – Retrieve data
- `INSERT` – Add data
- `UPDATE` – Modify data
- `DELETE` – Remove data
- `CREATE` – Create tables or databases
- `DROP` – Delete tables or databases

---

## 🧱 What are Tables in SQL?

In SQL, data is stored in **tables**, which are like spreadsheets with rows and columns.

### 📊 Structure of a Table:

- **Columns** define the type of data (e.g., name, age, email).
- **Rows** contain actual records.
