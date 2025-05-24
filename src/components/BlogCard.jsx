export default function BlogCard({ title, content }) {
    return (
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mt-2 text-gray-700">{content.slice(0, 120)}...</p>
      </div>
    )
  }
  