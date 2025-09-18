import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, WifiOff, Download } from "lucide-react";

interface StatusCardProps {
  isOnline: boolean;
  lastSync: string;
  offlineContent: number;
}

export function StatusCard({ isOnline, lastSync, offlineContent }: StatusCardProps) {
  return (
    <Card className="p-4 shadow-soft animate-fade-in">
      <div className="flex items-center gap-3">
        {isOnline ? (
          <div className="flex items-center gap-2 text-primary">
            <Wifi className="h-5 w-5" />
            <span className="font-semibold">Online</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-warning">
            <WifiOff className="h-5 w-5" />
            <span className="font-semibold">Offline</span>
          </div>
        )}
        
        <Badge variant={isOnline ? "default" : "secondary"} className="ml-auto">
          All content and features available
        </Badge>
      </div>
      
      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Last sync:</span>
          <span>{lastSync}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Offline content:</span>
          <div className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            <span>{offlineContent} guides available</span>
          </div>
        </div>
      </div>
    </Card>
  );
}