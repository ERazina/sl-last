import React from "react";
import "./Info.scss";

function Info() {
  return (
    <div className="info">
      <h1>Information</h1>
      <div>
        If you want to buy a painting from me, write to me by mail so that we
        can agree on all the details.
      </div>
      <h2>Purchase</h2>
      <ul>
        <li>If you want to buy a painting from me, just write to me.</li>
        <li>
          You can also buy my painting from the online gallery. The link to the
          gallery is below.
        </li>
      </ul>
      <h2>Delivery</h2>
      <div>I can send you a picture in two ways:</div>
      <ul>
        <li>
          Free I will send you a canvas on cardboard up to 50 cm on the larger
          side for free. Delivery service - Russian Post. Delivery time is about
          a month with possible delays due to the situation in the world.
        </li>
        <li>
          Paid All canvases on a stretcher will be sent by a special service
          that transports paintings. The buyer pays for shipping.
        </li>
      </ul>
    </div>
  );
}

export default Info;
