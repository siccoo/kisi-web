import React, {useState, useEffect} from 'react';
import sanityClient from "../client";

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`)
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <div></div>
  )
}

export default Project