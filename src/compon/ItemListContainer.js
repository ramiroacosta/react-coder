
import { useEffect , useState} from "react"
import { productos } from "../data/productos"
import Productoscard from "./Productoscard"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        getProductos().then(res => {
            setItems(res)
        })
    }, [])
    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000);
            
        })
    }
    return (
        <div className="flex flex-wrap gap-4">
            {items.map( i => <Productoscard key={i.id}{...i}/>)}
        </div>
    )
}

export default ItemListContainer