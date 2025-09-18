import { useState, useEffect } from "react";
import { Header } from "@/components/dashboard/Header";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { LearningProgress } from "@/components/dashboard/LearningProgress";
import { EmergencyAlerts } from "@/components/dashboard/EmergencyAlerts";
import { BackendNotice } from "@/components/dashboard/BackendNotice";
import { MobileQuickAccess } from "@/components/dashboard/MobileQuickAccess";

const Index = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Teacher profile data - would come from authentication/database
  const teacherData = {
    name: "Teacher Sarah Johnson",
    title: "Certified Emergency Response Instructor",
    className: "Grade 5A • Room 204", 
    level: 4,
    progressToNext: 67,
    totalLessons: 14,
    completedLessons: 9,
    certifications: ["First Aid", "Fire Safety", "Evacuation Procedures"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        teacherName={teacherData.name}
        className={teacherData.className}
        isOnline={isOnline}
      />
      
      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Mobile Emergency Quick Access */}
        <MobileQuickAccess />
        
        {/* Backend Integration Notice */}
        <BackendNotice />
        
        {/* Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <WelcomeCard 
              teacherName={teacherData.name}
              title={teacherData.title}
              level={teacherData.level}
              progressToNext={teacherData.progressToNext}
              totalLessons={teacherData.totalLessons}
              completedLessons={teacherData.completedLessons}
              certifications={teacherData.certifications}
            />
          </div>
          <div>
            <StatusCard 
              isOnline={isOnline}
              lastSync="2 minutes ago"
              offlineContent={12}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <QuickActions />
          <LearningProgress />
        </div>

        {/* Alerts Section */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <EmergencyAlerts />
        </div>
      </main>
    </div>
  );
};

export default Index;
