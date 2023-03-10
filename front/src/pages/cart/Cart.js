import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Cart.css';
import Header from '../../components/Header'
import { MDBIcon, } from 'mdb-react-ui-kit';
import { ROUTE } from '../../utills/route'

function CardProductContainer({ img, productId, productName, price, handleDelete, checked, onChange, quantity, onIncrease, onDecrease }) {
    const currencySymbol = 'KRW';
    return <>

        <div className="cart-product-container">
            <div className="cart-product-info">
                <div className="cart-img-name">
                    <input type="checkbox" checked={checked} onChange={onChange} className="cart-checkbout" style={{ width: "15px", marginRight: "1rem" }}></input>
                    <Link to={`/product/detail/${productId}`}>
                        <img className="productImg" src={img} alt={productName} /></Link>
                    <div className="product-name"> <Link to={`/product/detail/${productId}`}>
                        {productName} </Link></div>
                </div>
                <div className="cart-quantity" >
                    <MDBIcon fas icon="minus-circle" onClick={onDecrease} />
                    <div className="cart-quantity-no">{quantity}</div>
                    <MDBIcon fas icon="plus-circle" onClick={onIncrease} />
                </div>
                <div className="product-price">{price.toLocaleString('en-US', { style: 'currency', currency: currencySymbol })} </div>
                <span className="delete-button">
                    <MDBIcon fas icon="times" onClick={handleDelete} /></span>
            </div>
        </div>
    </>
}


function Cart() {
    const currencySymbol = 'KRW';
    const shippingCost = 3000;
    const navigate = useNavigate();
    const location = useLocation();
    const [subtotal, setSubtotal] = useState(0);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    // const [quantity, setQuantity] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);


    const handleOrder = () => {
        localStorage.getItem("token") ? navigate('/order', { state: { cart } }) : navigate('/login', { state: { redirectUrl: location.pathname + location.search + location.hash } })
    }

    //?????? ?????? ?????? ??????
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setSelectedItems(selectAll ? [] : cart.map(item => item._id));
    };

    // ???????????? ??????
    const handleItemSelection = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter(_id => _id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    // ?????? ??????
    const handleDelete = () => {
        const updatedCart = cart.filter(item => !selectedItems.includes(item._id));
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
        setSelectedItems([]);
        setSelectAll(false);

    };

    // x ?????? ?????? ??? ?????? ?????? ???????????? ?????? 
    const handleRemoveFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);

    };

    // cart[index].quantity??? add +1
    const handleIncrease = (index) => {
        const updatedCart = cart.map((item) => {
            if (item._id === index) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);

    }

    const handleDecrease = (index) => {
        const updatedCart = cart.map((item) => {
            if (item._id === index) {
                if (item.quantity === 1) { return item }
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);

    }


    useEffect(() => {
        const sum = cart.reduce((accum, curr) => accum + curr.price * curr.quantity, 0)
        setSubtotal(sum);
    }, [cart])


    return (<>
        <div className="nav-section"  >
            <Header title="Cart" style={{ marginBottom: "0" }}></Header>
        </div >

        {/*
1. {Array.isArray(cart)  cart ??? undefined??? ?????????
2.  ????????????.leng !==0 ?????? ??????
3. ????????????.leng ===0 ????????? ??????
*/ }

        <div className="section" style={{ marginTop: "0" }}>
            <p className='cart-product-header'>
                <input type="checkbox" onChange={handleSelectAll} checked={selectAll} className="cart-checkbout" style={{ width: "15px" }}></input>
                <div style={{ display: "inline", marginLeft: "1rem" }}>????????????</div>
                <div style={{ display: "inline", marginLeft: "1rem" }}>|</div>
                <div style={{ display: "inline", marginLeft: "1rem", cursor: "pointer" }} onClick={handleDelete}>????????????</div></p>
            <div className="product-tile ">
                {cart.length !== 0
                    ?
                    cart.map(item =>
                    (<CardProductContainer key={item._id} img={"https://res.cloudinary.com/moteam/image/upload/" + item.imageKey + ".png"}
                        productId={item._id}
                        productName={item.productName}
                        price={item.price * item.quantity}
                        quantity={item.quantity}
                        handleDelete={handleRemoveFromCart}
                        checked={selectedItems.includes(item._id)}
                        onChange={() => handleItemSelection(item._id)}
                        onIncrease={() => handleIncrease(item._id)}
                        onDecrease={() => handleDecrease(item._id)}
                    ></CardProductContainer>)
                    )
                    : <p>??????????????? ??????????????????.</p>}
            </div>
            {/* {Array.isArray(cart) && */}
            {cart.length !== 0 &&
                <div className="payment-tile">
                    <div className="payment-summary " >
                        <div className="payment-header">????????????</div>
                        <div className="payment-info" >
                            <div className="info"><p>?????? ??? ??????</p> <p id="productsTotal">{subtotal.toLocaleString('en-US', { style: 'currency', currency: currencySymbol })}</p></div>
                            <div className="info"><p>?????????</p> <p id="deliveryFee">{shippingCost.toLocaleString('en-US', { style: 'currency', currency: currencySymbol })}</p> </div>
                        </div>
                        <div className="payment-total" ><p>??? ????????????</p> <p id="Total">{(subtotal + shippingCost).toLocaleString('en-US', { style: 'currency', currency: currencySymbol })}</p> </div>


                        <div className="purchase" >
                            <button className="purchase-button" onClick={handleOrder}>????????????</button>
                        </div>
                        <p style={{ textAlign: 'center', marginTop: "1rem", textDecoration: "underline", display: "inline" }}>
                            <Link to={ROUTE.HOME.link}>Back home
                            </Link> </p>
                    </div>
                </div>}
        </div>
    </>
    )
}

export default Cart;