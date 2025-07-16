import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Microscope, Users, Target, Award, Mail, Phone } from "lucide-react";

const JoinResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Join Our Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of groundbreaking medical research that's shaping the future of healthcare. 
            Join our team of dedicated researchers and make a difference in millions of lives.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Research Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Cancer Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Leading breakthrough treatments for various cancer types with innovative therapeutic approaches.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="h-5 w-5" />
                  Diabetes Treatment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Developing advanced medications for better diabetes management and patient quality of life.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Neurological Disorders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Pioneering nerve regeneration and repair treatments for neurological conditions.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Cardiovascular Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Revolutionary heart health support medications with proven clinical results.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="h-5 w-5" />
                  Respiratory Medicine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Advanced treatments for asthma and respiratory conditions improving patient outcomes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Immunology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Immune system enhancement research focusing on preventive and therapeutic applications.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Opportunities */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Research Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Research Scientists</CardTitle>
                <CardDescription>PhD level positions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Join our team of world-class scientists working on cutting-edge pharmaceutical research.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PhD Required</Badge>
                  <Badge variant="secondary">5+ Years Experience</Badge>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Lead independent research projects</li>
                  <li>Collaborate with international teams</li>
                  <li>Access to state-of-the-art facilities</li>
                  <li>Competitive salary and benefits</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Associates</CardTitle>
                <CardDescription>Masters level positions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Support groundbreaking research as part of our dynamic research teams.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Masters Required</Badge>
                  <Badge variant="secondary">2+ Years Experience</Badge>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Conduct laboratory experiments</li>
                  <li>Data analysis and reporting</li>
                  <li>Protocol development</li>
                  <li>Career advancement opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clinical Research Coordinators</CardTitle>
                <CardDescription>Healthcare background preferred</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Manage clinical trials and ensure compliance with regulatory standards.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Bachelor's Required</Badge>
                  <Badge variant="secondary">Clinical Experience</Badge>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Coordinate clinical trials</li>
                  <li>Patient interaction and care</li>
                  <li>Regulatory compliance</li>
                  <li>Data management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Interns</CardTitle>
                <CardDescription>Student positions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Gain hands-on experience in pharmaceutical research while completing your studies.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Student Status</Badge>
                  <Badge variant="secondary">STEM Background</Badge>
                  <Badge variant="secondary">Part-time/Summer</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Mentorship from senior scientists</li>
                  <li>Real-world research experience</li>
                  <li>Networking opportunities</li>
                  <li>Potential for full-time offers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-muted-foreground">Send your CV and cover letter highlighting your research interests</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Initial Review</h3>
                <p className="text-sm text-muted-foreground">Our recruitment team reviews applications within 2 weeks</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Interview Process</h3>
                <p className="text-sm text-muted-foreground">Multiple rounds including technical and cultural fit assessments</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Join Our Team</h3>
                <p className="text-sm text-muted-foreground">Welcome to Medicare Pharmaceuticals research family!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Ready to Join Us?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Take the first step towards a rewarding career in pharmaceutical research
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              research@medicare-pharma.com
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +1 (555) 123-4567
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Or visit our main office at 123 Research Drive, Innovation City, IC 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinResearch;