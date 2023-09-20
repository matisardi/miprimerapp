// import otraFoto from '../img/Ken.png'

export default function Usuario(props) {
    return (
        <div>
            <div className="card m-auto m-2" style={{width: "18rem"}}>
                <img src={props.foto} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.cargo}</p>
                    <a href="#" className="btn btn-primary">{props.conoceme}</a>
                </div>
            </div>
        </div>
    )
}
