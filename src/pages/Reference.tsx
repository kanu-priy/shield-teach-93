import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, BookOpen, Search, Download, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const protocols = [
  {
    id: 1,
    title: "Fire Emergency Protocol",
    category: "Fire Safety",
    steps: [
      "Sound the fire alarm immediately",
      "Ensure all students stop activities and listen",
      "Lead students to designated exit route",
      "Check that all students are accounted for",
      "Proceed to assembly point",
      "Take attendance and report to incident commander"
    ],
    emergencyContacts: ["911", "School Office: 555-0123"]
  },
  {
    id: 2,
    title: "Earthquake Response",
    category: "Natural Disaster",
    steps: [
      "Shout 'DROP, COVER, HOLD ON!'",
      "Students drop to hands and knees",
      "Take cover under desks",
      "Hold on to shelter and protect head",
      "Wait for shaking to stop",
      "Evacuate if building is damaged"
    ],
    emergencyContacts: ["911", "Emergency Coordinator: 555-0456"]
  },
  {
    id: 3,
    title: "Medical Emergency",
    category: "Medical",
    steps: [
      "Assess the situation for safety",
      "Call for help immediately",
      "Do not move injured person unless in danger",
      "Provide first aid if trained",
      "Keep student calm and comfortable",
      "Document incident details"
    ],
    emergencyContacts: ["911", "School Nurse: 555-0789"]
  },
  {
    id: 4,
    title: "Lockdown Procedure",
    category: "Security",
    steps: [
      "Lock classroom door immediately",
      "Turn off lights",
      "Move students away from windows and doors",
      "Keep students quiet and calm",
      "Do not open door for anyone",
      "Wait for all-clear from administration"
    ],
    emergencyContacts: ["911", "Security: 555-0321"]
  }
];

export default function Reference() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProtocols = protocols.filter(protocol =>
    protocol.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    protocol.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <BookOpen className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Quick Reference Guide</h1>
                <p className="text-white/80">Essential emergency protocols and procedures</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search protocols..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex gap-4 mb-6">
          <Button 
            variant="outline"
            onClick={() => console.log('Downloading all protocols...')}
          >
            <Download className="h-4 w-4 mr-2" />
            Download All
          </Button>
          <Button 
            variant="outline"
            onClick={() => console.log('Printing protocols...')}
          >
            Print Protocols
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProtocols.map((protocol) => (
            <Card key={protocol.id} className="p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{protocol.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {protocol.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-sm">Step-by-Step Procedure:</h4>
                <ol className="space-y-2">
                  {protocol.steps.map((step, index) => (
                    <li key={index} className="text-sm flex gap-3">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Emergency Contacts:
                </h4>
                <div className="space-y-1">
                  {protocol.emergencyContacts.map((contact, index) => (
                    <div key={index} className="text-sm bg-danger/10 text-danger px-2 py-1 rounded font-medium">
                      {contact}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}