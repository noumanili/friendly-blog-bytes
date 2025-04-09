
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from './BlogPostCard';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative bg-gray-900 text-white rounded-xl overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
      </div>
      
      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full min-h-[500px] justify-end">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3">
            <Badge className="bg-primary hover:bg-primary/90">
              {post.category}
            </Badge>
            <span className="flex items-center text-gray-300 text-sm">
              <CalendarDays className="h-4 w-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center text-gray-300 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          
          <p className="text-gray-300 text-lg max-w-2xl">
            {post.excerpt}
          </p>
          
          <div className="flex items-center pt-2">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="h-10 w-10 rounded-full border-2 border-white/20 mr-4"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-gray-400 text-sm">Author & Editor</p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button asChild>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
