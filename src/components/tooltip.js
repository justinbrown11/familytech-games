import React, { useState } from 'react';
import styles from "@/styles/tooltip.module.css";

const Tooltip = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="element-with-tooltip"
    >{showTooltip && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
