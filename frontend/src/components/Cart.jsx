import CartLogo from './CartLogo'

export default function Cart ({ itemsNumber }) {
  return (
    <a className="btn position-relative" href="#">
      <CartLogo className="layout-header-links__cart-icon position-absolute position-icon" />
      <span className="layout-header-links__cart-items-count">{ itemsNumber }</span>
    </a>
  )
}
