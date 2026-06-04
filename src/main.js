import './style.css'
import juanOcampoImg from './assets/juan_ocampo.jpg'
import logoImg from './assets/logo.png'
import futuristicEngineerImg from './assets/futuristic_engineer.png'

// SVG Icons as markup strings
const icons = {
  process: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9m3 14H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2.9.9 2 2v9"/><path d="M16 21a5 5 0 0 0-5-5"/><path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><circle cx="16" cy="17" r="1"/></svg>`,
  supplyChain: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><line x1="16" y1="8" x2="20" y2="8"/><line x1="12" y1="16" x2="16" y2="20"/><circle cx="12" cy="20" r="2"/><circle cx="18" cy="20" r="2"/><path d="M16 12h4.5a1.5 1.5 0 0 1 1.5 1.5v3.5h-3.5"/></svg>`,
  quality: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  data: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  location: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
  growth: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>`
}

// Initializing UI Structure
document.querySelector('#app').innerHTML = `
  <!-- Global 3D Background Canvas -->
  <canvas id="process-canvas"></canvas>

  <!-- Navigation Header -->
  <header>
    <div class="container nav-container">
      <a href="#" class="logo">
        <img src="${logoImg}" alt="Logo Ing. Juan Ocampo" />
      </a>
      <ul class="nav-menu">
        <li><a href="#about" class="nav-link">Sobre Mí</a></li>
        <li><a href="#experience" class="nav-link">Experiencia</a></li>
        <li><a href="#services" class="nav-link">Servicios</a></li>
        <li><a href="#simulator" class="nav-link">Simulador ROI</a></li>
        <li><a href="#portfolio" class="nav-link">Casos de Éxito</a></li>
        <li><a href="#testimonials" class="nav-link">Testimonios</a></li>
        <li><a href="#contact" class="btn btn-secondary" style="padding: 8px 20px; font-size: 14px;">Contactar</a></li>
      </ul>
      <button class="mobile-menu-btn" aria-label="Menu">
        ${icons.menu}
      </button>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      
      <div class="container hero-grid">
        <div class="hero-content reveal">
          <div class="hero-subtitle">
            <span></span> Optimizando Procesos & Reduciendo Costos
          </div>
          <h1 class="hero-title">
            Ingeniería que transforma la <span>eficiencia operativa</span>
          </h1>
          <p class="hero-desc">
            Especialista en maximizar el rendimiento industrial, rediseñar flujos de trabajo y aplicar metodologías Lean Six Sigma para generar ahorros financieros cuantificables.
          </p>
          <div class="hero-actions">
            <a href="#simulator" class="btn btn-primary">Probar Simulador ROI</a>
            <a href="#services" class="btn btn-secondary">Explorar Servicios</a>
          </div>
        </div>
        <div class="hero-visual reveal delay-200">
          <div class="hero-dashboard-mockup">
            <div class="mockup-header">
              <div class="mockup-dots">
                <span class="mockup-dot red"></span>
                <span class="mockup-dot yellow"></span>
                <span class="mockup-dot green"></span>
              </div>
              <div class="mockup-title">Procesos en Tiempo Real</div>
            </div>
            
            <!-- 3D Engineer Avatar Integration -->
            <div class="mockup-avatar-showcase">
              <div class="mockup-avatar-frame">
                <img src="${futuristicEngineerImg}" alt="Avatar 3D Ing. Juan Ocampo" class="mockup-avatar-img" />
                <div class="avatar-glow-scanner"></div>
                <div class="holo-tag tag-top">Lean Optimizer v4.0</div>
                <div class="holo-tag tag-bottom">Sys OK: Active</div>
              </div>
            </div>

            <div class="mockup-grid">
              <div class="mockup-stat">
                <div class="mockup-stat-label">OEE Promedio</div>
                <div class="mockup-stat-val highlight" id="hero-oee-val">87.4%</div>
              </div>
              <div class="mockup-stat">
                <div class="mockup-stat-label">Tasa de Merma</div>
                <div class="mockup-stat-val" style="color: var(--accent-green);" id="hero-waste-val">1.2%</div>
              </div>
            </div>
            <div class="mockup-chart">
              <div class="mockup-bar-wrapper">
                <div class="mockup-bar active" style="height: 85%;"></div>
                <div class="mockup-bar-label">L1</div>
              </div>
              <div class="mockup-bar-wrapper">
                <div class="mockup-bar active" style="height: 92%;"></div>
                <div class="mockup-bar-label">L2</div>
              </div>
              <div class="mockup-bar-wrapper">
                <div class="mockup-bar" style="height: 60%;" id="hero-bar-l3"></div>
                <div class="mockup-bar-label">L3</div>
              </div>
              <div class="mockup-bar-wrapper">
                <div class="mockup-bar active" style="height: 89%;"></div>
                <div class="mockup-bar-label">L4</div>
              </div>
            </div>
            <div style="font-size: 11px; color: var(--text-muted); text-align: left; margin-top: 12px; display: flex; justify-content: space-between;">
              <span>Simulando flujo operativo...</span>
              <span id="hero-sys-status">SISTEMA OPTIMIZADO</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container about-grid">
        <div class="about-img-container reveal">
          <div class="about-img-frame">
            <img src="${juanOcampoImg}" alt="Ing. Juan Ocampo" />
          </div>
          <div class="about-stats">
            <div class="glass-panel about-stat-box">
              <div class="about-stat-number">+5 Años</div>
              <div class="about-stat-text">Experiencia</div>
            </div>
            <div class="glass-panel about-stat-box">
              <div class="about-stat-number">+20</div>
              <div class="about-stat-text">Proyectos OK</div>
            </div>
          </div>
        </div>
        <div class="reveal delay-200">
          <span class="section-tag">Perfil Profesional</span>
          <h2 class="section-title" style="margin-bottom: 24px;">Análisis de Datos, Inteligencia de Negocio y Optimización de Procesos</h2>
          <p class="hero-desc" style="font-size: 16px; margin-bottom: 20px;">
            Ingeniero Industrial con sólida experiencia en análisis de datos, inteligencia de negocio y optimización de procesos. Experto en la utilización de herramientas como SQL, Python y Power BI para transformar datos en decisiones estratégicas que impulsan la productividad, la rentabilidad y la eficiencia.
          </p>
          <p class="hero-desc" style="font-size: 16px; margin-bottom: 24px;">
            Cuento con una amplia trayectoria en la mejora de indicadores clave (KPIs) en áreas de logística, planeación de demanda, calidad e inventarios. Busco aplicar mis habilidades en mejora continua y gestión de calidad para generar valor en una organización innovadora.
          </p>
          
          <div style="margin-bottom: 28px; display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="/cv.html" target="_blank" class="btn btn-secondary" style="border-radius: 8px; font-size: 14px; padding: 10px 20px; display: inline-flex; align-items: center; gap: 8px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Ver / Descargar CV (PDF)
            </a>
          </div>

          <h3 style="font-family: var(--font-heading); font-size: 18px; margin-bottom: 12px; color: var(--text-primary);">Habilidades Clave</h3>
          <div class="skills-tags">
            <span class="skill-tag">Lean Manufacturing & 5S</span>
            <span class="skill-tag">Six Sigma (DMAIC / AMEF)</span>
            <span class="skill-tag">Mapeo de Flujo de Valor (VSM)</span>
            <span class="skill-tag">Optimización de Layout & Flujo</span>
            <span class="skill-tag">Simulación de Procesos (FlexSim / Arena)</span>
            <span class="skill-tag">Business Intelligence (Power BI / Tableau)</span>
            <span class="skill-tag">Analítica de Datos Operativos (Python / SQL)</span>
            <span class="skill-tag">Gestión de Proyectos Ágiles (Scrum / Kanban)</span>
            <span class="skill-tag">Sistemas ERP (SAP S/4HANA)</span>
            <span class="skill-tag">Automatización & IoT Industrial</span>
            <span class="skill-tag">Gestión de Inventarios y Cadena de Suministro</span>
            <span class="skill-tag">Sostenibilidad & Eficiencia Energética (Green Lean)</span>
            <span class="skill-tag">Estudio Científico de Tiempos y Movimientos</span>
            <span class="skill-tag">Auditoría Interna ISO 9001</span>
            <span class="skill-tag">Mapas de Procesos & Organigramas</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience & Biography Section -->
    <section id="experience" class="section" style="background: rgba(255, 255, 255, 0.01); border-top: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Biografía & Trayectoria</span>
          <h2 class="section-title">El camino hacia la excelencia operativa</h2>
          <p class="section-desc">Mi desarrollo profesional es una combinación de rigor académico en ingeniería y experiencia práctica optimizando procesos reales con base en datos.</p>
        </div>
        
        <div class="timeline">
          <!-- Experiencia -->
          <div class="timeline-item reveal">
            <div class="timeline-content glass-panel">
              <span class="timeline-date">Experiencia Práctica</span>
              <h3 class="timeline-title">Ingeniería de Procesos & Mejora Continua</h3>
              <p class="timeline-desc">
                A lo largo de mi ejercicio profesional como Ingeniero de Procesos, me he dedicado a liderar la optimización integral de operaciones. Mi labor se ha centrado en transformar áreas críticas: utilizo metodologías ágiles y analítica avanzada para identificar cuellos de botella y erradicar tiempos muertos. Mediante la conexión del análisis riguroso de datos (SQL, Python, Power BI) con la toma de decisiones estratégicas, he impulsado la productividad global de los equipos, asegurando altos estándares de calidad y maximizando la rentabilidad.
              </p>
            </div>
          </div>
          
          <!-- Gestión de Calidad & ISO 9001 -->
          <div class="timeline-item reveal">
            <div class="timeline-content glass-panel">
              <span class="timeline-date">Estandarización y Calidad</span>
              <h3 class="timeline-title">Sistemas de Gestión & Estandarización Organizacional</h3>
              <p class="timeline-desc">
                He liderado proyectos de diseño organizacional y estandarización para diversas empresas. Esto incluye el mapeo completo de mapas de procesos, el diseño estratégico de organigramas funcionales y la ejecución de auditorías internas de gestión de calidad basadas en la norma internacional ISO 9001. Mi meta es asegurar que la estructura organizativa responda eficientemente a los objetivos de negocio y cumpla con estándares de clase mundial.
              </p>
            </div>
          </div>
          
          <!-- Educación -->
          <div class="timeline-item reveal">
            <div class="timeline-content glass-panel">
              <span class="timeline-date">Formación Académica</span>
              <h3 class="timeline-title">Ingeniero Industrial</h3>
              <div class="timeline-subtitle">Especialista en Análisis de Datos</div>
              <p class="timeline-desc">
                Formado con una visión sistémica y gerencial de las organizaciones. A través de mi especialización, desarrollé la capacidad de transformar grandes volúmenes de datos en inteligencia de negocio real. Esta sólida base académica cimentó mi experiencia actual en áreas críticas como logística, planeación de demanda, gestión de inventarios y control estadístico de procesos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section" style="background: rgba(255, 255, 255, 0.01); border-y: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Servicios Especializados</span>
          <h2 class="section-title">Soluciones de Ingeniería a Tu Medida</h2>
          <p class="section-desc">Diseño e implementación de estrategias operativas para elevar la calidad, reducir tiempos muertos y maximizar el margen de utilidad.</p>
        </div>
        <div class="services-grid">
          <!-- Service 1 -->
          <div class="glass-panel service-card reveal">
            <div class="service-icon">${icons.process}</div>
            <h3 class="service-title">Optimización de Procesos</h3>
            <p class="service-desc">Rediseño integral de flujos de trabajo (flujo continuo) y eliminación de desperdicios en planta o servicios utilizando herramientas Lean.</p>
            <ul class="service-list">
              <li>Mapeo de Flujo de Valor (VSM)</li>
              <li>Tiempos y Movimientos</li>
              <li>Balanceo de Líneas de Producción</li>
            </ul>
          </div>
          <!-- Service 2 -->
          <div class="glass-panel service-card reveal delay-100">
            <div class="service-icon">${icons.supplyChain}</div>
            <h3 class="service-title">Cadena de Suministro</h3>
            <p class="service-desc">Gestión científica de inventarios, optimización de espacios de almacenamiento y diseño de redes de distribución eficientes.</p>
            <ul class="service-list">
              <li>Planificación de Demanda</li>
              <li>Control y Clasificación ABC</li>
              <li>Layout de Centros de Distribución</li>
            </ul>
          </div>
          <!-- Service 3 -->
          <div class="glass-panel service-card reveal delay-200">
            <div class="service-icon">${icons.quality}</div>
            <h3 class="service-title">Gestión de Calidad e ISO 9001</h3>
            <p class="service-desc">Implementación y auditoría de sistemas de gestión de calidad para asegurar estándares internacionales y alinear la estructura organizativa.</p>
            <ul class="service-list">
              <li>Auditorías Internas (Norma ISO 9001)</li>
              <li>Mapeo de Procesos y Organigramas</li>
              <li>Estandarización Documental & AMEF</li>
            </ul>
          </div>
          <!-- Service 4 -->
          <div class="glass-panel service-card reveal delay-300">
            <div class="service-icon">${icons.data}</div>
            <h3 class="service-title">Analítica Industrial</h3>
            <p class="service-desc">Conversión de datos operativos en tableros de control interactivos que facilitan la toma de decisiones basada en hechos reales.</p>
            <ul class="service-list">
              <li>Definición de Árboles de KPIs</li>
              <li>Tableros de Control Digitales</li>
              <li>Modelado y Simulación de Sistemas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Simulator Section -->
    <section id="simulator" class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Demostración Interactiva</span>
          <h2 class="section-title">Simulador de Optimización de Procesos</h2>
          <p class="section-desc">Modifica los parámetros de tu proceso operativo actual y descubre cómo mi consultoría puede mejorar tus KPIs y generar ahorros mensuales.</p>
        </div>
        
        <div class="glass-panel simulator-wrapper reveal delay-100">
          <!-- Pestañas del Simulador -->
          <div class="sim-tabs-container">
            <button class="sim-tab-btn active" id="tab-btn-calculator">📊 Calculadora ROI</button>
            <button class="sim-tab-btn" id="tab-btn-game">🎮 Desafío Lean (Juego)</button>
          </div>

          <!-- Vista 1: Calculadora ROI -->
          <div class="simulator-grid" id="view-calculator">
            <!-- Controls -->
            <div class="simulator-controls">
              <h3 style="font-family: var(--font-heading); font-size: 18px; margin-bottom: 8px;">Ajusta tus Parámetros</h3>
              
              <div class="slider-group">
                <div class="slider-header">
                  <span class="slider-label">Tasa de Llegada de Pedidos</span>
                  <span class="slider-value" id="val-llegada">25 pza/h</span>
                </div>
                <input type="range" id="slide-llegada" min="10" max="60" value="25" />
              </div>

              <div class="slider-group">
                <div class="slider-header">
                  <span class="slider-label">Capacidad de Cuello de Botella</span>
                  <span class="slider-value" id="val-cuello">20 pza/h</span>
                </div>
                <input type="range" id="slide-cuello" min="10" max="60" value="20" />
              </div>

              <div class="slider-group">
                <div class="slider-header">
                  <span class="slider-label">Tasa de Defectos Actual</span>
                  <span class="slider-value" id="val-defectos">8.0%</span>
                </div>
                <input type="range" id="slide-defectos" min="1" max="25" step="0.5" value="8" />
              </div>

              <button class="btn btn-primary" id="btn-optimize" style="margin-top: 10px;">
                ⚙️ Aplicar Optimización Lean
              </button>
            </div>

            <!-- Results -->
            <div class="simulator-results">
              <h3 style="font-family: var(--font-heading); font-size: 18px; text-align: center;">KPIs Estimados</h3>
              
              <div id="bottleneck-status" class="bottleneck-indicator danger">
                <span class="bottleneck-dot"></span>
                <span id="bottleneck-text">PROCESO SATURADO (CUELLO DE BOTELLA ACTIVO)</span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div class="result-card">
                  <div class="result-label">Salida Real (Rendimiento)</div>
                  <div class="result-value" id="val-throughput">18.4 pza/h</div>
                </div>
                <div class="result-card">
                  <div class="result-label">Eficiencia Operativa</div>
                  <div class="result-value" id="val-efficiency">73.6%</div>
                </div>
              </div>

              <div class="result-card" style="background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.2);">
                <div class="result-label" style="color: var(--accent-green);">Ahorro Mensual Potencial</div>
                <div class="result-value savings" id="val-savings">$0 USD</div>
              </div>

              <div class="chart-comparison">
                <div class="chart-title">Eficiencia del Ciclo: Antes vs Después</div>
                <div class="bar-chart-container">
                  <div class="bar-row before">
                    <div class="bar-label">Actual</div>
                    <div class="bar-outer">
                      <div class="bar-inner" id="bar-before" style="width: 73%;"></div>
                    </div>
                    <div class="bar-percentage" id="bar-before-percent">73%</div>
                  </div>
                  <div class="bar-row after">
                    <div class="bar-label">Optimizado</div>
                    <div class="bar-outer">
                      <div class="bar-inner" id="bar-after" style="width: 95%;"></div>
                    </div>
                    <div class="bar-percentage" id="bar-after-percent">95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Vista 2: Desafío Lean (Minijuego) -->
          <div class="game-container" id="view-game" style="display: none;">
            <div class="game-screen" id="game-screen-start">
              <h3 class="game-title">Reto Lean: Salva la Línea de Producción</h3>
              <p class="game-intro">
                ¡La planta está sufriendo fallas operativas! Tienes <strong>30 segundos</strong> para responder a las alertas, reajustar los cuellos de botella y reducir la merma. ¿Lograrás la certificación Black Belt?
              </p>
              <div class="game-rules">
                <div class="rule-item">🔧 <strong>Calibrar A</strong>: Corrige defectos cuando se descalibre la calidad.</div>
                <div class="rule-item">⚡ <strong>Reforzar B</strong>: Despeja la cola cuando se sature el cuello de botella.</div>
                <div class="rule-item">📊 <strong>Aplicar Kanban</strong>: Nivela la tasa de llegada de pedidos si se desbalancea.</div>
              </div>
              <button class="btn btn-primary" id="btn-game-start" style="margin: 0 auto; display: block; border-radius: 8px;">▶️ Iniciar Desafío</button>
            </div>

            <div class="game-screen" id="game-screen-play" style="display: none;">
              <div class="game-header-stats">
                <div class="game-stat-box">
                  <div class="game-stat-lbl">Tiempo</div>
                  <div class="game-stat-val timer" id="game-timer">30s</div>
                </div>
                <div class="game-stat-box">
                  <div class="game-stat-lbl">OEE Actual</div>
                  <div class="game-stat-val" id="game-oee">100%</div>
                </div>
                <div class="game-stat-box">
                  <div class="game-stat-lbl">Ahorro ROI</div>
                  <div class="game-stat-val savings" id="game-savings">$0 USD</div>
                </div>
              </div>

              <div class="game-disruption-card" id="game-disruption-alert">
                <span class="pulse-warning-dot"></span>
                <span id="game-disruption-text">Línea Operando Normal - Monitoreando...</span>
              </div>

              <div class="game-actions-grid">
                <button class="game-action-btn" id="btn-action-quality" disabled>
                  <span class="btn-icon">🔧</span>
                  <span class="btn-title">Calibrar Estación A</span>
                  <span class="btn-desc">Reduce defectos al 1.2%</span>
                </button>
                <button class="game-action-btn" id="btn-action-bottleneck" disabled>
                  <span class="btn-icon">⚡</span>
                  <span class="btn-title">Reforzar Estación B</span>
                  <span class="btn-desc">Sube capacidad a 42 pza/h</span>
                </button>
                <button class="game-action-btn" id="btn-action-kanban" disabled>
                  <span class="btn-icon">📊</span>
                  <span class="btn-title">Aplicar Kanban</span>
                  <span class="btn-desc">Nivela llegada a 25 pza/h</span>
                </button>
              </div>
            </div>

            <div class="game-screen" id="game-screen-over" style="display: none;">
              <h3 class="game-title">¡Desafío Completado!</h3>
              <p class="game-intro" id="game-result-intro">Has completado los 30 segundos de optimización.</p>
              
              <div class="game-results-panel">
                <div class="result-row">
                  <span>OEE Promedio Logrado:</span>
                  <strong id="game-result-oee">92.4%</strong>
                </div>
                <div class="result-row">
                  <span>Ahorro ROI Acumulado:</span>
                  <strong id="game-result-savings" class="savings">$6,400 USD</strong>
                </div>
                <div class="result-row">
                  <span>Rango Operativo:</span>
                  <strong id="game-result-rank" style="color: var(--accent-cyan);">Lean Green Belt 🥋</strong>
                </div>
              </div>
              
              <p class="game-intro" style="font-size: 13px; margin-top: 16px; color: var(--text-muted); text-align: center;">
                En la planta real, Juan Ocampo aplica metodologías de ingeniería industrial para erradicar permanentemente estas fallas.
              </p>
              
              <div class="game-actions-row">
                <button class="btn btn-secondary" id="btn-game-replay">🔄 Jugar de nuevo</button>
                <a href="#contact" class="btn btn-primary" id="btn-game-contact" style="border-radius: 8px;">💬 Optimizar mi Planta Real</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Portfolio/Cases Section -->
    <section id="portfolio" class="section" style="background: rgba(255, 255, 255, 0.01); border-y: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Casos de Éxito</span>
          <h2 class="section-title">Resultados Comprobados</h2>
          <p class="section-desc">Ejemplos reales de proyectos y consultorías implementadas con éxito, demostrando mejoras operativas y financieras cuantificables.</p>
        </div>
        <div class="portfolio-grid">
          <!-- Case 1 (Suntic) -->
          <div class="glass-panel portfolio-card reveal">
            <div class="portfolio-img">
              ${icons.quality}
            </div>
            <div class="portfolio-content">
              <span class="portfolio-metric">100% Documentado</span>
              <h3 class="portfolio-title">Estructura & Mapas de Procesos | Suntic</h3>
              <p class="portfolio-desc">
                Diseño y estandarización del mapa de procesos global y por áreas funcionales. Elaboración de la estructura del organigrama corporativo y documentación técnica de procedimientos operativos.
              </p>
              <div class="portfolio-footer">
                <strong>Logro:</strong> Base estructural estandarizada y lista para escalabilidad u auditorías.
              </div>
            </div>
          </div>
          <!-- Case 2 (JMO Nutrición) -->
          <div class="glass-panel portfolio-card reveal delay-150">
            <div class="portfolio-img">
              ${icons.growth}
            </div>
            <div class="portfolio-content">
              <span class="portfolio-metric">+30% en Ventas</span>
              <h3 class="portfolio-title">Transformación Digital Operativa | JMO Nutrición</h3>
              <p class="portfolio-desc">
                Asesoría estratégica en la migración de un modelo de negocio con atención netamente física hacia canales virtuales, optimizando la adquisición de clientes y expandiendo la cuota de mercado.
              </p>
              <div class="portfolio-footer">
                <strong>Logro:</strong> Incremento en facturación y consolidación del reconocimiento de marca.
              </div>
            </div>
          </div>
          <!-- Case 3 (Imperio Electronic) -->
          <div class="glass-panel portfolio-card reveal delay-300">
            <div class="portfolio-img">
              ${icons.process}
            </div>
            <div class="portfolio-content">
              <span class="portfolio-metric">Optimización & IA</span>
              <h3 class="portfolio-title">E-commerce, Asistente IA & Trazabilidad | Imperio Electronic</h3>
              <p class="portfolio-desc">
                Desarrollo de e-commerce y despliegue de un asistente con IA integrado en web y WhatsApp, optimizando drásticamente los tiempos de respuesta. Adicionalmente, sistematicé el taller de reparaciones diseñando una bitácora digital de trazabilidad ("historial clínico" de equipos) que resolvió brechas de comunicación y agilizó el flujo de información técnica.
              </p>
              <div class="portfolio-footer">
                <strong>Logro:</strong> Tiempos de respuesta reducidos al mínimo y transparencia total en el estatus de reparaciones.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="section" style="background: rgba(255, 255, 255, 0.01); border-bottom: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Testimonios</span>
          <h2 class="section-title">Lo que Dicen mis Clientes</h2>
          <p class="section-desc">Testimonios reales de empresas que experimentaron la optimización de procesos y la transformación digital de sus operaciones.</p>
        </div>
        
        <div class="testimonials-grid">
          <!-- Testimonial 1 -->
          <div class="glass-panel testimonial-card reveal">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">
              "La estructuración y el mapa de procesos por áreas que elaboró el Ing. Juan Ocampo sentó las bases para nuestra estandarización y organizó de forma nítida las responsabilidades internas de Suntic."
            </p>
            <div class="testimonial-client">
              <div class="client-avatar">S</div>
              <div>
                <h4 class="client-name">Suntic S.A.S.</h4>
                <p class="client-role">Dirección Operativa</p>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="glass-panel testimonial-card reveal delay-150">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">
              "La asesoría para llevar a JMO Nutrición del canal físico al digital fue clave. Logramos un aumento sostenido del 30% en ventas y consolidamos nuestro reconocimiento de marca en el nicho virtual."
            </p>
            <div class="testimonial-client">
              <div class="client-avatar">J</div>
              <div>
                <h4 class="client-name">JMO Nutrición</h4>
                <p class="client-role">Fundador & Propietario</p>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="glass-panel testimonial-card reveal delay-300">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">
              "El asistente de IA, el e-commerce y la bitácora digital de trazabilidad del taller cambiaron por completo las reglas de juego. Los clientes adoran ver el estatus en tiempo real y la información fluye."
            </p>
            <div class="testimonial-client">
              <div class="client-avatar">I</div>
              <div>
                <h4 class="client-name">Imperio Electronic</h4>
                <p class="client-role">Dirección de Servicio & Operaciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container contact-grid">
        <div class="contact-info reveal">
          <div>
            <span class="section-tag">Contacto</span>
            <h2 class="section-title" style="text-align: left; margin-bottom: 16px;">¿Listo para optimizar tus procesos?</h2>
            <p class="hero-desc" style="font-size: 15px; margin-bottom: 0;">
              Conversemos sobre tu planta, tus cuellos de botella actuales y cómo podemos implementar mejoras que se reflejen positivamente en tus estados financieros.
            </p>
          </div>
          <div class="glass-panel contact-card">
            <div class="contact-card-icon">${icons.email}</div>
            <div>
              <div class="contact-card-title">Correo electrónico</div>
              <a href="mailto:juanpa_776@hotmail.com" class="contact-card-value">juanpa_776@hotmail.com</a>
            </div>
          </div>
          <div class="glass-panel contact-card">
            <div class="contact-card-icon">${icons.phone}</div>
            <div>
              <div class="contact-card-title">Teléfono / WhatsApp</div>
              <a href="tel:+573184316331" class="contact-card-value">+57 318 431 6331</a>
            </div>
          </div>
          <div class="glass-panel contact-card">
            <div class="contact-card-icon">${icons.linkedin}</div>
            <div>
              <div class="contact-card-title">Redes Profesionales</div>
              <a href="https://www.linkedin.com/in/juan-pablo-ocampo-zuluaga-bb001a267/" target="_blank" class="contact-card-value" style="font-size: 14px; word-break: break-all;">linkedin.com/in/juan-pablo-ocampo-zuluaga-bb001a267</a>
            </div>
          </div>
        </div>
        
        <div class="glass-panel contact-form-panel reveal delay-150">
          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <label for="form-name" class="form-label">Nombre Completo</label>
              <input type="text" id="form-name" class="form-input" placeholder="Ej. Carlos Mendoza" required />
            </div>
            <div class="form-group">
              <label for="form-company" class="form-label">Empresa / Organización</label>
              <input type="text" id="form-company" class="form-input" placeholder="Ej. Industrias Alimenticias S.A." />
            </div>
            <div class="form-group">
              <label for="form-email" class="form-label">Correo Corporativo</label>
              <input type="email" id="form-email" class="form-input" placeholder="carlos@empresa.com" required />
            </div>
            <div class="form-group">
              <label for="form-msg" class="form-label">Describa brevemente su necesidad operativa</label>
              <textarea id="form-msg" class="form-input" placeholder="Ej. Buscamos optimizar el tiempo de entrega y reducir la merma en nuestra línea de empaque..." required></textarea>
            </div>
            <div class="form-status" id="form-status"></div>
            <button type="submit" class="btn btn-primary" style="width: 100%; border-radius: 8px;">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <div class="container" style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
      <img src="${logoImg}" alt="Logo Ing. Juan Ocampo" style="height: 54px; width: auto; object-fit: contain; opacity: 0.85;" />
      <p style="margin: 0;">&copy; 2026 Ing. Juan Ocampo. Todos los derechos reservados.</p>
      <p style="font-size: 12px; color: var(--text-muted); margin: 0;">Diseñado con ingeniería de precisión y estética premium.</p>
    </div>
  </footer>

  <!-- Floating WhatsApp Button -->
  <a href="https://wa.me/573184316331" class="whatsapp-float" target="_blank" aria-label="Contactar por WhatsApp">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
      <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.879.52 3.633 1.42 5.147l-1.426 5.215 5.34-1.401c1.47.8 3.123 1.254 4.887 1.254 5.525 0 10.005-4.48 10.005-9.997C22.01 6.48 17.528 2 12.004 2z" fill="white"/>
      <path d="M17.956 16.156c-.259.728-1.293 1.332-1.82 1.428-.528.096-1.17.144-2.858-.545-2.222-.906-3.64-3.176-3.75-3.327-.11-.15-.898-1.194-.898-2.28 0-1.085.566-1.619.792-1.845.226-.226.49-.283.66-.283.169 0 .339 0 .49.009.16.009.377-.06.603.486.226.546.772 1.884.838 2.016.066.132.11.286.022.46-.088.176-.132.289-.264.444-.132.155-.278.347-.396.465-.132.132-.269.276-.11.547.16.27.708 1.166 1.517 1.885.696.618 1.282.809 1.46.899.18.09.287.075.392-.047.105-.122.45-.523.571-.702.12-.179.24-.15.405-.09.165.06 1.045.49 1.215.575.17.085.283.127.325.2.042.073.042.42-.217 1.148z" fill="#25d366"/>
    </svg>
  </a>
`

