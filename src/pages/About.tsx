import { motion } from "framer-motion";
import { ThreeBackground } from "@/components/ThreeBackground";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <ThreeBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build things that blend hardware, software, and creativity into clean, 
              futuristic tech. From microcontrollers and IoT systems to Java code, Linux 
              workflows, and Proteus simulations, I love engineering that feels smooth, 
              smart, and intentionally designed. I'm the kind of person who can debug 
              embedded code, sketch a UI, design a system flow, and ship it—all with the 
              same energy. Whether it's ESP32 prototypes, cloud-connected builds, or 
              aesthetic UI/UX, I'm always experimenting, refining, and leveling up. My 
              work lives where engineering meets innovation, and where ideas turn into 
              real, functional, modern tech.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 glass-card p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Experience Highlights</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  IoT Solutions Architect
                </h3>
                <p className="text-muted-foreground mb-2">TechCorp • 2022 - Present</p>
                <p className="text-foreground/80">
                  Led development of enterprise IoT solutions, managing projects from
                  concept to deployment with a focus on scalability and security.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Embedded Systems Engineer
                </h3>
                <p className="text-muted-foreground mb-2">Innovation Labs • 2020 - 2022</p>
                <p className="text-foreground/80">
                  Developed firmware for various embedded platforms, optimizing
                  performance and implementing robust communication protocols.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
