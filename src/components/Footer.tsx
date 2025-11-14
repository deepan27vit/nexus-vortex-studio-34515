import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:deepan27vit@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="glass-card border-t border-border/50 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Deepan. Built with React, Framer Motion & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
