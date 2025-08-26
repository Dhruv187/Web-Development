# What is MongoDB ?

MongoDB is a **NoSQL Document-based Database**.

- Works on **BSON format**
- Has strong support for **Aggregation pipelines**
- Best for **Node.js applications**

---

# Example Document

```json
{
  "name": "John",
  "age": 27,
  "skills": ["python", "html", "javascript"]
}
```

---

# Structure of MongoDB

The structure of MongoDB is as follows:

- **Database** → contains collections
- **Collection** → contains groups of documents
- **Document** → individual records stored in JSON-like format

Together, they form a **Database system**.

---

# What is MongoDB Compass ?

MongoDB Compass is a **GUI (Graphical User Interface)** that helps users interact with a database easily both locally and on the cloud.

---

# What is MongoDB Atlas ?

MongoDB Atlas is a **fully managed, multi-cloud database-as-a-service** that automates deployment, scaling, and management of MongoDB databases.

It simplifies database administration by handling tasks like provisioning, backups, and performance optimization across **AWS, Azure, and Google Cloud**.

---

# Basic Operations of MongoDB (CRUD)

CRUD = **Create, Read, Update, Delete**

---

## Show / Use Operations

1. **Show Databases**  
   View all available databases.

   ```bash
   show dbs
   ```

2. **Use Database**  
   Switch to a specific database.
   ```bash
   use <DB Name>
   ```

---

## Create Operations

1. **Insert a Single Document**  
   Used to insert one document into a collection.

   ```js
   db.<collectionName>.insertOne({name: "john", age: 35, skills: ["web", "dsa","ml"]})
   ```

2. **Insert Multiple Documents**  
   Used to insert many documents at once.
   ```js
   db.<collectionName>.insertMany([
     {name: "joe", age: 25, skills: ["css", "dsa","ml"]},
     {name: "White", age: 22, skills: ["js", "node","ml"]},
     {name: "Ben", age: 30, skills: ["react", "sql","DS"]}
   ])
   ```

---

## Read Operations

1. **Find a Single Document**  
   Fetches one specific document from a collection.

   ```js
   db.<collectionName>.findOne({name: "joe"})
   ```

2. **Find Multiple Documents**  
   Fetches all documents matching a condition.
   ```js
   db.<collectionName>.find({skills: "ml"})
   ```

---

## Update Operations

1. **Update a Single Document**  
   Updates only the first matching document.

   ```js
   db.<collectionName>.updateOne({name: "joe"}, {$set: {skills: "nodeJS"}})
   ```

2. **Update Multiple Documents**  
   Updates all matching documents.
   ```js
   db.<collectionName>.updateMany({skills: "ml"}, {$set: {status: "selected"}})
   ```

---

## Delete Operations

1. **Delete a Single Document**  
   Deletes one matching document.

   ```js
   db.<collectionName>.deleteOne({name: "joe"})
   ```

2. **Delete Multiple Documents**  
   Deletes all documents that match a condition.
   ```js
   db.<collectionName>.deleteMany({skills: "ml"})
   ```

---

# Miscellaneous Operations

1. **Sort Documents**  
   Sort results in ascending/descending order.

   ```js
   db.<collectionName>.find().sort({age: 1})   // Increasing order
   db.<collectionName>.find().sort({age: -1})  // Decreasing order
   ```

2. **Limit Results**  
   Restrict the number of returned documents.
   ```js
   db.<collectionName>.find().limit(1)
   ```

---

# Aggregation Pipeline

An **aggregation pipeline** processes documents through multiple stages (like filtering, grouping, sorting, reshaping, etc).

- Each stage performs an operation on the input documents
- Output of one stage becomes input for the next stage
- Can calculate totals, averages, min/max, counts, etc.

### Example Collection

```json
{ "name": "Joe", "skills": "ml", "qty": 5, "status": "selected" }
{ "name": "Anna", "skills": "ml", "qty": 8, "status": "pending" }
{ "name": "Bob", "skills": "nodeJS", "qty": 10, "status": "selected" }
{ "name": "Clara", "skills": "ml", "qty": 3, "status": "selected" }
```

### Example Aggregation Pipeline

```js
db.Cars.aggregate([
  { $match: { status: "selected" } }, // Step 1: filter documents
  {
    $group: {
      _id: "$skills", // Step 2: group by "skills"
      totalQty: { $sum: "$qty" }, // Step 2: sum the "qty" for each group
      count: { $sum: 1 }, // Step 2: count documents in each group
    },
  },
  { $sort: { totalQty: -1 } }, // Step 3: sort by totalQty descending
]);
```

---

# NOTE

- **Read and Find** are somewhat similar operations.
- **Create and Update** also overlap conceptually since both modify documents.
