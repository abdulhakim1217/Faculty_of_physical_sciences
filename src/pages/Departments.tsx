import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Database } from '../lib/database.types';
import { Building2, User } from 'lucide-react';

type Department = Database['public']['Tables']['departments']['Row'];

export function Departments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      const { data } = await supabase
        .from('departments')
        .select('*')
        .order('name');

      if (data) setDepartments(data);
    } catch (error) {
      console.error('Error loading departments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl text-blue-100">
            Explore our diverse range of academic departments
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : departments.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept) => (
                <div key={dept.id} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{dept.name}</h2>
                      {dept.head_of_department && (
                        <div className="flex items-center space-x-2 text-gray-600 mb-4">
                          <User className="w-4 h-4" />
                          <span className="text-sm">
                            Head: <span className="font-medium">{dept.head_of_department}</span>
                          </span>
                        </div>
                      )}
                      <p className="text-gray-600 leading-relaxed">{dept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No departments available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
