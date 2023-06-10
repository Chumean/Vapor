import { useDispatch, useSelector } from "react-redux";
import { getCart, deleteFromCart } from "../../store/cart";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
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


    const onDelete = (userId, gameId) => {
        dispatch(deleteFromCart(userId, gameId));
    }

    const totalPrice = cartArr.reduce(
        (total, game) => total + (game?.game?.price || 0),
        0
    );

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


                                    <div className="price-container">

                                        <div className="price">
                                            $ {game?.game?.price}
                                        </div>

                                        <div className="remove-game"
                                            onClick={() => onDelete(user, game?.game?.id)}
                                            >Remove
                                        </div>
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
                            <div className="est-total-price">Estimated total: $ {totalPrice}</div>
                        </div>
                    </div>

                    <div className="buy-gift">Is this a purchase for yourself or is it a gift? Select one to continue to checkout.</div>

                    <div className="checkout-buttons">
                        <span className="purchase-myself">Purchase for myself</span>
                        <span className="purchase-gift">Purchase as a gift</span>
                    </div>

                </div>
        </div>
    )
}

export default Cart;
