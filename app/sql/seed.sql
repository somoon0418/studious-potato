-- Seed categories
INSERT INTO categories (name, description, created_at, updated_at)
VALUES 
  ('SaaS', 'Software as a Service products', NOW(), NOW()),
  ('AI/ML', 'Artificial Intelligence and Machine Learning', NOW(), NOW()),
  ('Developer Tools', 'Tools for developers', NOW(), NOW()),
  ('Design Tools', 'Tools for designers', NOW(), NOW()),
  ('Marketing Tools', 'Tools for marketers', NOW(), NOW());

-- Seed products
INSERT INTO products (name, tagline, description, how_it_works, icon, url, stats, profile_id, category_id, created_at, updated_at)
VALUES
  ('DevTool Pro', 'The ultimate developer toolkit', 'Comprehensive development suite', 'Easy integration with existing workflow', '/icons/devtool.png', 'https://devtool.pro', '{"views": 0, "reviews": 0}', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 16, NOW(), NOW()),
  ('DesignMaster', 'Design like a pro', 'Professional design platform', 'Intuitive interface for designers', '/icons/design.png', 'https://designmaster.app', '{"views": 0, "reviews": 0}', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 17, NOW(), NOW()),
  ('MarketGenius', 'Smart marketing automation', 'AI-powered marketing platform', 'Automated marketing workflows', '/icons/market.png', 'https://marketgenius.io', '{"views": 0, "reviews": 0}', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 18, NOW(), NOW()),
  ('CodeBuddy', 'Your coding companion', 'AI pair programming assistant', 'Real-time code suggestions', '/icons/code.png', 'https://codebuddy.dev', '{"views": 0, "reviews": 0}', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 19, NOW(), NOW()),
  ('DataViz', 'Beautiful data visualization', 'Turn data into insights', 'Drag-and-drop visualization builder', '/icons/dataviz.png', 'https://dataviz.app', '{"views": 0, "reviews": 0}', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 20, NOW(), NOW());

