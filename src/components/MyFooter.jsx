// creo ed esporto component

const MyFooter = () => {
    return (
        <footer>
            <div className="container">


                {/* prima lista */}
                <div>
                    <h5>DC COMICS</h5>
                    <ul>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>

                {/* seconda lista */} 
                <div>
                    <h5>Shop</h5>
                    <ul>
                        <li><a href="#">Shop Dc</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </div>

                {/* terza lista */} 
                <div>
                    <h5>DC</h5>
                    <ul>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Quarta lista lista */} 
                <div>
                    <h5>SITES</h5>
                    <ul>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>
                
                {/* logo overlay sul bg */}
                <img src="../../public/dc-logo-bg.png" alt="" />
                <div>
                    <button>SIGN-UP NOW!</button>
                    <p>FOLLOW US</p>
                    <ul>
                        <li><a href="#"></a>*facebook*</li>
                        <li><a href="#"></a>*twitter*</li>
                        <li><a href="#"></a>*yotube*</li>
                        <li><a href="#"></a>*pinterest*</li>
                        <li><a href="#"></a>*periscope*</li>
                    </ul>
                </div>
            </div>
        </footer>
    )

}

export default MyFooter