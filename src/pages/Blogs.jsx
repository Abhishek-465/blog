import blogData from '../data/blogData'
import BlogCard from '../components/BlogCard'

export default function Blogs() {
  return (
    <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogData.map((blog, index) => (
        <BlogCard key={index} title={blog.title} content={blog.content} />
      ))}
    </div>
  )
}
