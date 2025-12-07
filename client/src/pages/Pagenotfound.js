import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <Layout  title={"pagenotfound"}>
       <div className='pnf'>
        <h1 className='pnf-text'>404</h1>
        <h3 className='pnf-subtext'>Oops! Page Not Found</h3>
        <p className='pnf-desc'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <Link to ="/" className='pnf-btn'>Go Back to Home</Link>

       </div>
       
    </Layout>
  );
};

export default Pagenotfound