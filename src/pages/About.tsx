import { motion } from "framer-motion";
import { Code2, Cpu, Wifi, Zap } from "lucide-react";
import { ThreeBackground } from "@/components/ThreeBackground";

const About = () => {
  const skills = [
    { name: "Embedded Systems", level: 90, icon: Cpu },
    { name: "IoT Development", level: 85, icon: Wifi },
    { name: "Circuit Design", level: 80, icon: Zap },
    { name: "Software Development", level: 88, icon: Code2 },
  ];

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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an Embedded Systems and IoT Engineer with a passion for creating
              intelligent, connected devices that solve real-world problems. With
              expertise spanning hardware design, firmware development, and cloud
              integration, I bring ideas to life from concept to production.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to
              push the boundaries of what's possible with embedded systems. Whether
              it's optimizing power consumption in battery-operated devices or
              designing robust communication protocols, I thrive on tackling
              complex challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">My Skills</h2>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <skill.icon className="text-background" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-primary"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
