import cart from '../../assets/react.svg'
import { useCart } from '../../context/CartContext.jsx'
const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <button>
        <img src={cart} className='btn btn-danger'/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget
