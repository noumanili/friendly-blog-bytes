
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import BlogPostCard, { BlogPost } from '@/components/BlogPostCard';
import { CalendarDays, Clock, Share2, Bookmark, MessageSquare } from 'lucide-react';
import { getPostBySlug, getRecentPosts } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || '');
  const relatedPosts = getRecentPosts(3);
  
  useEffect(() => {
    if (!post) {
      navigate('/not-found');
    }
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }

  // This would be actual content in a real blog
  const dummyContent = `
    <p class="lead">
      ${post.excerpt}
    </p>
    
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. 
      In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, 
      magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim.
    </p>
    
    <h2>Understanding the Fundamentals</h2>
    
    <p>
      Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor lobortis. 
      Pellentesque eu est a nulla placerat dignissim. Morbi a enim in magna semper bibendum. 
      Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi.
    </p>
    
    <blockquote>
      "The art of writing is the art of discovering what you believe."
      <cite>— Gustave Flaubert</cite>
    </blockquote>
    
    <p>
      Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. 
      Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. 
      Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.
    </p>
    
    <h2>Practical Implementation Strategies</h2>
    
    <p>
      Donec facilisis mauris sit amet vehicula auctor. Morbi magna libero, laoreet sit amet hendrerit at, tincidunt quis justo. 
      Phasellus scelerisque iaculis felis, eget posuere leo auctor quis. Vestibulum malesuada, mauris sed sodales imperdiet, 
      massa nunc blandit metus, vel consectetur urna magna non justo.
    </p>
    
    <ul>
      <li>Focus on creating valuable content for your audience</li>
      <li>Maintain a consistent posting schedule</li>
      <li>Use appropriate formatting to enhance readability</li>
      <li>Incorporate relevant visuals to support your content</li>
      <li>Engage with your readers through comments and feedback</li>
    </ul>
    
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
      Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
      Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
    </p>
    
    <h2>Conclusion</h2>
    
    <p>
      In conclusion, mastering these principles will help you create more engaging and effective blog content. 
      Remember that consistency and quality are key to building a loyal readership.
    </p>
  `;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <article>
          {/* Hero section */}
          <div className="relative h-[50vh] min-h-[400px] bg-gray-900">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="container mx-auto max-w-4xl">
                <Badge className="mb-4">{post.category}</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-gray-300 gap-x-6 gap-y-2">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full mr-2"
                    />
                    <span>{post.author.name}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog content */}
          <div className="container mx-auto max-w-4xl px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main content */}
              <div className="md:w-3/4">
                <div 
                  className="blog-content prose prose-lg prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: dummyContent }}
                />
                
                <Separator className="my-8" />
                
                {/* Article actions */}
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">Share this article:</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      </Button>
                      <Button variant="outline" size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </Button>
                      <Button variant="outline" size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Bookmark className="h-4 w-4 mr-2" />
                      <span>Save</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      <span>Comment</span>
                    </Button>
                  </div>
                </div>
                
                <Separator className="my-8" />
                
                {/* Author bio */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-16 w-16 rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{post.author.name}</h3>
                      <p className="text-gray-600 mb-3">
                        Content Writer & Editor
                      </p>
                      <p className="text-gray-700">
                        Content creator passionate about technology, writing, and digital marketing. 
                        Has been writing for over 5 years and loves sharing insights that help others succeed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:w-1/4">
                <div className="sticky top-24">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="group">
                        <Link to={`/blog/${relatedPost.slug}`} className="block">
                          <div className="aspect-video rounded-md overflow-hidden mb-2">
                            <img 
                              src={relatedPost.coverImage}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs mt-1">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            <span>{relatedPost.date}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Subscribe</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get notified about new articles and updates.
                    </p>
                    <input 
                      type="email"
                      placeholder="Your email"
                      className="w-full mb-2 px-3 py-2 text-sm border rounded-md"
                    />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
