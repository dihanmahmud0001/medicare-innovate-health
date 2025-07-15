import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const keyEmployees = [
  {
    name: "Dr. A Charlson",
    position: "Chief Scientist",
    department: "Research & Development",
    experience: "15 years",
    education: "PhD in Pharmaceutical Sciences",
    specialization: "Drug Discovery and Development"
  },
  {
    name: "Ms. S Johnson",
    position: "Human Resources Manager",
    department: "Human Resources",
    experience: "12 years",
    education: "MBA in Human Resource Management",
    specialization: "Talent Acquisition and Employee Relations"
  },
  {
    name: "Mr. T Islam",
    position: "Lead Chemist",
    department: "Research & Development",
    experience: "10 years",
    education: "MSc in Organic Chemistry",
    specialization: "Synthetic Chemistry and Process Development"
  },
  {
    name: "Mrs A Parker",
    position: "Research Analyst",
    department: "Clinical Research",
    experience: "8 years",
    education: "MSc in Biostatistics",
    specialization: "Clinical Data Analysis and Regulatory Affairs"
  },
  {
    name: "Mr. K Munir",
    position: "Quality Control Specialist",
    department: "Quality Assurance",
    experience: "11 years",
    education: "BSc in Chemistry",
    specialization: "Analytical Testing and Quality Systems"
  },
  {
    name: "Mr. F Watson",
    position: "Production Supervisor",
    department: "Manufacturing",
    experience: "14 years",
    education: "BSc in Chemical Engineering",
    specialization: "Process Optimization and Production Management"
  },
  {
    name: "Ms. N Jahan",
    position: "Marketing Coordinator",
    department: "Marketing",
    experience: "6 years",
    education: "MBA in Marketing",
    specialization: "Pharmaceutical Marketing and Brand Management"
  }
];

// Generate additional random employees
const generateRandomEmployees = () => {
  const firstNames = ["John", "Sarah", "Michael", "Emma", "David", "Lisa", "Robert", "Jennifer", "James", "Mary", "William", "Patricia", "Richard", "Linda", "Joseph", "Barbara", "Thomas", "Susan", "Christopher", "Jessica", "Charles", "Sarah", "Daniel", "Karen", "Matthew", "Nancy", "Anthony", "Lisa", "Mark", "Betty", "Donald", "Helen", "Steven", "Sandra", "Paul", "Donna", "Andrew", "Carol", "Joshua", "Ruth", "Kenneth", "Sharon", "Kevin", "Michelle", "Brian", "Laura", "George", "Sarah", "Timothy", "Kimberly"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter"];
  const positions = ["Research Assistant", "Lab Technician", "Quality Analyst", "Production Operator", "Clinical Coordinator", "Regulatory Specialist", "Pharmacist", "Biostatistician", "Project Manager", "Safety Officer", "Packaging Specialist", "Maintenance Engineer", "IT Support", "Finance Analyst", "Supply Chain Coordinator", "Environmental Specialist", "Training Coordinator", "Documentation Specialist"];
  const departments = ["Research & Development", "Quality Assurance", "Manufacturing", "Clinical Research", "Regulatory Affairs", "Marketing", "Human Resources", "Finance", "IT", "Supply Chain", "Environmental Health & Safety"];

  const employees = [];
  for (let i = 0; i < 143; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const position = positions[Math.floor(Math.random() * positions.length)];
    const department = departments[Math.floor(Math.random() * departments.length)];
    const experience = `${Math.floor(Math.random() * 20) + 1} years`;
    
    employees.push({
      name: `${firstName} ${lastName}`,
      position,
      department,
      experience,
      education: "BSc/MSc in relevant field",
      specialization: "Various pharmaceutical operations"
    });
  }
  return employees;
};

const allEmployees = [...keyEmployees, ...generateRandomEmployees()];

const Employees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Meet our dedicated professionals driving innovation in healthcare
          </p>
          <div className="mt-6">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              150+ Skilled Professionals
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allEmployees.map((employee, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <CardTitle className="text-lg">{employee.name}</CardTitle>
                <p className="text-primary font-semibold">{employee.position}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <span className="font-semibold">Department: </span>
                  <span className="text-muted-foreground">{employee.department}</span>
                </div>
                <div>
                  <span className="font-semibold">Experience: </span>
                  <span className="text-muted-foreground">{employee.experience}</span>
                </div>
                <div>
                  <span className="font-semibold">Education: </span>
                  <span className="text-muted-foreground text-sm">{employee.education}</span>
                </div>
                <div>
                  <span className="font-semibold">Specialization: </span>
                  <span className="text-muted-foreground text-sm">{employee.specialization}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;