// --- LOGIC IMPLEMENTATION ---

// Sticky Navbar Scroll logic
const headerEl = document.querySelector('header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    headerEl.classList.add('scrolled')
  } else {
    headerEl.classList.remove('scrolled')
  }
})

// Mobile Menu simple toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const navMenu = document.querySelector('.nav-menu')
mobileMenuBtn.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none'
  } else {
    const isMobile = window.innerWidth <= 768
    navMenu.style.display = 'flex'
    navMenu.style.flexDirection = 'column'
    navMenu.style.position = 'absolute'
    navMenu.style.top = isMobile
      ? (headerEl.classList.contains('scrolled') ? '60px' : '70px')
      : (headerEl.classList.contains('scrolled') ? '80px' : '110px')
    navMenu.style.left = isMobile ? '20px' : 'auto'
    navMenu.style.right = '20px'
    navMenu.style.width = isMobile ? 'calc(100% - 40px)' : 'auto'
    navMenu.style.background = 'rgba(232, 239, 249, 0.95)'
    navMenu.style.backdropFilter = 'blur(12px)'
    navMenu.style.webkitBackdropFilter = 'blur(12px)'
    navMenu.style.border = '1px solid var(--border-color)'
    navMenu.style.borderRadius = '12px'
    navMenu.style.padding = '24px'
    navMenu.style.gap = '20px'
    navMenu.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.12)'
  }
})

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a')
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.style.display = 'none'
    }
  })
})

