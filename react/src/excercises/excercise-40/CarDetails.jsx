import React, { useEffect, useRef } from "react";

const CarDetails = ({ initialData }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (initialData) {
      formRef.current.reset();
    }
  }, [initialData]);

  return (
    <form ref={formRef}>
      <div>
        <label>Model:</label>
        <input type="text" defaultValue={initialData?.model || ""} />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" defaultValue={initialData?.year || ""} />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" defaultValue={initialData?.color || ""} />
      </div>
    </form>
  );
};

export default CarDetails;
