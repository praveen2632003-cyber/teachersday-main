import React from 'react';
import { useState } from 'react';
import { Calendar, MapPin, Users, GraduationCap, Star, Heart } from 'lucide-react';

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [flyingHearts, setFlyingHearts] = useState<number[]>([]);

  const handleButtonClick = () => {
    setIsAnimating(true);
    
    // Create flying hearts
    const newHearts = Array.from({ length: 6 }, (_, i) => Date.now() + i);
    setFlyingHearts(prev => [...prev, ...newHearts]);
    
    // Reset animation after 2 seconds
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    
    // Remove hearts after animation completes
    setTimeout(() => {
      setFlyingHearts(prev => prev.filter(heart => !newHearts.includes(heart)));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Flying Hearts */}
      {flyingHearts.map((heartId, index) => (
        <div
          key={heartId}
          className="absolute pointer-events-none animate-ping"
          style={{
            left: `${50 + (index - 2.5) * 10}%`,
            top: '70%',
            animation: `flyUp 3s ease-out forwards`,
            animationDelay: `${index * 0.1}s`
          }}
        >
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
        </div>
      ))}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Dr B C Roy Engineering College</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 transform hover:scale-105 transition-transform duration-300">
            <Star className="w-4 h-4" />
            <span>Special Invitation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Teacher's Day
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Celebration 2025
            </span>
          </h2>
          
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2" style={{fontFamily: 'serif'}}>
              विद्यादात्‍नमनम्
            </h3>
            <p className="text-lg text-gray-500 italic">Salutation to the Giver of Knowledge</p>
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join us in honoring our dedicated educators who shape minds and inspire futures
          </p>
        </div>

        {/* Invitation Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden mb-12 transform hover:shadow-3xl transition-all duration-500">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-3xl font-bold mb-2">You're Cordially Invited!</h3>
            <p className="text-blue-100 text-lg">Final Year Seniors</p>
          </div>

          <div className="p-8">
            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Date & Time */}
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Date & Time</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-1">September 4th, 2025</p>
                  <p className="text-gray-600">Thursday</p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors duration-300">
                <div className="bg-purple-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Venue</h4>
                  <p className="text-xl font-bold text-purple-600 mb-1">FF-02</p>
                  <p className="text-gray-600">BCREC Main Building</p>
                </div>
              </div>

              {/* Organizing Department */}
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors duration-300">
                <div className="bg-green-600 p-3 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Organized By</h4>
                  <p className="text-xl font-bold text-green-600 mb-1">AIML Department</p>
                  <p className="text-gray-600">Artificial Intelligence & Machine Learning</p>
                </div>
              </div>

              {/* Target Audience */}
              <div className="flex items-start space-x-4 p-6 bg-amber-50 rounded-2xl hover:bg-amber-100 transition-colors duration-300">
                <div className="bg-amber-600 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Inviting</h4>
                  <p className="text-xl font-bold text-amber-600 mb-1">Final Year Seniors</p>
                  <p className="text-gray-600">All Final Year Students</p>
                </div>
              </div>
            </div>

            {/* Event Description */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">About the Celebration</h3>
              <p className="text-gray-700 text-center leading-relaxed text-lg">
                Join us for a memorable Teacher's Day celebration as we express our heartfelt gratitude 
                to the exceptional faculty members who have guided, inspired, and shaped our academic journey. 
                This special event is an opportunity for final year students to honor our beloved teachers 
                and create lasting memories before graduation.
              </p>
            </div>

            {/* Inspirational Quotes */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Words of Wisdom</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Sanskrit Quote */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-500">
                  <div className="text-center mb-4">
                    <p className="text-xl font-bold text-gray-800 mb-2" style={{fontFamily: 'serif'}}>
                      गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।<br />
                      गुरुः साक्षात् परं ब्रह्म तस्मै श्री गुरवे नमः॥
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      "The Guru is Brahma, Vishnu, and Mahesh. The Guru is the Supreme Brahman itself. Salutations to that revered Guru."
                    </p>
                  </div>
                </div>

                {/* English Quote */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <div className="text-center mb-4">
                    <p className="text-xl font-bold text-gray-800 mb-2">
                      "A teacher affects eternity; they can never tell where their influence stops."
                    </p>
                    <p className="text-sm text-gray-600 italic">— Henry Adams</p>
                  </div>
                </div>

                {/* Another Sanskrit Quote */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
                  <div className="text-center mb-4">
                    <p className="text-lg font-bold text-gray-800 mb-2" style={{fontFamily: 'serif'}}>
                      आचार्यात् पादमादत्ते पादं शिष्यः स्वमेधया।<br />
                      पादं सब्रह्मचारिभ्यः पादं कालक्रमेण च॥
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      "One quarter from the teacher, one quarter from self-study, one quarter from fellow students, and one quarter from time and experience."
                    </p>
                  </div>
                </div>

                {/* Another English Quote */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500">
                  <div className="text-center mb-4">
                    <p className="text-xl font-bold text-gray-800 mb-2">
                      "The best teachers are those who show you where to look but don't tell you what to see."
                    </p>
                    <p className="text-sm text-gray-600 italic">— Alexandra K. Trenfor</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Call to Action */}
            <div className="text-center">
              <button 
                onClick={handleButtonClick}
                className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 relative ${
                  isAnimating ? 'animate-pulse shadow-red-500/50 shadow-2xl' : ''
                }`}
                style={{
                  boxShadow: isAnimating ? '0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.4)' : undefined
                }}
              >
                <Heart className={`w-5 h-5 transition-all duration-300 ${isAnimating ? 'text-red-400 fill-red-400 animate-bounce' : ''}`} />
                <span>Join the Celebration</span>
              </button>
              <p className="text-gray-500 mt-4">Your presence will make this day even more special</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Mark Your Calendar</h4>
            <p className="text-gray-600 text-sm">Don't miss this special day dedicated to our wonderful teachers</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Express Gratitude</h4>
            <p className="text-gray-600 text-sm">A perfect opportunity to thank our mentors and guides</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Final Year Gathering</h4>
            <p className="text-gray-600 text-sm">Connect with fellow seniors before graduation</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-blue-100 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-800">AIML Department</span>
          </div>
          <p className="text-gray-600">
            Dr B C Roy Engineering College • Artificial Intelligence & Machine Learning Department
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "Teaching is the profession that creates all other professions"
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;