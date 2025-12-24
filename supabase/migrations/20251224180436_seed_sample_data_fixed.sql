/*
  # Seed Sample Data

  ## Overview
  Populates the database with sample data for demonstration purposes.

  ## Sample Data

  ### 1. Departments
  - Computer Science
  - Mathematics
  - Physics
  - Chemistry

  ### 2. Programmes
  - Multiple undergraduate and postgraduate programmes across departments

  ### 3. Staff
  - Sample faculty members in each department

  ### 4. News
  - Recent announcements and news articles

  ### 5. Research Areas
  - Various research focus areas across departments
*/

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM departments LIMIT 1) THEN
    INSERT INTO departments (name, description, head_of_department, slug) VALUES
    ('Department of Computer Science', 'The Department of Computer Science offers cutting-edge education in software engineering, artificial intelligence, cybersecurity, and data science. Our curriculum is designed to prepare students for the rapidly evolving technology landscape.', 'Prof. Samuel Mensah', 'computer-science'),
    ('Department of Mathematics', 'Our Mathematics Department combines pure and applied mathematics, statistics, and mathematical modeling. We focus on developing strong analytical and problem-solving skills essential for various career paths.', 'Dr. Abena Osei', 'mathematics'),
    ('Department of Physics', 'The Physics Department explores fundamental principles of nature through theoretical studies and experimental research. Our programs cover classical mechanics, quantum physics, thermodynamics, and modern physics applications.', 'Prof. Kwame Asante', 'physics'),
    ('Department of Chemistry', 'The Chemistry Department provides comprehensive education in organic, inorganic, analytical, and physical chemistry. We emphasize both theoretical knowledge and practical laboratory skills.', 'Dr. Akosua Boateng', 'chemistry');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM programmes LIMIT 1) THEN
    INSERT INTO programmes (name, level, department_id, duration, description, slug) VALUES
    ('BSc Computer Science', 'Undergraduate', (SELECT id FROM departments WHERE slug = 'computer-science'), '4 years', 'A comprehensive program covering software development, algorithms, databases, computer networks, and emerging technologies. Students gain hands-on experience through projects and internships.', 'bsc-computer-science'),
    ('MSc Artificial Intelligence', 'Postgraduate', (SELECT id FROM departments WHERE slug = 'computer-science'), '2 years', 'Advanced study in machine learning, neural networks, natural language processing, and computer vision. Includes research dissertation and practical applications.', 'msc-artificial-intelligence'),
    ('BSc Mathematics', 'Undergraduate', (SELECT id FROM departments WHERE slug = 'mathematics'), '4 years', 'Rigorous training in pure mathematics, applied mathematics, and statistics. Covers calculus, algebra, differential equations, and mathematical modeling.', 'bsc-mathematics'),
    ('MSc Applied Mathematics', 'Postgraduate', (SELECT id FROM departments WHERE slug = 'mathematics'), '2 years', 'Focuses on mathematical techniques for solving real-world problems in engineering, physics, economics, and biological sciences.', 'msc-applied-mathematics'),
    ('BSc Physics', 'Undergraduate', (SELECT id FROM departments WHERE slug = 'physics'), '4 years', 'Comprehensive physics education covering mechanics, electromagnetism, quantum mechanics, thermodynamics, and modern physics with extensive laboratory work.', 'bsc-physics'),
    ('MSc Renewable Energy Physics', 'Postgraduate', (SELECT id FROM departments WHERE slug = 'physics'), '2 years', 'Specialized program in solar energy, wind power, energy storage, and sustainable energy systems. Combines theory with practical applications.', 'msc-renewable-energy'),
    ('BSc Chemistry', 'Undergraduate', (SELECT id FROM departments WHERE slug = 'chemistry'), '4 years', 'In-depth study of chemical principles, reactions, and analytical techniques. Strong emphasis on laboratory skills and research methodology.', 'bsc-chemistry'),
    ('MSc Industrial Chemistry', 'Postgraduate', (SELECT id FROM departments WHERE slug = 'chemistry'), '2 years', 'Applied chemistry program focusing on industrial processes, quality control, materials science, and chemical engineering principles.', 'msc-industrial-chemistry');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM staff LIMIT 1) THEN
    INSERT INTO staff (name, position, department_id, email, bio) VALUES
    ('Prof. Samuel Mensah', 'Professor & Head of Department', (SELECT id FROM departments WHERE slug = 'computer-science'), 'samuel.mensah@uds.edu.gh', 'Prof. Mensah specializes in artificial intelligence and machine learning with over 15 years of research experience.'),
    ('Dr. Emmanuel Kwarteng', 'Senior Lecturer', (SELECT id FROM departments WHERE slug = 'computer-science'), 'emmanuel.kwarteng@uds.edu.gh', 'Dr. Kwarteng research interests include cybersecurity, network security, and ethical hacking.'),
    ('Dr. Abena Osei', 'Senior Lecturer & Head of Department', (SELECT id FROM departments WHERE slug = 'mathematics'), 'abena.osei@uds.edu.gh', 'Dr. Osei is an expert in applied mathematics and statistical modeling with numerous publications.'),
    ('Prof. Kwame Asante', 'Professor & Head of Department', (SELECT id FROM departments WHERE slug = 'physics'), 'kwame.asante@uds.edu.gh', 'Prof. Asante research focuses on renewable energy systems and materials science.'),
    ('Dr. Yaw Owusu', 'Lecturer', (SELECT id FROM departments WHERE slug = 'physics'), 'yaw.owusu@uds.edu.gh', 'Dr. Owusu specializes in quantum mechanics and computational physics.'),
    ('Dr. Akosua Boateng', 'Senior Lecturer & Head of Department', (SELECT id FROM departments WHERE slug = 'chemistry'), 'akosua.boateng@uds.edu.gh', 'Dr. Boateng expertise lies in organic chemistry and pharmaceutical chemistry.');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM news LIMIT 1) THEN
    INSERT INTO news (title, content, image, published_at) VALUES
    (
      'Faculty Wins National Research Grant',
      E'The Faculty of Physical Sciences has been awarded a prestigious national research grant of GHS 2.5 million to advance research in renewable energy systems. This multi-year project will focus on developing sustainable solar energy solutions for rural communities across Ghana.\n\nThe research team, led by Prof. Kwame Asante from the Department of Physics, will collaborate with international partners to design and implement innovative photovoltaic systems optimized for tropical climates.\n\nThis grant represents one of the largest research awards in the university\'s history and underscores our commitment to addressing critical national development challenges through scientific research.',
      'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg',
      NOW() - INTERVAL '5 days'
    ),
    (
      'New Computer Labs Officially Opened',
      E'The Faculty inaugurated three state-of-the-art computer laboratories equipped with the latest hardware and software systems. The new facilities feature 120 high-performance workstations, dedicated servers for cloud computing, and advanced networking infrastructure.\n\nThese laboratories will significantly enhance hands-on learning experiences for Computer Science students, enabling them to work on cutting-edge projects in artificial intelligence, data science, and software engineering.\n\nThe Vice-Chancellor presided over the opening ceremony, praising the faculty\'s commitment to providing world-class facilities for students.',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      NOW() - INTERVAL '12 days'
    ),
    (
      'International Conference on Applied Mathematics',
      E'The Department of Mathematics is proud to host the West African Conference on Applied Mathematics and Computational Science scheduled for next month. The three-day conference will bring together over 200 researchers, academicians, and industry professionals from across the region.\n\nKeynote speakers include internationally renowned mathematicians who will present on topics ranging from mathematical modeling of climate change to applications of machine learning in financial mathematics.\n\nStudents are encouraged to submit their research papers for presentation opportunities. Registration is now open on the conference website.',
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      NOW() - INTERVAL '18 days'
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM research_areas LIMIT 1) THEN
    INSERT INTO research_areas (title, description, department_id) VALUES
    ('Artificial Intelligence and Machine Learning', 'Our AI research group focuses on developing intelligent systems capable of learning from data, making predictions, and solving complex problems. Current projects include natural language processing for local languages, computer vision for agricultural applications, and predictive analytics for healthcare.', (SELECT id FROM departments WHERE slug = 'computer-science')),
    ('Renewable Energy Systems', 'Research in sustainable energy solutions including solar photovoltaic systems, wind energy, biofuels, and energy storage technologies. We work on optimizing renewable energy systems for African climates and developing affordable solutions for rural electrification.', (SELECT id FROM departments WHERE slug = 'physics')),
    ('Mathematical Modeling', 'Application of mathematical techniques to model real-world phenomena in epidemiology, ecology, economics, and engineering. Our research contributes to understanding disease spread, population dynamics, and optimization problems.', (SELECT id FROM departments WHERE slug = 'mathematics')),
    ('Computational Physics', 'Using advanced computational methods to solve complex physical problems. Research areas include molecular dynamics simulations, quantum mechanical calculations, and modeling of materials properties.', (SELECT id FROM departments WHERE slug = 'physics')),
    ('Green Chemistry and Environmental Analysis', 'Development of environmentally friendly chemical processes and analytical methods for detecting pollutants. Focus on sustainable synthesis methods, waste reduction, and environmental remediation.', (SELECT id FROM departments WHERE slug = 'chemistry')),
    ('Data Science and Analytics', 'Extracting insights from large datasets using statistical methods, machine learning algorithms, and visualization techniques. Applications in business intelligence, public health, and social sciences.', (SELECT id FROM departments WHERE slug = 'computer-science'));
  END IF;
END $$;
