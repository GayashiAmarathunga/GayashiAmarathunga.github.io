"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Development Skills -</b> Python , Java , HTML/CSS , JavaScript , Kotlin , PHP, Tailwind CSS</li>
        <li><b>Frameworks - </b> React Native , Node.js , React js , next js , Flutter , Bootstrap </li>
        <li><b>Development Tools - </b>VS Code (IDE) , Firebase , MySQL , WordPress , GitHub , Canva , Figma , Unity ,
           ClickUp , Adobe , Slack , Microsoft 360</li>
        <li><b>Languages - </b> English</li>
        <li><b>Soft Skills - </b>Leadership , Project Management , Communication , Adaptability ,
        Problem Solving , Teamwork , Time Management ,Creativity</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Undergraduate BEng (Hons) Software Engineering at
          University of Westminster</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Git Essential Traning</li>
        <li>Figma for UX Design</li>
        <li>UX Foundations: Interaction Design</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/projects/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I’m a software engineering student passionate about full-stack development.Also am good at UI/UX Designing and development. 
          I enjoy creating user-friendly web and mobile applications and have experience 
          working with both front-end and back-end technologies. I’m a fast learner, adaptab
          le to new tools and methods, and committed to delivering high-quality work on time.


          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
