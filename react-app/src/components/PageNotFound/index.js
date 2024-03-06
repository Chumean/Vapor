import "./notfound.css"
import wips from "../../assets/wips.png"

export default function NotFound() {
    return (
        <div className="pnf">
            <h2>UNDER CONSTRUCTION</h2>
            <img src={wips}/>
            <h2>Please go back to the homepage</h2>
            <h2>More on myself</h2>

            <div className="creds">
                <a href="https://github.com/Chumean">GitHub</a>
            </div>

            <div className="creds">
                <a href="https://www.linkedin.com/in/davidchu007/">LinkedIn</a>
            </div>

            <div className="creds">
                <a href="https://wellfound.com/u/david-chu-30">WellFound</a>
            </div>
        </div>
    )
}
