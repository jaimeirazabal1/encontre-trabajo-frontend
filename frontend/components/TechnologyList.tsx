import React from 'react';

interface Props {
  technologies: string[];
}

const TechnologyList: React.FC<Props> = ({ technologies }) => {
  return (
    <div className="md:w-1/3 p-8 bg-blue-100 text-blue-900 mt-28 h-auto rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Tecnologías y Configuración</h2>
        <ul className="list-disc pl-6 flex flex-col flex-grow">
            {technologies.map((tech, index) => (
            <li key={index}>
                <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {tech}
                </label>
            </li>
            ))}
        </ul>
    </div>


  );
};

export default TechnologyList;
