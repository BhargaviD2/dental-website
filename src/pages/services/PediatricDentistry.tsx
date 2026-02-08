import React from 'react';
import { Link } from 'react-router-dom';

const PediatricDentistry = () => {
  return (
    <div>
      <h1>Pediatric Dentistry Services</h1>
      <section>
        <h2>Treatment Approach</h2>
        <p>At SmileCare, we prioritize your child's comfort and dental health. Our approach involves:
          <ul>
            <li>Comprehensive Oral Exams</li>
            <li>Preventive Care (Cleanings, Fluoride Treatments)</li>
            <li>Cavity Treatment (Fillings)</li>
            <li>Behavior Management Techniques</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>Benefits of Pediatric Dentistry</h2>
        <p>Choosing our pediatric dentistry services offers numerous benefits, including:
          <ul>
            <li>Specialized care tailored for children</li>
            <li>Early detection of dental issues</li>
            <li>Positive dental experience to reduce anxiety</li>
            <li>Long-term oral health development</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <ul>
          <li><strong>What age should my child first see a dentist?</strong><br/>
            We recommend a dental visit by the age of one or when their first tooth appears.
          </li>
          <li><strong>How often should my child visit the dentist?</strong><br/>
            Regular check-ups every six months help in maintaining good oral health.
          </li>
          <li><strong>What are the signs of dental problems in children?</strong><br/>
            Look for symptoms like pain, sensitivity to hot or cold, or visible cavities.
          </li>
        </ul>
      </section>
      <section>
        <h2>Book an Appointment</h2>
        <p>Ready to give your child the best dental care?
          <Link to='/contact'>Contact us</Link> to schedule an appointment today!
        </p>
      </section>
    </div>
  );
};

export default PediatricDentistry;