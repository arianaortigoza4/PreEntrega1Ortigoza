import { useState, useEffect } from "react"
import { getProducts } from "../../../asyncMock"
import ItemList from "../itemList/itemList"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts]=useState([])
    
    

    useEffect(() => {
        getProducts()
        .then(result => {
            setProducts(result)
        })
   }, [])

   console.log(products)
   const productsComponents = products.map(prod =>{
    return (
        
        <article key={prod.id}>
        <h1>{prod.name}</h1>
        
        </article>
        
    )
   })


    return (
        <>
        <h1 className="greeting">{greeting}</h1>
        <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer