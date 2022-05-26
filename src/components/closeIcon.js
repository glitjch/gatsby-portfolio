import React from 'react';

import { CgClose } from "@react-icons/all-files/cg/CgClose";
import * as classes from "./styles/closeIcon.module.css";

import { useGlobalContext } from './layout';

// COMPONENT
const CloseIcon = () => {
  const { setMount } = useGlobalContext();
  return (
    <CgClose className={classes.closeIcon} onClick={() => setMount("")}/>
  );
};

export default CloseIcon;