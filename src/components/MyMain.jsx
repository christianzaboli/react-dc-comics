// creo ed esporto component
import MyLinks from './MyLinks'
const MyMain = () => {
    return (
        <main>
            <div className="container">

                <div className='main-content'>
                    <h1> Content goes here </h1>
                </div>
            </div>
            <MyLinks />
        </main>
    )

}

export default MyMain