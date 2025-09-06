import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LogoWithCaption } from "./ui/logo";
import { HomepageHeader } from "./HomepageHeader";
import { JoinModal } from "./JoinModal";
import { useState } from "react";
import { PlatformPreview } from "./PlatformPreview";
import { 
  Users, 
  MessageCircle, 
  BookOpen, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Stethoscope,
  Heart,
  Brain,
  Smile,
  Scissors,
  Microscope,
  Activity,
  Leaf
} from "lucide-react";

interface HomepageProps {
  onEnterApp: () => void;
}

export function Homepage({ onEnterApp }: HomepageProps) {
  const [showJoinModal, setShowJoinModal] = useState(false);

    const handleJoinSuccess = () => {
    // After successful registration, enter the app
    onEnterApp();
  };

  const features = [
    {
      icon: Users,
      title: "Professional Networking",
      description: "Connect with verified medical professionals worldwide. Build meaningful relationships with colleagues in your specialty and beyond.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: MessageCircle,
      title: "Clinical Discussions",
      description: "Engage in evidence-based discussions, share complex cases, and get expert opinions from specialists in real-time.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: BookOpen,
      title: "Medical Resources",
      description: "Access the latest research papers, clinical guidelines, and educational materials curated by medical experts.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensuring all communications and data are protected according to medical privacy standards.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Zap,
      title: "Real-time Collaboration",
      description: "Instant messaging, case consultations, and collaborative diagnosis tools for immediate professional support.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Globe,
      title: "Global Medical Community",
      description: "Join a worldwide network of healthcare professionals sharing knowledge and advancing medical practice together.",
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ];

  const specialties = [
    { name: "Cardiology", icon: Heart, count: "2,847", color: "text-red-500" },
    { name: "Neurology", icon: Brain, count: "1,923", color: "text-purple-500" },
    { name: "Emergency Medicine", icon: Activity, count: "3,156", color: "text-orange-500" },
    { name: "Dentistry", icon: Smile, count: "2,234", color: "text-blue-500" },
    { name: "Surgery", icon: Scissors, count: "2,234", color: "text-red-500" },
    { name: "Para-Clinical", icon: Microscope, count: "2,234", color: "text-green-500" },
    { name: "Pediatrics", icon: Stethoscope, count: "2,234", color: "text-blue-500" },
    { name: "Ayurvedic Medicine", icon: Leaf, count: "2,234", color: "text-green-700" },
  ];

  const stats = [
    { label: "Medical Professionals", value: "25,000+", icon: Users },
    { label: "Active Discussions", value: "1,200+", icon: MessageCircle },
    { label: "Countries Represented", value: "150+", icon: Globe },
    { label: "Research Papers Shared", value: "5,000+", icon: BookOpen },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Infectious Disease Specialist",
      hospital: "Johns Hopkins Hospital",
      quote: "SphereRx has revolutionized how I collaborate with colleagues worldwide. The case discussions have improved my diagnostic accuracy significantly.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      specialty: "Cardiologist",
      hospital: "Mayo Clinic",
      quote: "The platform's security features give me confidence when discussing sensitive cases. It's become an essential tool in my daily practice.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Dr. Jennifer Liu",
      specialty: "Pediatric Endocrinologist",
      hospital: "Boston Children's Hospital",
      quote: "Finding specialists for rare pediatric cases used to be challenging. SphereRx's network has been invaluable for patient care.",
      avatar: "JL",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Homepage Header */}
      <HomepageHeader onEnterApp={onEnterApp} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  {/* 🩺 Trusted by 25,000+ Medical Professionals */}
                  🩺 Your Sphere of Medical Connections
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Connect. Collaborate. 
                  <span className="text-green-600"> Advance Medicine.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join the world's most trusted professional network for medical professionals. 
                  Share knowledge, discuss complex cases, and advance healthcare through collaboration.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                  onClick={() => setShowJoinModal(true)}
                >
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <JoinModal
                        isOpen={showJoinModal}
                        onClose={() => setShowJoinModal(false)}
                        onSuccess={handleJoinSuccess}
                />
                {/* <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-3 border-green-200 text-green-700 hover:bg-green-50"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button> */}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {/* {stats.slice(0, 4).map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })} */}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Group-Doctor.jpg"
                  alt="Medical professionals collaborating"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">HIPAA Compliant</div>
                    <div className="text-sm text-gray-600">Enterprise Security</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    {/* <div className="font-semibold text-gray-900">150+ Countries</div> */}
                    <div className="text-sm text-gray-600">Global Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Medical Professionals Choose SphereRx ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for healthcare professionals, 
              providing the tools and security needed for effective medical collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-100">
                  <CardContent className="p-6">
                    <div className={`h-12 w-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <PlatformPreview onEnterApp={onEnterApp} />

      {/* Specialties Section */}
      <section id="specialties" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Connect Across Medical Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of specialists from every field of medicine
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <IconComponent className={`h-8 w-8 ${specialty.color}`} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{specialty.name}</h3>
                    {/* <p className="text-2xl font-bold text-green-600">{specialty.count}</p> */}
                    {/* <p className="text-sm text-gray-500">Professionals</p> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Medical Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what doctors are saying about SphereRx
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-medium text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.specialty}</div>
                      <div className="text-xs text-gray-500">{testimonial.hospital}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join the Future of Medical Collaboration?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Connect with colleagues, share knowledge, and advance your medical practice today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3"
                  onClick={() => setShowJoinModal(true)}
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <JoinModal
                        isOpen={showJoinModal}
                        onClose={() => setShowJoinModal(false)}
                        onSuccess={handleJoinSuccess}
                />
              {/* <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Schedule Demo
              </Button> */}
            </div>
            
            <div className="mt-8 text-green-100">
              <p className="text-sm">✓ Free to join  ✓ HIPAA compliant  ✓ No setup fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <LogoWithCaption></LogoWithCaption>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-600">Features</a></li>
                <li><a href="#" className="hover:text-green-600">Security</a></li>
                <li><a href="#" className="hover:text-green-600">Pricing</a></li>
                <li><a href="#" className="hover:text-green-600">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-600">Documentation</a></li>
                <li><a href="#" className="hover:text-green-600">Help Center</a></li>
                <li><a href="#" className="hover:text-green-600">Community</a></li>
                <li><a href="#" className="hover:text-green-600">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-600">About</a></li>
                <li><a href="#" className="hover:text-green-600">Careers</a></li>
                <li><a href="#" className="hover:text-green-600">Privacy</a></li>
                <li><a href="#" className="hover:text-green-600">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 SphereRx. All rights reserved. HIPAA compliant medical networking platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}