import { Target, Eye, Award } from 'lucide-react';

export function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Faculty</h1>
          <p className="text-xl text-blue-100">
            Leading the way in scientific education and research
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p className="leading-relaxed">
              The Faculty of Physical Sciences at the University for Development Studies stands as a beacon of
              scientific excellence in Ghana and West Africa. Established with the vision of advancing scientific
              knowledge and fostering innovation, we have consistently delivered world-class education and
              groundbreaking research.
            </p>
            <p className="leading-relaxed">
              Our faculty comprises distinguished departments in Physics, Chemistry, Mathematics, and Computer
              Science, each contributing to the holistic development of our students and the advancement of
              scientific knowledge. We pride ourselves on our state-of-the-art laboratories, dedicated faculty
              members, and a curriculum that bridges theory and practical application.
            </p>
            <p className="leading-relaxed">
              Through strategic partnerships with international institutions and industry leaders, we ensure
              our students and researchers have access to the latest technologies and collaborative opportunities
              that prepare them for global challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional education in the physical sciences, conduct innovative research,
                and develop leaders who will drive scientific advancement and contribute to societal development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading faculty of physical sciences in Africa, recognized for excellence in teaching,
                research, and innovation, and for producing graduates who are globally competitive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Excellence in all endeavors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integrity and ethical conduct</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Innovation and creativity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Collaboration and teamwork</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dean of Faculty</h3>
            <p className="text-gray-600 mb-4">
              Our distinguished Dean leads the faculty with a commitment to academic excellence,
              research innovation, and student success. Under their leadership, the faculty continues
              to expand its impact on scientific education and research in Ghana and beyond.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
