// creo ed esporto component

const MyHeader = () => {
    return (
        <header>
            <div className="container">
                <div className="header-flex">
                    <figure>
                        <a href="#">
                            <img src="../../public/dc-logo.png" alt="Logo" />
                        </a>
                    </figure>
                    <nav>
                        <ul>
                            <li><a href="#">CHARACTERS</a></li>
                            <li><a href="#">COMICS</a></li>
                            <li><a href="#">MOVIES</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">GAMES</a></li>
                            <li><a href="#">COLLECTIBLES</a></li>
                            <li><a href="#">VIDEOS</a></li>
                            <li><a href="#">FANS</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">SHOP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default MyHeader