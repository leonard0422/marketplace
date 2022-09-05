import { FaShoppingBasket } from 'react-icons/fa'
export default function CarritoNavbar () {
  return (
        <div className="ps-cart--mini">

            <a className="header__extra" href="#">
                <i className="icon-bag2"><FaShoppingBasket size={'3.5rem'}></FaShoppingBasket></i>
                <span><i>0</i></span>
            </a>

            <div className="ps-cart__content">

                <div className="ps-cart__items">

                    <div className="ps-product--cart-mobile">

                        <div className="ps-product__thumbnail">
                            <a href="#">
                                <img src="img/products/clothing/7.jpg" alt="" />
                            </a>
                        </div>

                        <div className="ps-product__content">
                            <a className="ps-product__remove" href="#">
                                <i className="icon-cross"></i>
                            </a>
                            <a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                            <p><strong>Sold by:</strong> YOUNG SHOP</p>
                            <small>1 x $59.99</small>
                        </div>

                    </div>

                    <div className="ps-product--cart-mobile">

                        <div className="ps-product__thumbnail">
                            <a href="#">
                                <img src="img/products/clothing/5.jpg" alt="" />
                            </a>
                        </div>

                        <div className="ps-product__content">
                            <a className="ps-product__remove" href="#">
                                <i className="icon-cross"></i>
                            </a>
                            <a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                            <p><strong>Sold by:</strong> YOUNG SHOP</p>
                            <small>1 x $59.99</small>
                        </div>

                    </div>

                </div>

                <div className="ps-cart__footer">

                    <h3>Sub Total:<strong>$59.99</strong></h3>
                    <figure>
                        <a className="ps-btn" href="shopping-cart.html">View Cart</a>
                        <a className="ps-btn" href="checkout.html">Checkout</a>
                    </figure>

                </div>

            </div>

        </div>
  )
}
