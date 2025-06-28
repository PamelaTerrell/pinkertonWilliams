import React from "react";
import "./PurpleHeart.css";


function PurpleHeartHonoree() {
  return (
    <div className="honoree-container">
      <h1>Honoring Our Purple Heart Recipient</h1>
      <img
  src="/EddiePH.jpg"
  alt="Honoree Portrait"
  className="honoree-photo"
/>

      <h2>Eddie Thomas</h2>
      <p>
        Our honoree proudly served in the United States military for 24 years,
        dedicating his life to protecting our country and supporting his fellow
        soldiers.
      </p>
      <p>
        In May 1967, during the Vietnam War, he faced a surprise attack in the
        early hours of the morning. Viet Cong forces struck their position with
        81-millimeter mortar rounds while the unit was asleep.
      </p>

      <img
  src="/youngEddie.jpg"
  alt="Eddie Thomas during his Vietnam service"
  className="honoree-photo-small"
/>
<p className="photo-caption">
  Eddie Thomas, 1961
</p>

      <p>
        He served in Vietnam for one year, demonstrating courage and commitment
        throughout his deployment. Despite not being trained in jungle warfare,
        he acted with quick thinking and bravery. When a gasoline truck was
        damaged and caught fire, he drove it away from a nearby ammo dump to
        prevent a catastrophic explosion. While helping evacuate the wounded—
        including the motor sergeant who had been struck by shrapnel—he was
        himself hit by shrapnel in the back.
      </p>
      <p>
        Under continued fire, he and his fellow soldiers called in a “Dust Off”
        helicopter to evacuate the injured. The attack left lasting wounds and
        hearing loss that continue to this day.
      </p>
      <p>
        For his extraordinary bravery and service, he was awarded multiple
        military decorations, including:
      </p>
      <ul className="award-list">
        <li>Bronze Star Medal – May 26, 1967</li>
        <li>Bronze Star Medal – August 10, 1967</li>
        <li>Purple Heart – June 1, 1967</li>
        <li>Army Commendation Medal – February 9, 1967</li>
        <li>Army Commendation Medal – August 7, 1967</li>
      </ul>
      <p>
        Like so many Vietnam veterans, he returned home to a divided nation,
        facing hostility instead of gratitude. His sacrifice, steadfast service,
        and resilience through the challenges of war and its aftermath deserve
        our deepest respect.
      </p>
      <p>
        In addition to his combat injuries, he is a survivor of prostate cancer
        and is currently living with leukemia and diabetes. His cancer treatment
        has included six months of liquid chemotherapy followed by a 400 mg
        chemotherapy pill daily for three years. His courage extends beyond the
        battlefield, inspiring everyone who knows him.
      </p>
      <p>
        We honor his bravery, his strength, and his continued dedication to
        supporting fellow veterans through Disabled American Veterans Chapter 18.
      </p>
      <img
        src="/purpleHeart.jpg"
        alt="Purple Heart Medal"
        className="medal-image"
      />

<h3>Military Award Certificates</h3>
<div className="certificates-container">
  
  <img
    src="./purpleHeartCert.jpg"
    alt="Purple Heart Certificate"
    className="certificate-image"
  />

<img
    src="/bronzeMay.jpg"
    alt="Bronze Star Certificate"
    className="certificate-image"
  />

<img
    src="/bronzeStarAugust.jpg"
    alt="Bronze Star Certificate"
    className="certificate-image"
  />


  <img
    src="/ArComFeb1967.jpg"
    alt="Army Commendation Medal Certificate"
    className="certificate-image"
  />
  <img
    src="/ArComAug1967.jpg"
    alt="Army Commendation Medal Certificate"
    className="certificate-image"
  />

</div>


    </div>
  );
}

export default PurpleHeartHonoree;
