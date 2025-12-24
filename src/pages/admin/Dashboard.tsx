import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Building2, GraduationCap, Users, Newspaper, Microscope } from 'lucide-react';

export function Dashboard() {
  const [stats, setStats] = useState({
    departments: 0,
    programmes: 0,
    staff: 0,
    news: 0,
    research: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const [departments, programmes, staff, news, research] = await Promise.all([
      supabase.from('departments').select('id', { count: 'exact', head: true }),
      supabase.from('programmes').select('id', { count: 'exact', head: true }),
      supabase.from('staff').select('id', { count: 'exact', head: true }),
      supabase.from('news').select('id', { count: 'exact', head: true }),
      supabase.from('research_areas').select('id', { count: 'exact', head: true }),
    ]);

    setStats({
      departments: departments.count ?? 0,
      programmes: programmes.count ?? 0,
      staff: staff.count ?? 0,
      news: news.count ?? 0,
      research: research.count ?? 0,
    });
  };

  const cards = [
    { label: 'Departments', value: stats.departments, icon: Building2, color: 'blue', link: '/admin/departments' },
    { label: 'Programmes', value: stats.programmes, icon: GraduationCap, color: 'green', link: '/admin/programmes' },
    { label: 'Staff Members', value: stats.staff, icon: Users, color: 'purple', link: '/admin/staff' },
    { label: 'News Articles', value: stats.news, icon: Newspaper, color: 'orange', link: '/admin/news' },
    { label: 'Research Areas', value: stats.research, icon: Microscope, color: 'pink', link: '/admin/research' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Manage your faculty website content</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.link}
            className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-l-4 border-${card.color}-500`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`bg-${card.color}-100 p-3 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-600`} />
              </div>
              <div className="text-3xl font-bold text-gray-900">{card.value}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">{card.label}</h3>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/admin/departments"
            className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-medium"
          >
            Add Department
          </Link>
          <Link
            to="/admin/programmes"
            className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-center font-medium"
          >
            Add Programme
          </Link>
          <Link
            to="/admin/staff"
            className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-center font-medium"
          >
            Add Staff Member
          </Link>
          <Link
            to="/admin/news"
            className="px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-center font-medium"
          >
            Add News Article
          </Link>
          <Link
            to="/admin/research"
            className="px-4 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition text-center font-medium"
          >
            Add Research Area
          </Link>
          <Link
            to="/"
            className="px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-center font-medium"
          >
            View Website
          </Link>
        </div>
      </div>
    </div>
  );
}