// Periodic live simulator for Hero Dashboard
const heroOeeVal = document.getElementById('hero-oee-val')
const heroWasteVal = document.getElementById('hero-waste-val')
const heroSysStatus = document.getElementById('hero-sys-status')

let baseOee = 87.4
let baseWaste = 1.2

setInterval(() => {
  const oeeFluct = (Math.random() - 0.5) * 0.8
  const wasteFluct = (Math.random() - 0.5) * 0.2
  
  const currentOee = Math.min(100, Math.max(70, baseOee + oeeFluct)).toFixed(1)
  const currentWaste = Math.min(10, Math.max(0.1, baseWaste + wasteFluct)).toFixed(2)
  
  if (heroOeeVal) heroOeeVal.innerText = `${currentOee}%`
  if (heroWasteVal) heroWasteVal.innerText = `${currentWaste}%`
  
  // Fluctuate all four dashboard bars dynamically
  const bars = document.querySelectorAll('.mockup-bar')
  bars.forEach((bar, idx) => {
    const baseHeight = [85, 92, 60, 89][idx] || 75
    const fluct = (Math.random() - 0.5) * 12
    const height = Math.min(98, Math.max(25, baseHeight + fluct))
    bar.style.height = `${height}%`
    
    // Add/remove glowing active status dynamically based on threshold
    if (height > 75) {
      bar.classList.add('active')
    } else {
      bar.classList.remove('active')
    }
  })
  
  if (heroSysStatus) {
    if (parseFloat(currentOee) > 85 && parseFloat(currentWaste) < 1.5) {
      heroSysStatus.innerText = 'SISTEMA OPTIMIZADO'
      heroSysStatus.style.color = 'var(--accent-green)'
    } else {
      heroSysStatus.innerText = 'ESTABILIZANDO FLUJO'
      heroSysStatus.style.color = 'var(--accent-yellow)'
    }
  }
}, 2000)

