import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

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
              Crafting innovative embedded systems and IoT solutions that bridge
              the physical and digital worlds. Passionate about creating
              intelligent, connected devices.
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
              <a href="/resume.pdf" download>
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

          {/* Animated Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-96 h-96 rounded-full border-2 border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 rounded-full border-2 border-secondary/30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 rounded-full border-2 border-primary/20"
              />

              {/* Center Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-32 h-32 rounded-full bg-gradient-primary blur-3xl"
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
          <h3 className="text-2xl font-bold mb-6 text-center">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Node.js", "Embedded C", "IoT", "Python", "Arduino", "ESP32", "MQTT"].map(
              (tech, index) => (
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
              )
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
