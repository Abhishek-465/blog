import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo or Brand */}
        <div className="text-blue-600 font-bold text-xl mb-4 md:mb-0">
          BlogAI
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-gray-600 text-sm">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
          <Link to="/new" className="hover:text-blue-600">New Post</Link>
          <Link to="/ai" className="hover:text-blue-600">AI Helper</Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} BlogAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
