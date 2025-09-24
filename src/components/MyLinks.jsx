// creo ed esporto component
import ShopComics from "../assets/buy-comics-digital-comics.png"
import ShopMerchandise from "../assets/buy-comics-merchandise.png"
import ShopSubscription from "../assets/buy-comics-subscriptions.png"
import ShopLocator from "../assets/buy-comics-shop-locator.png"
import PowerVisa from "../assets/buy-dc-power-visa.svg"

const MyLinks = () => {
    return (
        <div className="links">
            <div className="links-container">

                <a href="#">
                    <div className="single-link">
                        <img src={ShopComics}
                        alt="Shop Comics" />
                        <h3>DIGITAL COMICS</h3>
                    </div>
                </a>

                <a href="#">
                    <div className="single-link">
                        <img src={ShopMerchandise} alt="Shop Merchandise" />
                        <h3>DC MERCHANDISE</h3>
                    </div>
                </a>

                <a href="#">
                    <div className="single-link">
                        <img src={ShopSubscription} alt="Shop Subscription" />
                        <h3>SUBSCRIPTION</h3>
                    </div>
                </a>

                <a href="#">
                    <div className="single-link">
                        <img src={ShopLocator} alt="Shop Locator" />
                        <h3>COMIC SHOP LOCATOR</h3>
                    </div>
                </a>

                <a href="#">
                    <div className="single-link">
                        <img src={PowerVisa} alt="Power Visa" />
                        <h3>DC POWER VISA</h3>
                    </div>
                </a>

            </div>

        </div>

    )
}

export default MyLinks