// --- PROCESS SIMULATOR MATH & INTERACTIVE ISOMETRIC 3D BACKGROUND CANVAS ---
const slideLlegada = document.getElementById('slide-llegada')
const slideCuello = document.getElementById('slide-cuello')
const slideDefectos = document.getElementById('slide-defectos')

const valLlegada = document.getElementById('val-llegada')
const valCuello = document.getElementById('val-cuello')
const valDefectos = document.getElementById('val-defectos')

const valThroughput = document.getElementById('val-throughput')
const valEfficiency = document.getElementById('val-efficiency')
const valSavings = document.getElementById('val-savings')
const bottleneckStatus = document.getElementById('bottleneck-status')
const bottleneckText = document.getElementById('bottleneck-text')

const barBefore = document.getElementById('bar-before')
const barAfter = document.getElementById('bar-after')
const barBeforePercent = document.getElementById('bar-before-percent')
const barAfterPercent = document.getElementById('bar-after-percent')
const btnOptimize = document.getElementById('btn-optimize')

let isOptimizedMode = false

// Canvas Animation setup
const canvas = document.getElementById('process-canvas')
const ctx = canvas.getContext('2d')

let canvasWidth = 0
let canvasHeight = 0

function resizeCanvas() {
  canvasWidth = window.innerWidth
  canvasHeight = window.innerHeight
  canvas.width = canvasWidth
  canvas.height = canvasHeight
}
window.addEventListener('resize', resizeCanvas)
resizeCanvas()

// Interactive Mouse tracking
let mouseX = null
let mouseY = null
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})
window.addEventListener('mouseleave', () => {
  mouseX = null
  mouseY = null
})

// 3D Spark Particle Engine
class SparkParticle {
  constructor(x, y, z, rgbColor) {
    this.x = x
    this.y = y
    this.z = z
    this.vx = (Math.random() - 0.5) * 2.5
    this.vy = (Math.random() - 0.5) * 2.5
    this.vz = Math.random() * 2 + 1.5
    this.alpha = 1.0
    this.color = rgbColor
    this.size = Math.random() * 2 + 1
  }
  update() {
    this.x += this.vx
    this.y += this.vy
    this.z += this.vz
    this.vz -= 0.08 // Gravity
    this.alpha -= 0.025
    return this.alpha > 0
  }
  draw(g) {
    const pos = isoProject(this.x, this.y, this.z)
    g.fillStyle = `rgba(${this.color}, ${this.alpha})`
    g.beginPath()
    g.arc(pos.x, pos.y, this.size, 0, Math.PI * 2)
    g.fill()
  }
}

const sparksArray = []
function spawnSparks(x, y, z, rgbColor, count = 8) {
  for (let i = 0; i < count; i++) {
    sparksArray.push(new SparkParticle(x, y, z, rgbColor))
  }
}

// Floating Telemetry Text for Canvas
class CanvasFloatingText {
  constructor(x, y, z, text, colorRgb) {
    this.x = x
    this.y = y
    this.z = z
    this.text = text
    this.color = colorRgb
    this.alpha = 1.0
    this.vy = 0.8 // rise speed in z
  }
  update() {
    this.z += this.vy
    this.alpha -= 0.018 // fade out speed
    return this.alpha > 0
  }
  draw(g) {
    const pos = isoProject(this.x, this.y, this.z)
    g.save()
    g.fillStyle = `rgba(${this.color}, ${this.alpha})`
    g.font = 'bold 10px Outfit, sans-serif'
    g.textAlign = 'center'
    g.shadowColor = 'rgba(15, 23, 42, 0.2)'
    g.shadowBlur = 3
    g.fillText(this.text, pos.x, pos.y)
    g.restore()
  }
}

const canvasFloatingTexts = []
function spawnFloatingText(x, y, z, text, colorRgb) {
  canvasFloatingTexts.push(new CanvasFloatingText(x, y, z, text, colorRgb))
}

// Live parameters
let simLlegada = 25
let simCuello = 20
let simDefectos = 8

// 3D Isometric Projection Helper
function isoProject(x, y, z) {
  const isMobile = window.innerWidth <= 768
  const cx = canvasWidth * (isMobile ? 0.5 : 0.45)
  const cy = canvasHeight * (isMobile ? 0.58 : 0.45)
  // Dynamic scaling based on screen size to keep simulation centered and visible
  const scale = Math.min(1.2, Math.max(0.35, canvasWidth / (isMobile ? 850 : 1000)))
  
  const screenX = cx + (x - y) * 0.866 * scale
  const screenY = cy + (x + y) * 0.5 * scale - z * scale
  return { x: screenX, y: screenY }
}

// 3D Isometric Shadow Helper
function drawIsoShadow(g, x, y, w, d) {
  const p1 = isoProject(x - w/2, y - d/2, 0)
  const p2 = isoProject(x + w/2, y - d/2, 0)
  const p3 = isoProject(x + w/2, y + d/2, 0)
  const p4 = isoProject(x - w/2, y + d/2, 0)
  
  g.beginPath()
  g.moveTo(p1.x, p1.y)
  g.lineTo(p2.x, p2.y)
  g.lineTo(p3.x, p3.y)
  g.lineTo(p4.x, p4.y)
  g.closePath()
  g.fillStyle = 'rgba(15, 23, 42, 0.05)' // Subtle shadow on floor grid
  g.fill()
}

