import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Database, Layers, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We offer a comprehensive range of software development services to help you bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Front-end Development */}
      <section id="frontend" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-md bg-muted px-3 py-1 text-sm font-medium w-fit">
                <Code className="h-4 w-4" />
                <span>Front-end Development</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Creating exceptional user experiences
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our front-end development services focus on creating responsive, intuitive user interfaces that
                  provide exceptional user experiences.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Responsive web applications that work on all devices</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Modern frameworks like React, Vue, and Angular</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Accessible and SEO-friendly interfaces</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Performance-optimized applications</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Front-end Development"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Development */}
      <section id="backend" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-last lg:order-first">
              <div className="relative w-full h-80 md:h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Backend Development"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-md bg-background px-3 py-1 text-sm font-medium w-fit">
                <Database className="h-4 w-4" />
                <span>Backend Development</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Building robust, scalable server-side applications
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our backend development services focus on creating secure, efficient, and scalable server-side
                  applications and APIs.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>RESTful and GraphQL APIs</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Database design and optimization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Authentication and authorization systems</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Microservices architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Large-scale Systems */}
      <section id="large-scale" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-md bg-muted px-3 py-1 text-sm font-medium w-fit">
                <Layers className="h-4 w-4" />
                <span>Large-scale Systems</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Designing and implementing complex systems
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our large-scale systems services focus on designing and implementing complex systems that can handle
                  high loads and scale with your business.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Distributed systems architecture</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>High-availability and fault-tolerant systems</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cloud infrastructure and DevOps</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Performance optimization and monitoring</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Large-scale Systems"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVPs & POCs */}
      <section id="mvp" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-last lg:order-first">
              <div className="relative w-full h-80 md:h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="MVPs and POCs"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-md bg-background px-3 py-1 text-sm font-medium w-fit">
                <Rocket className="h-4 w-4" />
                <span>MVPs & POCs</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Turning ideas into reality</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our MVP and POC development services focus on quickly turning your ideas into functional software that
                  you can test and validate.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Rapid prototyping and development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lean and agile methodologies</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>User testing and feedback integration</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Iterative development and refinement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Contact us today to discuss your project and how we can help you bring your ideas to life.
              </p>
            </div>
            <div>
              <Link href="/contact">
                <Button size="lg" className="px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

