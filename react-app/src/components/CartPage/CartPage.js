import { useDispatch, useSelector } from "react-redux";
import { getCart, deleteFromCart } from "../../store/cart";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {AiFillAppstore} from 'react-icons/ai'
import "./CartPage.css";

// IF DUPLICATE, JUST HISTORY PUSH TO CART WITHOUT CHANGING QTY
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

    console.log(cart, "CART")
    console.log(cartArr, "CART ARR")


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
                    <div className="cart-item" key={game?.id}>
                        <div className="cart-game-info">
                            <NavLink
                                key={game?.id}
                                to={`/games/${game?.game?.id}`}
                                style={{ textDecoration: "none" }}
                                className="game-link"
                            >

                                <div className="game-img-container">
                                    <img
                                        src={
                                            game && game?.game?.image
                                        }
                                        style={{width: "120px", height: "45px"}}
                                        className="game-img"
                                    />
                                </div>
                            </NavLink>

                            <a
                                href={`/games/${game?.game?.id}`}
                                style={{ textDecoration: "none" }}
                                className="game-link"
                                key={game?.id}
                            >

                                <div className="cart-game-title">
                                        {game?.game?.title}
                                </div>
                            </a>

                            <div className="platform-icon">
                                <AiFillAppstore />
                            </div>

                                    <div className="price-container">

                                        <div className="price">
                                            $ {game?.game?.price}
                                        </div>

                                        <div className="remove-game"
                                        onClick={onDelete}
                                        >Remove</div>
                                    </div>
                        </div>

                        {/* <div className="qty">Qty: {game?.quantity}</div> */}

                        {/* <div className="edit-section">
                            <button id={game.id} className="update-qty" onClick={() => handleEdit(game, save)}>Edit</button>

                        </div> */}
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

                                <div className="est-total-price">$</div>
                                Estimated total
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cart;
