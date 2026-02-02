import { Outlet } from "react-router";
import 'modern-normalize/modern-normalize.css';
import Sidebar from './components/Layout/Sidebar';
import './App.css'

const App = () => (
  <div className="min-h-screen flex bg-main">
    <Sidebar />

    <main className="flex-1 p-10">
      <Outlet />
    </main>
  </div>
)

export default App
