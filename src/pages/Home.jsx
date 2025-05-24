import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Welcome to BlogAI</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A smart and intuitive blogging platform where creativity meets AI. Write, generate, and inspire effortlessly.
        </p>
        <div className="mt-6">
          <Link to="/new" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Start Writing
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Why Choose BlogAI?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">AI-Powered Writing</h3>
            <p className="text-gray-600">
              Get real-time content suggestions, blog topics, and even full paragraphs using GPT models.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Simple & Clean Interface</h3>
            <p className="text-gray-600">
              Focus on your writing with a distraction-free, user-friendly design tailored for bloggers.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Instant Publishing</h3>
            <p className="text-gray-600">
              Post your blog instantly and share it with the world with just one click.
            </p>
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Use AI For:</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {['Blog Titles', 'Topic Ideas', 'Content Expansion', 'SEO Optimization'].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-100 to-white p-4 rounded shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold text-blue-700">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to create something amazing?</h2>
        <Link to="/ai" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
          Ask the AI Now
        </Link>
      </section>
    </div>
  )
}
