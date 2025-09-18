import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Users, Clock, MapPin, Play } from "lucide-react";
import { Link } from "react-router-dom";

const drills = [
  {
    id: 1,
    title: "Fire Evacuation Drill",
    description: "Practice safe and orderly evacuation procedures",
    participants: 28,
    duration: "5-8 min",
    location: "Classroom 204",
    status: "ready",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Earthquake Drop & Cover",
    description: "Practice earthquake response protocols",
    participants: 28,
    duration: "3-5 min",
    location: "Classroom 204",
    status: "in-progress",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "Lockdown Procedure",
    description: "Security lockdown and shelter-in-place drill",
    participants: 28,
    duration: "10-15 min",
    location: "Classroom 204",
    status: "completed",
    difficulty: "Advanced"
  },
  {
    id: 4,
    title: "Severe Weather Response",
    description: "Tornado and severe weather safety procedures",
    participants: 28,
    duration: "6-10 min",
    location: "Classroom 204",
    status: "ready",
    difficulty: "Intermediate"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "ready": return "bg-primary";
    case "in-progress": return "bg-warning";
    case "completed": return "bg-success";
    default: return "bg-muted";
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-success";
    case "Intermediate": return "bg-warning";
    case "Advanced": return "bg-danger";
    default: return "bg-muted";
  }
};

export default function Drills() {
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
              <Zap className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Emergency Drill Practice</h1>
                <p className="text-white/80">Interactive scenarios and mock drills</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {drills.map((drill) => (
            <Card key={drill.id} className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{drill.title}</h3>
                    <Badge className={`${getStatusColor(drill.status)} text-white text-xs`}>
                      {drill.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{drill.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{drill.participants} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{drill.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{drill.location}</span>
                    </div>
                    <div>
                      <Badge className={`${getDifficultyColor(drill.difficulty)} text-white text-xs`}>
                        {drill.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                disabled={drill.status === "in-progress"}
                onClick={() => console.log(`Starting drill: ${drill.title}`)}
              >
                <Play className="h-4 w-4 mr-2" />
                {drill.status === "in-progress" ? "Drill in Progress..." : 
                 drill.status === "completed" ? "Practice Again" : "Start Drill"}
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}