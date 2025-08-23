import users from "./users.js";
import mongoose from "mongoose";
import User from "../models/userModel.js";

const blogs = [
  {
    title: "GitHub",
    image: "/images/githubgif.gif",
    content:
      "GitHub is a platform for hosting and collaborating on code projects. It uses the Git version control system to track changes to files, making it easy for multiple people to work on the same project simultaneously. GitHub provides tools for managing projects, reviewing code, and facilitating collaboration among developers. It's widely used in the software development community for open source and private projects alike.",
    ratings: 1.6,
    author: "John Doe",
  },
  {
    title: "Artificial Intelligence",
    image: "/images/aigif.gif",
    content:
      "Artificial Intelligence (AI) is a branch of computer science focused on creating systems that can perform tasks that typically require human intelligence. These tasks include things like understanding natural language, recognizing patterns, solving problems, and learning from experience. AI techniques range from traditional methods like rule-based systems to more advanced approaches such as machine learning and deep learning, where algorithms can automatically improve their performance through exposure to data.",
    ratings: 2.4,
    author: "Jane Doe",
  },
  {
    title: "Cyber Security",
    image: "/images/cybersecgif.gif",
    content:
      "Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, attacks, damage, or theft. It involves a range of technologies, processes, and practices designed to safeguard digital information and infrastructure from potential threats. This includes securing networks, implementing strong access controls, regularly updating software, educating users about security best practices, and detecting and responding to security incidents promptly. Cybersecurity is essential in today's digital world to ensure the confidentiality, integrity, and availability of data and systems.",
    ratings: 4.5,
    author: "John Doe",
  },
  {
    title: "DevOps Engineering",
    image: "/images/devopsgif.gif",
    content:
      "DevOps engineering is a software development methodology that emphasizes collaboration, communication, and integration between software developers and IT operations teams. It aims to automate the process of software delivery and infrastructure changes, enabling faster and more reliable releases. DevOps combines practices such as continuous integration, continuous delivery, automated testing, and infrastructure as code to streamline the development lifecycle and improve the quality of software deployments. The goal of DevOps engineering is to shorten the development cycle, increase deployment frequency, and deliver high-quality software efficiently and reliably.",
    ratings: 3.8,
    author: "Jane Doe",
  },
  {
    title: "Software Engineering is Becoming Very Popular",
    image: "/images/sofenggif.gif",
    content:
      "Software engineering is a discipline that involves applying engineering principles to the design, development, testing, and maintenance of software systems. It encompasses a range of activities, including requirements analysis, software design, coding, testing, deployment, and maintenance. Software engineers use various methodologies, tools, and programming languages to create high-quality software that meets user needs efficiently and reliably. The field of software engineering also emphasizes principles such as modularity, abstraction, reusability, and scalability to manage the complexity of software systems effectively.",
    ratings: 4.1,
    author: "John Doe",
  },
  {
    title: "Machine Learning is Growing Rapidly",
    image: "https://s18670.pcdn.co/wp-content/uploads/robot.gif",
    content:
      "Machine learning is a subset of artificial intelligence (AI) that focuses on the development of algorithms that enable computers to learn from and make predictions or decisions based on data. Instead of explicitly programming rules, machine learning algorithms learn patterns and relationships from data to make predictions or decisions without being explicitly programmed to do so. It involves the use of mathematical and statistical techniques to enable computers to improve their performance on a task as they are exposed to more data over time. Machine learning has various applications, including image recognition, natural language processing, recommendation systems, and predictive analytics.",
    ratings: 4.9,
    author: "Jane Doe",
  },
  {
    title: "Cloud Computing Essentials",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCnyOgBUuIQcLF5udfPRUVqPRWZNn6iIHYQ&s",
    content:
      "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet to offer faster innovation, flexible resources, and economies of scale. It allows businesses and individuals to access technology services on an as-needed basis without owning physical infrastructure. Major cloud providers like AWS, Azure, and Google Cloud offer a range of services, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
    ratings: 4.2,
    author: "John Doe",
  },
  {
    title: "Blockchain Technology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCnyOgBUuIQcLF5udfPRUVqPRWZNn6iIHYQ&s",
    content:
      "Blockchain technology is a decentralized and distributed ledger system that records transactions across multiple computers in a secure, transparent, and tamper-resistant manner. Each block in the chain contains a list of transactions, and once a block is added, it cannot be altered without changing all subsequent blocks. Blockchain is the backbone of cryptocurrencies like Bitcoin and Ethereum but is also used in supply chain management, smart contracts, and digital identity verification.",
    ratings: 3.9,
    author: "Jane Doe",
  },
  {
    title: "Data Science Fundamentals",
    image:
      "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
    content:
      "Data science is an interdisciplinary field that combines statistics, computer science, and domain expertise to extract insights from structured and unstructured data. It involves processes like data collection, cleaning, analysis, visualization, and modeling to uncover patterns and support decision-making. Tools like Python, R, SQL, and frameworks like TensorFlow or Pandas are commonly used by data scientists to analyze large datasets and build predictive models.",
    ratings: 4.7,
    author: "John Doe",
  },
  {
    title: "Internet of Things (IoT)",
    image:
      "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
    content:
      "The Internet of Things (IoT) refers to the network of interconnected devices that communicate and exchange data over the internet. These devices, ranging from smart home appliances to industrial sensors, collect and share data to enable automation, monitoring, and optimization. IoT applications span smart cities, healthcare, agriculture, and manufacturing, leveraging technologies like sensors, cloud computing, and machine learning to drive efficiency and innovation.",
    ratings: 4.0,
    author: "Jane Doe",
  },
  {
    title: "Augmented Reality (AR) Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX8quwtpUBW83lr6veh2jHOkVpoAQuLYRXA&s",
    content:
      "Augmented Reality (AR) is a technology that overlays digital information, such as images, videos, or 3D models, onto the real world, enhancing the user’s perception of reality. AR development involves creating applications for devices like smartphones, tablets, or AR glasses using frameworks like ARKit, ARCore, or Unity. It is widely used in gaming, education, retail, and healthcare to create immersive and interactive experiences.",
    ratings: 4.3,
    author: "John Doe",
  },
  {
    title: "Quantum Computing Basics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4OzAWEUBsji4-Apxx4G_W5-Thznr2WxyBA&s",
    content:
      "Quantum computing is an advanced area of computing that uses principles of quantum mechanics, such as superposition, entanglement, and quantum interference, to process information. Unlike classical computers that use bits (0s and 1s), quantum computers use qubits, which can represent both 0 and 1 simultaneously. This enables quantum computers to solve complex problems, like cryptography and optimization, much faster than classical computers in certain scenarios.",
    ratings: 4.8,
    author: "Jane Doe",
  },
];

export default blogs;
