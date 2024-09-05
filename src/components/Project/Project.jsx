import React from 'react';
import { Link } from 'react-router-dom';

function Project() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="w-full max-w-screen-xl flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="w-full sm:w-80 lg:w-96 bg-black rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-cyan-400">
                    <div className="card-top w-full h-56 bg-black">
                        <img className="w-full h-full object-cover" src="./src/images/p1.png" alt="PyQuestionpaper" />
                    </div>
                    <div className="card-bottom w-full p-4 text-lg text-cyan-300 bg-slate-700 flex flex-col justify-between h-full">
                        <h1 className='text-xl font-bold'>
                            <b>PyQuestionpaper:</b><br />This is my project for solving the problem of getting the pyq paper of Panjab University
                        </h1>
                 
                        <button type="button" className='text-white text-sm py-3 px-3 bg-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black mt-3 mx-auto' >
                 <a href="http://pyquestionpaper.000.pe/index.php">
                 visit now!</a>
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-80 lg:w-96 bg-black rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-cyan-400">
                    <div className="card-top w-full h-56 bg-black">
                        <img className="w-full h-full object-cover" src="./src/images/p2.png" alt="DBMS" />
                    </div>
                    <div className="card-bottom w-full p-4 text-lg text-cyan-300 bg-slate-700 flex flex-col justify-between h-full">
                        <h1 className='text-xl font-bold'>
                            <b>DBMS:</b><br />In this project I can share my all skill which i can learn in dbms in college days.
                        </h1>
                        <button type="button" className='text-white text-sm py-3 px-3 bg-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black mt-3 mx-auto'>
                            <a href="https://udaybisht124.github.io/dbmsproject/">Visit Now!
                            </a>
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-80 lg:w-96 bg-black rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-cyan-400">
                    <div className="card-top w-full h-56 bg-black">
                        <img className="w-full h-full object-cover" src="./src/images/itask1.png" alt="ITask" />
                    </div>
                    <div className="card-bottom w-full p-4 text-lg text-cyan-300 bg-slate-700 flex flex-col justify-between h-full">
                        <h1 className='text-xl font-bold'>
                            <b>ITask:</b><br />This is my latest project where you can set your daily routine tasks.
                        </h1>
                        <button type="button" className='text-white text-sm py-3 px-3 bg-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black mt-3 mx-auto'>
                           <a href="https://taskcount123.netlify.app/">
                           Visit Now!
                           </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
