import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Settings, User, Shield, Wifi, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  teacherName: string;
  className: string;
  isOnline: boolean;
}

export function Header({ teacherName, className, isOnline }: HeaderProps) {
  const [notifications] = useState(3);

  return (
    <header className="w-full bg-gradient-hero p-4 sm:p-6 shadow-medium">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-white">Teacher Emergency Response Portal</h1>
              <p className="text-white/80 text-xs sm:text-sm hidden sm:block">Professional disaster response training for educators</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              {isOnline ? (
                <>
                  <Wifi className="h-4 w-4 text-white" />
                  <span className="text-white text-sm font-medium">Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="h-4 w-4 text-white" />
                  <span className="text-white text-sm font-medium">Offline</span>
                </>
              )}
            </div>
            
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 relative">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-danger text-xs p-0 flex items-center justify-center">
                  {notifications}
                </Badge>
              )}
            </Button>
            
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hidden sm:flex">
              <Settings className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 rounded-lg px-2 sm:px-4 py-2">
              <div className="h-6 w-6 sm:h-8 sm:w-8 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <div className="text-white hidden sm:block">
                <p className="font-semibold text-sm">{teacherName}</p>
                <p className="text-xs text-white/80">{className}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}