// Helper to shade colors for realistic 3D appearance
function get3DShade(colorHex, percent) {
  if (!colorHex || colorHex[0] !== '#') return colorHex;
  const f = parseInt(colorHex.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = (f >> 8) & 0x00FF,
        B = f & 0x0000FF;
  return `rgb(${Math.round((t - R) * p + R)}, ${Math.round((t - G) * p + G)}, ${Math.round((t - B) * p + B)})`;
}

// 3D Isometric Cube Drawing Helper with dynamic shading and gradients
function drawIsoCube(g, x, y, z, w, d, h, colorsInput) {
  let colors = colorsInput;
  if (typeof colorsInput === 'string') {
    colors = {
      top: get3DShade(colorsInput, 0.18),
      left: get3DShade(colorsInput, -0.10),
      right: get3DShade(colorsInput, -0.28)
    };
  }

  // Vertices projected to screen coords
  const pTop1 = isoProject(x - w/2, y - d/2, z + h)
  const pTop2 = isoProject(x + w/2, y - d/2, z + h)
  const pTop3 = isoProject(x + w/2, y + d/2, z + h)
  const pTop4 = isoProject(x - w/2, y + d/2, z + h)

  const pBot1 = isoProject(x - w/2, y - d/2, z)
  const pBot2 = isoProject(x + w/2, y - d/2, z)
  const pBot3 = isoProject(x + w/2, y + d/2, z)
  const pBot4 = isoProject(x - w/2, y + d/2, z)

  // 1. Draw Top Face (with linear gradient for reflection)
  g.beginPath()
  g.moveTo(pTop1.x, pTop1.y)
  g.lineTo(pTop2.x, pTop2.y)
  g.lineTo(pTop3.x, pTop3.y)
  g.lineTo(pTop4.x, pTop4.y)
  g.closePath()
  const gradTop = g.createLinearGradient(pTop1.x, pTop1.y, pTop3.x, pTop3.y);
  gradTop.addColorStop(0, colors.top);
  gradTop.addColorStop(1, get3DShade(colors.top, -0.12));
  g.fillStyle = gradTop;
  g.fill()

  // 2. Draw Left Face
  g.beginPath()
  g.moveTo(pBot1.x, pBot1.y)
  g.lineTo(pTop1.x, pTop1.y)
  g.lineTo(pTop4.x, pTop4.y)
  g.lineTo(pBot4.x, pBot4.y)
  g.closePath()
  const gradLeft = g.createLinearGradient(pBot1.x, pBot1.y, pTop4.x, pTop4.y);
  gradLeft.addColorStop(0, colors.left);
  gradLeft.addColorStop(1, get3DShade(colors.left, -0.12));
  g.fillStyle = gradLeft;
  g.fill()

  // 3. Draw Right Face
  g.beginPath()
  g.moveTo(pBot4.x, pBot4.y)
  g.lineTo(pTop4.x, pTop4.y)
  g.lineTo(pTop3.x, pTop3.y)
  g.lineTo(pBot3.x, pBot3.y)
  g.closePath()
  const gradRight = g.createLinearGradient(pBot4.x, pBot4.y, pTop3.x, pTop3.y);
  gradRight.addColorStop(0, colors.right);
  gradRight.addColorStop(1, get3DShade(colors.right, -0.12));
  g.fillStyle = gradRight;
  g.fill()
}

// 3D Product Package Class
class Product3D {
  constructor() {
    this.x = -300
    this.y = -100
    this.z = 6 // Slightly raised above conveyor
    this.size = 12
    this.speed = 2
    this.segment = 1 // 1: Conveyor 1, 2: Bottleneck queue, 3: Machine 3 processing, 4: Conveyor 2, 5: Routing
    this.status = 'unchecked' // 'unchecked', 'good', 'defect'
    this.colors = {
      top: '#d97706',   // Cardboard color
      left: '#b45309',
      right: '#78350f'
    }
  }

  update(queueIndex) {
    if (this.segment === 1) {
      // S1 to S2
      this.x += this.speed
      if (this.x >= -100) {
        this.x = -100
        this.segment = 2
        spawnFloatingText(-100, -100, 32, "ENSAMBLADO", "37, 99, 235")
      }
    } else if (this.segment === 2) {
      // Stack in queue before Station 3 (located at x = 100)
      const targetX = 100 - 24 - queueIndex * 15
      if (this.x < targetX) {
        this.x += this.speed
        if (this.x > targetX) this.x = targetX
      } else {
        this.x = targetX // Locked in queue
      }
    } else if (this.segment === 3) {
      // Inside Bottleneck machine
      this.x = 100
    } else if (this.segment === 4) {
      // S3 to S4 (Quality Inspection)
      this.x += this.speed
      if (this.x >= 280) {
        this.x = 280
        // Inspect item
        if (Math.random() * 100 < simDefectos) {
          this.status = 'defect'
          this.colors = { top: '#f43f5e', left: '#e11d48', right: '#9f1239' } // Red package
          spawnSparks(280, -100, 10, '244, 63, 94', 6)
          spawnFloatingText(280, -100, 22, "RECHAZADO", "220, 38, 38")
        } else {
          this.status = 'good'
          this.colors = { top: '#10b981', left: '#059669', right: '#064e3b' } // Green package
          spawnSparks(280, -100, 10, '0, 242, 254', 6)
          spawnFloatingText(280, -100, 22, "+$45 USD", "16, 185, 129")
        }
        this.segment = 5
      }
    } else if (this.segment === 5) {
      if (this.status === 'defect') {
        // Move forward along Y axis to scrap bin (280, 100)
        this.y += this.speed
        if (this.y >= 100) {
          return false // Disposed in scrap bin, remove from array
        }
      } else {
        // Move towards success pallet/warehouse (380, -200)
        const dx = 380 - this.x
        const dy = -200 - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 4) {
          return false // Stored, remove
        } else {
          this.x += (dx / dist) * this.speed
          this.y += (dy / dist) * this.speed
        }
      }
    }
    return true
  }

  draw(g) {
    // 1. Draw box shadow on the conveyor belt (at z = 1)
    const p1 = isoProject(this.x - this.size/2, this.y - this.size/2, 1)
    const p2 = isoProject(this.x + this.size/2, this.y - this.size/2, 1)
    const p3 = isoProject(this.x + this.size/2, this.y + this.size/2, 1)
    const p4 = isoProject(this.x - this.size/2, this.y + this.size/2, 1)
    g.fillStyle = 'rgba(15, 23, 42, 0.12)'
    g.beginPath()
    g.moveTo(p1.x, p1.y)
    g.lineTo(p2.x, p2.y)
    g.lineTo(p3.x, p3.y)
    g.lineTo(p4.x, p4.y)
    g.closePath()
    g.fill()

    // 2. Draw standard 3D Box
    drawIsoCube(g, this.x, this.y, this.z, this.size, this.size, this.size, this.colors)

    // 3. Draw cardboard packing tape if it's raw material
    if (this.status === 'unchecked') {
      const t1 = isoProject(this.x - this.size/2, this.y - this.size * 0.15, this.z + this.size)
      const t2 = isoProject(this.x + this.size/2, this.y - this.size * 0.15, this.z + this.size)
      const t3 = isoProject(this.x + this.size/2, this.y + this.size * 0.15, this.z + this.size)
      const t4 = isoProject(this.x - this.size/2, this.y + this.size * 0.15, this.z + this.size)
      g.fillStyle = 'rgba(146, 64, 14, 0.75)' // Dark brown tape
      g.beginPath()
      g.moveTo(t1.x, t1.y)
      g.lineTo(t2.x, t2.y)
      g.lineTo(t3.x, t3.y)
      g.lineTo(t4.x, t4.y)
      g.closePath()
      g.fill()
    }
  }
}

// Simulation lists
const productArray = []
const bottleneckQueue = []
let processingInMachine3 = null
let spawnTick = 0
let processTick = 0

