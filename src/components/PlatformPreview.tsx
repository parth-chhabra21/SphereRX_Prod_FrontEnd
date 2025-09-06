import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  LayoutDashboard, 
  MessageCircle, 
  Users, 
  BookOpen, 
  Activity,
  Stethoscope,
  Calendar,
  FileText,
  Video,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield,
  Clock,
  Award,
  Brain,
  Heart,
  Zap
} from "lucide-react";

interface PlatformPreviewProps {
  onEnterApp: () => void;
}

export function PlatformPreview({ onEnterApp }: PlatformPreviewProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const previewTabs = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      title: "Professional Dashboard",
      description: "Get a comprehensive overview of your medical network activity and important updates."
    },
    {
      id: "discussions",
      label: "Discussions",
      icon: MessageCircle,
      title: "Clinical Discussions",
      description: "Engage in evidence-based discussions with specialists worldwide."
    },
    {
      id: "network",
      label: "Network",
      icon: Users,
      title: "Professional Network",
      description: "Connect with verified medical professionals across all specialties."
    },
    {
      id: "resources",
      label: "Resources",
      icon: BookOpen,
      title: "Medical Resources",
      description: "Access the latest research, guidelines, and educational materials."
    }
  ];

  const dashboardFeatures = [
    {
      icon: Activity,
      title: "Real-time Activity Feed",
      description: "Stay updated with the latest discussions, case studies, and medical updates from your network."
    },
    {
      icon: Calendar,
      title: "Upcoming Events",
      description: "Never miss important medical conferences, webinars, and continuing education opportunities."
    },
    {
      icon: TrendingUp,
      title: "Professional Analytics",
      description: "Track your network growth, discussion engagement, and professional development progress."
    },
    {
      icon: Globe,
      title: "Global Medical News",
      description: "Curated medical news and breakthrough research from trusted sources worldwide."
    }
  ];

  const discussionFeatures = [
    {
      icon: Brain,
      title: "Case Consultations",
      description: "Share complex cases and get expert opinions from specialists in real-time."
    },
    {
      icon: FileText,
      title: "Research Discussions",
      description: "Discuss latest research findings and their clinical implications with peers."
    },
    {
      icon: Video,
      title: "Video Consultations",
      description: "Conduct secure video discussions for complex medical cases (Coming Soon)."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "All discussions are encrypted and comply with medical privacy standards."
    }
  ];

  const networkFeatures = [
    {
      icon: Users,
      title: "Verified Professionals",
      description: "Connect only with verified medical professionals with authenticated credentials."
    },
    {
      icon: Stethoscope,
      title: "Specialty Groups",
      description: "Join specialty-specific groups and connect with colleagues in your field."
    },
    {
      icon: Award,
      title: "Peer Recognition",
      description: "Give and receive recognition for valuable contributions to the medical community."
    },
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      description: "Secure, encrypted messaging for private professional consultations."
    }
  ];

  const resourceFeatures = [
    {
      icon: BookOpen,
      title: "Research Library",
      description: "Access thousands of peer-reviewed medical journals and research papers."
    },
    {
      icon: FileText,
      title: "Clinical Guidelines",
      description: "Up-to-date clinical guidelines and protocols from leading medical institutions."
    },
    {
      icon: Video,
      title: "Educational Content",
      description: "Medical webinars, surgical videos, and continuing education materials."
    },
    {
      icon: Clock,
      title: "CME Credits",
      description: "Earn continuing medical education credits through platform activities."
    }
  ];

  const getFeaturesByTab = (tabId: string) => {
    switch (tabId) {
      case "dashboard":
        return dashboardFeatures;
      case "discussions":
        return discussionFeatures;
      case "network":
        return networkFeatures;
      case "resources":
        return resourceFeatures;
      default:
        return dashboardFeatures;
    }
  };

  const stats = [
    { label: "Active Discussions", value: "1,247", change: "+12%" },
    { label: "New Connections", value: "89", change: "+23%" },
    { label: "Resources Shared", value: "456", change: "+8%" },
    { label: "CME Credits", value: "24", change: "+15%" }
  ];

  return (
    <section id="preview" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
            🔍 Platform Preview
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            See What's Inside SphereRx
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the powerful features designed specifically for medical professionals. 
            See how SphereRx can enhance your practice and professional network.
          </p>
        </div>

        {/* Interactive Preview */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {previewTabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="flex items-center gap-2 px-3"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {previewTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-8">
                {/* Tab Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tab.title}</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">{tab.description}</p>
                </div>

                {/* Preview Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Mock Interface */}
                  <div className="relative">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border">
                      {/* Mock Browser Header */}
                      <div className="bg-gray-100 px-4 py-3 border-b flex items-center gap-2">
                        <div className="flex gap-2">
                          <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                          <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                          <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                          sphererx.com/{tab.id}
                        </div>
                      </div>

                      {/* Mock Interface Content */}
                      {tab.id === "dashboard" && (
                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-900">Good morning, Dr. Smith</h4>
                            <Badge className="bg-green-100 text-green-700">Online</Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                                <div className="text-xs text-green-600">{stat.change}</div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                              <Heart className="h-8 w-8 text-red-500" />
                              <div>
                                <div className="font-medium text-sm">New Cardiology Case</div>
                                <div className="text-xs text-gray-600">Dr. Johnson shared a complex case</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                              <MessageCircle className="h-8 w-8 text-green-600" />
                              <div>
                                <div className="font-medium text-sm">5 New Messages</div>
                                <div className="text-xs text-gray-600">From your professional network</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {tab.id === "discussions" && (
                        <div className="p-6 space-y-4">
                          <div className="space-y-3">
                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-blue-100 text-blue-700">Cardiology</Badge>
                                <span className="text-xs text-gray-500">2 hours ago</span>
                              </div>
                              <h5 className="font-medium text-sm">Complex Arrhythmia Case Discussion</h5>
                              <p className="text-xs text-gray-600">45-year-old patient with unusual ECG findings...</p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span>🔥 12 replies</span>
                                <span>👥 8 experts</span>
                                <span>⭐ High priority</span>
                              </div>
                            </div>
                            
                            <div className="border-l-4 border-green-500 pl-4 py-2">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-green-100 text-green-700">Neurology</Badge>
                                <span className="text-xs text-gray-500">4 hours ago</span>
                              </div>
                              <h5 className="font-medium text-sm">Latest MS Treatment Guidelines</h5>
                              <p className="text-xs text-gray-600">Discussion on updated treatment protocols...</p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span>🔥 28 replies</span>
                                <span>👥 15 experts</span>
                                <span>📚 Resources shared</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {tab.id === "network" && (
                        <div className="p-6 space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 border rounded-lg">
                              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-700 font-medium text-sm">JS</span>
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-sm">Dr. Jane Smith</div>
                                <div className="text-xs text-gray-600">Cardiologist at Mayo Clinic</div>
                                <div className="flex gap-1 mt-1">
                                  <Badge className="bg-yellow-100 text-yellow-700 text-xs">New Connection</Badge>
                                </div>
                              </div>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                                Connect
                              </Button>
                            </div>

                            <div className="flex items-center gap-3 p-3 border rounded-lg">
                              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-700 font-medium text-sm">MJ</span>
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-sm">Dr. Michael Johnson</div>
                                <div className="text-xs text-gray-600">Neurologist at Johns Hopkins</div>
                                <div className="flex gap-1 mt-1">
                                  <Badge className="bg-green-100 text-green-700 text-xs">Connected</Badge>
                                </div>
                              </div>
                              <Button size="sm" variant="outline" className="text-xs">
                                Message
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {tab.id === "resources" && (
                        <div className="p-6 space-y-4">
                          <div className="space-y-3">
                            <div className="p-3 border rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <FileText className="h-4 w-4 text-blue-600" />
                                <span className="font-medium text-sm">Latest Research Papers</span>
                              </div>
                              <div className="space-y-2">
                                <div className="text-xs">
                                  <div className="font-medium">COVID-19 Long-term Effects Study</div>
                                  <div className="text-gray-600">Published in NEJM • 2 hours ago</div>
                                </div>
                                <div className="text-xs">
                                  <div className="font-medium">Advances in Gene Therapy</div>
                                  <div className="text-gray-600">Nature Medicine • 1 day ago</div>
                                </div>
                              </div>
                            </div>

                            <div className="p-3 border rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Video className="h-4 w-4 text-green-600" />
                                <span className="font-medium text-sm">Educational Content</span>
                              </div>
                              <div className="text-xs">
                                <div className="font-medium">Advanced Surgical Techniques Webinar</div>
                                <div className="text-gray-600">Earn 2 CME Credits • Starts in 3 hours</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                      Live Preview
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900">Key Features</h4>
                    <div className="space-y-4">
                      {getFeaturesByTab(tab.id).map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="flex items-start gap-4">
                            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900 mb-1">{feature.title}</h5>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-4">
                      {/* <Button 
                        onClick={onEnterApp}
                        className="bg-green-600 hover:bg-green-700 w-full"
                      >
                        Explore {tab.label} Now
                        <Zap className="ml-2 h-4 w-4" />
                      </Button> */}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Full Platform?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of medical professionals who are already advancing their practice with SphereRx.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button 
                onClick={onEnterApp}
                className="bg-green-600 hover:bg-green-700 px-8"
              >
                Start Free Trial
              </Button> */}
              <Button variant="outline" className="px-8">
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-green-600" />
                <span>Real-time Collaboration</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-green-600" />
                <span>HIPAA compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-green-600" />
                <span>Professional Networking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}