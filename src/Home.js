import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", marginTop: "20%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/landingpage">Landing Page</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
            <div style={{ color: "blue", fontSize: "40px", fontStyle: "italic" }}>please Click the above links to access the pages</div>
        </div>
    );
}