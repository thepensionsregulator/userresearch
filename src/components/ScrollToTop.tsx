import React from 'react';
import Styles from '../views/Layout.module.scss';
import { ArrowLink } from '@tpr/layout';

const ScrollToTop = () => {
  return (
    <div className={Styles.backToTop}>
      <ArrowLink
        iconSide="left"
        pointsTo="up"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        cfg={{ mr: 3 }}
        title="Back to top"
      />
    </div>
  );
};

export default ScrollToTop;
