import { FaBars } from 'react-icons/fa'

export default function MenuNavbar () {
  return (
        <div className="menu--product-categories" >

            <div className="menu__toggle">
                <i className="icon-menu"><FaBars></FaBars></i>
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

  )
}
