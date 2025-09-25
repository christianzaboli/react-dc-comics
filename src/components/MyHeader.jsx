// creo ed esporto component

const MyHeader = () => {

    // array di oggetti da mappare
    const navbar = [
        { id: '1', title: 'CHARACTERS', url: '#' },
        { id: '2', title: 'COMICS', url: '#' },
        { id: '3', title: 'MOVIES', url: '#' },
        { id: '4', title: 'TV', url: '#' },
        { id: '5', title: 'GAMES', url: '#' },
        { id: '6', title: 'COLLECTIBLES', url: '#' },
        { id: '7', title: 'VIDEOS', url: '#' },
        { id: '8', title: 'FANS', url: '#' },
        { id: '9', title: 'VIDEOS', url: '#' },
        { id: '10', title: 'NEWS', url: '#' },
        { id: '11', title: 'SHOP', url: '#' },
    ]
    const navbarMapped = navbar.map(item => (
        <li key={item.id}><a href={item.url}><div>{item.title}</div></a></li>
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