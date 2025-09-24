// creo ed esporto component

const MyHeader = () => {
    return (
        <header>
            <div className="container">
                <div className="header-flex">
                    <figure>
                        <a href="#">
                            <img src="../../public/dc-logo.png" alt="Logo" id="mainlogo" />
                        </a>
                    </figure>
                    <nav>
                        <ul>
                            <li><a href="#"><div>CHARACTERS</div></a></li>
                            <li><a href="#"><div>COMICS</div></a></li>
                            <li><a href="#"><div>MOVIES</div></a></li>
                            <li><a href="#"><div>TV</div></a></li>
                            <li><a href="#"><div>GAMES</div></a></li>
                            <li><a href="#"><div>COLLECTIBLES</div></a></li>
                            <li><a href="#"><div>VIDEOS</div></a></li>
                            <li><a href="#"><div>FANS</div></a></li>
                            <li><a href="#"><div>NEWS</div></a></li>
                            <li><a href="#"><div>SHOP</div></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default MyHeader