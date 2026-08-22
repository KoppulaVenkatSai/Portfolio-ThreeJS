import * as THREE from 'three';

export const PROJECTS_DATA = {
  planet1: {
    title: "NEURAL CORE",
    classification: "AI & REINFORCEMENT LEARNING",
    usecase: "Developing autonomous learning agents, deep Q-networks (DQN) for complex path navigation, and policy models optimized for high-dimensional decision spaces.",
    build: "Built using PyTorch and OpenAI Gym. Designed custom reward functions, state encoders, and neural networks capable of training agents in chaotic non-linear environments.",
    tech: ["Python", "PyTorch", "OpenAI Gym", "NumPy", "TensorBoard", "Ray/RLlib"]
  },
  planet2: {
    title: "REFINERY AI",
    classification: "THERMAL SIMULATIONS & PYTHON",
    usecase: "Building high-performance thermodynamic simulation engines for gas turbines and heat-exchangers, predicting fouling rates and optimizing thermal efficiency.",
    build: "Created multi-threaded physical equation solvers using SciPy. Engineered procedural metadata importers that parse CAD blueprints and map them directly into structural meshes.",
    tech: ["Python", "SciPy", "NumPy", "Matplotlib", "FluidSolver", "Pandas", "Docker"]
  },
  planet3: {
    title: "ONTOLOGY CORE",
    classification: "KNOWLEDGE GRAPHS & ONTOLOGY",
    usecase: "Representing semantic web architectures and dependency graphs, mapping relations between mechanical systems, parts catalogs, and engineering metadata.",
    build: "Designed hierarchical ontologies and RDF structures. Integrated graph databases (Neo4j) with SPARQL query endpoints and designed custom mapping algorithms compiled to Rust.",
    tech: ["Rust", "Python", "Neo4j", "RDF / SPARQL", "Owlready2", "gRPC", "WebAssembly"]
  }
};

export const CONFIG = {
  colors: {
    bgSpace: 0x010204, // Deepest space black-blue
    sunCore: 0xffffff,
    sunGlow: 0xff8800, // Moody solar orange
    cyan: 0x00c8ff,   // Less saturated cyan, more technical
    orange: 0xcc3b00, // Rust-red orange
    crystal: 0x8811bb, // Deep amethyst violet
    ambient: 0x010102 // Barely-there ambient light for high contrast
  },
  orbits: {
    p1: { radius: 14, speed: 0.08, swayAmplitude: 0.15, size: 2.2 },
    p2: { radius: 24, speed: 0.05, swayAmplitude: 0.10, size: 2.6 },
    p3: { radius: 34, speed: 0.03, swayAmplitude: 0.07, size: 2.4 }
  },
  camera: {
    overview: {
      pos: new THREE.Vector3(-5.78, 18.20, 56.75),
      target: new THREE.Vector3(0, 0, 0)
    }
  }
};
