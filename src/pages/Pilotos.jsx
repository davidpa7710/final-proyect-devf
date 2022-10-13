import React from 'react';


const Pilotos = () => {

  return (
    <>
    <div className="container marketing">
        {/* Three columns of text below the carousel */}
        <div className="row">
          <div className="col-lg-4">
            <img src="https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png" alt="" srcset="" />
            <h2 className="fw-normal mt-2">Sergio Perez</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
          <img src="https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png" alt="" srcset="" />
            <h2 className="fw-normal">Max Verstappen</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
          <img src="https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png" alt="" srcset="" />
            <h2 className="fw-normal">Charles Leclerc</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>{/* /.col-lg-4 */}
        </div>{/* /.row */}
        </div>
    </>
  );
};


export default Pilotos