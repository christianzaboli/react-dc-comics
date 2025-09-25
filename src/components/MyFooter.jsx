// creo ed esporto component

const MyFooter = () => {

    // links prima lista
    const dcComicsLinks = [
        { label: 'Characters', url: '#', },
        { label: 'Comics', url: '#', },
        { label: 'Movies', url: '#', },
        { label: 'TV', url: '#', },
        { label: 'Games', url: '#', },
        { label: 'Videos', url: '#', },
        { label: 'News', url: '#', },
    ];
    const dcComicsLinksMapped = dcComicsLinks.map((dcComicsLink, index) => (
        <li key={'dcComic' + index}><a href={dcComicsLink.url}>{dcComicsLink.label}</a></li>
    ));

    // links seconda lista
    const ShopLinks = [
        { label: 'Shop Dc', url: '#', },
        { label: 'Shop DC Collectibles', url: '#', }
    ];
    const ShopLinksMapped = ShopLinks.map((ShopLink, index) => (
        <li key={'Shop' + index}><a href={ShopLink.url}>{ShopLink.label}</a></li>
    ));

    // links terza lista
    const DCLinks = [
        { label: 'Terms Of Use', url: '#', },
        { label: 'Privacy policy', url: '#', },
        { label: 'Ad Choices', url: '#', },
        { label: 'Advertising', url: '#', },
        { label: 'Jobs', url: '#', },
        { label: 'Subscriptions', url: '#', },
        { label: 'Talent Workshops', url: '#', },
        { label: 'CPSC Certificates', url: '#', },
        { label: 'Ratings', url: '#', },
        { label: 'Shop Help', url: '#', },
        { label: 'Contact Us', url: '#', },
    ];
    const DCLinksMapped = DCLinks.map((DCLink, index) => (
        <li key={'DC' + index}><a href={DCLink.url}>{DCLink.label}</a></li>
    ));

    // links quarta lista
    const SITESLinks = [
        { label: 'DC', url: '#', },
        { label: 'MAD Magazine', url: '#', },
        { label: 'DC Kids', url: '#', },
        { label: 'DC Universe', url: '#', },
        { label: 'DC Power Visa', url: '#', },
    ];
    const SITESLinksMapped = SITESLinks.map((SITESLink, index) => (
        <li key={'sites' + index}><a href={SITESLink.url}>{SITESLink.label}</a></li>
    ));

    // links dei socials
    const socialsLinks = [
        { label: 'Facebook', url: '#', src: '../../src/assets/footer-facebook.png' },
        { label: 'Twitter', url: '#', src: '../../src/assets/footer-twitter.png' },
        { label: 'Youtube', url: '#', src: '../../src/assets/footer-youtube.png' },
        { label: 'Pinterest', url: '#', src: '../../src/assets/footer-pinterest.png' },
        { label: 'Periscope', url: '#', src: '../../src/assets/footer-periscope.png' },
    ]
    const socialsLinksMapped = socialsLinks.map((socialsLink, index) => (
        <li key={'social' + index}><a href={socialsLink.url}><img src={socialsLink.src} alt={socialsLink.label} /></a></li>
    ))
    return (
        <footer>
            <div className="container">
                {/* logo overlay sul bg */}
                <img src="../../public/dc-logo-bg.png" alt="background logo" id='bgLogo' />

                <div className="footer-links">

                    {/* prima lista */}
                    <div>
                        <h5>DC COMICS</h5>
                        <ul>
                            {/* versione mappata */}
                            {dcComicsLinksMapped}

                            {/* <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li> */}
                        </ul>
                    </div>

                    {/* seconda lista */}
                    <div>
                        <h5>SHOP</h5>
                        <ul>
                            {/* versione mappata */}
                            {ShopLinksMapped}

                            {/* <li><a href="#">Shop Dc</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li> */}
                        </ul>
                    </div>

                    {/* terza lista */}
                    <div>
                        <h5>DC</h5>
                        <ul>

                            {/* versione mappata */}
                            {DCLinksMapped}

                            {/* <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li> */}
                        </ul>
                    </div>

                    {/* Quarta lista lista */}
                    <div>
                        <h5>SITES</h5>
                        <ul>

                            {/* versione mappata */}
                            {SITESLinksMapped}

                            {/* <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li> */}
                        </ul>
                    </div>
                </div>


            </div>

            <div className="end-page">
                <div className="endpage-flex">
                    <button className='btn'>SIGN-UP NOW!</button>
                    <div className="footer-socials">
                        <p>FOLLOW US</p>
                        <ul>

                            {/* versione mappata */}
                            {socialsLinksMapped}

                            {/* <li><a href="#"><img src='../../src/assets/footer-facebook.png' alt="Facebook" /></a></li>
                            <li><a href="#"><img src='../../src/assets/footer-twitter.png' alt="Twitter" /></a></li>
                            <li><a href="#"><img src='../../src/assets/footer-youtube.png' alt="Youtube" /></a></li>
                            <li><a href="#"><img src='../../src/assets/footer-pinterest.png' alt="Pinterest" /></a></li>
                            <li><a href="#"><img src='../../src/assets/footer-periscope.png' alt="Periscope" /></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )

}

export default MyFooter