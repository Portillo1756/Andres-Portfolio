

const Footer = () => {
    return (
        <footer className="footer--container">
            <div className="footer--link--container">
                <div className="footer-item">
                    <ul className="footer--icon">
                    <li className="icon-container">
                        <img src="./GithubIcon.svg" alt="an icon of GitHub" />
                        <button className="GitHub"><a href="https://github.com/Portillo1756" className="text-md">My GitHub</a></button>
                    </li>
                    <li className="icon-container">
                        <img src="./LinkedinIcon.svg" alt="an icon of Linkedin" />
                        <button className="Linkedin"><a href="https://www.linkedin.com/in/portillo1756/" className="text-md">Linkedin</a></button>
                    </li>
                    </ul>


                </div>
            </div>
        </footer>
    )
}

export default Footer