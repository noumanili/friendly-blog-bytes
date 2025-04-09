
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

const BlogPostCard = ({ post, variant = 'default' }: BlogPostCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <Card className={`overflow-hidden border-0 ${isFeatured ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Badge variant="secondary" className="px-2 py-0.5 text-xs font-medium">
            {post.category}
          </Badge>
          <div className="flex items-center text-gray-500 text-xs">
            <CalendarDays className="h-3 w-3 mr-1" />
            {post.date}
          </div>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </div>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h3 className={`${isFeatured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 mb-2 hover:text-primary transition-colors line-clamp-2`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="px-6 py-4 border-t bg-gray-50 flex items-center">
        <img 
          src={post.author.avatar} 
          alt={post.author.name}
          className="h-8 w-8 rounded-full mr-3"
        />
        <span className="text-sm font-medium text-gray-700">
          {post.author.name}
        </span>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
