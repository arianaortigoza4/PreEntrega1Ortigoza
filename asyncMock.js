const products = [
{
    id:'BANDO.STYLE',
    name: 'BANDOLERA DE CUERO ',
    price:'12.000',
    category:'Accesorios',
    img:'multimedia/BANDOCC2.jpg',
    stock:'100',
    description:'Bandolera 100% de cuero. Produccion propia. ',
},
{
    id:'ARTE3',
    name: 'Gorra SHEK',
    price:'13.000',
    category:'Accesorios',
    img:'multimedia/SHEK1.jpg',
    stock:'100',
    description:'Gorra con bordado a mano',
},
{
    id:'GORRA.GET',
    name: 'Gorra GET',
    price:'10.000',
    category:'Accesorios',
    img:'multimedia/GET1.jpg',
    stock:'100',
    description:'Gorra con bordado a mano',
},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1000)
     
    })
}