import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Database } from '../lib/database.types';
import { Microscope } from 'lucide-react';

type ResearchArea = Database['public']['Tables']['research_areas']['Row'] & {
  departments?: { name: string } | null;
};

export function Research() {
  const [researchAreas, setResearchAreas] = useState<ResearchArea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResearchAreas();
  }, []);

  const loadResearchAreas = async () => {
    try {
      const { data } = await supabase
        .from('research_areas')
        .select(`
          *,
          departments:department_id (name)
        `)
        .order('title');

      if (data) setResearchAreas(data as ResearchArea[]);
    } catch (error) {
      console.error('Error loading research areas:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Innovation</h1>
          <p className="text-xl text-blue-100">
            Advancing knowledge through cutting-edge research
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            Our faculty is committed to conducting impactful research that addresses real-world challenges.
            From renewable energy solutions to advanced materials science, our researchers work at the
            forefront of scientific discovery, collaborating with international partners and industry leaders.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Areas</h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : researchAreas.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {researchAreas.map((area) => (
                <div key={area.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Microscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                      {area.departments && (
                        <p className="text-sm text-gray-500 mb-3">{area.departments.name}</p>
                      )}
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Microscope className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No research areas available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Laboratories</h3>
              <p className="text-gray-600">
                State-of-the-art laboratory facilities equipped with cutting-edge instrumentation
                for advanced research and experimentation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Computing Resources</h3>
              <p className="text-gray-600">
                High-performance computing clusters and specialized software for computational
                modeling and data analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative Spaces</h3>
              <p className="text-gray-600">
                Dedicated research spaces designed to foster collaboration and innovation among
                faculty and students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
