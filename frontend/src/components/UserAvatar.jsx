export default function UserAvatar ({ user }) {
  return (
    <>
    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.name} {user.last_name}</span>
        {/* <img className="img-profile rounded-circle" src="img/undraw_profile.svg" /> */}
    </>
  )
}
