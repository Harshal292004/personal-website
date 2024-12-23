import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
const App = () => {
  return (
      <main className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
      </main>
  );
};


export default App 