-- Seed product upvotes (bridge table)
INSERT INTO product_upvotes (product_id, profile_id)
VALUES (22, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b');

-- Seed reviews
INSERT INTO reviews (product_id, profile_id, rating, review, created_at, updated_at)
VALUES
  (21, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 5, 'Excellent developer tool!', NOW(), NOW()),
  (22, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 4, 'Great design features', NOW(), NOW()),
  (23, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 5, 'Amazing marketing automation', NOW(), NOW()),
  (24, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 4, 'Very helpful coding assistant', NOW(), NOW()),
  (25, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 5, 'Powerful visualization tool', NOW(), NOW());

-- Seed topics
INSERT INTO topics (name, slug, created_at)
VALUES
  ('Development', 'development', NOW()),
  ('Design', 'design', NOW()),
  ('Marketing', 'marketing', NOW()),
  ('Startups', 'startups', NOW()),
  ('AI', 'ai', NOW());

-- Seed posts
INSERT INTO posts (title, content, topic_id, profile_id, created_at, updated_at)
VALUES
  ('Getting Started with DevTool Pro', 'A comprehensive guide to DevTool Pro...', 6, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW()),
  ('Design Tips and Tricks', 'Essential design principles...', 7, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW()),
  ('Marketing Automation Best Practices', 'How to automate your marketing...', 7, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW()),
  ('Launching Your First Product', 'Steps to a successful product launch...', 9, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW()),
  ('AI in Modern Development', 'How AI is changing development...', 10, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW());

-- Seed post upvotes (bridge table)
INSERT INTO post_upvotes (post_id, profile_id)
VALUES (8, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b');

-- Seed post replies
INSERT INTO post_replies (post_id, profile_id, reply, created_at, updated_at)
VALUES
  (6, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'Great post about DevTool Pro!', NOW(), NOW()),
  (7, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'These design tips are very helpful', NOW(), NOW()),
  (8, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'Marketing automation is crucial', NOW(), NOW()),
  (9, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'Launch strategy is on point', NOW(), NOW()),
  (10, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'AI is indeed transforming development', NOW(), NOW());

-- Seed gpt ideas
INSERT INTO gpt_ideas (idea, views, claimed_by, created_at)
VALUES
  ('AI-powered code review assistant', 0, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW()),
  ('Design system generator', 0, NULL, NOW()),
  ('Marketing campaign optimizer', 0, NULL, NOW()),
  ('Developer productivity tracker', 0, NULL, NOW()),
  ('Automated documentation tool', 0, NULL, NOW());

-- Seed gpt ideas likes (bridge table)
INSERT INTO gpt_ideas_likes (gpt_idea_id, profile_id)
VALUES (10, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b');

-- Seed teams
INSERT INTO teams (product_name, team_size, equity_split, product_stage, roles, product_description, team_leader_id, created_at, updated_at)
VALUES
  ('DevTool Pro', 3, 30, 'mvp', 'Developer, Designer, Marketing', 'Developer productivity suite', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW()),
  ('DesignMaster', 2, 50, 'prototype', 'Designer, Developer', 'Design automation platform', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW()),
  ('MarketGenius', 4, 25, 'product', 'Marketing, Sales, Developer, Designer', 'Marketing analytics platform', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW()),
  ('CodeBuddy', 2, 50, 'idea', 'Developer, Product Manager', 'AI coding assistant', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW()),
  ('DataViz', 3, 33, 'mvp', 'Data Scientist, Developer, Designer', 'Data visualization tool', 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW(), NOW());

-- Seed message rooms
INSERT INTO message_rooms (created_at)
VALUES (NOW());

-- Seed message room members (bridge table)
INSERT INTO message_room_members (message_room_id, profile_id, created_at)
VALUES (2, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NOW());

-- Seed messages
INSERT INTO messages (message_room_id, sender_id, content, created_at)
VALUES
  (2, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'Hello! Interested in collaboration', NOW()),
  (2, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'Let''s discuss the project details', NOW()),
  (2, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'What''s your availability?', NOW()),
  (2, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'I can start next week', NOW()),
  (2, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'Great, looking forward to working together', NOW());

-- Seed notifications
INSERT INTO notifications (source_id, product_id, post_id, target_id, type, created_at)
VALUES
  ('f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 21, NULL, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'review', NOW()),
  ('f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NULL, 10, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'reply', NOW()),
  ('f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NULL, NULL, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'follow', NOW()),
  ('f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', NULL, 8, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'mention', NOW()),
  ('f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 22, NULL, 'f1bea9c9-8cd7-4550-97e3-8ec36f3f353b', 'review', NOW());

  -- Seed jobs
INSERT INTO jobs (
    position,
    overview,
    responsibilities,
    qualifications,
    benefits,
    skills,
    company_name,
    company_logo,
    company_location,
    apply_url,
    job_type,
    location,
    salary_range,
    created_at,
    updated_at
)
VALUES
    (
        'Senior Frontend Developer',
        'Join our team to build modern web applications using React and TypeScript',
        'Lead frontend development, mentor junior developers, architect solutions',
        'Min 5 years experience with React, Strong TypeScript skills',
        'Health insurance, 401k, Remote work, Learning budget',
        'React, TypeScript, Next.js, TailwindCSS',
        'TechCorp Inc',
        '/logos/techcorp.png',
        'San Francisco, CA',
        'https://techcorp.com/careers/senior-frontend',
        'full-time',
        'remote',
        '$150,000 - $200,000',
        NOW(),
        NOW()
    ),
    (
        'UI/UX Designer',
        'Create beautiful and intuitive user interfaces for our products',
        'Design user flows, create wireframes, conduct user research',
        '3+ years of product design experience, Figma expertise',
        'Flexible hours, Health coverage, Stock options',
        'Figma, User Research, Prototyping, Design Systems',
        'DesignLabs',
        '/logos/designlabs.png',
        'New York, NY',
        'https://designlabs.com/jobs/uiux-designer',
        'full-time',
        'hybrid',
        '$100,000 - $150,000',
        NOW(),
        NOW()
    ),
    (
        'DevOps Engineer',
        'Help us scale our cloud infrastructure and improve deployment processes',
        'Manage AWS infrastructure, implement CI/CD pipelines, monitor systems',
        'Strong AWS experience, Kubernetes expertise, Infrastructure as Code',
        'Remote work, Competitive salary, Learning opportunities',
        'AWS, Kubernetes, Terraform, CI/CD',
        'CloudScale',
        '/logos/cloudscale.png',
        'Austin, TX',
        'https://cloudscale.io/careers/devops',
        'full-time',
        'remote',
        '$100,000 - $150,000',
        NOW(),
        NOW()
    ),
    (
        'Marketing Intern',
        'Learn and contribute to our digital marketing initiatives',
        'Assist with social media, content creation, and campaign analysis',
        'Marketing student or recent graduate, Social media savvy',
        'Paid internship, Mentorship, Flexible schedule',
        'Social Media, Content Creation, Analytics',
        'GrowthHub',
        '/logos/growthhub.png',
        'Chicago, IL',
        'https://growthhub.com/internships/marketing',
        'full-time',
        'in-person',
        '$0 - $50,000',
        NOW(),
        NOW()
    ),
    (
        'Freelance Content Writer',
        'Create engaging technical content for our developer blog',
        'Write technical tutorials, documentation, and blog posts',
        'Strong writing skills, Technical background, SEO knowledge',
        'Flexible hours, Competitive per-article rates',
        'Technical Writing, SEO, Developer Documentation',
        'DevMedia',
        '/logos/devmedia.png',
        'Remote',
        'https://devmedia.com/writers',
        'full-time',
        'remote',
        '$50,000 - $100,000',
        NOW(),
        NOW()
    );