import MyLinks from './MyLinks'
import comics from './microComponents/comics'

import MyCard from './microComponents/MyCard'
// creo ed esporto component

const MyMain = () => {

    // funzione di creazione card
    // const comicsMapped = 


    return (
        <main>
            <div className='jumbotron'></div>
            <div className="container">
                <div className='main-content'>
                    <h2 className='currentLabel'>CURRENT SERIES</h2>
                    <div className='card-container'>

                        {/* versione con props */}
                        {comics.map(comic => (
                            <MyCard
                                id={comic.id}
                                thumb={comic.thumb}
                                title={comic.title}
                                series={comic.series}
                            />
                        ))}

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