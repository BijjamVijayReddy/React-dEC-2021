<div>
        <div className="container mt-5">
         
          <div className="row">
            <div className="col-md-2">
              <div className="form-check">
                <input
                 
                />
                <label className="form-check-label"> Bangalore </label>
              </div>
              <div className="form-check">
                <input
                 
                />
                <label className="form-check-label"> Chennai </label>
              </div>

              <div className="form-check">
                <input
               
                />
                <label className="form-check-label"> NewYork </label>
              </div>
              </div>
               <div className="col-md-10">
              {this.state.cityBangalore ? (
                <>
                  <div className="card">
                    <div className="card-body bg-primary">
                      <p>
                       bangolre
                      </p>
                    </div>
                  </div>
                </>
              ) : null}
              {this.state.cityChennai ? (
                <>
                  {" "}
                  <div className="card">
                    <div className="card-body bg-danger">
                      <p>
                        Chennai,
                      </p>
                    </div>
                  </div>
                </>
              ) : null}
              {this.state.cityNewyork ? (
                <>
                  <div className="card">
                    <div className="card-body bg-success">
                      <p> Need to know</p>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}