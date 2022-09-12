export default function Page() {
    return (
        <div>
        <header>
            <nav className="nav">
                <img src="./logo512.png" className="nav-logo"  />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
            <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer, if i know  React</li>
        </ol>
        <footer>
            <small>@ 2022 Ziroll developement. All rights reserverd.</small>
        </footer>
        </div>
    )
}