import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Download, CheckCircle, HardDrive, Wifi, WifiOff } from "lucide-react";
import { Link } from "react-router-dom";

const offlineContent = [
  {
    id: 1,
    title: "Emergency Protocols Guide",
    size: "2.5 MB",
    type: "PDF",
    downloaded: true,
    progress: 100
  },
  {
    id: 2,
    title: "Fire Safety Training Videos",
    size: "45 MB",
    type: "Video",
    downloaded: false,
    progress: 0
  },
  {
    id: 3,
    title: "First Aid Reference Cards",
    size: "1.2 MB",
    type: "PDF",
    downloaded: true,
    progress: 100
  },
  {
    id: 4,
    title: "Evacuation Maps & Routes",
    size: "3.8 MB",
    type: "Images",
    downloaded: false,
    progress: 60
  },
  {
    id: 5,
    title: "Emergency Contact Database",
    size: "0.8 MB",
    type: "Data",
    downloaded: true,
    progress: 100
  },
  {
    id: 6,
    title: "Earthquake Response Training",
    size: "28 MB",
    type: "Video",
    downloaded: false,
    progress: 0
  }
];

export default function Offline() {
  const [content, setContent] = useState(offlineContent);
  const [isOnline] = useState(navigator.onLine);
  
  const downloadedCount = content.filter(item => item.downloaded).length;
  const totalSize = content.reduce((acc, item) => {
    const size = parseFloat(item.size);
    return acc + (item.downloaded ? size : 0);
  }, 0);

  const handleDownload = (id: number) => {
    setContent(prev => prev.map(item => 
      item.id === id 
        ? { ...item, downloaded: true, progress: 100 }
        : item
    ));
  };

  const handleRemove = (id: number) => {
    setContent(prev => prev.map(item => 
      item.id === id 
        ? { ...item, downloaded: false, progress: 0 }
        : item
    ));
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
              <Download className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Offline Content Manager</h1>
                <p className="text-white/80">Download content for offline emergency access</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                {isOnline ? (
                  <Wifi className="h-5 w-5 text-success" />
                ) : (
                  <WifiOff className="h-5 w-5 text-danger" />
                )}
                <span className="font-semibold">
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
              <div className="text-sm text-white/80">
                {isOnline ? "All features available" : "Limited to downloaded content"}
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <HardDrive className="h-5 w-5" />
                <span className="font-semibold">Storage Used</span>
              </div>
              <div className="text-lg font-bold">{totalSize.toFixed(1)} MB</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Downloaded</span>
              </div>
              <div className="text-lg font-bold">{downloadedCount} / {content.length}</div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex gap-4 mb-6">
          <Button 
            onClick={() => content.forEach(item => !item.downloaded && handleDownload(item.id))}
            disabled={!isOnline}
          >
            Download All
          </Button>
          <Button 
            variant="outline"
            onClick={() => content.forEach(item => item.downloaded && handleRemove(item.id))}
          >
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    {item.type} • {item.size}
                  </div>
                  
                  {item.progress > 0 && item.progress < 100 && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Downloading...</span>
                        <span>{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  )}
                </div>
                
                <div className="ml-4">
                  {item.downloaded ? (
                    <div className="flex flex-col gap-2">
                      <CheckCircle className="h-6 w-6 text-success mx-auto" />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => handleDownload(item.id)}
                      disabled={!isOnline || (item.progress > 0 && item.progress < 100)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}