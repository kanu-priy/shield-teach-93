import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, MapPin, Clock, CheckCircle, AlertTriangle, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const students = [
  { id: 1, name: "Emma Johnson", status: "safe", location: "Assembly Point A", lastSeen: "2 min ago" },
  { id: 2, name: "Liam Smith", status: "safe", location: "Assembly Point A", lastSeen: "1 min ago" },
  { id: 3, name: "Sophia Davis", status: "safe", location: "Assembly Point A", lastSeen: "3 min ago" },
  { id: 4, name: "Noah Wilson", status: "missing", location: "Unknown", lastSeen: "15 min ago" },
  { id: 5, name: "Olivia Brown", status: "safe", location: "Assembly Point A", lastSeen: "1 min ago" },
  { id: 6, name: "Ethan Jones", status: "safe", location: "Assembly Point A", lastSeen: "2 min ago" },
  { id: 7, name: "Ava Garcia", status: "injured", location: "First Aid Station", lastSeen: "5 min ago" },
  { id: 8, name: "Mason Rodriguez", status: "safe", location: "Assembly Point A", lastSeen: "1 min ago" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "safe": return "bg-success";
    case "missing": return "bg-danger";
    case "injured": return "bg-warning";
    default: return "bg-muted";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "safe": return CheckCircle;
    case "missing": return AlertTriangle;
    case "injured": return AlertTriangle;
    default: return UserCheck;
  }
};

export default function Students() {
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  
  const safeCount = students.filter(s => s.status === "safe").length;
  const missingCount = students.filter(s => s.status === "missing").length;
  const injuredCount = students.filter(s => s.status === "injured").length;

  const toggleStudentSelection = (studentId: number) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-hero p-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Student Safety Monitor</h1>
                <p className="text-white/80">Real-time student tracking and safety status</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-success/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">{safeCount}</div>
              <div className="text-sm">Safe</div>
            </div>
            <div className="bg-danger/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">{missingCount}</div>
              <div className="text-sm">Missing</div>
            </div>
            <div className="bg-warning/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">{injuredCount}</div>
              <div className="text-sm">Injured</div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex gap-4 mb-6">
          <Button 
            onClick={() => console.log('Taking attendance...')}
          >
            <UserCheck className="h-4 w-4 mr-2" />
            Take Attendance
          </Button>
          <Button 
            variant="outline"
            onClick={() => console.log('Emergency report...')}
          >
            Generate Emergency Report
          </Button>
          <Button 
            variant="outline"
            onClick={() => console.log('Notifying parents...')}
            disabled={selectedStudents.length === 0}
          >
            Notify Selected Parents ({selectedStudents.length})
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student) => {
            const StatusIcon = getStatusIcon(student.status);
            return (
              <Card 
                key={student.id} 
                className={`p-4 cursor-pointer transition-all ${
                  selectedStudents.includes(student.id) ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => toggleStudentSelection(student.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold">{student.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{student.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      <span>Last seen: {student.lastSeen}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={`${getStatusColor(student.status)} text-white text-xs`}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {student.status}
                    </Badge>
                  </div>
                </div>
                
                {student.status === "missing" && (
                  <Button size="sm" variant="destructive" className="w-full">
                    Report Missing
                  </Button>
                )}
                
                {student.status === "injured" && (
                  <Button size="sm" variant="outline" className="w-full">
                    Medical Details
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}