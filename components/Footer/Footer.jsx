export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-title">Built by Sreeram Reddy Velagala</p>
                <nav className="footer-links" aria-label="Social and project links">
                    <a href="https://github.com/DracFiendMG" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://github.com/DracFiendMG/component-library-pp" target="_blank" rel="noreferrer">Project</a>
                    <a href="https://www.linkedin.com/in/sreeram-17ba861a4/" target="_blank" rel="noreferrer">LinkedIn</a>
                </nav>
            </div>
            <p className="footer-copy">{currentYear} Component Library</p>
        </footer>
    )
}