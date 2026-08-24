import * as THREE from 'three';

export const PROJECTS_DATA = {
  planet1: {
    title: "FAULT DIAGNOSTICS & RCA",
    classification: "DEEP LEARNING & GRAPH RCA",
    usecase: "Complete 3-tier industrial predictive maintenance and causal diagnosis platform: real-time multi-variate SCADA telemetry anomaly detection, LangGraph agentic reasoning with domain RAG, and Neo4j graph traversal for alarm suppression and true root-cause isolation.",
    build: "Multi-variate SCADA telemetry is processed by PyTorch Autoencoders & Attention models to detect anomalies and operational drift. Anomaly signals trigger stateful LangGraph agentic reasoning with domain RAG, while Neo4j plant topology graphs suppress cascading secondary alarms to isolate root-cause failing assets.",
    tech: ["PyTorch", "LangGraph", "FastAPI", "Neo4j", "Qdrant", "GPT-4o", "WebSockets"]
  },
  planet2: {
    title: "PHYSICS DIGITAL TWIN",
    classification: "THERMAL SIMULATIONS & RUST",
    usecase: "Real-time closed-loop setpoint optimization for heavy industrial machinery and gas turbines under strict thermodynamic boundaries.",
    build: "Bridges Python numerical optimization with a high-performance compiled Rust Digital Twin physics engine to minimize fuel consumption and maximize net power output under operational constraints.",
    tech: ["Python", "Rust", "FastAPI", "SciPy", "WebSockets", "Docker"]
  },
  planet3: {
    title: "ASSET HEALTH & RUL",
    classification: "RELIABILITY SCORING & RUL",
    usecase: "Continuous reliability scoring and degradation tracking for mission-critical industrial assets, calculating real-time Health Index and Remaining Useful Life.",
    build: "Models multi-sensor run-to-failure curves to compute a real-time Health Index (0–100) and quantitative Remaining Useful Life (RUL) projections trained on the NASA CMAPSS dataset.",
    tech: ["Python", "Pandas", "NumPy", "NASA CMAPSS", "REST APIs", "Scikit-Learn"]
  },
  planet4: {
    title: "SEMANTIC ETL ENGINE",
    classification: "AGENTIC ETL & ONTOLOGY",
    usecase: "24-stage Agentic Human-in-the-Loop ETL pipeline that automates the ingestion and standardization of messy legacy industrial plant data into unified digital twin schemas.",
    build: "Combines BERT semantic embeddings with OpenAI GPT-4o to decode cryptic plant acronyms, discover measurement units, resolve digital states, and build clean Neo4j asset hierarchies.",
    tech: ["Neo4j", "Python", "GPT-4o", "BERT", "SCADA / XML", "FastAPI"]
  },
  planet5: {
    title: "REQUIREMENT SEEKER",
    classification: "WEB INTELLIGENCE & LLM",
    usecase: "High-throughput, credential-less job market intelligence tool for scraping and analyzing role requirements from public endpoints without login requirements.",
    build: "Built-in self-healing rotating proxy pool to bypass rate limits, combined with hybrid heuristic and Google Gemini LLM parsing to extract structured skill demands and market insights.",
    tech: ["Python", "Gemini API", "Rotating Proxies", "Beautiful Soup", "REST APIs"]
  }
};

export const CONFIG = {
  colors: {
    bgSpace: 0x010204, // Deepest space black-blue
    sunCore: 0xffffff,
    sunGlow: 0xff8800, // Moody solar orange
    cyan: 0x00c8ff,   // Electric cyan for AI & DL
    orange: 0xcc3b00, // Rust-red orange for Physics/Thermal
    crystal: 0x8811bb, // Deep amethyst violet for RUL/Health
    emerald: 0x00cc77, // Emerald cyber green for Semantic ETL
    amber: 0xffaa00,   // Golden amber for Web Intelligence
    ambient: 0x010102 // Barely-there ambient light for high contrast
  },
  orbits: {
    p1: { radius: 13.0, speed: 0.075, swayAmplitude: 0.14, size: 2.1 },
    p2: { radius: 20.5, speed: 0.052, swayAmplitude: 0.11, size: 2.5 },
    p3: { radius: 28.0, speed: 0.038, swayAmplitude: 0.09, size: 2.3 },
    p4: { radius: 35.5, speed: 0.027, swayAmplitude: 0.07, size: 2.4 },
    p5: { radius: 43.0, speed: 0.019, swayAmplitude: 0.05, size: 2.2 }
  },
  camera: {
    overview: {
      pos: new THREE.Vector3(-7.50, 24.00, 74.00),
      target: new THREE.Vector3(0, 0, 0)
    }
  }
};
