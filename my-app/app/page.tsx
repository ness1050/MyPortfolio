"use client"

export default function Home() {
  return (
    <main>
      <header id="header">
        <div className="left-section">
     
    </div>

  <nav>
    <a className="nav-item active" href="#">Home</a>
    <a className="nav-item" href="#">Projects</a>
    <a className="nav-item" href="#">Skills</a>
  </nav>
</header>

<section id="hero">
  <div className="hero-left">
    <div className="content">
      <h1>Hi There, I'Am Naseem Qurbanali</h1>
      <h3>Software & Computer Engineer | Fullstack developer | Java developer</h3>
      <p>
        Bachelor graduate and junior software developer. <br />
        Passionate about creating efficient, scalable, and maintainable solutions that deliver real value to the real-world problems.
        <br />
      </p>

      <div className="cta">
        <button className="cta-1">Hire Me</button>
        <button className="cta-2">Contact Me</button>
      </div>

      <div className="social-icon">
        <a href="https://www.linkedin.com/in/naseem-computer-engineer/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/ness1050" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="hero-right"></div>
</section>

<section className="section reveal" id="about">
  <h2>About Me</h2>
  <p>
    I am a Computer Engineering graduate and junior software developer with a strong
    focus on Java, full-stack development, and system design. I enjoy building
    scalable applications, working with RESTful APIs, and applying object-oriented
    principles to real-world problems.
    <br />
    Motivated and detail-oriented web developer with hands-on academic experience in 
    building both client-side and server-side web applications using JavaScript, HTML, 
    CSS, Node.js, and Express. Skilled in developing responsive and secure web apps, 
    implementing full CRUD functionality, and managing real-time and asynchronous 
    communication. Eager to apply modern web technologies in a junior developer role.
  </p>
</section>

<section className="section reveal" id="experience">
  <h2>Experience</h2>

  <div className="timeline">
    <div className="timeline-item">
      <h3>Wordpress |PHP | Elementor | HTML5 | CSS | tailwind Developer Intern – Torghandel AB</h3>
      <span>Oct 2025 – Jan 2026</span>
      <p>
        Worked with WordPress, WooCommerce, PHP, JavaScript, and MySQL.
        Implemented e-commerce features, payment solutions, and invoice integrations.
        Installation and configuration of WordPress (core installations and technical setup).
        Setup and administration of MySQL database for WordPress environment.
        Implementation and configuration of WooCommerce for e-commerce.
        Administration of WooCommerce (including the role of Shop Manager and product/order management).
        Integration and configuration of invoicing system and setup of payment solutions.
        Customization and configuration of code in PHP, JavaScript, HTML and CSS.
      </p>
    </div>

    <div className="timeline-item">
      <h3>System Developer</h3>
      <span>Apr 2025 – Oct 2025</span>
      <p>
        Built full-stack web applications using Node.js, Express, REST APIs,
        authentication, and responsive UI design with accessibility in mind.
      </p>
    </div>
  </div>
</section>

<section className="section reveal" id="education">
  <h2>Education</h2>

  <div className="card">
    <h3>BSc in Computer Engineering</h3>
    <span>Linnéuniversitetet (2021 – 2024)</span>
    <p>
      Focus on software engineering, OOP, UML, embedded systems, and machine learning.
    </p>
  </div>

  <div className="card">
    <h3>Front-End & React Development</h3>
    <span>Lexicon IT Consultant (2025)</span>
  </div>
</section>

<section className="section reveal" id="projects">
        <h2>Academic Projects</h2>
        <p className="section-subtitle">
          Selected university and academic projects demonstrating software design,
          full-stack development, and system engineering.
        </p>

        <div className="projects-container">
          <div className="project-card">
            <h3>Java OOP Lending System</h3>
            <span>Java · OOP · UML</span>
            <p>
              Designed and implemented an object-oriented lending system using Java.
              Applied OOAD principles, UML diagrams, and clean architecture.
            </p>
          </div>

          <div className="project-card">
            <h2>Thesis Research</h2>
            <h3>EEG Machine Learning model training Differentiating Cognitive Engagement Using EEG</h3>
            <span>Python · Matlab · Matplot · Scikit-learn · TensorFlow Brain-Computer Interface</span>
            <span>Supervised-learning</span>
            <p>
              Prefrontal EEG analysis with supervised ML models for detecting genuine vs. simulated engagement.
              Built and evaluated ML models on EEG data to distinguish authentic cognitive engagement in learning scenarios.
              Feature extraction from prefrontal EEG signals
            </p>
            <span>
              <a className="s-button" href="https://urn.kb.se/resolve?urn=urn:nbn:se:lnu:diva-133902" target="_blank" rel="noreferrer">
                Click Here
              </a>
            </span>
          </div>

          <div className="project-card">
            <h3>Vehicle Detection Embedded System</h3>
            <span>Arduino · Thonny . Sensors · Web Dashboard . MongoDb . Node.js . C# . RTOS</span>
            <p>
              eveloped a vehicle detection system using Arduino, ultrasonic, and 
              infrared sensors, achieving 95% accuracy in vehicle classification.
              Built a real-time data processing pipeline with MongoDB, Node.js, and 
              Socket.IO, reducing data latency by 30%.
              Designed a sensor-based algorithm to classify vehicles Sedans, SUVs, 
              Trucks) with 90% accuracy based on height measurements.
              Created an interactive web dashboard using JavaScript and EJS, 
              enabling real-time monitoring of vehicle speed, count, and classification
            </p>
          </div>

          <div className="project-card">
            <h3>Full-Stack Web Application</h3>
            <span>Node.js · Express · REST API</span>
            <p>
              Built a responsive web application with authentication, RESTful APIs,
              and accessibility-focused UI design.
            </p>
          </div>

          <div className="project-card">
            <h3>Iot Smart-Street lights</h3>
            <span>Tekniker: Python, LoRaWAN, TTN, Git, VSCode.</span>
            <p>
              Utvecklade ett smart gatubelysningssystem med PIR-sensorer, fotoresistorer (LDR) samt implementerade LoRaWAN-kommunikation.
              Genom att kombinera PIR-sensorer för rörelsedetektering och fotoresistorer (LDR) för att mäta ljusnivåer utvecklade jag en Python-baserad 
              lösning som automatiskt justerar ljusstyrkan, vilket resulterade i en energibesparing på upp till 75%.
              Implementerade ett system för realtidsövervakning och automatiskt felrapportering, samt dataöverföring till  en central server med hjälp av 
              LoPy4-enheter och TTN (The Things Network).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}