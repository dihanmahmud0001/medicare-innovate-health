import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Research & Projects</h1>
          <p className="text-xl text-muted-foreground">
            Pioneering breakthrough treatments for tomorrow's healthcare challenges
          </p>
        </div>

        {/* Main Research Focus */}
        <div className="mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">Cancer Research Initiative</CardTitle>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Primary Research Focus
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-center text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  At Medicare Pharmaceuticals, we are dedicated to the fight against cancer. Our research team works 
                  tirelessly every day, striving to reach the core of this complex disease and develop innovative 
                  treatments that can make a real difference in patients' lives.
                </p>
                <p className="mb-4">
                  Through cutting-edge research methodologies and state-of-the-art laboratory facilities, we have 
                  already made significant breakthroughs in our cancer-related medicine portfolio. Our commitment 
                  to understanding the molecular mechanisms of cancer has led to the development of targeted 
                  therapies that show promising results in clinical trials.
                </p>
                <p>
                  We believe that every day brings us closer to more effective treatments and, ultimately, 
                  a cure for cancer. Our multidisciplinary approach combines molecular biology, pharmacology, 
                  and clinical research to accelerate the development of life-saving medications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Research Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our 5 Therapeutic Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <CardTitle className="text-xl">Oncology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced cancer treatments and targeted therapies
                </p>
                <Progress value={85} className="mb-2" />
                <p className="text-sm text-muted-foreground">Research Progress: 85%</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl">🫀</span>
                </div>
                <CardTitle className="text-xl">Cardiology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Heart disease prevention and treatment solutions
                </p>
                <Progress value={72} className="mb-2" />
                <p className="text-sm text-muted-foreground">Research Progress: 72%</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <CardTitle className="text-xl">Neurology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Neurological disorders and brain health research
                </p>
                <Progress value={68} className="mb-2" />
                <p className="text-sm text-muted-foreground">Research Progress: 68%</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl">🦴</span>
                </div>
                <CardTitle className="text-xl">Orthopedics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bone and joint health medications
                </p>
                <Progress value={78} className="mb-2" />
                <p className="text-sm text-muted-foreground">Research Progress: 78%</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl">🦠</span>
                </div>
                <CardTitle className="text-xl">Immunology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Immune system enhancement and autoimmune treatments
                </p>
                <Progress value={81} className="mb-2" />
                <p className="text-sm text-muted-foreground">Research Progress: 81%</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current Projects */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Current Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Project Alpha-C</CardTitle>
                <Badge variant="outline">Phase III Clinical Trial</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Revolutionary cancer immunotherapy targeting specific tumor markers. 
                  Currently in Phase III trials with promising efficacy results.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Progress</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">NeuroRegen</CardTitle>
                <Badge variant="outline">Phase II Clinical Trial</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Innovative nerve regeneration therapy for spinal cord injuries 
                  and neurodegenerative diseases.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Progress</span>
                    <span>64%</span>
                  </div>
                  <Progress value={64} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">CardioShield</CardTitle>
                <Badge variant="outline">Phase I Clinical Trial</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Next-generation cardiovascular protection medication with 
                  enhanced safety profile and efficacy.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Progress</span>
                    <span>43%</span>
                  </div>
                  <Progress value={43} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">ImmunoBoost Pro</CardTitle>
                <Badge variant="outline">Preclinical Research</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced immune system modulator for cancer treatment 
                  and autoimmune disease management.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Progress</span>
                    <span>29%</span>
                  </div>
                  <Progress value={29} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;