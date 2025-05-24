import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">BlogAI</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
        <Link to="/new" className="hover:text-blue-600">New Post</Link>
        <Link to="/ai" className="hover:text-blue-600">AI Helper</Link>
      </div>
    </nav>
  )
}
