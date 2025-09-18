import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Trophy } from "lucide-react";

interface WelcomeCardProps {
  teacherName: string;
  title?: string;
  level: number;
  progressToNext: number;
  totalLessons: number;
  completedLessons: number;
  certifications?: string[];
}

export function WelcomeCard({ 
  teacherName, 
  title,
  level, 
  progressToNext, 
  totalLessons, 
  completedLessons,
  certifications = []
}: WelcomeCardProps) {
  
  const handleContinueTraining = () => {
    // Navigate to training modules
    console.log('Opening training modules...');
  };
  return (
    <Card className="bg-gradient-hero p-8 text-white shadow-strong animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Welcome back, {teacherName}! 👋</h2>
              <p className="text-white/80">{title || `Level ${level} Safety Leader`}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {certifications.map((cert, index) => (
                  <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress to Next Level</span>
              <span>{progressToNext}%</span>
            </div>
            <Progress value={progressToNext} className="h-3 bg-white/20" />
          </div>
          
          <Button 
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={handleContinueTraining}
          >
            Continue Training
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
        <div className="text-center bg-white/10 rounded-2xl p-6">
          <div className="text-4xl font-bold">{level}</div>
          <div className="text-sm text-white/80">Level</div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/80">Learning Progress</span>
          <span>{completedLessons} of {totalLessons} lessons completed</span>
        </div>
        <div className="mt-2">
          <Progress value={(completedLessons / totalLessons) * 100} className="h-2 bg-white/20" />
        </div>
      </div>
    </Card>
  );
}