// SingleSelectPage.jsx
import React, { useState } from "react";
import JobCard from "../components/JobCard";
import Customselect from "../components/Customselect";
import '../App.css'; // Import the App.css file

const SingleSelectPage = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="container">
      <h2>Single Select</h2>
      <div className="select-container">
        <Customselect
          options={jobs.map((job) => job.title)}
          value={selectedJob}
          onChange={handleJobSelect}
        />
      </div>
      {selectedJob && (
        <div>
          <h3>Selected Job:</h3>
          <JobCard job={jobs.find((job) => job.title === selectedJob)} />
        </div>
      )}
    </div>
  );
};

export default SingleSelectPage;