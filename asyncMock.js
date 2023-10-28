const products = [
{
    id:'BANDOSTYLE',
    name: 'BANDOLERA DE CUERO ',
    price:'12.000',
    category:'Bandoleras',
    img:'https://m.media-amazon.com/images/I/41faAJZmcOL._SL500_.jpg',
    stock:'5',
    description:'Bandolera 100% de cuero. Produccion propia. ',
},
{
    id:'ARTE3',
    name: 'Gorra SHEK',
    price:'13.000',
    category:'Gorras',
    img:'https://ih1.redbubble.net/image.3401295139.4271/ssrco,dad_hat,product,000000:44f0b734a5,front,square,600x600-bg,f8f8f8.jpg',
    stock:'10',
    description:'Gorra con bordado a mano',
},
{
    id:'GORRAGET',
    name: 'Gorra GET',
    price:'10.000',
    category:'Gorras',
    img:'https://ih1.redbubble.net/image.2820051668.1895/ssrco,baseball_cap,product,B7B4B8:25c8fc6a4c,front_three_quarter,wide_portrait,750x1000-bg,f8f8f8.jpg',
    stock:'2',
    description:'Gorra con bordado a mano',
},
{
    id:'RIÑOSTYLE',
    name: 'Riñonera STYLE',
    price:'10.000',
    category:'Riñoneras',
    img:'https://img.giglio.com/images/prodPage/E45213.032_1.jpg',
    stock:'4',
    description:'Riñonera para que te veas cancher@ y con STYLE',
},
]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1000)
     
    })
}


export const getProductById = (id) => {
    return new Promise((resolve) => {
        console.log("El id recibido es : " + id)
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductByCategoryId = (categoryId) => {
    return new Promise((resolve) => {
        console.log("El categoryId recibido es : " + categoryId)
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}