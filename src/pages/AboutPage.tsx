
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Editor-in-Chief',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Former journalist with a passion for digital storytelling and content strategy.'
  },
  {
    name: 'David Chen',
    role: 'Senior Tech Writer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Software engineer turned writer who specializes in making complex tech topics accessible.'
  },
  {
    name: 'Lisa Nguyen',
    role: 'Content Strategist',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    bio: 'Marketing expert who helps shape our content direction and growth strategies.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'UX Writer & Designer',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    bio: 'Combines design thinking with writing to create seamless user experiences.'
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About BlogBytes</h1>
              <p className="text-xl text-gray-600 mb-8">
                We're on a mission to share valuable insights and stories that inspire, educate, and entertain.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  BlogBytes was founded in 2024 with a simple mission: to create a platform where quality content could shine. 
                  In a digital landscape filled with clickbait and shallow articles, we wanted to build a space dedicated to thoughtful, 
                  well-researched content that genuinely helps and inspires readers.
                </p>
                
                <p>
                  What started as a small personal blog has grown into a diverse platform covering topics ranging from technology and 
                  writing to marketing and personal development. Throughout our growth, we've remained committed to our core values: 
                  quality over quantity, reader-first thinking, and continuous learning.
                </p>
                
                <p>
                  Today, BlogBytes serves thousands of readers worldwide who come to us for reliable information, practical advice, 
                  and engaging stories. We continue to evolve and expand our content offerings while maintaining the high standards 
                  that our community has come to expect.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do at BlogBytes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Quality First</h3>
                  <p className="text-gray-600 text-center">
                    We prioritize depth, accuracy, and thoughtfulness in everything we publish.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Community Focus</h3>
                  <p className="text-gray-600 text-center">
                    We listen to our readers and create content that addresses their needs and interests.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Continuous Innovation</h3>
                  <p className="text-gray-600 text-center">
                    We embrace new ideas and approaches to deliver better content experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">
                The passionate individuals behind BlogBytes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-lg mb-8">
                Subscribe to our newsletter to get weekly insights and be part of our growing community of readers and creators.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:outline-none"
                />
                <Button variant="secondary" className="px-6">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions, feedback, or want to work with us? We'd love to hear from you.
              </p>
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