// Main 3D isometric simulation rendering loop
function run3DIsometricSimulation() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  // Interactive Mouse Glow (Spotlight effect on floor grid)
  if (mouseX !== null && mouseY !== null) {
    const radGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 180)
    radGrad.addColorStop(0, 'rgba(37, 99, 235, 0.07)')
    radGrad.addColorStop(1, 'rgba(37, 99, 235, 0)')
    ctx.fillStyle = radGrad
    ctx.beginPath()
    ctx.arc(mouseX, mouseY, 180, 0, Math.PI * 2)
    ctx.fill()
  }

  // 1. Draw Faint Isometric Floor Grid (blueprint style)
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.04)'
  ctx.lineWidth = 1
  const gridRange = 600
  for (let g = -gridRange; g <= gridRange; g += 50) {
    // Lines parallel to X axis
    let start = isoProject(-gridRange, g, 0)
    let end = isoProject(gridRange, g, 0)
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()

    // Lines parallel to Y axis
    start = isoProject(g, -gridRange, 0)
    end = isoProject(g, gridRange, 0)
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
  }

  // 2. Draw 3D Isometric Conveyor Belt Tracks
  // S1 (-300, -100) -> S2 (-100, -100) -> S3 (100, -100) -> S4 (280, -100)
  // Scrap Bin at (280, 100)
  // Success Warehouse at (380, -200)
  
  // Helper to draw isometric belt channel
  function drawIsoBelt(g, x1, y1, x2, y2, width) {
    const p1L = isoProject(x1, y1 - width/2, 1)
    const p1R = isoProject(x1, y1 + width/2, 1)
    const p2L = isoProject(x2, y2 - width/2, 1)
    const p2R = isoProject(x2, y2 + width/2, 1)

    g.beginPath()
    g.moveTo(p1L.x, p1L.y)
    g.lineTo(p1R.x, p1R.y)
    g.lineTo(p2R.x, p2R.y)
    g.lineTo(p2L.x, p2L.y)
    g.closePath()
    g.fillStyle = 'rgba(30, 41, 59, 0.08)' // Clean light grey-blue belt track
    g.strokeStyle = 'rgba(15, 23, 42, 0.06)'
    g.lineWidth = 1
    g.fill()
    g.stroke()

    // Moving rollers/belt tick lines
    g.strokeStyle = 'rgba(15, 23, 42, 0.04)'
    g.lineWidth = 1
    const spacing = 30
    const offset = (Date.now() * 0.02) % spacing

    if (y1 === y2) {
      // Belt parallel to X-axis
      for (let x = x1 + offset; x < x2; x += spacing) {
        const pL = isoProject(x, y1 - width/2, 1)
        const pR = isoProject(x, y1 + width/2, 1)
        g.beginPath()
        g.moveTo(pL.x, pL.y)
        g.lineTo(pR.x, pR.y)
        g.stroke()
      }
    } else if (x1 === x2) {
      // Belt parallel to Y-axis
      for (let y = y1 + offset; y < y2; y += spacing) {
        const pL = isoProject(x1 - width/2, y, 1)
        const pR = isoProject(x1 + width/2, y, 1)
        g.beginPath()
        g.moveTo(pL.x, pL.y)
        g.lineTo(pR.x, pR.y)
        g.stroke()
      }
    } else {
      // Diagonal belt
      const dist = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
      const steps = Math.floor(dist / spacing)
      const offsetPct = offset / spacing
      for (let s = 0; s <= steps; s++) {
        const t = (s + offsetPct) / steps
        if (t > 1) continue
        const x = x1 + (x2 - x1) * t
        const y = y1 + (y2 - y1) * t
        const pL = isoProject(x, y - width/2, 1)
        const pR = isoProject(x, y + width/2, 1)
        g.beginPath()
        g.moveTo(pL.x, pL.y)
        g.lineTo(pR.x, pR.y)
        g.stroke()
      }
    }

    // Draw guard rails on the sides of the belt (steel borders at height z = 4)
    g.lineWidth = 1.5
    
    // Left/Upper rail
    const r1L = isoProject(x1, y1 - width/2, 4)
    const r2L = isoProject(x2, y2 - width/2, 4)
    g.strokeStyle = '#94a3b8' // Steel grey
    g.beginPath()
    g.moveTo(r1L.x, r1L.y)
    g.lineTo(r2L.x, r2L.y)
    g.stroke()

    // Right/Lower rail
    const r1R = isoProject(x1, y1 + width/2, 4)
    const r2R = isoProject(x2, y2 + width/2, 4)
    g.strokeStyle = '#64748b' // Darker steel grey (shadowed side)
    g.beginPath()
    g.moveTo(r1R.x, r1R.y)
    g.lineTo(r2R.x, r2R.y)
    g.stroke()
  }

  // Draw belt tracks
  drawIsoBelt(ctx, -320, -100, 280, -100, 18)
  drawIsoBelt(ctx, 280, -100, 280, 100, 18)    // Scrap route
  drawIsoBelt(ctx, 280, -100, 380, -200, 18)   // Good goods route

  // 3. Product Spawning logic based on 'simLlegada'
  spawnTick += 1
  const spawnLimit = Math.max(15, 110 - simLlegada * 1.6)
  if (spawnTick >= spawnLimit) {
    productArray.push(new Product3D())
    spawnTick = 0
  }

  // 4. Bottleneck processing logic based on 'simCuello'
  processTick += 1
  const processLimit = Math.max(18, 130 - simCuello * 1.9)
  
  if (!processingInMachine3 && bottleneckQueue.length > 0) {
    processingInMachine3 = bottleneckQueue.shift()
    processingInMachine3.segment = 3
    processTick = 0
  }
  
  if (processingInMachine3 && processTick >= processLimit) {
    processingInMachine3.segment = 4
    processingInMachine3 = null
  }

  // Update products positions
  for (let i = productArray.length - 1; i >= 0; i--) {
    const p = productArray[i]
    
    // Manage queuing in segment 2
    let qIndex = 0
    if (p.segment === 2) {
      if (!bottleneckQueue.includes(p)) {
        bottleneckQueue.push(p)
      }
      qIndex = bottleneckQueue.indexOf(p)
    }

    const keep = p.update(qIndex)
    if (!keep) {
      if (p.status === 'defect') {
        spawnSparks(280, 100, 12, '239, 68, 68', 8)
      } else if (p.status === 'good') {
        spawnSparks(380, -200, 18, '16, 185, 129', 8)
      }
      productArray.splice(i, 1)
      const qIdx = bottleneckQueue.indexOf(p)
      if (qIdx > -1) bottleneckQueue.splice(qIdx, 1)
      if (processingInMachine3 === p) processingInMachine3 = null
    }
  }

  // 5. Draw 3D Isometric Components Sorted by depth (x + y) to prevent overlap anomalies
  // Prepare draw calls list
  const drawList = []

  // Define Machine Colors
  const colors = {
    input: { top: '#1e3a8a', left: '#172554', right: '#1e1b4b' },      // Dark blue
    assembly: { top: '#475569', left: '#334155', right: '#1e293b' },   // Industrial grey
    inspección: { top: '#0f766e', left: '#115e59', right: '#134e4a' }, // Teal
    scrapBin: { top: '#881337', left: '#4c0519', right: '#31000e' },   // Crimson open bin
    finishedPallet: { top: '#78350f', left: '#451a03', right: '#270e00' } // Wooden pallet
  }

  // Add fixed nodes/workstations to draw list
  // Node 1 (Receiving)
  drawList.push({
    depth: -300 - 100, // x+y
    draw: () => {
      // Ground Shadow
      drawIsoShadow(ctx, -300, -100, 36, 36)
      
      drawIsoCube(ctx, -300, -100, 0, 36, 36, 25, colors.input)
      // Floating label
      const sPos = isoProject(-300, -100, 32)
      ctx.font = '600 10px Outfit'
      ctx.fillStyle = '#475569'
      ctx.fillText('MATERIA PRIMA', sPos.x, sPos.y)

      // Floating digital telemetry
      ctx.font = '500 8px monospace'
      ctx.fillStyle = 'rgba(71, 85, 105, 0.5)'
      ctx.fillText(`SYS_OK | IN: ${simLlegada}/h`, sPos.x, sPos.y + 10)
    }
  })

  // Node 2 (Assembly Station)
  drawList.push({
    depth: -100 - 100,
    draw: () => {
      // Ground shadow
      drawIsoShadow(ctx, -100, -100, 32, 32)
      
      drawIsoCube(ctx, -100, -100, 0, 32, 32, 28, colors.assembly)
      const sPos = isoProject(-100, -100, 35)
      ctx.font = '600 10px Outfit'
      ctx.fillStyle = '#475569'
      ctx.fillText('ESTACIÓN A', sPos.x, sPos.y)

      // Floating digital telemetry
      ctx.font = '500 8px monospace'
      ctx.fillStyle = 'rgba(71, 85, 105, 0.5)'
      ctx.fillText('ACTIVE | 100%', sPos.x, sPos.y + 10)

      // ROBOTIC ARM ANIMATION
      // Draw static robotic base next to machine
      drawIsoCube(ctx, -100, -125, 0, 10, 10, 8, { top: '#1e293b', left: '#0f172a', right: '#0f172a' })
      
      // Calculate dynamic joints based on time
      const angle = Math.sin(Date.now() * 0.002) * 0.4 - 0.2 // rotate back and forth
      const shoulderX = -100
      const shoulderY = -125
      const shoulderZ = 8

      const armLength1 = 15
      const armLength2 = 12

      // Elbow joint
      const elbowX = shoulderX + Math.cos(angle) * armLength1
      const elbowY = shoulderY + Math.sin(angle) * armLength1
      const elbowZ = shoulderZ + 12

      // Gripper wrist
      const wristX = elbowX + Math.cos(angle - 0.5) * armLength2
      const wristY = elbowY + Math.sin(angle - 0.5) * armLength2
      const wristZ = elbowZ - 8

      // Draw Arm Segment 1
      const pS = isoProject(shoulderX, shoulderY, shoulderZ)
      const pE = isoProject(elbowX, elbowY, elbowZ)
      ctx.strokeStyle = '#64748b'
      ctx.lineWidth = 4
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(pS.x, pS.y)
      ctx.lineTo(pE.x, pE.y)
      ctx.stroke()

      // Draw Arm Segment 2
      const pW = isoProject(wristX, wristY, wristZ)
      ctx.strokeStyle = '#475569'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(pE.x, pE.y)
      ctx.lineTo(pW.x, pW.y)
      ctx.stroke()

      // Joint caps (small dots)
      ctx.fillStyle = '#0284c7'
      ctx.beginPath()
      ctx.arc(pE.x, pE.y, 3, 0, Math.PI*2)
      ctx.arc(pW.x, pW.y, 2, 0, Math.PI*2)
      ctx.fill()
    }
  })

  // Node 3 (Bottleneck Station B)
  // Color pulses/changes depending on capacity overload status
  drawList.push({
    depth: 100 - 100,
    draw: () => {
      const isOverloaded = simLlegada > simCuello
      const pulseColor = isOverloaded
        ? { top: '#dc2626', left: '#b91c1c', right: '#7f1d1d' } // Pulsing warning Red
        : { top: '#10b981', left: '#059669', right: '#064e3b' } // Safe Green
      
      const heightOffset = isOverloaded ? Math.sin(Date.now() * 0.007) * 2 : 0
      
      // Ground shadow
      drawIsoShadow(ctx, 100, -100, 34, 34)
      
      drawIsoCube(ctx, 100, -100, 0, 34, 34, 30 + heightOffset, pulseColor)
      
      const sPos = isoProject(100, -100, 38)
      ctx.font = '600 10px Outfit'
      ctx.fillStyle = isOverloaded ? '#dc2626' : '#475569'
      ctx.fillText('MAQUINA B (CUELLO)', sPos.x, sPos.y)
      
      // Floating digital telemetry
      ctx.font = '500 8px monospace'
      ctx.fillStyle = isOverloaded ? 'rgba(220, 38, 38, 0.6)' : 'rgba(71, 85, 105, 0.5)'
      ctx.fillText(`CAP: ${simCuello}/h | LOAD: ${Math.round((simLlegada/simCuello)*100)}%`, sPos.x, sPos.y + 10)

      // Draw warning indicator if overloaded
      if (isOverloaded) {
        ctx.fillStyle = '#dc2626'
        ctx.beginPath()
        ctx.arc(sPos.x, sPos.y - 12, 4 + Math.sin(Date.now() * 0.01) * 1.5, 0, Math.PI*2)
        ctx.fill()
      }

      // DIGITAL CONTROL SCREEN (Oscilloscope sine wave on right face)
      // Screen background (very dark green) on Y plane
      const screenX1 = 100 + 8
      const screenX2 = 100 - 8
      const screenY = -100 + 17 // offset slightly in Y to sit on right face
      const screenZ1 = 6 + heightOffset
      const screenZ2 = 18 + heightOffset

      const s1 = isoProject(screenX1, screenY, screenZ1)
      const s2 = isoProject(screenX1, screenY, screenZ2)
      const s3 = isoProject(screenX2, screenY, screenZ2)
      const s4 = isoProject(screenX2, screenY, screenZ1)

      ctx.fillStyle = '#022c22'
      ctx.beginPath()
      ctx.moveTo(s1.x, s1.y)
      ctx.lineTo(s2.x, s2.y)
      ctx.lineTo(s3.x, s3.y)
      ctx.lineTo(s4.x, s4.y)
      ctx.closePath()
      ctx.fill()

      ctx.strokeStyle = '#10b981' // Neon border
      ctx.lineWidth = 1
      ctx.stroke()

      // Drawing active green wave
      ctx.strokeStyle = '#34d399'
      ctx.lineWidth = 1
      ctx.beginPath()
      const screenSteps = 6
      for (let s = 0; s <= screenSteps; s++) {
        const t = s / screenSteps
        const wx = screenX1 - 16 * t
        const waveOffset = Math.sin(Date.now() * 0.01 + s * 1.5) * 3
        const wz = (screenZ1 + screenZ2) / 2 + waveOffset
        const wPos = isoProject(wx, screenY, wz)
        if (s === 0) ctx.moveTo(wPos.x, wPos.y)
        else ctx.lineTo(wPos.x, wPos.y)
      }
      ctx.stroke()

      // PISTON ANIMATION ON TOP OF MACHINE B
      const pistonSpeed = isOverloaded ? 0.015 : 0.006
      const pistonOffset = Math.sin(Date.now() * pistonSpeed) * 8 + 8 // moves up and down
      
      // Piston rod (grey line)
      const pRodStart = isoProject(100, -100, 30 + heightOffset)
      const pRodEnd = isoProject(100, -100, 30 + heightOffset + pistonOffset + 8)
      ctx.strokeStyle = '#cbd5e1'
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(pRodStart.x, pRodStart.y)
      ctx.lineTo(pRodEnd.x, pRodEnd.y)
      ctx.stroke()

      // Piston head (small cap cube)
      drawIsoCube(ctx, 100, -100, 30 + heightOffset + pistonOffset + 8, 14, 14, 6, { top: '#475569', left: '#334155', right: '#1e293b' })
    }
  })

  // Node 4 (Quality Control)
  drawList.push({
    depth: 280 - 100,
    draw: () => {
      // Ground shadow under QC tower and belt
      drawIsoShadow(ctx, 280, -100, 32, 32)
      drawIsoShadow(ctx, 280, -125, 10, 10)
      
      drawIsoCube(ctx, 280, -100, 0, 32, 32, 26, colors.inspección)
      const sPos = isoProject(280, -100, 34)
      ctx.font = '600 10px Outfit'
      ctx.fillStyle = '#475569'
      ctx.fillText('CONTROL CALIDAD', sPos.x, sPos.y)

      // Floating digital telemetry
      ctx.font = '500 8px monospace'
      ctx.fillStyle = 'rgba(71, 85, 105, 0.5)'
      ctx.fillText(`MERMA: ${simDefectos}%`, sPos.x, sPos.y + 10)

      // LASER SCANNING LIGHT CURTAIN
      // Static scanner tower on the side
      drawIsoCube(ctx, 280, -125, 0, 10, 10, 35, { top: '#0f766e', left: '#115e59', right: '#115e59' })
      
      // Scanning laser beam spanning across the conveyor belt at X=280
      const laserOpacity = 0.08 + Math.sin(Date.now() * 0.007) * 0.04
      ctx.fillStyle = `rgba(2, 132, 199, ${laserOpacity})` // Blue-cyan glow
      
      const pTowerTop = isoProject(280, -125, 30)
      const pBeltFar = isoProject(280, -100 - 12, 1)
      const pBeltNear = isoProject(280, -100 + 12, 1)
      
      ctx.beginPath()
      ctx.moveTo(pTowerTop.x, pTowerTop.y)
      ctx.lineTo(pBeltFar.x, pBeltFar.y)
      ctx.lineTo(pBeltNear.x, pBeltNear.y)
      ctx.closePath()
      ctx.fill()
      
      // Laser core beam line
      ctx.strokeStyle = `rgba(0, 242, 254, ${laserOpacity * 4})`
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(pTowerTop.x, pTowerTop.y)
      ctx.lineTo(pBeltFar.x, pBeltFar.y)
      ctx.moveTo(pTowerTop.x, pTowerTop.y)
      ctx.lineTo(pBeltNear.x, pBeltNear.y)
      ctx.stroke()
    }
  })

  // Scrap Container Node (280, 100) - Hollow Container Rendering
  drawList.push({
    depth: 280 + 100,
    draw: () => {
      // Ground Shadow
      drawIsoShadow(ctx, 280, 100, 30, 30)
      
      // Outer vertices
      const pTop4 = isoProject(280 - 15, 100 + 15, 12)
      const pTop3 = isoProject(280 + 15, 100 + 15, 12)
      const pTop2 = isoProject(280 + 15, 100 - 15, 12)
      const pTop1 = isoProject(280 - 15, 100 - 15, 12)

      const pBot4 = isoProject(280 - 15, 100 + 15, 0)
      const pBot3 = isoProject(280 + 15, 100 + 15, 0)
      const pBot2 = isoProject(280 + 15, 100 - 15, 0)
      const pBot1 = isoProject(280 - 15, 100 - 15, 0)

      // Outer Left Face (shaded crimson-brown)
      ctx.fillStyle = '#4c0519'
      ctx.beginPath()
      ctx.moveTo(pBot1.x, pBot1.y)
      ctx.lineTo(pTop1.x, pTop1.y)
      ctx.lineTo(pTop4.x, pTop4.y)
      ctx.lineTo(pBot4.x, pBot4.y)
      ctx.closePath()
      ctx.fill()

      // Outer Right Face (dark crimson)
      ctx.fillStyle = '#31000e'
      ctx.beginPath()
      ctx.moveTo(pBot4.x, pBot4.y)
      ctx.lineTo(pTop4.x, pTop4.y)
      ctx.lineTo(pTop3.x, pTop3.y)
      ctx.lineTo(pBot3.x, pBot3.y)
      ctx.closePath()
      ctx.fill()

      // Inner base void (pitch black inside container) at z = 2
      const pInBot1 = isoProject(280 - 13, 100 - 13, 2)
      const pInBot2 = isoProject(280 + 13, 100 - 13, 2)
      const pInBot3 = isoProject(280 + 13, 100 + 13, 2)
      const pInBot4 = isoProject(280 - 13, 100 + 13, 2)

      ctx.fillStyle = '#110003'
      ctx.beginPath()
      ctx.moveTo(pInBot1.x, pInBot1.y)
      ctx.lineTo(pInBot2.x, pInBot2.y)
      ctx.lineTo(pInBot3.x, pInBot3.y)
      ctx.lineTo(pInBot4.x, pInBot4.y)
      ctx.closePath()
      ctx.fill()

      // Inner back-left wall
      ctx.fillStyle = '#1c0005'
      ctx.beginPath()
      ctx.moveTo(pTop1.x, pTop1.y)
      ctx.lineTo(pTop2.x, pTop2.y)
      ctx.lineTo(pInBot2.x, pInBot2.y)
      ctx.lineTo(pInBot1.x, pInBot1.y)
      ctx.closePath()
      ctx.fill()

      // Inner back-right wall
      ctx.fillStyle = '#230007'
      ctx.beginPath()
      ctx.moveTo(pTop2.x, pTop2.y)
      ctx.lineTo(pTop3.x, pTop3.y)
      ctx.lineTo(pInBot3.x, pInBot3.y)
      ctx.lineTo(pInBot2.x, pInBot2.y)
      ctx.closePath()
      ctx.fill()

      // Top rim highlight line (glowing scrap red)
      ctx.strokeStyle = '#ef4444'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(pTop1.x, pTop1.y)
      ctx.lineTo(pTop2.x, pTop2.y)
      ctx.lineTo(pTop3.x, pTop3.y)
      ctx.lineTo(pTop4.x, pTop4.y)
      ctx.closePath()
      ctx.stroke()

      const sPos = isoProject(280, 100, 18)
      ctx.font = '600 9px Outfit'
      ctx.fillStyle = '#ef4444'
      ctx.fillText('DESCARTE', sPos.x, sPos.y)
    }
  })

  // Finished Goods warehouse pallet (380, -200)
  drawList.push({
    depth: 380 - 200,
    draw: () => {
      // Ground shadow
      drawIsoShadow(ctx, 380, -200, 40, 40)
      
      drawIsoCube(ctx, 380, -200, 0, 40, 40, 6, colors.finishedPallet)
      // Draw a stack of finished green boxes on top of pallet
      drawIsoCube(ctx, 370, -210, 6, 12, 12, 12, { top: '#10b981', left: '#059669', right: '#064e3b' })
      drawIsoCube(ctx, 390, -210, 6, 12, 12, 12, { top: '#10b981', left: '#059669', right: '#064e3b' })
      drawIsoCube(ctx, 370, -190, 6, 12, 12, 12, { top: '#10b981', left: '#059669', right: '#064e3b' })
      drawIsoCube(ctx, 390, -190, 6, 12, 12, 12, { top: '#10b981', left: '#059669', right: '#064e3b' })
      // Tier 2
      drawIsoCube(ctx, 380, -200, 18, 14, 14, 12, { top: '#059669', left: '#047857', right: '#064e3b' })
      
      const sPos = isoProject(380, -200, 35)
      ctx.font = '600 9px Outfit'
      ctx.fillStyle = '#16a34a'
      ctx.fillText('PRODUCTO OK', sPos.x, sPos.y)
    }
  })

  // Add all active products to draw list
  productArray.forEach(p => {
    drawList.push({
      depth: p.x + p.y,
      draw: () => p.draw(ctx)
    })
  })

  // Sort draw list back-to-front (depth: lower x+y drawn first)
  drawList.sort((a, b) => a.depth - b.depth)

  // Execute all draw calls in order
  drawList.forEach(item => item.draw())

  // Draw live queue statistics overhead
  if (bottleneckQueue.length > 0) {
    const qPos = isoProject(100 - 30, -100, 15)
    ctx.font = '600 10px Outfit'
    ctx.fillStyle = simLlegada > simCuello ? '#dc2626' : '#475569'
    ctx.fillText(`Cola: ${bottleneckQueue.length} pzas`, qPos.x - 20, qPos.y)
  }

  // 6. Particle system update and draw
  for (let i = sparksArray.length - 1; i >= 0; i--) {
    const p = sparksArray[i]
    const keep = p.update()
    if (keep) {
      p.draw(ctx)
    } else {
      sparksArray.splice(i, 1)
    }
  }

  // 7. Floating telemetry texts update and draw
  for (let i = canvasFloatingTexts.length - 1; i >= 0; i--) {
    const t = canvasFloatingTexts[i]
    const keep = t.update()
    if (keep) {
      t.draw(ctx)
    } else {
      canvasFloatingTexts.splice(i, 1)
    }
  }

  requestAnimationFrame(run3DIsometricSimulation)
}

