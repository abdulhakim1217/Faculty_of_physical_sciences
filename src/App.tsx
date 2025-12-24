import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { AdminLayout } from './components/AdminLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Departments } from './pages/Departments';
import { Programmes } from './pages/Programmes';
import { Research } from './pages/Research';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { DepartmentsAdmin } from './pages/admin/DepartmentsAdmin';
import { ProgrammesAdmin } from './pages/admin/ProgrammesAdmin';
import { StaffAdmin } from './pages/admin/StaffAdmin';
import { NewsAdmin } from './pages/admin/NewsAdmin';
import { ResearchAdmin } from './pages/admin/ResearchAdmin';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="departments" element={<Departments />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="research" element={<Research />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="departments" element={<DepartmentsAdmin />} />
            <Route path="programmes" element={<ProgrammesAdmin />} />
            <Route path="staff" element={<StaffAdmin />} />
            <Route path="news" element={<NewsAdmin />} />
            <Route path="research" element={<ResearchAdmin />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
