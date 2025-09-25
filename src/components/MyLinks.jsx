// creo ed esporto component

const MyLinks = () => {
    return (
        <div className="links">
            <div className="links-container">

                <a href="#">
                    <div className="single-link">
                        <img src='../../src/assets/buy-comics-digital-comics.png'
                            alt="Shop Comics" />
                        <h3>DIGITAL COMICS</h3>
                    </div>
                </a>

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
                </a>

            </div>

        </div>

    )
}

export default MyLinks