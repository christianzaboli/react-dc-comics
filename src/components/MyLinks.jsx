// creo ed esporto component

const MyLinks = () => {

    // array di oggetti da mappare
    const blueLinks = [
        {
            src: '../../src/assets/buy-comics-digital-comics.png',
            alt: 'Shop Comics',
            title: 'DIGITAL COMICS',
            url: '#'
        },
        {
            src: '../../src/assets/buy-comics-merchandise.png',
            alt: 'Shop Merchandise',
            title: 'DC MERCHANDISE',
            url: '#'
        },
        {
            src: '../../src/assets/buy-comics-subscriptions.png',
            alt: 'Shop Subscription',
            title: 'SUBSCRIPTION',
            url: '#'
        },
        {
            src: '../../src/assets/buy-comics-shop-locator.png',
            alt: 'Shop Locator',
            title: 'COMIC SHOP LOCATOR',
            url: '#'
        },
        {
            src: '../../src/assets/buy-dc-power-visa.svg',
            alt: 'Power Visa',
            title: 'DC POWER VISA',
            url: '#'
        },
    ]
    const blueLinksMapped = blueLinks.map((blueLinks, index) => (
        <a key={'link' + index} href={blueLinks.url}>
            <div className="single-link">
                <img src={blueLinks.src}
                    alt={blueLinks.alt} />
                <h3>{blueLinks.title}</h3>
            </div>
        </a>
    ))

    return (
        <div className="links">
            <div className="links-container">

                {/* links versione mapped */}
                {blueLinksMapped}

                {/* links versione lunga */}
                {/* 
                <a href="#">
                    <div className="single-link">
                        <img src='../../src/assets/buy-comics-merchandise.png' alt="Shop Merchandise" />
                        <h3>DC MERCHANDISE</h3>
                    </div>
                </a>

                <a href="#">
                    <div className="single-link">
                        <img src='../../src/assets/buy-comics-subscriptions.png' alt="Shop Subscription" />
                        <h3>SUBSCRIPTION</h3>
                    </div>
                </a>

                <a href="#">
                    <div className="single-link">
                        <img src='../../src/assets/buy-comics-shop-locator.png' alt="Shop Locator" />
                        <h3>COMIC SHOP LOCATOR</h3>
                    </div>
                </a>

                <a href="#">
                    <div className="single-link">
                        <img src='../../src/assets/buy-dc-power-visa.svg' alt="Power Visa" />
                        <h3>DC POWER VISA</h3>
                    </div>
                </a> */}

            </div>

        </div>

    )
}

export default MyLinks