import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { ThreeBackground } from "@/components/ThreeBackground";
import triCommandRover from "@/assets/projects/tri-command-rover.jpg";
import evChargingPad from "@/assets/projects/ev-charging-pad.jpg";
import fireFightingRobot from "@/assets/projects/fire-fighting-robot.jpg";
import plantMonitoring from "@/assets/projects/plant-monitoring.jpg";
import smartHome from "@/assets/projects/smart-home.jpg";
import smartParking from "@/assets/projects/smart-parking.jpg";
import roboEyes from "@/assets/projects/robo-eyes.jpg";
import linuxUtility from "@/assets/projects/linux-utility.jpg";

const Projects = () => {
  const projects = [
    // Major Projects
    {
      title: "Tri-Command-Rover",
      description:
        "Autonomous rover with multi-modal control systems featuring gesture recognition, voice commands, and traditional controls. Built with Arduino Uno/Nano and advanced motor drivers.",
      tags: ["Robotics", "Gesture Control", "Voice UI/UX", "Arduino"],
      image: triCommandRover,
      github: "https://github.com/deepan27vit/Tri-Command-Rover",
    },
    {
      title: "EV Charging Pad",
      description:
        "Wireless power transfer system for electric vehicles using inductive coupling technology. Features real-time monitoring of current flow and temperature safety systems.",
      tags: ["Wireless Power", "Inductive Coupling", "IoT", "Safety Systems"],
      image: evChargingPad,
      github: "https://github.com/deepan27vit/Charging-Pad",
    },
    {
      title: "Fire-Fighting Robot",
      description:
        "Autonomous emergency response robot with ESP32 microcontroller, capable of detecting and responding to fire hazards with real-time status monitoring and navigation.",
      tags: ["ESP32", "Sensor Integration", "Emergency Response", "Robotics"],
      image: fireFightingRobot,
      github: "https://github.com/deepan27vit/Fire-Fighting-Bot",
    },
    // Minor Projects
    {
      title: "Plant Monitoring System",
      description:
        "IoT-based environmental monitoring system using DHT sensors with Arduino for real-time temperature and humidity tracking to optimize plant health.",
      tags: ["IoT", "DHT Sensor", "Arduino", "Environmental Monitoring"],
      image: plantMonitoring,
      github: "https://github.com/deepan27vit/Plant-Monitoring-System.git",
    },
    {
      title: "Smart Home Automation",
      description:
        "Mobile-controlled home automation system with Blynk dashboard integration for wireless control of lights, fans, and appliances from anywhere.",
      tags: ["IoT Control", "Blynk", "Mobile App", "Wireless"],
      image: smartHome,
      github: "https://github.com/deepan27vit/Smart-Home-Automation.git",
    },
    {
      title: "Smart Car Parking System",
      description:
        "Automated parking gate with IR sensor detection and servo motor control. Features real-time slot availability display and intelligent space management.",
      tags: ["IR Sensing", "Servo Control", "Automation", "LCD Display"],
      image: smartParking,
      github: "https://github.com/deepan27vit/Smart-Car-Parking-System.git",
    },
    {
      title: "Robo-Eyes Animation System",
      description:
        "Expressive OLED display system featuring animated robot eyes with multiple emotions and states. Perfect for adding personality to robotic projects.",
      tags: ["OLED Display", "Animation", "Embedded Graphics", "UI Design"],
      image: roboEyes,
      github: "https://github.com/deepan27vit/Expressive-Eyes-with-Arduino.git",
    },
    {
      title: "Menu-Driven-Linux-Utility",
      description:
        "A comprehensive Linux utility tool with an interactive menu-driven interface for system administration tasks, automation scripts, and command-line operations.",
      tags: ["Linux", "Shell Scripting", "CLI", "System Admin"],
      image: linuxUtility,
      github: "https://github.com/deepan27vit/Menu-Driven-Linux-Utility.git",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <ThreeBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my embedded systems and IoT projects, from concept to
            deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
