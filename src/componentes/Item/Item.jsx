import { Link, Navigate } from "react-router-dom"
const Item = ({id,name,price,category,img,stock,description}) =>{
    return (
    
        <div>
            
            <h1>{name}</h1>
            <img src={img} style={{width:300}}/>
            <h2>${price}</h2>
            <button onClick={() =>Navigate('/item')}>Ver  detalles</button>

        </div>
    )
}
export default Item


// {
//     id:'asdsa',
//     name: 'asd',
//     price:'sad',
//     category:'sdfdsc',
//     img:'sdfdsc',
//     stock:'sdfdsc',
//     description:'sdfdsc',
// },