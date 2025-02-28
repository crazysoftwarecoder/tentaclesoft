import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Tentacle Soft</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We're a team of passionate developers dedicated to building high-quality software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground md:text-lg">
                  Tentacle Soft was founded with a simple mission: to help businesses bring their software ideas to
                  life. We saw that many companies struggled to find reliable partners who could quickly build
                  high-quality POCs and MVPs, so we decided to fill that gap.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Our team brings together expertise in front-end, backend, and large-scale systems development,
                  allowing us to tackle projects of any size and complexity. We pride ourselves on our ability to
                  understand our clients' needs and deliver solutions that exceed their expectations.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our Story"
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

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                These core principles guide everything we do at Tentacle Soft.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every line of code we write is crafted with care and attention to
                detail.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in open and honest communication with our clients throughout the development process.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We stay at the forefront of technology to deliver innovative solutions that give our clients a
                competitive edge.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients, treating their projects as our own and their success as our success.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                We deliver on our promises, meeting deadlines and exceeding expectations.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Adaptability</h3>
              <p className="text-muted-foreground">
                We embrace change and adapt quickly to new challenges and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Meet the talented individuals who make Tentacle Soft great.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center p-6 bg-muted rounded-lg shadow-sm">
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/ash.png"
                  alt="Ashwanth Fernando"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ashwanth Fernando</h3>
              <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-center text-muted-foreground mb-4">
                With over 20 years in software development across large-scale tech companies and unicorn startups alike, he possesses a battle-tested mastery of building software with the perfect balance of pragmatism, communication, and humility. His expertise fuels unparalleled velocity and an accelerated time-to-market. From architecting search infrastructure at eBay and Canva to engineering real-time whiteboards and streaming presentations for Apple—optimized to run just above the bare metal—his contributions have shaped some of the most complex and high-impact systems in the industry.
              </p>
              <p className="text-center text-muted-foreground mb-4">
                No challenge is insurmountable, whether in technology or leadership. He seamlessly blends tactical execution with strategic foresight to craft world-class software that is not only robust and scalable but truly loved by customers.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Search Infrastructure</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Distributed Systems</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Technical Leadership</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Java</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Golang</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Python</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Scala</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">GraphQL</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Kotlin</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-6 bg-muted rounded-lg shadow-sm">
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/romain.png?height=192&width=192"
                  alt="Team Member"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Romain Francez</h3>
              <p className="text-sm text-muted-foreground mb-2">CTO</p>
              <p className="text-center text-muted-foreground mb-4">
                Romain is a seasoned technology leader with a wealth of experience working with globally renowned brands such as Canva, Capital One, and Experian. Having held key roles, Romain has successfully delivered impactful solutions across multiple continents and countries, including the UK, USA, France, Canada, and Australia.
              </p>
              <p className="text-center text-muted-foreground mb-4">
                Specialising in revenue growth, Romain has been instrumental in driving innovation, enabling customers to achieve up to $70 million in annual recurring revenue (ARR). With extensive expertise in front-end development and mobile applications, Romain combines technical excellence with strategic insight to build high-performing, scalable systems that meet business goals.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">TypeScript/Node</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Rust</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Swift</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Kotlin</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Objective-C</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">React</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">React Native</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to work with us?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Let's discuss how we can help you bring your software ideas to life.
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
                    <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Experienced team of developers</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Proven track record of successful projects</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Transparent communication and process</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Commitment to quality and excellence</span>
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

