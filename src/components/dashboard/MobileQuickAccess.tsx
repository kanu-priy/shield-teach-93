import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  AlertTriangle, 
  Users, 
  MapPin,
  Clock,
  Shield
} from "lucide-react";

export function MobileQuickAccess() {
  return (
    <Card className="p-4 bg-gradient-emergency text-white shadow-strong animate-fade-in sm:hidden">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5" />
        <h3 className="font-semibold text-sm">Emergency Quick Access</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <Button 
          variant="outline" 
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-auto p-3 flex flex-col gap-2"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs">Call 911</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-auto p-3 flex flex-col gap-2"
        >
          <AlertTriangle className="h-5 w-5" />
          <span className="text-xs">Start Drill</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-auto p-3 flex flex-col gap-2"
        >
          <Users className="h-5 w-5" />
          <span className="text-xs">Attendance</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-auto p-3 flex flex-col gap-2"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-xs">Safe Zone</span>
        </Button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Last drill: 15 days ago</span>
          </div>
          <span className="font-medium">All systems: OK</span>
        </div>
      </div>
    </Card>
  );
}