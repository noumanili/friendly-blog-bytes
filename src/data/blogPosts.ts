
import { BlogPost } from "@/components/BlogPostCard";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Tips for Writing Engaging Blog Content",
    excerpt: "Learn the fundamentals of creating blog content that captures your audience's attention and keeps them coming back for more.",
    slug: "10-essential-tips-for-writing-engaging-blog-content",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "Apr 2, 2025",
    readTime: "8 min read",
    category: "Writing",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: "2",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
    slug: "the-future-of-web-development-trends-to-watch",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "Apr 5, 2025",
    readTime: "10 min read",
    category: "Technology",
    author: {
      name: "David Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: "3",
    title: "How to Build a Successful Content Strategy for Your Blog",
    excerpt: "Discover proven strategies for planning, creating, and distributing content that resonates with your target audience.",
    slug: "how-to-build-a-successful-content-strategy",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "Apr 8, 2025",
    readTime: "7 min read",
    category: "Marketing",
    author: {
      name: "Lisa Nguyen",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  },
  {
    id: "4",
    title: "The Psychology Behind Effective Storytelling in Blogs",
    excerpt: "Understanding how storytelling affects the human brain and how you can use these insights to create compelling blog narratives.",
    slug: "psychology-behind-effective-storytelling",
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    date: "Apr 10, 2025",
    readTime: "6 min read",
    category: "Psychology",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  },
  {
    id: "5",
    title: "Mastering SEO: A Comprehensive Guide for Bloggers",
    excerpt: "Everything you need to know about optimizing your blog content for search engines to increase visibility and traffic.",
    slug: "mastering-seo-comprehensive-guide-for-bloggers",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "Apr 12, 2025",
    readTime: "12 min read",
    category: "SEO",
    author: {
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  },
  {
    id: "6",
    title: "Creating a Consistent Visual Identity for Your Blog",
    excerpt: "Learn how to develop a cohesive visual style that strengthens your brand and enhances reader experience.",
    slug: "creating-consistent-visual-identity-for-your-blog",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "Apr 15, 2025",
    readTime: "9 min read",
    category: "Design",
    author: {
      name: "James Taylor",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  }
];

export const getFeaturedPost = (): BlogPost => {
  return blogPosts[0];
};

export const getRecentPosts = (count: number = 5): BlogPost[] => {
  return blogPosts.slice(1, count + 1);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
