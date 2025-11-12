import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full group/btn">
                <Github size={16} className="mr-2" />
                Code
              </Button>
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-gradient-primary group/btn">
                <ExternalLink size={16} className="mr-2" />
                Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
