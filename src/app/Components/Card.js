export default function Card({image, nombre}){
    return(
        <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}