// creo ed esporto component

const MyHeader = () => {

    // array di oggetti da mappare
    const navbar = [
        { id: '1', title: 'CHARACTERS', url: '#', current: false },
        { id: '2', title: 'COMICS', url: '#', current: true },
        { id: '3', title: 'MOVIES', url: '#', current: false },
        { id: '4', title: 'TV', url: '#', current: false },
        { id: '5', title: 'GAMES', url: '#', current: false },
        { id: '6', title: 'COLLECTIBLES', url: '#', current: false },
        { id: '7', title: 'VIDEOS', url: '#', current: false },
        { id: '8', title: 'FANS', url: '#', current: false },
        { id: '9', title: 'VIDEOS', url: '#', current: false },
        { id: '10', title: 'NEWS', url: '#', current: false },
        { id: '11', title: 'SHOP', url: '#', current: false },
    ]
    const navbarMapped = navbar.map(item => (
        <li key={item.id}><a href={item.url}><div className={item.current ? 'active' : ''}>{item.title}</div></a></li>
    ))

    return (
        <header>
            <div className="container">
                <div className="header-flex">
                    <figure>
                        <a href="#">
                            <img src="../../public/dc-logo.png" alt="Logo" id="mainlogo" />
                        </a>
                    </figure>

                    {/* navbar versione mapped */}
                    <nav>
                        <ul>
                            {navbarMapped}
                        </ul>
                    </nav>

                    {/* navbar versione lunga */}
                    {/* <nav>
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
                    </nav> */}

                </div>
            </div>
        </header>
    )
}

export default MyHeader