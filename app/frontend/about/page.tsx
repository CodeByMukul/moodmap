import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  { name: "Dr. Emily Chen", role: "Clinical Psychologist", image: "/placeholder.svg?height=200&width=200" },
  { name: "Alex Johnson", role: "Software Engineer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Sarah Thompson", role: "UX Designer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Michael Lee", role: "Data Scientist", image: "/placeholder.svg?height=200&width=200" },
]

export default function About() {
  return (
    <div className="min-h-screen bg-soft-gray py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-soft-blue">About MoodMap</h1>
        
        {/* Mission Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                At MoodMap, we're on a mission to help people manage stress and lead healthier, happier lives. 
                We believe that everyone deserves access to effective stress management tools and resources. 
                Our platform is designed to empower individuals to understand, track, and reduce their stress levels 
                through innovative technology and evidence-based techniques.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Evidence-based stress management techniques</li>
                <li>Personalized AI-driven recommendations</li>
                <li>Continuous monitoring and progress tracking</li>
                <li>Engaging and relaxing stress-relief games</li>
                <li>Integration of mindfulness and cognitive behavioral strategies</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
              <CardDescription>Have questions or feedback? We'd love to hear from you!</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

