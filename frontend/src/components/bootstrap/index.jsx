
export function Container ({ children, type }) {
  return (
    <div classNames={type === 'fluid' ? 'container-fluid' : 'container'}>
      { children }
    </div>
  )
}
