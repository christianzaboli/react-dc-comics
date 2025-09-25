import MyLinks from './MyLinks'
import comics from './microComponents/comics'

// creo ed esporto component

const MyMain = () => {

    // funzione di creazione card
    const comicsMapped = comics.map(card => (
        <a href='#' key={card.id} className='card'>
            <div><img className='cardImg' src={card.thumb} alt={card.title} /></div>
            <h4>{card.series}</h4>
        </a>
    ))


    return (
        <main>
            <div className='jumbotron'></div>
            <div className="container">
                <div className='main-content'>
                    <h2 className='currentLabel'>CURRENT SERIES</h2>
                    <div className='card-container'>
                        {comicsMapped}

                        <button className='btn-blue'>LOAD MORE</button>
                    </div>
                </div>
            </div>

            {/* fascia blu con i links */}
            <MyLinks />
        </main>
    )
}

export default MyMain