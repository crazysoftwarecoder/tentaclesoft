import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Tentacle<span className="text-primary">Soft</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button>Get Started</Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-lg font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="mt-4">
                <Button className="w-full">Get Started</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

