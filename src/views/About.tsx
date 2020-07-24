import React from 'react';
import { H1, Link } from '@tpr/core';
import ScrollToTop from '../components/ScrollToTop';

const About = () => (
  <div>
    <H1>About Page</H1>
    <Link>
      <a target="_blanks" href="https://tpr.netlify.app/">
        TPR React Components
      </a>
    </Link>
    <ScrollToTop />
  </div>
);

export default About;
