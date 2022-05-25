const path = require("path")
const express = require("express")
const app = express()
const PORT = isNaN(process.argv[2]) ? 4000 : process.argv[2] // Using 4000 becuase 3000 is dev server

app.use("/", express.static(path.join(__dirname, "../dist")))
app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "../dist/index.html")))

// Error handling
app.use((req, res, next) => {
    console.log(`Route ${req.originalUrl} not found!`)
    // Comment line below to disable 404 errors
    next(new Error(`Route ${req.originalUrl} not found!`))
})
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send("Internal server error")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}\nLocalhost: https://localhost:${PORT}`))