// Start 3D Loop
run3DIsometricSimulation()


// Simulator Calculator function
function calculateSimulator() {
  const llegada = parseFloat(slideLlegada.value)
  const cuello = parseFloat(slideCuello.value)
  const defectos = parseFloat(slideDefectos.value)

  // Sync simulator state with 3D background simulation
  simLlegada = llegada
  simCuello = cuello
  simDefectos = defectos

  // Update slider label texts
  valLlegada.innerText = `${llegada} pza/h`
  valCuello.innerText = `${cuello} pza/h`
  valDefectos.innerText = `${defectos.toFixed(1)}%`

  // Process math
  const limitedInput = Math.min(llegada, cuello)
  const outputNeto = limitedInput * (1 - defectos / 100)
  
  const idealOutput = llegada
  const efficiency = (outputNeto / idealOutput) * 100
  
  valThroughput.innerText = `${outputNeto.toFixed(1)} pza/h`
  valEfficiency.innerText = `${efficiency.toFixed(1)}%`

  // Bottleneck analysis
  if (llegada > cuello) {
    bottleneckStatus.className = 'bottleneck-indicator danger'
    bottleneckText.innerText = 'CUELLO DE BOTELLA ACTIVO (EXCESO DE TRABAJO EN COLA)'
  } else {
    bottleneckStatus.className = 'bottleneck-indicator success'
    bottleneckText.innerText = 'FLUJO BALANCEADO (CAPACIDAD DISPONIBLE)'
  }

  // Calculate Monthly Financial Impact (Savings)
  const baseLlegada = 25
  const baseCuello = 20
  const baseDefectos = 8
  const baseThroughput = Math.min(baseLlegada, baseCuello) * (1 - baseDefectos / 100)
  const baseDefectsPerHour = Math.min(baseLlegada, baseCuello) * (baseDefectos / 100)

  const currentThroughput = outputNeto
  const currentDefectsPerHour = limitedInput * (defectos / 100)

  const monthlyHours = 160
  const valuePerGoodUnit = 45 // Value created per good unit in USD
  const costPerDefect = 25    // Scrap and waste cost per defect in USD

  const revenueGained = (currentThroughput - baseThroughput) * valuePerGoodUnit * monthlyHours
  const defectCostsSaved = (baseDefectsPerHour - currentDefectsPerHour) * costPerDefect * monthlyHours
  
  let totalMonthlySavings = revenueGained + defectCostsSaved
  
  if (totalMonthlySavings < 0) {
    totalMonthlySavings = 0
  }

  // Display cost savings
  valSavings.innerText = `$${Math.round(totalMonthlySavings).toLocaleString('en-US')} USD`

  // Update before bar
  const beforePercentage = Math.round(efficiency)
  barBefore.style.width = `${beforePercentage}%`
  barBeforePercent.innerText = `${beforePercentage}%`

  // Update after bar
  let optEfficiency = 95.8
  if (llegada > 35) {
    optEfficiency = 92.4
  }
  barAfter.style.width = `${optEfficiency.toFixed(0)}%`
  barAfterPercent.innerText = `${optEfficiency.toFixed(0)}%`
}

// Add event listeners to sliders
slideLlegada.addEventListener('input', () => {
  isOptimizedMode = false
  btnOptimize.innerText = '⚙️ Aplicar Optimización Lean'
  calculateSimulator()
})

slideCuello.addEventListener('input', () => {
  isOptimizedMode = false
  btnOptimize.innerText = '⚙️ Aplicar Optimización Lean'
  calculateSimulator()
})

slideDefectos.addEventListener('input', () => {
  isOptimizedMode = false
  btnOptimize.innerText = '⚙️ Aplicar Optimización Lean'
  calculateSimulator()
})

// Optimize Button logic
btnOptimize.addEventListener('click', () => {
  if (!isOptimizedMode) {
    slideLlegada.value = 35
    slideCuello.value = 40
    slideDefectos.value = 1.2
    
    isOptimizedMode = true
    btnOptimize.innerText = '✅ Proceso Optimizado'
  } else {
    slideLlegada.value = 25
    slideCuello.value = 20
    slideDefectos.value = 8
    
    isOptimizedMode = false
    btnOptimize.innerText = '⚙️ Aplicar Optimización Lean'
  }
  calculateSimulator()
})

