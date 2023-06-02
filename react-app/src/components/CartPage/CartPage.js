import { useDispatch, useSelector } from "react-redux";
import { getCart, deleteFromCart } from "../../store/cart";
import { useEffect, useState } from "react";
import "./cart.css"
import CartQtyForm from "../CartQtyForm/"
import { useModal } from "../../context/Modal";
import { NavLink } from "react-router-dom";

function Cart() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const [display, setDisplay] = useState("")
    const [save, setSave] = useState("hidden")
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session?.user?.id)
    const sessionUser = useSelector(state => state.session?.user)



    useEffect(() => {
        dispatch(getCart(user));
        setIsLoaded(true)
    }, [dispatch, user])

    const cart = useSelector(state => state.cart)
    // console.log("***********", cart && cart);

    const cartArr = Object.values(cart)
    console.log("-----------", cart && cartArr, cart && cartArr.length);

    const onDelete = (e) => {
        console.log('delete', e.target.id);
        dispatch(deleteFromCart(user, e.target.id))
        // dispatch(getCart(user));
    }

    const { setModalContent } = useModal();

    const openModal = () => { setShowModal(true) };

    const handleEdit = (game, save) => {
        setModalContent(<CartQtyForm game={game} fCls={"update"} />)
        openModal();

    }

    const cartContent = () => {

        if (cartArr.length > 0) {
            return (isLoaded && cartArr && cartArr?.map(game => {


                return (
                    <div className="cart-game" key={game?.id}>
                        <div className="game-info">
                            <NavLink
                                key={game?.id}
                                to={`/games/${game?.game?.id}`}
                                style={{ textDecoration: "none" }}
                                className="game-link"
                            >
                                <div className="game-img">
                                    <img
                                        src={
                                            game && game?.game?.images
                                        }
                                        style={{ width: "120px", height: "45px" }}
                                    />
                                </div>
                                <div className="game-text">
                                    <div className="name">
                                        {game?.game?.name}
                                    </div>
                                    <div className="price">
                                        $ {game?.game?.price.toFixed(2)}
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="qty">Qty: {game?.quantity}</div>
                        <div className="edit-section">
                            <button id={game.id} className={display + " update-button"} onClick={() => handleEdit(game, save)}>Edit</button>
                            <button id={game.game?.id} className="update-button delete" onClick={onDelete}>Remove</button>
                        </div>

                        <div className="continue-shopping">
                            <li>
                                <NavLink exact to="/" >
                                    <div>
                                        <p>Continue Shopping</p>
                                    </div>
                                </NavLink>
                            </li>
                        </div>
                    </div >
                )
            }))
        }

        return (<li>Your shopping cart is empty</li>)
    }

    return (
        <div>
            <div className="cart-page-banner">

            </div>
            {/* <div className="tester"> */}
                {/* <div className="cart-page-container"> */}
                <div className="title-container">
                    <h1>Your Shopping Cart </h1>
                </div>
                {sessionUser && user ? (<div className="cart-container-item-list">
                    {cartContent()}
                </div>) : (<h1>Please Log in to View Your Cart</h1>)}
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Cart;

// Include Continue Shopping that redirects to "/"
// Remove button by itself does not use modal
// Include Remove all items button to clear cart
// Make that a modal to remove all items from shopping cart
