import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Layers } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Turning Ideas Into Exceptional Software
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We build high-quality POCs and MVPs for businesses that need custom software solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button className="px-8">Our Services</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-lg">
                      <Code className="h-8 w-8 mb-2 text-primary" />
                      <h3 className="text-lg font-medium">Front-end</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-lg">
                      <Database className="h-8 w-8 mb-2 text-primary" />
                      <h3 className="text-lg font-medium">Backend</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-lg">
                      <Layers className="h-8 w-8 mb-2 text-primary" />
                      <h3 className="text-lg font-medium">MVPs</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-lg">
                      <Globe className="h-8 w-8 mb-2 text-primary" />
                      <h3 className="text-lg font-medium">POCs</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We specialize in building bespoke software solutions for businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-6 bg-muted rounded-lg shadow-sm">
              <Code className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Front-end Development</h3>
              <p className="text-muted-foreground flex-1">
                Creating responsive, intuitive user interfaces that provide exceptional user experiences.
              </p>
              <Link href="/services#frontend" className="mt-4 inline-flex items-center text-primary">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col p-6 bg-muted rounded-lg shadow-sm">
              <Database className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-muted-foreground flex-1">
                Building robust, scalable server-side applications and APIs that power your business.
              </p>
              <Link href="/services#backend" className="mt-4 inline-flex items-center text-primary">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col p-6 bg-muted rounded-lg shadow-sm">
              <Layers className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Large-scale Systems</h3>
              <p className="text-muted-foreground flex-1">
                Designing and implementing complex systems that can handle high loads and scale with your business.
              </p>
              <Link href="/services#large-scale" className="mt-4 inline-flex items-center text-primary">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to bring your idea to life?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Let's discuss how we can help you build the perfect software solution for your business.
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <Button size="lg" className="px-8">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 bg-background rounded-lg shadow-lg max-w-md">
                    <h3 className="text-xl font-bold mb-2">Our Process</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
                          1
                        </span>
                        <span>Consultation & Requirements Gathering</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
                          2
                        </span>
                        <span>Design & Planning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
                          3
                        </span>
                        <span>Development & Testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
                          4
                        </span>
                        <span>Deployment & Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