// Initial calculations
calculateSimulator()

// --- SIMULATOR TABS NAVIGATION ---
const tabBtnCalculator = document.getElementById('tab-btn-calculator')
const tabBtnGame = document.getElementById('tab-btn-game')
const viewCalculator = document.getElementById('view-calculator')
const viewGame = document.getElementById('view-game')

if (tabBtnCalculator && tabBtnGame && viewCalculator && viewGame) {
  tabBtnCalculator.addEventListener('click', () => {
    tabBtnCalculator.classList.add('active')
    tabBtnGame.classList.remove('active')
    viewCalculator.style.display = 'grid'
    viewGame.style.display = 'none'
    if (gameActive) stopLeanGame() // Reset game if tab switches
  })

  tabBtnGame.addEventListener('click', () => {
    tabBtnGame.classList.add('active')
    tabBtnCalculator.classList.remove('active')
    viewGame.style.display = 'block'
    viewCalculator.style.display = 'none'
  })
}

// --- LEAN GAME PLAY CHALLENGE LOGIC ---
const btnGameStart = document.getElementById('btn-game-start')
const btnGameReplay = document.getElementById('btn-game-replay')
const btnActionQuality = document.getElementById('btn-action-quality')
const btnActionBottleneck = document.getElementById('btn-action-bottleneck')
const btnActionKanban = document.getElementById('btn-action-kanban')

const screenStart = document.getElementById('game-screen-start')
const screenPlay = document.getElementById('game-screen-play')
const screenOver = document.getElementById('game-screen-over')

const gameTimerEl = document.getElementById('game-timer')
const gameOeeEl = document.getElementById('game-oee')
const gameSavingsEl = document.getElementById('game-savings')
const gameDisruptionAlert = document.getElementById('game-disruption-alert')
const gameDisruptionText = document.getElementById('game-disruption-text')

const gameResultIntro = document.getElementById('game-result-intro')
const gameResultOee = document.getElementById('game-result-oee')
const gameResultSavings = document.getElementById('game-result-savings')
const gameResultRank = document.getElementById('game-result-rank')

let gameActive = false
let timeLeft = 30
let gameScore = 0 // accumulated savings
let gameOeeSum = 0
let gameTicks = 0
let gameTimerInterval = null
let gameLoopInterval = null
let currentDisruption = null // 'quality', 'bottleneck', 'demand', null

// Disruption types
const disruptionsList = [
  { id: 'quality', text: '🚨 ¡Falla en Calidad! Tasa de defectos subió al 20%', color: 'var(--accent-red)' },
  { id: 'bottleneck', text: '🚨 ¡Cuello de Botella Activo! Capacidad bajó a 10 pza/h', color: 'var(--accent-yellow)' },
  { id: 'demand', text: '🚨 ¡Sobrecarga de Pedidos! Tasa de llegada subió a 60 pza/h', color: 'var(--accent-cyan)' }
]

function startLeanGame() {
  gameActive = true
  timeLeft = 30
  gameScore = 0
  gameOeeSum = 0
  gameTicks = 0
  currentDisruption = null
  
  // Set default unbalanced parameters for start
  slideLlegada.value = 35
  slideCuello.value = 20
  slideDefectos.value = 12
  calculateSimulator()

  if (screenStart) screenStart.style.display = 'none'
  if (screenOver) screenOver.style.display = 'none'
  if (screenPlay) screenPlay.style.display = 'block'

  updateGameStats()

  // Game timer loop
  gameTimerInterval = setInterval(() => {
    timeLeft--
    if (timeLeft <= 0) {
      endLeanGame()
    } else {
      updateGameStats()
    }
  }, 1000)

  // Game action loop (disruption triggers every 5-6s)
  gameLoopInterval = setInterval(() => {
    gameTicks++
    
    // Accumulate OEE score and savings
    const currentOee = parseFloat(valEfficiency.innerText)
    gameOeeSum += currentOee
    
    // Add savings based on efficiency
    const savingsVal = parseFloat(valSavings.innerText.replace(/[^0-9.-]+/g, "")) || 0
    const increment = Math.round((savingsVal / 300) * (currentOee / 100))
    gameScore += Math.max(0, increment)
    
    // Trigger disruption at random intervals (e.g. every 5 seconds)
    if (gameTicks % 5 === 0 && !currentDisruption) {
      triggerRandomDisruption()
    }
    
    updateGameStats()
  }, 1000)
}

function updateGameStats() {
  if (gameTimerEl) gameTimerEl.innerText = `${timeLeft}s`
  const currentOee = parseFloat(valEfficiency.innerText).toFixed(1)
  if (gameOeeEl) gameOeeEl.innerText = `${currentOee}%`
  if (gameSavingsEl) gameSavingsEl.innerText = `$${gameScore.toLocaleString('en-US')} USD`

  // Highlight warnings or set alerts
  if (gameDisruptionAlert && gameDisruptionText) {
    if (currentDisruption) {
      gameDisruptionAlert.className = 'game-disruption-card danger'
      gameDisruptionText.innerText = currentDisruption.text
      gameDisruptionAlert.style.borderColor = currentDisruption.color
    } else {
      gameDisruptionAlert.className = 'game-disruption-card success'
      gameDisruptionText.innerText = 'Línea Operando Normal - Monitoreando...'
      gameDisruptionAlert.style.borderColor = 'rgba(16, 185, 129, 0.2)'
    }
  }

  // Toggle action buttons based on active disruptions
  if (btnActionQuality) {
    btnActionQuality.disabled = (currentDisruption?.id !== 'quality')
    if (currentDisruption?.id === 'quality') btnActionQuality.classList.add('pulse-action')
    else btnActionQuality.classList.remove('pulse-action')
  }

  if (btnActionBottleneck) {
    btnActionBottleneck.disabled = (currentDisruption?.id !== 'bottleneck')
    if (currentDisruption?.id === 'bottleneck') btnActionBottleneck.classList.add('pulse-action')
    else btnActionBottleneck.classList.remove('pulse-action')
  }

  if (btnActionKanban) {
    btnActionKanban.disabled = (currentDisruption?.id !== 'demand')
    if (currentDisruption?.id === 'demand') btnActionKanban.classList.add('pulse-action')
    else btnActionKanban.classList.remove('pulse-action')
  }
}

function triggerRandomDisruption() {
  const unusedDisruptions = disruptionsList.filter(d => !currentDisruption || d.id !== currentDisruption.id)
  const chosen = unusedDisruptions[Math.floor(Math.random() * unusedDisruptions.length)]
  currentDisruption = chosen

  if (chosen.id === 'quality') {
    slideDefectos.value = 20
    spawnFloatingText(280, -100, 30, "🚨 FALLA CALIDAD", "220, 38, 38")
  } else if (chosen.id === 'bottleneck') {
    slideCuello.value = 10
    spawnFloatingText(100, -100, 30, "🚨 MAQUINA BLOQUEADA", "217, 119, 6")
  } else if (chosen.id === 'demand') {
    slideLlegada.value = 60
    spawnFloatingText(-300, -100, 30, "🚨 SOBRECARGA PEDIDOS", "2, 132, 199")
  }
  calculateSimulator()
}

// Action button triggers
if (btnActionQuality) {
  btnActionQuality.addEventListener('click', () => {
    if (currentDisruption?.id === 'quality') {
      slideDefectos.value = 1.2
      spawnFloatingText(280, -100, 30, "🔧 CALIBRADO", "16, 185, 129")
      currentDisruption = null
      calculateSimulator()
      updateGameStats()
    }
  })
}

if (btnActionBottleneck) {
  btnActionBottleneck.addEventListener('click', () => {
    if (currentDisruption?.id === 'bottleneck') {
      slideCuello.value = 42
      spawnFloatingText(100, -100, 30, "⚡ CAPACIDAD EXTRA", "16, 185, 129")
      currentDisruption = null
      calculateSimulator()
      updateGameStats()
    }
  })
}

if (btnActionKanban) {
  btnActionKanban.addEventListener('click', () => {
    if (currentDisruption?.id === 'demand') {
      slideLlegada.value = 25
      spawnFloatingText(-300, -100, 30, "📊 KANBAN ACTIVADO", "16, 185, 129")
      currentDisruption = null
      calculateSimulator()
      updateGameStats()
    }
  })
}

function stopLeanGame() {
  gameActive = false
  clearInterval(gameTimerInterval)
  clearInterval(gameLoopInterval)
}

function endLeanGame() {
  stopLeanGame()
  if (screenPlay) screenPlay.style.display = 'none'
  if (screenOver) screenOver.style.display = 'block'

  // Calculate final OEE
  const finalOee = (gameOeeSum / gameTicks) || 100
  if (gameResultOee) gameResultOee.innerText = `${finalOee.toFixed(1)}%`
  if (gameResultSavings) gameResultSavings.innerText = `$${gameScore.toLocaleString('en-US')} USD`

  // Decide Rank
  let rank = "Lean Yellow Belt 🥋"
  if (finalOee >= 90) rank = "Lean Black Belt 🏆"
  else if (finalOee >= 80) rank = "Lean Green Belt 🥋"
  if (gameResultRank) gameResultRank.innerText = rank

  if (gameResultIntro) gameResultIntro.innerText = `Has liderado la planta por 30 segundos protegiendo la línea de cuellos de botella.`
}

if (btnGameStart) btnGameStart.addEventListener('click', startLeanGame)
if (btnGameReplay) btnGameReplay.addEventListener('click', startLeanGame)


// --- CONTACT FORM SUBMISSION ---
const contactForm = document.getElementById('contact-form')
const formStatus = document.getElementById('form-status')

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = document.getElementById('form-name').value
    const company = document.getElementById('form-company').value
    const email = document.getElementById('form-email').value
    
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    submitBtn.innerText = 'Procesando consulta...'
    submitBtn.disabled = true
    
    setTimeout(() => {
      formStatus.innerText = `¡Gracias ${name}! He recibido tu mensaje corporativo para la empresa ${company || 'su organización'}. Me comunicaré a ${email} a la brevedad.`
      formStatus.className = 'form-status success'
      
      contactForm.reset()
      submitBtn.innerText = 'Enviar Mensaje'
      submitBtn.disabled = false
      
      setTimeout(() => {
        formStatus.style.display = 'none'
      }, 10000)
    }, 1500)
  })
}

// --- SCROLL REVEAL ANIMATIONS (IntersectionObserver) ---
const revealElements = document.querySelectorAll('.reveal')
if (revealElements.length > 0) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target) // Stop observing once animated
      }
    })
  }, {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly early
  })

  revealElements.forEach(el => observer.observe(el))
}
