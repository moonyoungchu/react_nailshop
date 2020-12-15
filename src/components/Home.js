import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <div class="hero">
        <h4>NEW NAIL DESIGNS</h4>
        <h3>
          New Fall–Winter 2020 Studio Lookbook designs launch now. Meet modern,
          graphic manicures.
        </h3>
      <span><Link to="/item">product</Link></span>
      </div>

      <section class="under-hero">
        <div class="photo1"></div>
        <div class="under-hero__content">
          <div class="wrapper">
            <h4>OUT STUDIOS</h4>
            <h3>
              Book new nails at our Soho flagship studio or our new Uptown studio.
            </h3>
            <Link to="/item">product</Link>
          </div>
        </div>
      </section>

      <section class="blog">
        <article class="blog__post">
          <div class="photo2"></div>
          <div class="post__content">
            <span class="post__date">Sep 25, 2020</span>
            <h4>
              Nail Inspiration: The Story Behind Our Fall-Winter 2020 Power Couple
            </h4>
            <Link to="/">READ THE STORY</Link>
          </div>
        </article>
        <article class="blog__post">
          <div class="photo3"></div>
          <div class="post__content">
            <span class="post__date">Dec 25, 2020</span>
            <h4>New and Now: Fall-Winter 2020 Power Couple</h4>
            <Link to="/">READ THE STORY</Link>
          </div>
        </article>
      </section>


    </div>
  );
}

export default Home;
