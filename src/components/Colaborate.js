import React from "react";

export default function Colaborate() {
  return (
    <div>
      <div class="b-collab">
        <div class="container">
          <div class="c-row">
            <div class="c-column">
              <a href="/contact">
                <div data-ix="onscroll-art" class="c-art-collab">
                  <img
                    src="https://s3.amazonaws.com/paper-tiger-website/images/mask-collaborate.svg"
                    data-ix="ia-mask"
                    class="c-art__mask"
                    alt=" "
                  />
                 
                        
                   
                  
                </div>
              </a>
            </div>
            <div class="c-column">
              <div class="b-collab__txt">
                <div data-ix="onscroll-fadein-1" class="c-number">
                  <div class="c-number__line"></div>
                  <div class="c-number__label">NO.</div>
                  <div class="c-number__value">03</div>
                </div>
                <div data-ix="onscroll-fadein-2" class="c-wrap">
                  <h2>We&#x27;d love to learn more about your project.</h2>
                </div>
                <a href="/contact" id="hello" class="c-buttonCta w-inline-block">
                  <div data-ix="onscroll-fadein-3" class="w-clearfix">
                    <span class="fs-bold w-clearfix">
                      <span class="fs-ascii">►</span>Contact Us
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
