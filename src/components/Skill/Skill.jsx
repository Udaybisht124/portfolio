import React from 'react';

function Skill() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 md:gap-8 lg:gap-10 lg:p-8 mb-64 mt-32">
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-orange-500 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-orange">
        <img src="./src/skillsImg/html.png" alt="HTML" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
     
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-yellow-500 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-yellow">
        <img src="./src/skillsImg/js.png" alt="JavaScript" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
    
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-cyan-500 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-cyan">
        <img src="./src/skillsImg/react.png" alt="React" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
       
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-cyan-300 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-cyan-300">
        <img src="./src/skillsImg/tailwind.png" alt="Tailwind CSS" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
        
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-blue-400 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-blue-400">
        <img src="./src/skillsImg/php.png" alt="PHP" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />

      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-blue-600 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-blue-600">
        <img src="./src/skillsImg/cpp.png" alt="C++" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
  
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-orange-500 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-orange">
        <img src="./src/skillsImg/java.png" alt="Java" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
       
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-orange-500 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-orange">
        <img src="./src/skillsImg/mySQL.png" alt="MySQL" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
      
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-purple-500 shadow-xl flex items-center justify-center bg-white rounded-lg overflow-hidden animate-glow-purple">
        <img src="./src/skillsImg/redux2.png" alt="Redux" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
     
      </div>
    </div>
  );
}

export default Skill;