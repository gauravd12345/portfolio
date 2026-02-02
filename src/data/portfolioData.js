export const personalInfo = {
  name: "Gaurav Dharmadhikari",
  title: "",
  tagline: "",
  email: "gauravdharmadhikari2@gmail.com",
  social: {
    github: "https://github.com/gauravd12345",
    linkedin: "https://www.linkedin.com/in/gaurav-dharmadhikari/",
    email: "mailto:gauravdharmadhikari2@gmail.com"
  }
};

export const aboutMe = {
  paragraphs: [
    "I'm an embedded software developer with an interest in firmware and embedded systems. I specialize in React, Node.js, and modern web technologies. I'm passionate about creating clean, efficient code and delivering exceptional user experiences.",
    "When I'm not coding, you can find me watching movies, playing guitar, or reading books."
  ]
};

export const skills = [
  // Programming Languages
  "Python", "C", "C++", "Java", "JavaScript", //"C#", "Swift", "Bash", "SQL",
  
   // Embedded Systems
  "I2C", "UART", "SPI", "Raspberry Pi", "Arduino", "RTOS", "STM32", "ESP32",

  // Hardware & Tools
  "Oscilloscope", "Verilog", "Digital Multimeter", "Signal Generator",
  

  // Development Tools & Frameworks
  "CMake", "Linux",
  
  // Architecture
  "x86"
];

export const experiences = [
  {
    id: 1,
    title: "Undergraduate Research Assistant",
    company: "Multi-Physics and Circuits Lab",
    period: "May 2025 - Present",
    description: "Developed machine learning models using PyTorch to predict quantum algorithm performance trends, achieving 86% accuracy."
  },
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "San Jose State University",
    period: "May 2025 - Aug 2025",
    description: "Developed an RFID card management system using the MERN stack with bcrypt security, real-time SSE monitoring, and Docker deployment with Nginx."
  },
];

export const projects = [
  {
    id: 1,
    title: "Display Module Driver",
    description: "Developed a bare-metal LCD driver for an STM32 microcontroller with custom bootloader, linker scripts, and SPI communication for embedded graphics.",
    tech: ["Firmware", "STM32", "Bare-metal", "C", "SPI"],
    link: "https://example.com",
    github: "https://github.com/gauravd12345/stm32_tft_display_driver"
  },
  {
    id: 2,
    title: "Smart Water Bottle",
    description: "Designed a smart water bottle for measuring water intake by interfacing an ultrasonic sensor using an STM32.",
    tech: ["Firmware", "STM32", "UART", "I2C"],
    link: "",
    github: "",
    ongoing: true
  },

  {
    id: 3,
    title: "Temperature & Humidity Sensor",
    description: "Interfaced a DHT11 sensor for the ESP32 microcontroller using FreeRTOS and custom GPIO protocol with real-time web monitoring via SSE.",
    tech: ["FreeRTOS", "ESP32", "C", "GPIO"],
    link: "https://example.com",
    github: "https://github.com/gauravd12345/esp32_dht11_driver"
  },
  {
    id: 4,
    title: "Gameboy Emulator",
    description: "Created an emulator for the Nintendo Gameboy in C++",
    tech: ["C", "C++", "Assembly"],
    link: "https://example.com",
    github: "https://github.com/gauravd12345/gameboy_emulator",
    ongoing: true
  },

  {
    id: 5,
    title: "Youtube Video Chatbot",
    description: "Created a YouTube chatbot extension using FastAPI, React, and Gemini API for real-time video content Q&A.",
    tech: ["React", "Chart.js", "REST API", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com/gauravd12345/video_query"
  }

];
