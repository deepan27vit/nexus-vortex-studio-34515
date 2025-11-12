import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Automation System",
      description:
        "IoT-based home automation system with voice control, energy monitoring, and mobile app integration. Built with ESP32, MQTT, and React Native.",
      tags: ["ESP32", "MQTT", "React Native", "Node.js"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Industrial Sensor Network",
      description:
        "Wireless sensor network for industrial monitoring with real-time data visualization and predictive maintenance alerts.",
      tags: ["LoRaWAN", "Python", "TensorFlow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Wearable Health Monitor",
      description:
        "Low-power wearable device for continuous health monitoring with cloud integration and ML-based anomaly detection.",
      tags: ["nRF52", "BLE", "AWS IoT", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Agricultural IoT Solution",
      description:
        "Smart farming system with soil monitoring, automated irrigation, and crop health analysis using computer vision.",
      tags: ["Arduino", "Computer Vision", "Firebase", "React"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      github: "https://github.com",
    },
    {
      title: "Energy Management System",
      description:
        "Real-time energy monitoring and optimization system for commercial buildings with AI-powered efficiency recommendations.",
      tags: ["Raspberry Pi", "Python", "InfluxDB", "Grafana"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Asset Tracking Platform",
      description:
        "GPS-based asset tracking solution with geofencing, route optimization, and fleet management capabilities.",
      tags: ["GPS", "LTE", "MongoDB", "Express.js"],
      image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa8c?w=800&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
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
