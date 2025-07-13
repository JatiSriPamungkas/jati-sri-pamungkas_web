const path = require("path");
require("dotenv").config({
	path: path.resolve(__dirname, "..", ".env.development.local"),
});
const express = require("express");
const cors = require("cors");
const { sql } = require("@vercel/postgres");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

const PORT = 3000;

// Endpoint API yang akan mengambil data dari Database
app.get("/api/education", async (req, res) => {
	try {
		const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`;
		res.status(200).json(rows);
	} catch (error) {
		res.status(500).json({ error: "Failed to get Education data", errMessage: error });
	}
});

app.get("/api/organizations", async (req, res) => {
	try {
		const { rows } = await sql`SELECT * FROM organizations ORDER BY period DESC;`;
		res.status(200).json(rows);
	} catch (error) {
		res.status(500).json({ error: "Failed to get Organizations data", errMessage: error });
	}
});

app.get("/api/skills", async (req, res) => {
	try {
		const { rows } = await sql`SELECT * FROM skills;`;
		res.status(200).json(rows);
	} catch (error) {
		res.status(500).json({ error: "Failed to get Skills data" });
	}
});

app.get("/api/projects", async (req, res) => {
	try {
		const { rows } = await sql`SELECT * FROM projects;`;
		res.status(200).json(rows);
	} catch (error) {
		res.status(500).json({ error: "Failed to get Projects data" });
	}
});

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});

// Wajib ada agar Vercel bisa menjalankan backend
module.exports = app;
