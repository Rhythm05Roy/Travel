import React from 'react'
import "./Destination.css"
import DestinationData from './DestinationData'
import img1 from "../assets/ladakh1.jpg"
import img2 from "../assets/ladakh2.jpg"
import img5 from "../assets/tamihini1.jpg"
import img8 from "../assets/tamihini2.jpg"

const Destination = () => {
  return (
    <div className='desination'>
        <h1>Popular Destinations</h1>
        <p>Tour give you the best opportunity to see a lot within a time frame</p>
        <DestinationData 
        headding = "Ladakh"
        text="Ladakh is a must-visit destination for anyone who loves nature, adventure, history and culture. It is also a must-visit place for those who love life. The first time I visited Ladakh, the clear blue sky took my breath away. The turquoise blue torrents of the Indus River whispered into my ears to stay there forever. I could not stay, however, I have returned there from time to time ever since. "
        img1={img1}
        img2={img2}
        />
        <DestinationData 
        headding = "Tamihini Ghat"
        text="Pune has a lot to offer for travel junkies. With so many beautiful places around, it is one of the best cities to live in India(at least in my opinion). Among the many beautiful places, Tamhini is sure something not to be missed. Another one day getaway, known for its surroundings, scenic waterfalls and lakes, Tamhini Ghat is a great place to head towards on a weekend. The only option to reach Tamhini is to ride up to it. Tamhini is well connected by road from Pune. The roads through the ghat are not very good, and in monsoon they get  worse but the scenery around would definitely compensate for the rough ride.
        Hardly 60 Kms away from city center, this makes for a perfect road trip ;)"
        img1={img5}
        img2={img8}
        />
    </div>
  )
}

export default Destination
