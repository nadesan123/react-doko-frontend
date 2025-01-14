import React from "react";

const CertifiedDoctors = () => {
  return (
    <section className="bg-theme-blue">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h2 className="text-white" style={{ marginTop: "50px !important" }}>
                Some of our US Board Certified Doctors
              </h2>
              <p className="text-white">Discuss it all with your healthcare provider</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div
              className="single-blog-card card border-0 shadow-sm"
              data-aos="fade-up"
            >
              <img
                src="https://doko.md/edpills/kn.png"
                className="card-img-top position-relative"
                alt="blog"
              />
              <div className="card-body" style={{ minHeight: "160px" }}>
                <h3 className="h5 card-title">
                  <a href="#">Dr. Kent Northcote</a>
                </h3>
                <p className="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="single-blog-card card border-0 shadow-sm"
              data-aos="fade-up"
            >
              <img
                src="https://doko.md/edpills/chris.png"
                className="card-img-top position-relative"
                alt="blog"
              />
              <div className="card-body" style={{ minHeight: "160px" }}>
                <h3 className="h5 card-title">
                  <a href="#">Dr. Christine Nguyen</a>
                </h3>
                <p className="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="single-blog-card card border-0 shadow-sm"
              data-aos="fade-up"
            >
              <img
                src="https://doko.md/edpills/maria.png"
                className="card-img-top"
                alt="blog"
              />
              <div className="card-body" style={{ minHeight: "160px" }}>
                <h3 className="h5 card-title">
                  <a href="#">Dr. Marianna Zelenak</a>
                </h3>
                <p className="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="single-blog-card card border-0 shadow-sm"
              data-aos="fade-up"
            >
              <img
                src="https://doko.md/edpills/dd6.png"
                className="card-img-top"
                alt="blog"
              />
              <div className="card-body" style={{ minHeight: "160px" }}>
                <h3 className="h5 card-title">
                  <a href="#">And 100+ more Doctors</a>
                </h3>
                <p className="card-text">
                  Emergency Medicine. 20 years of experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedDoctors;
