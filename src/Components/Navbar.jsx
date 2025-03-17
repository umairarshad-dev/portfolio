import { useState, useEffect } from "react";
import { Wifi, Battery, BatteryCharging, Menu, X, Search } from "lucide-react";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(true);
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000);

    if ("getBattery" in navigator) {
      const updateBatteryStatus = async () => {
        try {
          const battery = await navigator.getBattery();
          setBatteryLevel(Math.floor(battery.level * 100));
          setIsCharging(battery.charging);

          battery.addEventListener("levelchange", () => setBatteryLevel(Math.floor(battery.level * 100)));
          battery.addEventListener("chargingchange", () => setIsCharging(battery.charging));
        } catch (error) {
          console.error("Battery API error:", error);
        }
      };
      updateBatteryStatus();
    }

    return () => clearInterval(timeInterval);
  }, []);

  const formatTime = (date) => date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  const formatDate = (date) => date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "2-digit" });

  return (
    <>
      <nav className={`w-full p-4 fixed top-0 bg-opacity-10 backdrop-blur-lg shadow-lg z-50 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap pt-2 pb-2">
          <div className="w-full md:w-auto flex justify-between items-center mb-2 md:mb-0">
            <div className="flex items-center gap-4">
              <Wifi size={22} />
              <div className="flex items-center gap-1">
                {isCharging ? <BatteryCharging size={22} className="text-green-400" /> : <Battery size={22} />}
                <span className="text-sm">{batteryLevel}%</span>
              </div>
              <Search size={22} className="hidden md:block" />
              <span>{formatTime(time)}</span>
              <span>{formatDate(time)}</span>
            </div>
            <button className="md:hidden invisible" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
            
          <div className={`w-full md:w-auto hidden md:flex flex-col md:flex-row items-center justify-center gap-12 mt-2 md:mt-0 transition-all duration-300`}>
            <a href="#home" className="hover:text-purple-400">Home</a>
            <a href="#experience" className="hover:text-purple-400">My Journey</a>
            <a href="#experience" className="hover:text-purple-400">Experience</a>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}