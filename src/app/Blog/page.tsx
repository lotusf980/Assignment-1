
import Layout from "../Components/Layout";

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Gadgets of 2024',
    excerpt: 'Discover the latest gadgets that are taking the tech world by storm in 2024.',
    date: 'October 1, 2024',
    slug: 'top-10-gadgets-of-2024',
  },
  {
    id: 2,
    title: 'Understanding AI and Its Impact on Technology',
    excerpt: 'Explore how artificial intelligence is transforming various sectors and its implications for the future.',
    date: 'September 20, 2024',
    slug: 'understanding-ai-impact',
  },
  {
    id: 3,
    title: 'The Future of Wearable Technology',
    excerpt: 'A look into the next generation of wearable devices and what they mean for consumers.',
    date: 'September 15, 2024',
    slug: 'future-of-wearable-tech',
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <Layout>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Blog</h1>
          <p className="text-lg text-gray-600 mb-12">
            Stay updated with the latest trends and insights in technology and gadgets.
          </p>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-2">{post.date}</p>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
