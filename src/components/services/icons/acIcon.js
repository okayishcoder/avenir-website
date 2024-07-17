const AcIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill={props.color}
    >
      <path d="M21,0H3C1.346,0,0,1.346,0,3V11H24V3c0-1.654-1.346-3-3-3Zm1,9H2V3c0-.551,.448-1,1-1H21c.552,0,1,.449,1,1v6ZM4,5H20v2H4v-2Zm3,8h2v7c0,2.206-1.794,4-4,4s-4-1.794-4-4,1.794-4,4-4v2c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2v-7Zm16,7c0,2.206-1.794,4-4,4s-4-1.794-4-4v-7h2v7c0,1.103,.897,2,2,2s2-.897,2-2-.897-2-2-2v-2c2.206,0,4,1.794,4,4Zm-12-7h2v11h-2V13Z" />
    </svg>
  );
};

export default AcIcon;
