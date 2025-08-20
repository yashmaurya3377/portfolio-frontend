import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Projects from './pages/Project';
import Skill from './pages/Skill';
import Contact from './pages/Contect';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 100,
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

// Animated page wrapper component
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <AnimatedPage>
            <Home />
          </AnimatedPage>  } />
        <Route path="/about" element={
          <AnimatedPage>  <About />  </AnimatedPage>  } />
        <Route path="/projects" element={
          <AnimatedPage>   <Projects />  </AnimatedPage> } />
        <Route path="/skills" element={ <AnimatedPage>  <Skill /> </AnimatedPage> } />
        <Route path="/contact" element={<AnimatedPage><Contact /> </AnimatedPage>  } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App