import React, {useState, useEffect} from 'react';
import sanityClient from "../client";

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`)
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []); 

  return (
    <div>About</div>
  )
}

export default About