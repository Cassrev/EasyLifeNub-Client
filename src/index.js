import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { EasyLifeNub } from "./EasyLifeNub"
import "./assets/styles/color.css";
import "./assets/styles/font.css";
import "./assets/styles/index.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/scss/scssStyles.scss"
import "react-datetime/css/react-datetime.css"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <EasyLifeNub />
    </BrowserRouter>
)
