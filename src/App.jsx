import { Outlet } from "react-router";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'
import 'modern-normalize/modern-normalize.css';

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <span>test</span>
    <Footer />
  </div>
)

export default App
