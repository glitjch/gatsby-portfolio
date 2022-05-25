import React from 'react';

import { CgClose } from "@react-icons/all-files/cg/CgClose";
import * as classes from "./styles/closeIcon.module.css";

const CloseIcon = () => {
  return (
    <CgClose className={classes.closeIcon} />
  );
};

export default CloseIcon;