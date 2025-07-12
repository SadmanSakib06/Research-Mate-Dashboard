import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  FileText, 
  Database, 
  BookOpen, 
  Library, 
  Sparkles, 
  MessageSquare, 
  Calendar,
  Users
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-dark-900 to-dark-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 md:py-24">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Start Your <span className="text-primary">Research</span> Journey
    
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Start exploring datasets, finding papers, and organizing your research all in one place.
              </p>
              <div>
                <Link 
                  to="/guide" 
                  className="inline-block bg-primary hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
                >
                  Join Us Today
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Research collaboration" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Start Your Research Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Start Your <span className="text-primary">Research</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Research Guide Card */}
            <Link to="/guide" className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow block">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Research Guide</h3>
              <p className="text-sm text-gray-600 mb-2">1,478 Tutorials</p>
              <p className="text-gray-700">
                Understand how research works. Step-by-step tutorials, templates, and guides.
              </p>
            </Link>
            
            {/* Explore Datasets Card */}
            <Link to="/datasets" className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow block">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Explore Datasets</h3>
              <p className="text-sm text-gray-600 mb-2">12,832 Datasets</p>
              <p className="text-gray-700">
                Find reliable datasets to fuel your research from trusted sources.
              </p>
            </Link>
            
            {/* Start Exploring Papers Card */}
            <Link to="/papers" className="bg-orange-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow block">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Start Exploring Papers</h3>
              <p className="text-sm text-gray-600 mb-2">33,841 Papers</p>
              <p className="text-gray-700">
                Search and discover papers to start building your research.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Organize and Collaborate Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Organize and <span className="text-primary">Collaborate</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Saved Paper Library Card */}
            <Link to="/library" className="bg-purple-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow block">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Library className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Saved Paper Library</h3>
              <p className="text-sm text-gray-600 mb-2">Your Papers</p>
              <p className="text-gray-700">
                Manage and organize your research papers, notes, and findings.
              </p>
            </Link>
            
            {/* Auto Summary Generator Card */}
            <Link to="/summary" className="bg-teal-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow block">
              <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Auto Summary Generator</h3>
              <p className="text-sm text-gray-600 mb-2">Easy Summary</p>
              <p className="text-gray-700">
                Quickly summarize papers or articles to extract key points.
              </p>
            </Link>
            
            {/* Plan My Research Card */}
            <Link to="/plan" className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow block">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Plan My Research</h3>
              <p className="text-sm text-gray-600 mb-2">Project Planning</p>
              <p className="text-gray-700">
                Organize your research projects, set milestones, and track progress.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Additional <span className="text-primary">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Discussion Forum Card */}
            <Link to="/forum" className="bg-yellow-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow block">
              <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Discussion Forum</h3>
              <p className="text-sm text-gray-600 mb-2">Share your opinion</p>
              <p className="text-gray-700">
                Join the research community. Ask questions, share ideas, and collaborate.
              </p>
            </Link>
            
            {/* Coming Soon Card */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm border-2 border-dashed border-gray-300">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">More Features Coming</h3>
              <p className="text-sm text-gray-500 mb-2">Stay Tuned</p>
              <p className="text-gray-600">
                We're constantly working on new features to enhance your research experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Start learning with 67.1k students around the world.
              </h2>
              <Link 
                to="/register" 
                className="inline-block bg-primary hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Join The Family
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6.3k</div>
              <div className="text-sm text-gray-400">Verified Datasets</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">26k</div>
              <div className="text-sm text-gray-400">Discussion with Experts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;