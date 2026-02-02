import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Trash2, Eye } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce solution with React, Node.js, and PostgreSQL. Implemented payment integration and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management tool with real-time updates using WebSockets and Redux for state management.",
      tech: ["React", "WebSocket", "Redux", "Express"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Created a responsive weather application using OpenWeather API with location-based forecasts and historical data visualization.",
      tech: ["React", "Chart.js", "REST API", "Tailwind"],
      link: "#",
      github: "#"
    }
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Lead frontend development for enterprise applications. Mentored junior developers and implemented best practices for code quality."
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Improved application performance by 40%."
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Built responsive websites and web applications. Collaborated with designers to implement pixel-perfect interfaces."
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript", "Python",
    "Tailwind CSS", "PostgreSQL", "MongoDB", "Git", "AWS",
    "Docker", "REST APIs", "GraphQL", "Redux", "Next.js"
  ];

  // Load messages if admin
  useEffect(() => {
    if (isAdmin) {
      loadMessages();
    }
  }, [isAdmin]);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const result = await window.storage.list('message:');
      if (result && result.keys) {
        const messagePromises = result.keys.map(async (key) => {
          try {
            const data = await window.storage.get(key);
            return data ? JSON.parse(data.value) : null;
          } catch (err) {
            return null;
          }
        });
        const loadedMessages = (await Promise.all(messagePromises)).filter(Boolean);
        setMessages(loadedMessages.sort((a, b) => b.timestamp - a.timestamp));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
    setLoading(false);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const messageData = {
        id: Date.now().toString(),
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        timestamp: Date.now(),
        read: false
      };

      const result = await window.storage.set(
        `message:${messageData.id}`,
        JSON.stringify(messageData)
      );

      if (result) {
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      setSubmitStatus('error');
    }
  };

  const handleAdminLogin = () => {
    // Simple password check - in production, use proper authentication
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const deleteMessage = async (id) => {
    try {
      await window.storage.delete(`message:${id}`);
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const markAsRead = async (msg) => {
    try {
      const updatedMsg = { ...msg, read: true };
      await window.storage.set(`message:${msg.id}`, JSON.stringify(updatedMsg));
      setMessages(messages.map(m => m.id === msg.id ? updatedMsg : m));
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button
              onClick={() => setIsAdmin(false)}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Logout
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Messages ({messages.length})</h2>
            
            {loading ? (
              <p className="text-gray-600">Loading messages...</p>
            ) : messages.length === 0 ? (
              <p className="text-gray-600">No messages yet.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`border rounded-lg p-4 ${msg.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{msg.name}</h3>
                        <p className="text-sm text-gray-600">{msg.email}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(msg.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        {!msg.read && (
                          <button
                            onClick={() => markAsRead(msg)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                            title="Mark as read"
                          >
                            <Eye size={18} />
                          </button>
                        )}
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">John Doe</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600">About</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-gray-600">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-gray-600">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600">Contact</button>
              <button onClick={() => setIsAdmin(true)} className="text-gray-400 hover:text-gray-600 text-sm">Admin</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-gray-600">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-left hover:text-gray-600">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-gray-600">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-gray-600">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm John Doe
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A passionate full-stack developer crafting beautiful and functional web experiences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <p className="text-lg text-gray-700 mb-6">
            I'm a full-stack developer with over 5 years of experience building web applications. 
            I specialize in React, Node.js, and modern web technologies. I'm passionate about 
            creating clean, efficient code and delivering exceptional user experiences.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the developer community.
          </p>
          
          <h4 className="text-xl font-semibold mb-4">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Experience</h3>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-gray-300 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <span className="text-sm text-gray-600 md:text-right">{exp.period}</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} className="flex items-center text-sm hover:text-gray-600">
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                  <a href={project.github} className="flex items-center text-sm hover:text-gray-600">
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Get In Touch</h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows="5"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'sending'}
              className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
            >
              {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </form>

          {/* Admin Login (hidden) */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center mb-4">Admin Access</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="password"
                placeholder="Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
              />
              <button
                onClick={handleAdminLogin}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm"
              >
                Login
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">Default password: admin123</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}