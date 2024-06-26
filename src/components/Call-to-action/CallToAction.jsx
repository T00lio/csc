import React from "react";

export default function CalltoactionSectionCallToAction1() {
  return (
    <>
      <>
        <section className="py-24 bg-white">
          <div className="container">
            <div
              className="py-10 px-12 bg-warning-light"
              style={{
                backgroundImage:
                  'url("pstls-assets/images/call-to-action/banner-color.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-xl-auto mb-6 mb-xl-0">
                  <h2 className="mw-sm lh-sm font-heading">
                    Enroll in our mailing list for exclusive offers and updates
                    on our latest products and services.
                  </h2>
                </div>
                <div className="col-12 col-md-6 col-xl-auto mb-6 mb-xl-0">
                  <p className="mw-sm lh-lg">
                    Sign in to our newsletter to receive the latest news and
                    revice exclusive offers.
                  </p>
                </div>
                <div className="col-12 col-md-auto mx-auto me-xl-0 ms-xl-auto">
                  <a className="btn btn-primary" href="#">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
