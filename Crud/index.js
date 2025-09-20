const express = require('express');
const { MongoClient } = require('mongodb');
const client = require('mongodb').MongoClient;

const app = express();
const PORT = 5000;

app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const dbName = "myPortfolio";
let db;

async function main() {
    await client.connect(url);
    console.log("Connected to MongoDB");
    db = client.db(dbName);

    // API endpoint to add a new project
    app.post('/api/projects', async (req, res) => {
        try {
            const newProject = req.body;
            const result = await db.collection('projects').insertOne(newProject);
            res.status(201).json({ message: "Project added", projectId: result.insertedId });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // API endpoint to fetch all projects
    app.get('/api/projects', async (req, res) => {
        try {
            const projects = await db.collection('projects').find({}).toArray();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

main().catch(console.error);