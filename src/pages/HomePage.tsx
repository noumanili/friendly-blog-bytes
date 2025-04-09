
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedPost from '@/components/FeaturedPost';
import BlogPostCard from '@/components/BlogPostCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedPost, getRecentPosts } from '@/data/blogPosts';

const HomePage = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(5);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8">
          <FeaturedPost post={featuredPost} />
        </section>
        
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <Button variant="outline" asChild>
              <Link to="/blog" className="inline-flex items-center">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Get the latest articles, resources, and insights delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md border focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <Button className="px-6">Subscribe</Button>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About BlogBytes</h2>
            <p className="text-gray-600 mb-6">
              BlogBytes is a modern blogging platform dedicated to sharing valuable insights, tips, and stories across various topics like technology, writing, marketing, and more. Our mission is to provide high-quality content in a clean, distraction-free reading environment.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
