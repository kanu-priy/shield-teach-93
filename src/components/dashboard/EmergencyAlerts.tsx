import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Bell, 
  Clock, 
  MapPin,
  Phone,
  MessageSquare
} from "lucide-react";

interface Alert {
  id: string;
  type: "drill" | "weather" | "emergency" | "training";
  title: string;
  message: string;
  location?: string;
  time: string;
  priority: "low" | "medium" | "high" | "critical";
  action?: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "drill",
    title: "Upcoming Fire Drill",
    message: "Monthly fire drill scheduled for tomorrow at 10:30 AM",
    location: "All Buildings",
    time: "Tomorrow 10:30 AM",
    priority: "medium",
    action: "View Details"
  },
  {
    id: "2", 
    type: "weather",
    title: "Severe Weather Watch",
    message: "Thunderstorm warning issued for the area until 6 PM",
    location: "District-wide",
    time: "Active until 6:00 PM",
    priority: "high",
    action: "View Protocol"
  },
  {
    id: "3",
    type: "training",
    title: "New Training Available",
    message: "Updated lockdown procedures training module is now available",
    time: "Posted 2 hours ago",
    priority: "low",
    action: "Start Training"
  }
];

const priorityStyles = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-warning/20 text-warning",
  high: "bg-danger/20 text-danger",
  critical: "bg-danger text-danger-foreground animate-pulse-glow"
};

const typeIcons = {
  drill: Clock,
  weather: AlertTriangle,
  emergency: Phone,
  training: Bell
};

export function EmergencyAlerts() {
  return (
    <Card className="p-6 shadow-soft animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Emergency Alerts</h3>
        </div>
        <Badge variant="outline" className="text-xs">
          {alerts.length} active
        </Badge>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => {
          const IconComponent = typeIcons[alert.type];
          
          return (
            <div 
              key={alert.id} 
              className="border rounded-lg p-4 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <IconComponent className="h-4 w-4 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm">{alert.title}</h4>
                      <Badge className={`text-xs ${priorityStyles[alert.priority]}`}>
                        {alert.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {alert.message}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {alert.time}
                      </div>
                      {alert.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {alert.location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {alert.action && (
                  <Button 
                    size="sm" 
                    variant={alert.priority === "critical" ? "emergency" : "outline"}
                    className="ml-2"
                  >
                    {alert.action}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MessageSquare className="h-4 w-4 mr-2" />
            Emergency Contacts
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View All Alerts
          </Button>
        </div>
      </div>
    </Card>
  );
}