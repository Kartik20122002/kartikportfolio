import React from "react";
import { motion} from "framer-motion";



const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 2.5,
  color = "#fff",
  transition = null,
  lineProps = null,
  ...props
}) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2,
      translateX : 0,
    }
  };
  const center = {
    closed: {
      opacity: 1,
      translateX : 0
    },
    opened: {
      opacity: 0,
      translateX : -2
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
      translateX : 0,
    }
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width)) / (height);

  return (
    <motion.svg layout transition={{duration : 0.5 , delay : 0.3}}
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export { MenuButton };
