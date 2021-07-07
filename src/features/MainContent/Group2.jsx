import React from 'react';

import CardChip from "../../components/cardChip/CardChip";
const Group2 = () => {
  return (
    <div className="main-content container my-5 h-25" >
      <div className="card border rounded-5 border-dark shadow-0 mb-3 py-5 px-4"
        style={{ maxWidth: '25rem', borderRadius: '10px',      height: '30rem' }}>
        <div className="badge-alignment">
          <h5><span class="badge bg-primary">Group 2</span></h5 >
        </div>
        <CardChip />
        <br />

        <div className="text-center my-3">
          <button type="button" class="btn btn-primary btn-rounded  ">Add</button>
        </div>

      </div>
    </div>
  )
}

export default Group2;
