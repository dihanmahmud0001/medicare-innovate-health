import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 text-primary">Medicare Pharmaceuticals</h1>
          <p className="text-2xl mb-6 text-muted-foreground font-medium">
            Innovating health for a better tomorrow
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Delivering safe, effective, and affordable medicines through cutting-edge research
          </p>
          
          {/* CEO Introduction */}
          <div className="mt-12">
            <div className="bg-white/50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Led by Dr. Sara Johnson, CEO</h3>
              <p className="text-muted-foreground italic">
                "We are committed to transforming lives through innovative pharmaceutical solutions 
                that make healthcare accessible and effective for everyone."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Quote */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-3xl font-light text-muted-foreground italic max-w-4xl mx-auto">
            "At Medicare Pharmaceuticals, we believe that every breakthrough begins with hope, 
            every cure starts with curiosity, and every life saved validates our unwavering 
            commitment to excellence in pharmaceutical innovation."
          </blockquote>
          <footer className="mt-6 text-primary font-semibold">
            - Dr. Sara Johnson, CEO
          </footer>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">👥</div>
                <CardTitle className="text-3xl text-primary">150+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">Skilled Employees</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">🏆</div>
                <CardTitle className="text-3xl text-primary">10+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">💊</div>
                <CardTitle className="text-3xl text-primary">150+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">Patented Medicines</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">🔬</div>
                <CardTitle className="text-3xl text-primary">5</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">Therapeutic Areas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Latest Drug Highlight */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Innovation</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30 shadow-lg">
              <CardHeader className="text-center bg-primary/5">
                <Badge variant="secondary" className="mb-4">New Release</Badge>
                <CardTitle className="text-4xl text-primary mb-4">Nurofast</CardTitle>
                <p className="text-xl text-muted-foreground">Nerve Regeneration and Repair</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">About Nurofast</h3>
                    <p className="text-muted-foreground mb-4">
                      Our breakthrough medication for nerve regeneration and repair represents 
                      a significant advancement in neurological treatment. Particularly effective 
                      for neuropathy patients, Nurofast offers new hope for those suffering 
                      from nerve damage.
                    </p>
                    <div className="space-y-2">
                      <p><strong>Dosage:</strong> 200mg capsules, twice daily</p>
                      <p><strong>Price:</strong> $89.99</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-8xl">💊</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="opacity-90">
                123 Innovation Drive<br />
                Medical District<br />
                Healthcare City, HC 12345
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="opacity-90">
                Main: +1 (555) 123-4567<br />
                Research: +1 (555) 123-4568<br />
                Emergency: +1 (555) 123-4569
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="opacity-90">
                info@medicarepharma.com<br />
                research@medicarepharma.com<br />
                support@medicarepharma.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
