import React from 'react';

interface Props {
  technologies: string[];
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
import technologies from '@/const/tech'
import jobs from '@/const/jobs'
import TechnologyList from '@/components/TechnologyList';
import Layout from '@/components/Layout';
import JobList from '@/components/JobList';
const Dashboard: React.FC<Props> = () => {

    
  return (
    <Layout title="Dashboard">
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="container mx-auto flex flex-col md:flex-row ">
        <TechnologyList technologies={technologies}/>
        <JobList jobs={jobs}/>
      </div>
    </div>
    </Layout>
  );
};

export default Dashboard;
