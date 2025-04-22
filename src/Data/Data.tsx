// Data.ts

import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

export const companies: string[] = [
    "google",
    "microsoft",
    "meta",
    "netflix",
    "wipro",
  ];

  export const footerLinks = [
    {
      title: "Product",
      link: ["Find Job", "Find Company", "Find Employee"],
    },
    {
      title: "Company",
      link: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"],
    },
    {
      title: "Support",
      link: ["Help & Support", "Feedback", "FAQs"],
    },
  ];

  export const dropdownData = [
    {
      title: "Job Title",
      icon: IconSearch,
      options: [
        "Designer",
        "Developer",
        "Product Manager",
        "Marketing Specialist",
        "Data Analyst",
        "Sales Executive",
        "Content Writer",
        "Customer Support",
      ],
    },
    {
      title: "Location",
      icon: IconMapPin,
      options: ["Delhi", "New York", "San Francisco", "London", "Berlin", "Tokyo", "Sydney", "Toronto"],
    },
    {
      title: "Experience",
      icon: IconBriefcase,
      options: ["Entry Level", "Intermediate", "Expert"],
    },
    {
      title: "Job Type",
      icon: IconRecharging,
      options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
    },
  ];

  export const jobList = [
    {
      jobTitle: "Product Designer",
      company: "Meta",
      applicants: 25,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "New York",
      package: "32 LPA",
      postedDaysAgo: 12,
      description: "Meta is seeking a Product Designer to join our team. You'll be working on user-centric interfaces for our blockchain wallet platform.",
    },
    {
      jobTitle: "Sr. UX Designer",
      company: "Netflix",
      applicants: 14,
      experience: "Expert Level",
      jobType: "Contract",
      location: "Los Angeles",
      package: "45 LPA",
      postedDaysAgo: 5,
      description: "Netflix is hiring a Sr. UX Designer to craft engaging and seamless entertainment experiences across our platform.",
    },
    {
      jobTitle: "Frontend Engineer",
      company: "Google",
      applicants: 40,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Mountain View",
      package: "40 LPA",
      postedDaysAgo: 3,
      description: "Join Google’s UI team to build fast, accessible, and modern web apps with cutting-edge technologies.",
    },
    {
      jobTitle: "AI Research Scientist",
      company: "Apple",
      applicants: 10,
      experience: "Expert Level",
      jobType: "Full-Time",
      location: "Cupertino",
      package: "60 LPA",
      postedDaysAgo: 1,
      description: "Apple is hiring researchers for AI and ML-driven products. Work on real-world applications that impact millions.",
    },
    {
      jobTitle: "Data Analyst",
      company: "Spotify",
      applicants: 18,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Stockholm",
      package: "35 LPA",
      postedDaysAgo: 8,
      description: "Spotify is looking for data-driven analysts to support product innovation and user insights through detailed reporting and storytelling.",
    },
    {
      jobTitle: "DevOps Engineer",
      company: "Amazon",
      applicants: 22,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Seattle",
      package: "42 LPA",
      postedDaysAgo: 6,
      description: "Be a part of the AWS DevOps team and ensure the scalability, security, and performance of mission-critical services.",
    },
    {
      jobTitle: "Cloud Solutions Architect",
      company: "Microsoft",
      applicants: 15,
      experience: "Senior Level",
      jobType: "Full-Time",
      location: "Redmond",
      package: "55 LPA",
      postedDaysAgo: 2,
      description: "Work with Microsoft Azure customers to design scalable and secure cloud architectures for enterprises.",
    },
    {
      jobTitle: "Software Engineer",
      company: "Tesla",
      applicants: 35,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "Austin",
      package: "38 LPA",
      postedDaysAgo: 4,
      description: "Tesla is hiring software engineers to build software systems for energy products, from solar to charging stations.",
    }
  ];
  
  
