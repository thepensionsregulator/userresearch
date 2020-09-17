import React from 'react';
import LI from './LI';
import Styles from './UL.module.scss';

const UL = (props: any) => (
  <ul className={Styles.root}>
    {props.listItems.map((item: any, index: number) => (
      <LI key={index}>{item}</LI>
    ))}
  </ul>
);

export default UL;
