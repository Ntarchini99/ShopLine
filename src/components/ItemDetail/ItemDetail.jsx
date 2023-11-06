import { ItemCount } from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'


function ItemDetail (props) {
    const { id, Image, Marca, Nombre, Precio, Detalles } = props; 
    return (
        <>
      <div className="card mt-5 mb-5 ms-3 text-center col-md-3" key={id}>
              <img className="card-img-top mt-2" src={Image} alt={Nombre} />
        

        <h5 className=""> {Marca}</h5>
        <h6>{Nombre}</h6>
        <h6>{Detalles}</h6>
        <p className="">$ {Precio}</p>
        <ItemCount item={{ id, Marca, Nombre, Precio, Detalles }} />
        </div>
        </>
    );
}

export default ItemDetail;