import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Database } from '../lib/database.types';
import { Calendar, Newspaper } from 'lucide-react';

type News = Database['public']['Tables']['news']['Row'];

export function News() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const { data } = await supabase
        .from('news')
        .select('*')
        .order('published_at', { ascending: false });

      if (data) setNews(data);
    } catch (error) {
      console.error('Error loading news:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Announcements</h1>
          <p className="text-xl text-blue-100">
            Stay informed with the latest updates from our faculty
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : news.length > 0 ? (
            <div className="space-y-8">
              {news.map((item) => (
                <article key={item.id} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-lg transition">
                  <div className="md:flex">
                    {item.image && (
                      <div className="md:w-1/3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`p-8 ${item.image ? 'md:w-2/3' : 'w-full'}`}>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.published_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No news available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
