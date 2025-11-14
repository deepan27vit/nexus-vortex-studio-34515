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
            className="glass-card p-8 rounded-2xl mb-8"
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

          {/* DNA MATRIX SNAPSHOT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-2xl mb-8"
          >
            <h2 className="text-3xl font-bold mb-3">
              DNA MATRIX <span className="gradient-text">SNAPSHOT</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              My journey blends engineering depth, software versatility, and creative digital skills into a single evolving identity.
            </p>
          </motion.div>

          {/* Academic Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 rounded-2xl mb-8"
          >
            <h2 className="text-3xl font-bold mb-6">Academic Timeline</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-1">Bachelor of Engineering – Electronics and Communication Engineering</h3>
                <p className="text-primary font-medium mb-2">Velammal Institute of Technology</p>
                <p className="text-sm text-muted-foreground mb-2">Pursuing (2022–2026)</p>
                <p className="text-foreground/80">
                  Currently building strong foundations in embedded systems, IoT, networking, VLSI concepts, and system design.
                </p>
              </div>

              <div className="border-l-2 border-secondary pl-4">
                <h3 className="text-xl font-semibold mb-1">Minor Degree – FinTech & Blockchain Technologies</h3>
                <p className="text-primary font-medium mb-2">Velammal Institute of Technology</p>
                <p className="text-sm text-muted-foreground mb-2">Pursuing (2024–2025)</p>
                <p className="text-foreground/80">
                  Focused on blockchain fundamentals, decentralized systems, smart contracts, and financial technology applications.
                </p>
              </div>

              <div className="border-l-2 border-muted-foreground pl-4">
                <h3 className="text-xl font-semibold mb-1">Higher Secondary Education</h3>
                <p className="text-primary font-medium mb-2">Malar Matric Higher Secondary School, Namakkal-88</p>
                <p className="text-foreground/80">
                  Completed coursework in core science subjects with strong academic standing.
                </p>
              </div>

              <div className="border-l-2 border-muted-foreground pl-4">
                <h3 className="text-xl font-semibold mb-1">Secondary School Education</h3>
                <p className="text-primary font-medium mb-2">Malar Matric Higher Secondary School, Namakkal-88</p>
                <p className="text-foreground/80">
                  Completed foundational academics with excellence in mathematics and science.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technical Skill Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8 rounded-2xl mb-8"
          >
            <h2 className="text-3xl font-bold mb-6">Technical Skill Stack</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Languages</h3>
                <p className="text-foreground/80">Java • Embedded C</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Tools & IDE</h3>
                <p className="text-foreground/80">Arduino IDE • MPLAB X IDE • NI LabVIEW • Proteus • Linux • Git & GitHub</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Design & Creative Tech</h3>
                <p className="text-foreground/80">Canva • UI/UX Design • Figma</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Soft Skills</h3>
                <p className="text-foreground/80">Stakeholder Management • Rapport Building • Communication Skills • Critical Thinking • People Management</p>
              </div>
            </div>
          </motion.div>

          {/* Experience & Trainings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8 rounded-2xl mb-8"
          >
            <h2 className="text-3xl font-bold mb-6">Experience & Trainings</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Embedded Systems Intern – TVS Training & Services</h3>
                <p className="text-sm text-muted-foreground mb-2">Aug–Sep 2025</p>
                <p className="text-foreground/80">
                  Gained hands-on experience in embedded system workflows, hardware–software integration, and real-time system applications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Embedded System Design & IoT – Pantech.ai & Warriors Way</h3>
                <p className="text-sm text-muted-foreground mb-2">Nov 11–12, 2025</p>
                <p className="text-foreground/80">
                  Completed an intensive 2-day masterclass covering embedded architecture, system-level design, microcontroller workflows, and IoT integration for real-time engineering applications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Arduino & NodeMCU Workshop – Velammal Institute of Technology</h3>
                <p className="text-sm text-muted-foreground mb-2">Oct 4–5, 2023</p>
                <p className="text-foreground/80">
                  Underwent practical training in microcontroller programming, sensor interfacing, and IoT prototyping with live debugging and hardware execution.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements & Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card p-8 rounded-2xl mb-8"
          >
            <h2 className="text-3xl font-bold mb-6">Achievements & Milestones</h2>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>AIR 37 – NCAT Examination 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Research Paper Presenter – INTEND 2.0 (IETE Chennai)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>2nd Prize – Paper Presentation, Easwari Engineering College (2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Participant in national-level project competitions & technical symposiums</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>1st Prize – Anna University Zonal Handball Tournament (2023–24)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>2nd Place – Inter-College Handball Tournament</span>
              </li>
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">CERTIFICATIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "NPTEL – Cloud Computing",
                "AWS – Cloud Essentials",
                "Udemy – Flutter UI Bootcamp",
                "Udemy – Figma UI/UX Essentials",
                "GUVI HCL – UI/UX Designing",
                "Aadhyaa – NI LabVIEW",
                "CSC – Diploma in C Programming (DCP)",
                "GFG – Java Completion Certificate",
                "Math Works - Machine Learning On Ramp",
                "Maven Silicon – VLSI System on Chip Design",
                "IBM – AI Fundamentals"
              ].map((cert, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-4 bg-card/50 hover:bg-card/70 transition-colors text-center"
                >
                  <p className="text-sm font-medium text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
