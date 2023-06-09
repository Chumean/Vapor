import { useDispatch, useSelector } from "react-redux";
import { getCart, deleteFromCart } from "../../store/cart";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CartPage.css";


const Cart = () => {
    const dispatch = useDispatch();
    const [save, setSave] = useState("hidden")

    const user = useSelector(state => state.session?.user?.id)
    const sessionUser = useSelector(state => state.session?.user)

    useEffect(() => {
        dispatch(getCart(user));

    }, [dispatch, user])

    const cart = useSelector(state => state.cart)

    const cartArr = Object.values(cart)


    const onDelete = (e) => {
        e.preventDefault();
        dispatch(deleteFromCart(user))
    }

    const handleEdit = (game, save) => {

    }

    // removed isLoaded on return (cartArr && cartArr?.map)
    const cartContent = () => {
        // console.log("length is ", cartArr.length);
        // console.log(cartArr);
        if (cartArr.length > 0) {
            return (cartArr && cartArr?.map(game => {

                return (
                    <div className="cart-game" key={game?.id}>
                        <div className="game-info">
                            <NavLink
                                key={game?.id}
                                to={`/games/${game?.id}`}
                                style={{ textDecoration: "none" }}
                                className="game-link"
                            >
                                <div className="game-img">
                                    <img
                                        src={
                                            game && game?.image
                                        }
                                        style={{width: "120px", height: "45px"}}
                                    />
                                </div>
                                <div className="game-text">
                                    <div className="cart">
                                        {game?.title}
                                    </div>
                                    <div className="price">
                                        $ {game?.price.toFixed(2)}
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="qty">Qty: {game?.quantity}</div>
                        <div className="edit-section">
                            <button id={game.id} className="update-qty" onClick={() => handleEdit(game, save)}>Edit</button>
                            <button id={game.id} className="update-button delete" onClick={onDelete}>Delete</button>
                        </div>
                    </div >
                )
            }))
        }

        return (<li>Your shopping cart is empty</li>)
    }

    return (
        <div className="cart-page-content">
            <div className="cart-page-banner">
                    
                <div className="cart-title-container">
                    <h2 className="h2-cart-title">YOUR SHOPPING CART </h2>
                </div>
            </div>
                {sessionUser && user ? (<div className="cart-container-item-list">
                    {cartContent()}
                </div>) : (<h1>Please Log in to View Your Cart</h1>)}

                <div className="checkout-content">
                    <div className="cart-total-area">
                        <div className="estimated-total-box">
                            <div className="est-total-text">

                                <div className="est-total-price">price</div>
                                Estimated total
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cart;
