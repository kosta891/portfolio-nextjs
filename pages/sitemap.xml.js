import { API_URL, NEXT_URL } from '../utils/urls';
import axios from 'axios';
const EXTERNAL_DATA_URL = `${API_URL}/projects`;

function generateSiteMap(blog, projects) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
     <url>
       <loc>https://miloskostadinovic.com</loc>
     </url>
     <url>
       <loc>https://miloskostadinovic.com/about</loc>
     </url>
     <url>
       <loc>https://miloskostadinovic.com/projects</loc>
     </url>
     <url>
       <loc>https://miloskostadinovic.com/blog</loc>
     </url>
     <url>
       <loc>https://miloskostadinovic.com/contact</loc>
     </url>
     ${projects
       .map(({ attributes: { slug } }) => {
         return `
       <url>
           <loc>${`${NEXT_URL}/projects/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}

     ${blog
       .map(({ attributes: { slug } }) => {
         return `
       <url>
           <loc>${`${NEXT_URL}/blog/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const { data } = await axios(`${API_URL}/projects`);
  const projects = await data.data;
  const blogs = await axios(`${API_URL}/blogs`);
  const blog = await blogs.data.data;
  console.log(blog);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blog, projects);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
