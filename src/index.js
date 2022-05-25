import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./css/App.css"
import { BrowserRouter, Routes, Route,} from "react-router-dom"

// Routes
import NotFound from "./routes/404"
import Contact from "./routes/contact"
import Projects from "./routes/projects"
const root = ReactDOM.createRoot(document.getElementById("root"))

/*root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)*/

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={ <NotFound></NotFound> }></Route>
            <Route path="/" element={ <App></App> }></Route>
            <Route path="/contact" element={ <Contact></Contact> }></Route>
            <Route path="/projects" element={ <Projects></Projects> }></Route>
        </Routes>
    </BrowserRouter>
)