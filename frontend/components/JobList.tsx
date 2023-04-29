import React from 'react';

interface Props {
  jobs: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    clientName: string;
    clientRatings: number;
    clientHires: number;
  }[];
}

const JobList: React.FC<Props> = ({ jobs }) => {
    const handleHire = (jobId: number) => {
      // Aquí puedes agregar la lógica para contratar al candidato.
      console.log(`Contratando al candidato con ID ${jobId}...`);
    };
  
    return (
      <div className="md:w-2/3 p-8 flex flex-wrap mt-16">
        {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-lg p-4 relative w-full mx-4 my-4">
                <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                <p className="text-gray-700 mb-2">{job.description}</p>
                <div className="flex items-center mb-2">
                    <span className="mr-2 text-gray-700">{job.technologies.join(', ')}</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm mb-2">
                    <span className="mr-2">{job.clientName}</span>
                    <span className="mr-2">{job.clientRatings} calificaciones</span>
                    <span className="mr-2">{job.clientHires} contrataciones</span>
                </div>
                <div className="absolute right-0 bottom-0 mb-4 mr-4">
                    <div className="w-full flex justify-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Contratar
                        </button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    );
  };

export default JobList;
