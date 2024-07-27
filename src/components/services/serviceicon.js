import { useState } from "react";

const ServiceIcon = (props) => {
  const [iconDisplay, setIconDisplay] = useState("none");
  const [iconColor, setIconColor] = useState("#4c4a4a");

  const onServiceIconHoverIn = () => {
    setIconDisplay("block");
    setIconColor("#000000");
  };

  const onServiceIconHoverOut = () => {
    setIconDisplay("none");
    setIconColor("#4c4a4a");
  };

  return (
    <div>
      <svg
        onMouseOver={onServiceIconHoverIn}
        onMouseOut={onServiceIconHoverOut}
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        fill={iconColor}
        width="25"
        height="25"
      >
        <path d={props.path} />
      </svg>
      <div>
        <p className="service-icon-text" style={{ display: iconDisplay }}>
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default ServiceIcon;
