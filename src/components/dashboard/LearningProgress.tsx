import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Flame,
  Waves,
  Tornado
} from "lucide-react";

interface Module {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  progress: number;
  status: "completed" | "in-progress" | "not-started";
  icon: any;
  color: string;
}

const modules: Module[] = [
  {
    id: "earthquake",
    title: "Earthquake Response",
    difficulty: "Beginner",
    duration: "10 mins",
    progress: 100,
    status: "completed",
    icon: AlertTriangle,
    color: "text-warning"
  },
  {
    id: "fire",
    title: "Fire Emergency",
    difficulty: "Intermediate", 
    duration: "15 mins",
    progress: 75,
    status: "in-progress",
    icon: Flame,
    color: "text-danger"
  },
  {
    id: "flood",
    title: "Flood Preparedness",
    difficulty: "Beginner",
    duration: "12 mins",
    progress: 100,
    status: "completed",
    icon: Waves,
    color: "text-secondary"
  },
  {
    id: "tornado",
    title: "Severe Weather",
    difficulty: "Advanced",
    duration: "20 mins",
    progress: 0,
    status: "not-started",
    icon: Tornado,
    color: "text-muted-foreground"
  }
];

const difficultyColors = {
  "Beginner": "bg-primary text-primary-foreground",
  "Intermediate": "bg-warning text-warning-foreground",
  "Advanced": "bg-danger text-danger-foreground"
};

export function LearningProgress() {
  const overallProgress = Math.round(
    modules.reduce((acc, module) => acc + module.progress, 0) / modules.length
  );

  return (
    <Card className="p-6 shadow-soft animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Learning Progress</h3>
        </div>
        <div className="text-sm text-muted-foreground">
          {modules.filter(m => m.status === "completed").length} of {modules.length} modules completed
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Overall Progress</span>
          <span className="text-sm text-muted-foreground">{overallProgress}%</span>
        </div>
        <Progress value={overallProgress} className="h-3" />
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <div key={module.id} className="border rounded-lg p-4 hover:shadow-medium transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-muted ${module.color}`}>
                  <module.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{module.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge 
                      className={`text-xs ${difficultyColors[module.difficulty]}`}
                    >
                      {module.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {module.duration}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {module.status === "completed" && (
                  <CheckCircle className="h-5 w-5 text-primary" />
                )}
                <Button
                  size="sm"
                  variant={module.status === "not-started" ? "default" : "outline"}
                  className="min-w-20"
                >
                  {module.status === "completed" && "Review"}
                  {module.status === "in-progress" && (
                    <>
                      <Play className="h-3 w-3 mr-1" />
                      Continue
                    </>
                  )}
                  {module.status === "not-started" && "Start"}
                </Button>
              </div>
            </div>
            
            {module.progress > 0 && (
              <Progress value={module.progress} className="h-2" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}