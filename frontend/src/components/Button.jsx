export default function Button ({ chcildren, ...props }) {
  return <button
  {...props}
  type="submit"
  className="btn btn-black w-100"
  >{chcildren}</button>
}
