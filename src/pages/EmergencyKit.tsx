import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Package, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const kitCategories = [
  {
    name: "First Aid Supplies",
    items: [
      { id: 1, name: "Adhesive bandages (various sizes)", checked: true },
      { id: 2, name: "Sterile gauze pads", checked: true },
      { id: 3, name: "Medical tape", checked: false },
      { id: 4, name: "Antiseptic wipes", checked: true },
      { id: 5, name: "Instant cold packs", checked: false },
      { id: 6, name: "Disposable gloves", checked: true }
    ]
  },
  {
    name: "Emergency Communication",
    items: [
      { id: 7, name: "Battery-powered radio", checked: false },
      { id: 8, name: "Extra batteries", checked: false },
      { id: 9, name: "Whistle", checked: true },
      { id: 10, name: "Flashlight", checked: true },
      { id: 11, name: "Emergency contact list", checked: true }
    ]
  },
  {
    name: "Shelter & Protection",
    items: [
      { id: 12, name: "Emergency blankets", checked: false },
      { id: 13, name: "Plastic sheeting", checked: false },
      { id: 14, name: "Duct tape", checked: true },
      { id: 15, name: "Work gloves", checked: false }
    ]
  },
  {
    name: "Food & Water",
    items: [
      { id: 16, name: "Water bottles (1 gallon per person)", checked: false },
      { id: 17, name: "Water purification tablets", checked: false },
      { id: 18, name: "Non-perishable snacks", checked: true },
      { id: 19, name: "Manual can opener", checked: false }
    ]
  }
];

export default function EmergencyKit() {
  const [categories, setCategories] = useState(kitCategories);

  const toggleItem = (categoryIndex: number, itemId: number) => {
    const newCategories = [...categories];
    const item = newCategories[categoryIndex].items.find(item => item.id === itemId);
    if (item) {
      item.checked = !item.checked;
      setCategories(newCategories);
    }
  };

  const getTotalProgress = () => {
    const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0);
    const checkedItems = categories.reduce((acc, cat) => 
      acc + cat.items.filter(item => item.checked).length, 0);
    return Math.round((checkedItems / totalItems) * 100);
  };

  const getCategoryProgress = (category: any) => {
    const checkedItems = category.items.filter((item: any) => item.checked).length;
    return Math.round((checkedItems / category.items.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-hero p-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Package className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Emergency Kit Builder</h1>
                <p className="text-white/80">Build and manage your classroom emergency kit</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Kit Completion</span>
              <span>{getTotalProgress()}%</span>
            </div>
            <Progress value={getTotalProgress()} className="h-3 bg-white/20" />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {categories.map((category, categoryIndex) => (
          <Card key={category.name} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {getCategoryProgress(category)}% complete
                </span>
                {getCategoryProgress(category) === 100 ? (
                  <CheckCircle className="h-5 w-5 text-success" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-warning" />
                )}
              </div>
            </div>
            
            <Progress value={getCategoryProgress(category)} className="h-2 mb-4" />
            
            <div className="space-y-3">
              {category.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={`item-${item.id}`}
                    checked={item.checked}
                    onCheckedChange={() => toggleItem(categoryIndex, item.id)}
                  />
                  <label
                    htmlFor={`item-${item.id}`}
                    className={`text-sm cursor-pointer ${
                      item.checked ? 'line-through text-muted-foreground' : ''
                    }`}
                  >
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
          </Card>
        ))}
        
        <div className="flex gap-4">
          <Button 
            className="flex-1"
            onClick={() => console.log('Generating shopping list...')}
          >
            Generate Shopping List
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => console.log('Printing checklist...')}
          >
            Print Checklist
          </Button>
        </div>
      </main>
    </div>
  );
}