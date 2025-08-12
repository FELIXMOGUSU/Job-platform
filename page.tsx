import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Users, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">AfriConnect</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                Browse Jobs
              </Link>
              <Link href="/agencies" className="text-muted-foreground hover:text-foreground transition-colors">
                For Agencies
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Button variant="outline" size="sm" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Next Opportunity <span className="text-primary">Awaits</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Connecting skilled African talent with leading employers in the Gulf and Europe.{" "}
              <br className="hidden sm:block" />
              Simple. Transparent. Human.
            </p>

            {/* Dual Onboarding Paths */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
              <Link href="/auth/signup?type=job-seeker">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2 hover:border-primary/20">
                  <CardContent className="p-8 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">I'm a Job Seeker</h3>
                    <p className="text-muted-foreground mb-6">Find opportunities in Gulf countries and Europe</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      Find Your Match
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/auth/signup?type=agency">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2 hover:border-primary/20">
                  <CardContent className="p-8 text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">I'm an Agency</h3>
                    <p className="text-muted-foreground mb-6">Connect with qualified African professionals</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      Discover Talent
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <Badge variant="secondary" className="px-4 py-2">
                🇰🇪 Kenya
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                🇳🇬 Nigeria
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                🇺🇦🇪 UAE
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                🇸🇦 Saudi Arabia
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                🇩🇪 Germany
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                🇬🇧 UK
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose AfriConnect?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make international job placement simple, secure, and successful for everyone involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Verified Opportunities</h3>
              <p className="text-muted-foreground">
                All job postings are verified and come from legitimate employers in Gulf countries and Europe.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional CV Tailoring</h3>
              <p className="text-muted-foreground">
                Get your CV professionally tailored for international standards. Expert review for just $10.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Connections</h3>
              <p className="text-muted-foreground">
                Premium members get priority access to new opportunities and direct employer connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Job Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Job Categories</h2>
            <p className="text-xl text-muted-foreground">
              Explore opportunities across various industries in Gulf countries and Europe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Security Guards", count: "245 jobs" },
              { name: "Cleaners", count: "189 jobs" },
              { name: "Baristas", count: "156 jobs" },
              { name: "Shop Attendants", count: "203 jobs" },
              { name: "Healthcare", count: "98 jobs" },
              { name: "Construction", count: "167 jobs" },
              { name: "Hospitality", count: "134 jobs" },
              { name: "IT Support", count: "87 jobs" },
            ].map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of African professionals who have found their dream jobs through AfriConnect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/auth/signup?type=job-seeker">Create Job Seeker Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/auth/signup?type=agency">Register as Agency</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">AfriConnect</span>
              </div>
              <p className="text-muted-foreground">Bridging opportunities between Africa and the world.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/jobs" className="hover:text-foreground">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/services/cv-tailoring" className="hover:text-foreground">
                    CV Tailoring
                  </Link>
                </li>
                <li>
                  <Link href="/premium" className="hover:text-foreground">
                    Premium Plans
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Agencies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/agency/jobs/post" className="hover:text-foreground">
                    Post Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/agency/candidates" className="hover:text-foreground">
                    Find Talent
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AfriConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
