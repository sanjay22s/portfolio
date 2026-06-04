import React from 'react';

const projects = [
  {
    title: 'Full Stack E-Commerce Platform',
    image: '/assets/project-ecommerce.png',
    description: 'Authentication, cart, orders, and admin dashboard for a complete commerce workflow.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Real-Time Chat Application',
    image: '/assets/project-chat.png',
    description: 'Socket.IO based real-time messaging with active conversations and instant delivery.',
    stack: ['React', 'Socket.IO', 'Node.js', 'Express'],
  },
  {
    title: 'Task Management System',
    image: '/assets/project-task.png',
    description: 'Team collaboration and task management with kanban boards and progress tracking.',
    stack: ['React', 'Node.js', 'Express', 'Git'],
  },
  {
    title: 'AI Study Companion',
    variant: 'ai',
    description: 'An AI-powered learning assistant that summarizes topics, generates quizzes, and tracks study sessions.',
    stack: ['React', 'OpenAI API', 'Node.js', 'Express'],
  },
  {
    title: 'AI Resume Coach',
    variant: 'ai',
    description: 'A smart resume analysis tool that highlights skills, suggests improvements, and prepares interview prompts.',
    stack: ['React', 'AI APIs', 'Node.js', 'MongoDB'],
  },
];

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];

