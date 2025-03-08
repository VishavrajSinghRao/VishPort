import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";




const skillsData = [
   
  {
    name: "Docker",
    icon: "/docker-svgrepo-com.svg",
    color: "#2496ED", 
  },
  {
    name: "Express Js",
    icon: "/icons8-express-js.svg", 
    color: "#AAAAAA",
    invert: true,
  },
  {
    name: "Linux",
    icon: "/linux-svgrepo-com.svg",
    color: "#FCC624",
  },
  {
    name: "MongoDB",
    icon: "/mongo-svgrepo-com.svg",
    color: "#47A248",
  },
  {
    name: "Git",
    icon: "/git-svgrepo-com.svg",
    color: "#F05032",
  },

  {
    name: "GitHub",
    icon: "/github.svg",
    color: "#AAAAAA",
    invert: true,
  },

  
  {
    name: "Postman",
    icon: "/postman-icon-svgrepo-com.svg",
    color: "#FF6C37", 
  },
  {
    name: "Socket.io",
    icon: "/socket-dot-io-svgrepo-com.svg", 
    color: "#AAAAAA",
    invert: true,
  },
  {
    name: "TS",
    icon: "/icons8-typescript.svg", 
    color: "#3178C6",
    
  },
  {
    name: "VS Code",
    icon: "/icons8-visual-studio.svg", 
    color: "#33A8FF",
    
  },
  {
    name: "React",
    icon: "/react-javascript-js-framework-facebook-svgrepo-com.svg",
    color: "#61DAFB",
  },

  
  {
    name: "Redux",
    icon: "/icons8-redux (1).svg", 
    color: "#764ABC",
  
  },
  
  {
    name: "Tailwind",
    icon: "/tailwind-svgrepo-com.svg",
    color: "#06B6D4",
  },
  {
    name: "Canva",
    icon: "/canva-svgrepo-com.svg", 
    color: "#FFFFFF",
    invert: true,
  },
  {
    name: "NPM",
    icon: "/npm-svgrepo-com.svg", 
    color: "#CB3837",
  },
  {
    name: "Nodemon",
    icon: "/nodemon-svgrepo-com.svg", 
    color: "#76D04B",
  },
 
  {
    name: "Solidity",
    icon: "/light-solidity-svgrepo-com.svg", 
    color: "#AAA9A9",
    invert: true,
  },
  {
    name: "React Router",
    icon: "/reactrouter-svgrepo-com.svg", 
    color: "#AAAAAA",
    invert: true,
  },
  
  {
    name: "Node JS",
    icon: "/node-js-svgrepo-com.svg", 
    color: "#339933",
  },
  {
    name: "Gitlab",
    icon: "/gitlab-svgrepo-com.svg",
    color: "#FC6D26",
  },
  {
    name: "HTML",
    icon: "/html-5-svgrepo-com.svg",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: "/css-3-svgrepo-com.svg",
    color: "#1572B6",
  },
  {
    name: "JS",
    icon:"/icons8-js.svg",
    color: "#F7DF1E",
    
  },
  {
    name: "Python",
    icon: "/python-svgrepo-com.svg",
    color: "#3776AB",
  },

  {
    name: "Vercel",
    icon: "/vercel-svgrepo-com.svg", 
    color: "#AAAAAA", 
    invert: true,
  },

     // {
    //   name: "Firebase",
    //   icon: "/images/firebase.png",
    //   color: "#FFCA28",
    // },

        // {
    //   name: "AWS",
    //   icon: "/images/aws.png",
    //   color: "#FF9900", // AWS brand color
    // },
    // {
    //   name: "Terraform",
    //   icon: "/images/terraform.png",
    //   color: "#844FBA", // Terraform brand color
    // },
    // {
    //   name: "Jenkins",
    //   icon: "/images/jenkins.png",
    //   color: "#D33833",
    // },

     // {
    //   name: "TS",
    //   icon: "/images/typescript.png",
    //   color: "#3178C6",
    // },

     // {
    //   name: "DBeaver",
    //   icon: "/images/dbeaver.pn",
    //   color: "#144D5C",
    // },
    // {
    //   name: "GH Actions",
    //   icon: "/",
    //   color: "#2088FF",
    // },
    // {
    //   name: "Circle CI",
    //   icon: "/images/circleci.png",
    //   color: "#343434",
    // },

       // {
    //   name: "Ansible",
    //   icon: "/images/ansible.png",
    //   color: "#000000",
    // },
    // {
    //   name: "Nginx",
    //   icon: "/images/nginx.png",
    //   color: "#009639",
    // },
    // {
    //   name: "Redis",
    //   icon: "/images/redis.png",
    //   color: "#D82C20",
    // },
    // {
    //   name: "RabbitMQ",
    //   icon: "/images/rabbitmq.png",
    //   color: "#F60",
    // },
    // {
    //   name: "MySQL",
    //   icon: "/images/mysql.png",
    //   color: "#4479A1",
    // },
    // {
    //   name: "PostgreSql",
    //   icon: "/images/postgresql.png",
    //   color: "#336791",
    // },
  ];

const SkillCard = React.forwardRef((props, ref) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });
  

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: -100 }} // Start from left (-100px)
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
      className="mt-50"
    >
      <div className="text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 font-[Poppins]">Skills</h2>
          <p className="text-lg text-gray-400 mb-8">
            These are the Technologies I&apos;ve worked with
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black rounded-lg p-4 transition-transform duration-200 hover:scale-105"
                style={{
                  boxShadow: `0px 4px 12px ${skill.color}`,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1, boxShadow: `0px 4px 16px ${skill.color}` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                 <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-16 h-16 mb-4 object-contain ${
                    skill.invert ? "filter invert" : ""
                  }`}
                />
                <p className="text-sm font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

     

    </motion.div>
  );
});

export default SkillCard;
