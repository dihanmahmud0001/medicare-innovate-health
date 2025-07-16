import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, MapPin, Phone, Mail, Clock } from "lucide-react";

// Key employees data
const keyEmployees = [
  {
    name: "Dr. A Charlson",
    position: "Chief Scientist",
    department: "Research & Development",
    experience: 15,
    education: "PhD in Pharmaceutical Sciences",
    specialization: "Cancer Research"
  },
  {
    name: "Ms. S Johnson",
    position: "Human Resources Manager",
    department: "Human Resources",
    experience: 8,
    education: "MBA in Human Resources",
    specialization: "Talent Management"
  },
  {
    name: "Mr. T Islam",
    position: "Lead Chemist",
    department: "Research & Development",
    experience: 12,
    education: "PhD in Organic Chemistry",
    specialization: "Drug Synthesis"
  },
  {
    name: "Mrs A Parker",
    position: "Research Analyst",
    department: "Research & Development",
    experience: 6,
    education: "MSc in Biochemistry",
    specialization: "Data Analysis"
  },
  {
    name: "Mr. K Munir",
    position: "Quality Control Specialist",
    department: "Quality Assurance",
    experience: 10,
    education: "BSc in Chemistry",
    specialization: "Quality Testing"
  },
  {
    name: "Mr. F Watson",
    position: "Production Supervisor",
    department: "Manufacturing",
    experience: 14,
    education: "BSc in Industrial Engineering",
    specialization: "Process Optimization"
  },
  {
    name: "Ms. N Jahan",
    position: "Marketing Coordinator",
    department: "Marketing",
    experience: 5,
    education: "MBA in Marketing",
    specialization: "Digital Marketing"
  }
];

// Function to generate random employees
const generateRandomEmployees = () => {
  const firstNames = [
    "John", "Jane", "Michael", "Sarah", "David", "Emily", "Robert", "Lisa", "James", "Maria",
    "William", "Jennifer", "Richard", "Linda", "Joseph", "Patricia", "Thomas", "Barbara", "Christopher", "Elizabeth",
    "Daniel", "Jessica", "Matthew", "Susan", "Anthony", "Karen", "Mark", "Nancy", "Donald", "Helen",
    "Steven", "Betty", "Paul", "Dorothy", "Andrew", "Sandra", "Kenneth", "Donna", "Joshua", "Carol",
    "Kevin", "Ruth", "Brian", "Sharon", "George", "Michelle", "Edward", "Laura", "Ronald", "Sarah"
  ];
  
  const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"
  ];
  
  const positions = [
    "Research Scientist", "Lab Technician", "Clinical Researcher", "Data Analyst", "Quality Inspector",
    "Product Manager", "Regulatory Affairs Specialist", "Biostatistician", "Pharmacologist", "Microbiologist",
    "Chemical Engineer", "Process Engineer", "Safety Officer", "Compliance Manager", "Project Coordinator",
    "Technical Writer", "Sales Representative", "Customer Service Rep", "IT Specialist", "Accountant",
    "Finance Analyst", "Operations Manager", "Supply Chain Coordinator", "Maintenance Technician", "Security Officer"
  ];
  
  const departments = [
    "Research & Development", "Quality Assurance", "Manufacturing", "Clinical Affairs", "Regulatory Affairs",
    "Marketing", "Sales", "Human Resources", "Finance", "Information Technology", "Operations", "Legal",
    "Customer Service", "Supply Chain", "Facilities", "Safety & Compliance"
  ];
  
  const employees = [];
  for (let i = 0; i < 143; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const position = positions[Math.floor(Math.random() * positions.length)];
    const department = departments[Math.floor(Math.random() * departments.length)];
    const experience = Math.floor(Math.random() * 20) + 1;
    const educations = ["BSc", "MSc", "PhD", "MBA", "PharmD"];
    const education = educations[Math.floor(Math.random() * educations.length)];
    
    employees.push({
      name: `${firstName} ${lastName}`,
      position,
      department,
      experience,
      education,
      specialization: null
    });
  }
  
  return employees;
};

const About = () => {
  const allEmployees = [...keyEmployees, ...generateRandomEmployees()];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Medicare Pharmaceuticals</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about our team, facilities, and commitment to advancing healthcare through innovation.
          </p>
        </div>

        {/* Employees Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center gap-2">
              <Users className="h-8 w-8" />
              Our Team
            </h2>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              150+ Dedicated Professionals
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allEmployees.slice(0, 12).map((employee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{employee.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-primary">{employee.position}</p>
                    <p className="text-sm text-muted-foreground">{employee.department}</p>
                    <p className="text-sm">{employee.experience} years experience</p>
                    <p className="text-xs text-muted-foreground">{employee.education}</p>
                    {employee.specialization && (
                      <Badge variant="outline" className="text-xs">
                        {employee.specialization}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Labs Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center gap-2">
              <Building className="h-8 w-8" />
              Our Laboratories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Research & Development Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  State-of-the-art facility equipped with the latest technology for drug discovery and development.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Area:</strong> 15,000 sq ft</p>
                  <p className="text-sm"><strong>Equipment:</strong> Advanced spectrometers, cell culture facilities</p>
                  <p className="text-sm"><strong>Staff:</strong> 45 researchers</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Control Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ensuring the highest standards of safety and efficacy for all our pharmaceutical products.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Area:</strong> 8,000 sq ft</p>
                  <p className="text-sm"><strong>Equipment:</strong> HPLC systems, mass spectrometers</p>
                  <p className="text-sm"><strong>Staff:</strong> 25 specialists</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clinical Testing Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive clinical testing facilities for pre-market evaluation and safety assessments.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Area:</strong> 12,000 sq ft</p>
                  <p className="text-sm"><strong>Equipment:</strong> Bioanalytical instruments, safety cabinets</p>
                  <p className="text-sm"><strong>Staff:</strong> 30 technicians</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Workspace Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center gap-2">
              <Building className="h-8 w-8" />
              Our Workspace
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Modern Facilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our headquarters spans 50,000 square feet of modern, environmentally controlled workspace designed for optimal productivity and collaboration.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Office Spaces</h4>
                    <p className="text-sm text-muted-foreground">Open-plan and private offices</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Meeting Rooms</h4>
                    <p className="text-sm text-muted-foreground">15 conference and collaboration rooms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Recreation Area</h4>
                    <p className="text-sm text-muted-foreground">Cafeteria and relaxation zones</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Parking</h4>
                    <p className="text-sm text-muted-foreground">200+ secure parking spaces</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Work Environment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We believe in creating an inspiring work environment that fosters innovation, collaboration, and work-life balance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">Flexible working hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Collaborative team spaces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-primary" />
                    <span className="text-sm">Ergonomic workstations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Central location with easy access</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact List Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center gap-2">
              <Phone className="h-8 w-8" />
              Contact Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@medicare-pharma.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <span>123 Pharmaceutical Avenue<br />Innovation City, IC 12345</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4568</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>research@medicare-pharma.com</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  For research partnerships and collaboration opportunities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4569</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>business@medicare-pharma.com</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  For business partnerships and licensing inquiries
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;