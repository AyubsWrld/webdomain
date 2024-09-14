import React ,  { useState }from 'react';
import './AboutUs.css';

export default function AboutUs() {
  const [activeFAQ , setFAQ] = useState("none") ; 
  return (
    <div className="AboutUs">
      {/* Row One */}
      <div className="RowOne">
        <div className="ColumnOne">
          <div className="chip">About Us</div>
          <h1 className="header">Our Mission</h1>
          <p className="subtext">
            To sustainably provide a welcoming space and<br />
            promote and indigenous practice and realization of<br />
            Islam rooted in excellence, gratitude, and inclusion.<br />
            To emulate the example of the Prophet Muhammad <br />
            (Peace and Blessings be Upon Him) and build a<br />
            community of believers working for the benefit <br />
            of humanity.
          </p>
        </div>

        <div className="ColumnTwo">
          <div className="imageContainer">
            <div className="image"></div>
            <div className="image"></div>
          </div>
        </div>
      </div>

      {/* Row Two */}
      <div className="RowTwo">
        <div className="chip">About Us</div>
        <h1 className="header">Our Vision & Values</h1>
        <div className="cardContainer">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>

      {/* Row Three */}
      <div className="RowThree">
        <div className="ColumnOne">
          <div className="chip">
            FAQ
          </div>

          <div className="header">
            Frequently Asked <br/>Questions
          </div>
        </div>
        <div className="ColumnTwo">
          <div className = "questionContainer">

            <div className="subcontainer">
              <div className ="question">
                <p>How can I get Involved? </p>
                <button className="expand" onClick = {() => setFAQ("Involved")}>+</button>
              </div>
              {activeFAQ ==="Involved" && <p>
                Hello world
              </p>}

            </div>


            <div className="question">
              <p>Why do we need a mosque and community centre in south Edmonton?</p>
              <button className="expand">+</button>
            </div>


            <div className="question">
              <p>How will the mosque be more inclusive of women? </p>
              <button className="expand">+</button>
            </div>


            <div className="question">
              <p>How does the mosque involve youth?</p>
              <button className="expand">+</button>
            </div>


            <div className="question">
              <p>How can I get Involved? </p>
              <button className="expand">+</button>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

