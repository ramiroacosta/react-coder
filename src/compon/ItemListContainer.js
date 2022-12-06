
import { useEffect , useState} from "react"
import Productoscard from "./Productoscard"

const productos = [
    { id: 1, title: "Iphone14", description: "excelente equipo",imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', price: "$1000",  stock: 10},
    { id: 1, title: "Iphone13", description: "excelente equipo",imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', price: "$900" ,  stock: 10},
    { id: 1, title: "Iphone12", description: "excelente equipo", price: "$800" , imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', stock: 10},
    { id: 1, title: "Iphone11", description: "excelente equipo", price: "$700" , imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', stock: 10}
]
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