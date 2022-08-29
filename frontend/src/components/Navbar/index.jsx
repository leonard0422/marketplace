// import { Link } from 'react-router-dom'
// import './style.css'
// import './market-place-4.css'
// import { Asset } from '../../utils/source'
// import { useAuth } from '../../context/AuthContext'
// import Cart from '../Cart'
// import SearchBox from '../SearchBox'
// import LeftMenu from '../LeftMenu'
// import { useState } from 'react'
// import NavbarUserInfo from '../NavbaruserInfo'

function Navbar () {
//   const { user } = useAuth()
//   const [ShowLeftMenu, setShowLeftMenu] = useState(false)
//   const toggleLeftMenu = () => {
//     setShowLeftMenu(!ShowLeftMenu)
//   }
  return (
        <header className="header header--standard header--market-place-4" data-sticky="true">
            <div className="header__content">

                <div className="container">

                    <div className="header__content-left">

                        <a className="ps-logo" href="index.html">
                            <img src="img/template/logo_light.png" alt="" />
                        </a>

                        <div className="menu--product-categories">

                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Shop by Department</span>
                            </div>

                            <div className="menu__content">
                                <ul className="menu--dropdown">
                                    <li>
                                        <a href="#"><i className="icon-star"></i> Hot Promotions</a>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu">
                                        <a href="#"><i className="icon-laundry"></i> Consumer Electronic</a>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Electronic<span className="sub-toggle"></span></h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="#">Home Audio &amp; Theathers</a>
                                                    </li>
                                                    <li><a href="#">TV &amp; Videos</a>
                                                    </li>
                                                    <li><a href="#">Camera, Photos &amp; Videos</a>
                                                    </li>
                                                    <li><a href="#">Cellphones &amp; Accessories</a>
                                                    </li>
                                                    <li><a href="#">Headphones</a>
                                                    </li>
                                                    <li><a href="#">Videosgames</a>
                                                    </li>
                                                    <li><a href="#">Wireless Speakers</a>
                                                    </li>
                                                    <li><a href="#">Office Electronic</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Accessories &amp; Parts<span className="sub-toggle"></span></h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="#">Digital Cables</a>
                                                    </li>
                                                    <li><a href="#">Audio &amp; Video Cables</a>
                                                    </li>
                                                    <li><a href="#">Batteries</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-shirt"></i> Clothing &amp; Apparel</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-lampshade"></i> Home, Garden &amp; Kitchen</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-heart-pulse"></i> Health &amp; Beauty</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-diamond2"></i> Yewelry &amp; Watches</a>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu">
                                        <a href="#"><i className="icon-desktop"></i> Computer &amp; Technology</a>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Computer &amp; Technologies<span className="sub-toggle"></span></h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="#">Computer &amp; Tablets</a>
                                                    </li>
                                                    <li><a href="#">Laptop</a>
                                                    </li>
                                                    <li><a href="#">Monitors</a>
                                                    </li>
                                                    <li><a href="#">Networking</a>
                                                    </li>
                                                    <li><a href="#">Drive &amp; Storages</a>
                                                    </li>
                                                    <li><a href="#">Computer Components</a>
                                                    </li>
                                                    <li><a href="#">Security &amp; Protection</a>
                                                    </li>
                                                    <li><a href="#">Gaming Laptop</a>
                                                    </li>
                                                    <li><a href="#">Accessories</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-baby-bottle"></i> Babies &amp; Moms</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-baseball"></i> Sport &amp; Outdoor</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-smartphone"></i> Phones &amp; Accessories</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-book2"></i> Books &amp; Office</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-car-siren"></i> Cars &amp; Motocycles</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-wrench"></i> Home Improments</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-tag"></i> Vouchers &amp; Services</a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className="header__content-center">
                        <form className="ps-form--quick-search" action="index.html" method="get">
                            <div className="form-group--icon">
                                <i className="icon-chevron-down"></i>
                                <select className="form-control">
                                    <option value="1">All</option>
                                    <option value="1">Smartphone</option>
                                    <option value="1">Sounds</option>
                                    <option value="1">Technology toys</option>
                                </select>
                            </div>
                            <input className="form-control" type="text" placeholder="I'm shopping for..." />
                            <button>Search</button>
                        </form>
                    </div>

                    <div className="header__content-right">

                        <div className="header__actions">

                            <a className="header__extra" href="#">
                                <i className="icon-heart"></i><span><i>0</i></span>
                            </a>

                            <div className="ps-cart--mini">

                                <a className="header__extra" href="#">
                                    <i className="icon-bag2"></i><span><i>0</i></span>
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

                            <div className="ps-block--user-header">
                                <div className="ps-block__left">
                                    <i className="icon-user"></i>
                                </div>
                                <div className="ps-block__right">
                                    <a href="my-account.html">Login</a>
                                    <a href="my-account.html">Register</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </header >

  )
}

export default Navbar
