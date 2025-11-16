import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { ThreeBackground } from "@/components/ThreeBackground";
import avatarStylized from "@/assets/avatar-stylized.png";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-secondary text-lg mb-2">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">Deepan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Engineer | Innovator | Tech Explorer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a curious mind who loves creating technology that bridges imagination and innovation. 
              My passion lies in exploring emerging technologies and turning them into real-world solutions. 
              Whether designing systems or writing code, I focus on making tech purposeful and human-centered. 
              Every project I build is a step toward a smarter, more connected future. 
              Constantly evolving — driven by curiosity, creativity, and impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 group"
                >
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://drive.google.com/file/d/1lYMguX_jweQ3tqm1iU3Y7BQ_6rXDUemy/view" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Realistic Avatar - Secondary Identity Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Soft ambient glow background */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-primary blur-3xl"
              />
              
              {/* 3D Avatar with breathing animation */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateY: [0, 3, 0, -3, 0],
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-10 perspective-1000"
              >
                <motion.img
                  src={avatarStylized}
                  alt="Deepan - Professional 3D Avatar"
                  className="w-full h-auto drop-shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))"
                  }}
                />
              </motion.div>

              {/* Subtle rotating ring decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/10"
                style={{ 
                  transform: "scale(1.15)",
                  borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%"
                }}
              />
              
              {/* Counter-rotating accent */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-secondary/10"
                style={{ 
                  transform: "scale(1.2)",
                  borderRadius: "60% 40% 40% 60% / 40% 60% 40% 60%"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="relative container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technologies I Work With
          </h3>
          
          <div className="space-y-8">
            {/* Programming Languages */}
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">Programming Languages</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Embedded C", "Java"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 rounded-xl text-center hover:border-primary/50 transition-all"
                  >
                    <p className="font-semibold">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Development Tools & IDEs */}
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">Development Tools & IDEs</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Arduino IDE", "Git & GitHub", "MPLAB X IDE", "NI LabVIEW", "Proteus"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 rounded-xl text-center hover:border-primary/50 transition-all"
                  >
                    <p className="font-semibold">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Microcontrollers & Hardware */}
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">Microcontrollers & Hardware</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["PIC Microcontrollers", "STM32"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 rounded-xl text-center hover:border-primary/50 transition-all"
                  >
                    <p className="font-semibold">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Operating Systems */}
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">Operating Systems</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Linux"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 rounded-xl text-center hover:border-primary/50 transition-all"
                  >
                    <p className="font-semibold">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">Design Tools</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Canva Designing", "UI & UX Designing"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 rounded-xl text-center hover:border-primary/50 transition-all"
                  >
                    <p className="font-semibold">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
