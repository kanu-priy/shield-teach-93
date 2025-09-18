import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, CheckCircle, Clock, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    id: 1,
    title: "Fire Safety Fundamentals",
    description: "Learn essential fire safety protocols and evacuation procedures",
    duration: "15 min",
    completed: true,
    progress: 100
  },
  {
    id: 2,
    title: "Earthquake Response",
    description: "Drop, cover, and hold procedures for seismic events",
    duration: "12 min",
    completed: true,
    progress: 100
  },
  {
    id: 3,
    title: "Severe Weather Protocols",
    description: "Tornado, hurricane, and storm safety measures",
    duration: "18 min",
    completed: false,
    progress: 60
  },
  {
    id: 4,
    title: "Medical Emergency Response",
    description: "First aid and medical emergency procedures",
    duration: "20 min",
    completed: false,
    progress: 0
  }
];

export default function Learning() {
  const overallProgress = Math.round(modules.reduce((acc, mod) => acc + mod.progress, 0) / modules.length);

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
              <GraduationCap className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Emergency Response Learning</h1>
                <p className="text-white/80">Interactive training modules for teachers</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Overall Progress</span>
              <span>{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-3 bg-white/20" />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Card key={module.id} className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{module.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                    {module.completed && (
                      <div className="flex items-center gap-1 text-success">
                        <CheckCircle className="h-4 w-4" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{module.progress}%</div>
                  <div className="text-xs text-muted-foreground">Progress</div>
                </div>
              </div>
              
              <div className="mb-4">
                <Progress value={module.progress} className="h-2" />
              </div>
              
              <Button 
                className="w-full" 
                variant={module.completed ? "outline" : "default"}
                onClick={() => console.log(`Starting module: ${module.title}`)}
              >
                <Play className="h-4 w-4 mr-2" />
                {module.completed ? "Review Module" : "Start Module"}
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}