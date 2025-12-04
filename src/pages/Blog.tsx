import { useState, useEffect } from 'react'
import './Blog.css'

interface BlogPost {
  id: string
  title: string
  entry: string
  created_at: string
}

function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://green-careers-map-demo.fly.dev/items/blog_posts')
        const result = await response.json()
        
        // Extract the data array from the response
        const data = result.data || result
        
        // Ensure data is an array before sorting
        if (Array.isArray(data)) {
          // Sort by created_at newest first
          const sortedPosts = data.sort((a: BlogPost, b: BlogPost) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
          
          setBlogPosts(sortedPosts)
        } else {
          console.error('Expected array but got:', typeof data)
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      }
    }
    
    fetchBlogPosts()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <section>
      <h2>Blog</h2>
      <div className="blog-container">
        {blogPosts.length === 0 ? (
          <p>No blog posts at this time.</p>
        ) : (
          blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-details">
                <h3>{post.title}</h3>
                <p className="blog-date">
                  <strong>Posted:</strong> {formatDate(post.event_date)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Blog
