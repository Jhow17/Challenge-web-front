import React from "react";
import LayoutBase from "../shared/layouts/LayoutBase";
import Button from "../shared/components/Button";


const Dashboard = () => {
  return (
    <LayoutBase>
      
    <div className="container-fluid">

      <div className="container">

        <div className="row d-flex justify-content-around align-itens-center">

          <Button/>
          <div class="card text-bg-success mb-3" style={{maxWidth: "18rem"}}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
            </div>
          </div>

          <div class="card text-bg-warning mb-3" style={{maxWidth: "18rem"}}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
            </div>
          </div>

          <div class="card text-bg-primary mb-3" style={{maxWidth: "18rem"}}>
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-9">

          </div>

          <div className="col-3">

          </div>

        </div>

      </div>
    </div>
  </LayoutBase>



  )
  
};

export default Dashboard;
