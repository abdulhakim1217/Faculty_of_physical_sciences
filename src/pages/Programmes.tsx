import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Database } from '../lib/database.types';
import { GraduationCap, Clock } from 'lucide-react';

type Programme = Database['public']['Tables']['programmes']['Row'] & {
  departments?: { name: string } | null;
};

export function Programmes() {
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'Undergraduate' | 'Postgraduate'>('all');

  useEffect(() => {
    loadProgrammes();
  }, []);

  const loadProgrammes = async () => {
    try {
      const { data } = await supabase
        .from('programmes')
        .select(`
          *,
          departments:department_id (name)
        `)
        .order('level')
        .order('name');

      if (data) setProgrammes(data as Programme[]);
    } catch (error) {
      console.error('Error loading programmes:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProgrammes = filter === 'all'
    ? programmes
    : programmes.filter(p => p.level === filter);

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programmes</h1>
          <p className="text-xl text-blue-100">
            Choose from our undergraduate and postgraduate programmes
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Programmes
            </button>
            <button
              onClick={() => setFilter('Undergraduate')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                filter === 'Undergraduate'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Undergraduate
            </button>
            <button
              onClick={() => setFilter('Postgraduate')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                filter === 'Postgraduate'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Postgraduate
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : filteredProgrammes.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProgrammes.map((programme) => (
                <div key={programme.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      programme.level === 'Undergraduate'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {programme.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{programme.name}</h3>

                  {programme.departments && (
                    <p className="text-sm text-gray-500 mb-3">
                      {programme.departments.name}
                    </p>
                  )}

                  {programme.duration && (
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{programme.duration}</span>
                    </div>
                  )}

                  <p className="text-gray-600 text-sm leading-relaxed">{programme.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No {filter !== 'all' ? filter.toLowerCase() : ''} programmes available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
