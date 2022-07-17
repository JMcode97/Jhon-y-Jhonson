const Header = () => {
    return (
        <>
            <header className="ed-header s-bg-grey s-py-2">
                <div className="ed-grid lg-grid-5">
                    <div className="s-cross-center s-main-center lg-main-start">
                        <img className="logo" src="https://ed.team/static/images/logo.svg" alt="logo" />
                    </div>
                    <nav className="nav lg-cols-4 s-cross-center ed-grid full">
                        <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
                            <li className="lg-mr-3">
                                <a className="link s-column s-cross-center active" href="/">
                                    <svg className="icon to-lg s-mb-0">
                                        <use href="#home"></use>
                                    </svg>
                                    <span>Inicio</span>
                                </a>
                            </li>
                            <li className="lg-mr-3">
                                <a className="link s-column s-cross-center" href="/">
                                    <svg className="icon to-lg s-mb-0">
                                        <use href="#studies"></use>
                                    </svg>
                                    <span>Estudios</span>
                                </a>
                            </li>
                            <li className="lg-mr-3">
                                <a className="link s-column s-cross-center" href="/">
                                    <svg className="icon to-lg s-mb-0">
                                        <use href="#courses"></use>
                                    </svg>
                                    <span>Cursos</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header