const skills = ['C++', 'Java', 'Python', 'SQL', 'HTML', 'CSS', 'Figma', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Git', 'GitHub'];

const workExperience = [
  {
    period: 'PRESENT',
    title: 'In-House Intern',
    company: 'Better Tomorrow',
    description:
      'Gained practical exposure to development workflows, collaborated on project tasks, and strengthened problem-solving and technical implementation skills.',
  },
];

function App() {
  return (
    <main className="min-h-screen bg-[#030303] font-display text-white">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.055),transparent_32%),linear-gradient(180deg,#030303,#090909_50%,#030303)]" />
      <div className="soft-noise" />
      <div className="floating-light one" />
      <div className="floating-light two" />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#home" className="text-sm font-bold tracking-tight text-white md:text-base">
          Sanjay S
        </a>
        <div className="hidden items-center gap-9 rounded-full border border-white/8 bg-white/[0.035] px-7 py-3 backdrop-blur-md md:flex">
          {['Home', 'About', 'Work', 'Projects', 'Education', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href="/sanjay_res.pdf" download className="resume-button">
          Resume
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative z-10 grid min-h-screen place-items-center px-5 pt-20 text-center">
      <div className="mx-auto max-w-4xl">
        <p className="text-2xl font-medium text-white/[0.55] md:text-3xl">Hi, I am</p>
        <h1 className="mt-6 text-6xl font-black tracking-tight md:text-8xl">Sanjay S</h1>
        <p className="mx-auto mt-8 max-w-3xl text-xl font-medium leading-8 text-white/[0.62] md:text-3xl md:leading-10">
          Computer Science Engineering (AI & ML) Student
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {roles.map((role) => (
            <span key={role} className="role-chip">
              {role}
            </span>
          ))}
        </div>
      </div>
      <div className="based-badge">
        <span />
        Based in India
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section relative z-10">
      <SectionTitle eyebrow="About" title="Simple ideas. Useful software." />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xl leading-9 text-white/[0.68] md:text-2xl md:leading-10">
          I am a CSE (AI & ML) student interested in full-stack development, UI/UX design, and problem solving. I enjoy building clean interfaces, practical web applications, and learning by turning ideas into working products.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="work" className="section relative z-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">Work Experience</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            <span className="text-white">Work</span> <span className="text-orange-300">Experience</span>
          </h2>
        </div>
        <div className="work-wrap">
          <div className="work-track" />
          <div className="space-y-6">
            {workExperience.map((item) => (
              <article key={item.title} className="work-card">
                <div className="work-bullet" />
                <div className="work-content">
                  <p className="work-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="work-company">{item.company}</p>
                  <p className="work-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section relative z-10">
      <SectionTitle eyebrow="Projects" title="Selected Work" />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <ProjectVisual project={project} />
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-3 leading-7 text-white/[0.58]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="stack-pill">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="small-button">
                  GitHub
                </a>
                <a href="#contact" className="small-button">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section relative z-10">
      <SectionTitle eyebrow="Education" title="Academic" />
      <div className="mx-auto grid max-w-4xl gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-center backdrop-blur-md md:p-9">
          <h3 className="text-2xl font-bold">Sri Eshwar College of Engineering</h3>
          <p className="mt-3 text-white/[0.62]">B.E Computer Science Engineering (AI & ML)</p>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-white/[0.45]">2024 - 2028</p>
          <p className="mt-5 text-base font-semibold text-white/75">7.6 CGPA (upto 4th sem)</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-md md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/[0.45]">Schooling</p>
          <div className="mt-6 space-y-4">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-xl font-bold">Literacy Mission Matric Higher Secondary School</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/[0.42]">HSC</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-base font-semibold text-white/75">88%</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-white/[0.42]">2022 - 2024</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-xl font-bold">Literacy Mission Matric Higher Secondary School</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/[0.42]">SSLC</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-base font-semibold text-white/75">80.4%</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-white/[0.42]">2021 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section relative z-10 pb-24">
      <SectionTitle eyebrow="Contact" title="Let's Connect" />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a href="mailto:sanjay342p@gmail.com" className="contact-card">
            <span>Email</span>
            <strong>sanjay342p@gmail.com</strong>
          </a>
          <a href="tel:+91-9843022959" className="contact-card">
            <span>Phone</span>
            <strong>+91-9843022959</strong>
          </a>
          <a
            href="https://github.com/sanjay22s"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>GitHub</span>
            <strong className="contact-inline-icon">
              <GitHubIcon />
              <span>sanjay22s</span>
            </strong>
          </a>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const name = String(data.get('name') || '').trim();
            const email = String(data.get('email') || '').trim();
            const message = String(data.get('message') || '').trim();
            const subject = encodeURIComponent(`Portfolio contact from ${name || 'website visitor'}`);
            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
            );
            window.location.href = `mailto:sanjay342p@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" type="text" className="form-input" placeholder="Your name" required />
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" className="form-input" placeholder="Your email" required />
          </div>
          <div>
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input min-h-40 resize-none"
              placeholder="Write your message"
              required
            />
          </div>
          <button type="submit" className="send-button">
            Send Me
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-white/[0.42]">
      © 2026 Sanjay S
    </footer>
  );
}

function ProjectVisual({ project }) {
  if (project.variant === 'ai') {
    return (
      <div className="ai-visual">
        <div className="ai-visual-top">
          <span>AI</span>
          <span>ACTIVE</span>
        </div>
        <div className="ai-visual-grid">
          <div className="ai-orb ai-orb-left" />
          <div className="ai-orb ai-orb-right" />
          <div className="ai-window">
            <div className="ai-window-bar" />
            <div className="ai-window-line short" />
            <div className="ai-window-line" />
            <div className="ai-window-line short" />
          </div>
        </div>
        <div className="ai-visual-bottom">
          <span>Smart assistant</span>
          <span>Adaptive learning</span>
        </div>
      </div>
    );
  }

  return <img src={project.image} alt={`${project.title} preview`} className="project-image" />;
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.67c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.92 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.82-2.34 4.67-4.57 4.91.36.31.68.94.68 1.9v2.8c0 .26.18.57.69.47A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, align = 'center', accent }) {
  const containerClass =
    align === 'left' ? 'mb-12 max-w-4xl text-left' : 'mx-auto mb-12 max-w-4xl text-center';
  const eyebrowClass =
    accent === 'warm'
      ? 'text-sm font-bold uppercase tracking-[0.28em] text-orange-300'
      : 'text-sm font-bold uppercase tracking-[0.28em] text-white/[0.45]';

  return (
    <div className={containerClass}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{title}</h2>
    </div>
  );
}

export default App;
