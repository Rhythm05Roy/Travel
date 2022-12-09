import React from "react";
import TripData from "./TripData";
import "./TripStyle.css";
import img1 from "../assets/ladakh1.jpg";
import img2 from "../assets/kerala.jpg";
import img3 from "../assets/goatour.jpg";
const TripStyle = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={img1}
          heading="Trip in Ladakh"
          text="Ladakh is a must-visit destination for anyone who loves nature, adventure, history and culture. It is also a must-visit place for those who love life. The first time I visited Ladakh, the clear blue sky took my breath away."
        />
        <TripData
          image={img2}
          heading="Trip in Kerala"
          text="Kerala, a state situated on the tropical Malabar Coast of southwestern India, is one of the most popular tourist destinations in the country. Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters."
        />
        <TripData
          image={img3}
          heading="Trip in Goa"
          text="Located on the southwestern coast of India, Goa is one of the top tourist destinations in the country. This erstwhile Portuguese colony is best known for its serene beaches, forts and churches that date back to the colonial era, wildlife sanctuaries, museums, and rich culinary legacy."
        />
      </div>
    </div>
  );
};

export default TripStyle;
