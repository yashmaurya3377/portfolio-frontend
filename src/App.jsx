import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Projects from './pages/Project';
import Skill from './pages/Skill';
import Contact from './pages/Contact'; 
import BubbleBackground from './Components/BubbleBackground';
import Hero from './pages/Hero';

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
    <>
      <BubbleBackground />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
       
          <Route path="/" element={<AnimatedPage><Hero /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Navbar />
        <main className="relative z-10">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App