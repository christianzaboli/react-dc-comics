
// creo ed esporto component

const MyCard = (props) => {

    const { id, title, series, thumb } = props;

    return (
        <a href='#' key={id} className='card'>
            <div><img className='cardImg' src={thumb} alt={title} /></div>
            <h4>{series}</h4>
        </a>
    )
}

export default MyCard