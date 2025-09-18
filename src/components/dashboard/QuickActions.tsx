import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Gamepad2, 
  Package, 
  BookOpen, 
  Users, 
  Download,
  Zap,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  {
    id: 1,
    title: "Start Learning",
    subtitle: "Explore disaster safety modules",
    icon: GraduationCap,
    color: "bg-primary",
    href: "/learning"
  },
  {
    id: 2,
    title: "Practice Drills",
    subtitle: "Interactive emergency scenarios",
    icon: Zap,
    color: "bg-secondary",
    href: "/drills"
  },
  {
    id: 3,
    title: "Emergency Kit",
    subtitle: "Build your classroom kit",
    icon: Package,
    color: "bg-warning",
    href: "/emergency-kit"
  },
  {
    id: 4,
    title: "Quick Reference",
    subtitle: "Essential safety protocols",
    icon: BookOpen,
    color: "bg-primary",
    href: "/reference"
  },
  {
    id: 5,
    title: "Student Safety",
    subtitle: "Real-time monitoring tools",
    icon: Users,
    color: "bg-secondary",
    href: "/students"
  },
  {
    id: 6,
    title: "Offline Content",
    subtitle: "Download for offline access",
    icon: Download,
    color: "bg-muted-foreground",
    href: "/offline"
  }
];

export function QuickActions() {
  return (
    <Card className="p-6 shadow-soft animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Quick Actions</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {quickActions.map((action) => (
          <Link key={action.id} to={action.href}>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-3 hover:shadow-medium transition-all duration-300 group w-full"
            >
              <div className={`p-3 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">{action.title}</div>
                <div className="text-xs text-muted-foreground">{action.subtitle}</div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </Card>
  );
}