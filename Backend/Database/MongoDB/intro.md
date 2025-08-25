# What is MongoDb ?

-> MongoDb is a NoSQL Document based Database
-> It has strong support for Aggregation pipes (The aggregation pipeline in MongoDB is a way to process and analyze data inside the database. Think of it like an assembly line (pipeline) where documents pass through multiple stages, and at each stage, something happens (filtering, grouping, sorting, reshaping, etc.).)
-> Works on BSON format
-> Best for node application

# Example

{
"name": "John",
"age":27,
"skills":["python", "html","javascript"]
}

# Structure of MongoDB

the structure of mongodb is as follow:-
->Database: contains collection.
->Collection: contain groups of documents
and in complete form they form a DataBase.

# What is MongoDB Compass ?

-> MongoDB Compass is a GUI (Graphical User Interface) that help user to interact with Database easily both locally and on cloud.

# What is MongoDB Atlas ?

-> MongoDB Atlas is a fully managed, multi-cloud database-as-a-service that automates the deployment, scaling, and management of MongoDB databases. It simplifies database administration for developers, allowing them to focus on building applications instead of managing infrastructure by handling tasks like provisioning, backups, and performance optimization across AWS, Azure, and Google Cloud.

# Basic operations of mongoDB ?

-> the basic operations of mongoDB is also known as CRUD Operations:-
-> C:- Create
-> R:- Read
-> U:- Used
-> D:- Delete

**Show/Use Operations**

1. Show operation
   This operation of used to view all the collections in DataBase
   -> show dbs

2. Use operation
   This operation is used to access a particular DataBase
   -> use <DB Name>

**Create Operation**

1. Insert a Single Document

this operation is used to insert add document into collections of the database.

->Syntax:- db.<collectionName>.insertOne({name: "john", age: 35, skills: ["web", "dsa","ml"]})

2. Insert Many Document

This operation is used to insert add many document into collections of the database.

-> Syntax:= db.<collectionName>.insertMany([{name: "joe", age: 25, skills: ["css", "dsa","ml"]},{name: "White", age: 22, skills: ["js", "node","ml"]},{name: "Ben", age: 30, skills: ["react", "sql","DS"]}])

**Read Operations**

1. Find Single a Document

This operation is used to find a particular specfic document in collection.

-> Syntax:- db.<collectionName>.findOne({name: "joe"})

2. Find Multiple Document

This operation is used to find a multiple document with common value in collection.

-> Syntax:- db.<collectionName>.find({skills: "ml"})

**Update Operations**

1. Update Single a Document

This operation is used to update a particular specfic document in collection.

-> Syntax:- db.<collectionName>.updateOne({name: "joe"}, {$set: {skills: "nodeJS"}})

2. Find Multiple Document

This operation is used to update a multiple document in collection.

-> Syntax:- db.<collectionName>.updateMany({skills: "ml}, {$set: {status: "selected"}})

**Delete Operations**

1. Find Single a Document

This operation is used to delete a particular specfic document in collection.

-> Syntax:- db.<collectionName>.deleteOne({name: "joe"})

2. Find Multiple Document

This operation is used to delete a multiple document with common value in collection.

-> Syntax:- db.<collectionName>.delete({skills: "ml"})

**NOTE:- Read and Find OP are some what same and same goes for Create and Update OP**

**Mis Operation**

1. Sort Operation

This operation is used to sort the document in collection.

-> Syntax:- db.<collectionName>.find().sort({age:1}) (Increasing order)

-> Syntax:- db.<collectionName>.find().sort({age:-1}) (Deacreasing order)

2. Limit Operation

This operation is used to limit access of the document in database.

-> syntax:- db.<collectionName>.find().limit(1)

# Aggregation Pipeline.

-> An aggregation pipeline consists of one or more stages that process documents:

-> Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.

-> The documents that are output from a stage are passed to the next stage.

-> An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.

**Collection**
{ "name": "Joe", "skills": "ml", "qty": 5, "status": "selected" }
{ "name": "Anna", "skills": "ml", "qty": 8, "status": "pending" }
{ "name": "Bob", "skills": "nodeJS", "qty": 10, "status": "selected" }
{ "name": "Clara", "skills": "ml", "qty": 3, "status": "selected" }

**Syntax Aggregation Pipeline**

db.Cars.aggregate([
{ $match: { status: "selected" } }, // Step 1: filter documents
{ $group: {
_id: "$skills", // Step 2: group by "skills"
totalQty: { $sum: "$qty" }, // Step 2: sum the "qty" for each group
count: { $sum: 1 } // Step 2: count documents in each group
} },
{ $sort: { totalQty: -1 } } // Step 3: sort by totalQty descending
]);
