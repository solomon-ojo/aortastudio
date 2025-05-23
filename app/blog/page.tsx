import ContactFormSection from "@/components/sections/contact-form-section"

export default function BlogPage() {
  const featuredPost = {
    title: "Outsourced Development vs. In-House Teams: Making the Right Choice for Your Business",
    image:
      "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/67a35345650bc40c1739b455_laptop-2620118_1280.jpg",
    author: "Jovana Milicevic",
    slug: "outsourced-development-vs-in-house-teams-making-the-right-choice-for-your-business",
  }

  const blogPosts = [
    {
      title: "A Pragmatic Guide to AI Implementation That Actually Works",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/680b7c7642665c0b70d7beca_coding-924920_1280.jpg",
      slug: "a-pragmatic-guide-to-ai-implementation-that-actually-works",
    },
    {
      title: "Outsourced Development vs. In-House Teams: Making the Right Choice for Your Business",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/67a35345650bc40c1739b455_laptop-2620118_1280.jpg",
      slug: "outsourced-development-vs-in-house-teams-making-the-right-choice-for-your-business",
    },
  ]

  return (
    <main className="min-h-screen bg-[#e8f1f1] text-black">
      <section className="section is-blog-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-sm uppercase mb-2">OUR ARTICLES</div>
              <h1 className="text-5xl md:text-7xl font-light mb-8">Blog</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-featured-blog py-16 bg-[#e8f1f1]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <a href={`/blog/${featuredPost.slug}`} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4">
                  <div className="text-sm uppercase mb-2">FEATURED BLOG</div>
                  <h2 className="text-3xl md:text-4xl font-light mb-4">{featuredPost.title}</h2>
                  <div className="flex items-center text-sm">
                    <span className="uppercase mr-2">Author:</span>
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.61892 0.905477L6.32162 1.20277L11.9107 6.79188H0.49468L0.49468 7.20809L11.9107 7.20809L6.32162 12.7972L6.61892 13.0945L12.7134 6.99998L6.61892 0.905477Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section is-blog-posts py-16 bg-[#e8f1f1]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <a key={index} href={`/blog/${post.slug}`} className="group">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-medium group-hover:text-[#00a896] transition-colors">{post.title}</h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M6.61892 0.905477L6.32162 1.20277L11.9107 6.79188H0.49468L0.49468 7.20809L11.9107 7.20809L6.32162 12.7972L6.61892 13.0945L12.7134 6.99998L6.61892 0.905477Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </main>
  )
}
