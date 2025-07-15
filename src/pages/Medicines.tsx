import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";

const medicines = [
  {
    id: 1,
    name: "Parazylin",
    category: "Pain relief and anti-inflammatory",
    description: "Advanced pain relief medication with anti-inflammatory properties. Effective for chronic pain management and post-operative care.",
    dosage: "500mg tablets, 2-3 times daily",
    sideEffects: "Mild stomach upset, drowsiness",
    price: "$25.99"
  },
  {
    id: 2,
    name: "Glucorid",
    category: "Diabetes management medication",
    description: "Innovative diabetes management solution that helps regulate blood sugar levels effectively.",
    dosage: "10mg tablets, once daily with meals",
    sideEffects: "Nausea, headache, dizziness",
    price: "$45.50"
  },
  {
    id: 3,
    name: "Nurofast",
    category: "Nerve regeneration and repair",
    description: "Breakthrough medication for nerve regeneration and repair, particularly effective for neuropathy patients.",
    dosage: "200mg capsules, twice daily",
    sideEffects: "Fatigue, mild skin irritation",
    price: "$89.99"
  },
  {
    id: 4,
    name: "Dermacure",
    category: "Skin treatment cream",
    description: "Advanced topical treatment for various skin conditions including eczema, psoriasis, and dermatitis.",
    dosage: "Apply thin layer 2-3 times daily",
    sideEffects: "Temporary redness, mild burning sensation",
    price: "$32.75"
  },
  {
    id: 5,
    name: "Cardionex",
    category: "Heart health support",
    description: "Comprehensive cardiovascular support medication that helps maintain healthy heart function.",
    dosage: "50mg tablets, once daily",
    sideEffects: "Mild dizziness, low blood pressure",
    price: "$67.20"
  },
  {
    id: 6,
    name: "Vitazyme",
    category: "Digestive enzyme supplement",
    description: "Natural digestive enzyme supplement that promotes healthy digestion and nutrient absorption.",
    dosage: "2 capsules with each meal",
    sideEffects: "Bloating, mild gas",
    price: "$28.45"
  },
  {
    id: 7,
    name: "RespiraX",
    category: "Asthma and respiratory aid",
    description: "Fast-acting respiratory medication for asthma and other breathing difficulties.",
    dosage: "Inhaler, 2 puffs as needed",
    sideEffects: "Dry mouth, throat irritation",
    price: "$55.80"
  },
  {
    id: 8,
    name: "ImmunoVax",
    category: "Immune system booster",
    description: "Advanced immune system enhancer that helps boost natural defenses against infections.",
    dosage: "1 tablet daily with food",
    sideEffects: "Mild fever, fatigue",
    price: "$42.30"
  }
];

const Medicines = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Medicines</h1>
          <p className="text-xl text-muted-foreground">
            Discover our comprehensive range of innovative pharmaceutical solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {medicines.map((medicine) => (
            <Dialog key={medicine.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-primary">{medicine.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{medicine.category}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-2xl">💊</span>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-primary">{medicine.price}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-primary">{medicine.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Category</h3>
                    <p className="text-muted-foreground">{medicine.category}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Description</h3>
                    <p className="text-muted-foreground">{medicine.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dosage</h3>
                    <p className="text-muted-foreground">{medicine.dosage}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Side Effects</h3>
                    <p className="text-muted-foreground">{medicine.sideEffects}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Price</h3>
                    <p className="text-2xl font-bold text-primary">{medicine.price}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicines;