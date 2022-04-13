import React from "react";
import './ConfSolution.scss'

function ConfSolution() {
  return (
    <section className="solution">
      <div className="contaioner">
        <div className="solution__wrapper">
          <h3 className="solution__title">Need a personal solution?</h3>
          <p className="solution__text">
            If you have any questions, you can contact us via the feedback form.
          </p>
          <a className="solution__btn" href="">Contact us</a>
        </div>
      </div>
    </section>
  );
}

export default ConfSolution;
