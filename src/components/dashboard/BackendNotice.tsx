import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Database, Users, BarChart } from "lucide-react";

export function BackendNotice() {
  return (
    <Card className="p-6 bg-gradient-warning text-white shadow-strong animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/20 rounded-lg">
          <Database className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Ready for Full Functionality!</h3>
          <p className="text-white/90 mb-4">
            To enable drill data tracking, teacher participation metrics, student response analysis, 
            and progress dashboards, connect this project to Supabase for real-time database functionality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4" />
              <span>Student Safety Tracking</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <BarChart className="h-4 w-4" />
              <span>Progress Analytics</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <AlertTriangle className="h-4 w-4" />
              <span>Drill Performance Data</span>
            </div>
          </div>
          
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Connect Supabase Integration
          </Button>
        </div>
      </div>
    </Card>
  );
}