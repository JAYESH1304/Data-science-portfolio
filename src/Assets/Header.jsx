function Header(){
    return (
        <header className="header">
            <img src="bg.png" alt="" />
            <h1>Jayesh Sonawane</h1>
            <p>Academic Email :<a href="mailto: j.sonawane@iitg.ac.in"> j.sonawane@iitg.ac.in</a></p>
            <p>Personal Email :<a href="mailto:piephi367@gmail.com"> piephi367@gmail.com</a></p>
            <nav>
                <a href="#education">Education</a>
                |<a href="#skills">Skills</a>
                |<a href="#experience">Experience</a>
                |<a href="#projects">Projects</a>
                |<a href="#contact">Contact</a>
            </nav>
        </header>
    )
}
export default Header;