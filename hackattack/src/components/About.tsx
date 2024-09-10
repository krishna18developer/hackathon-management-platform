import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="service-top">
          <h1 className="section-title">A<span>b</span>Out</h1>
          <div id="formList">
            <div id="list">
              <div className="item">
                <img src="/pic.jpg" className="avatar" alt="Profile" />
                <div className="content">
                  <table width="100%" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>Chopper</td>
                      </tr>
                      <tr>
                        <td>Occupation</td>
                        <td>Doctor</td>
                      </tr>
                      <tr>
                        <td>Strength</td>
                        <td>Cuteness</td>
                      </tr>
                      <tr>
                        <td>Birthday</td>
                        <td>March 23</td>
                      </tr>
                      <tr>
                        <td>Blood Type</td>
                        <td>B+</td>
                      </tr>
                      <tr>
                        <td>Favourite Food</td>
                        <td>Meat</td>
                      </tr>
                      <tr>
                        <td>Fav. Activity</td>
                        <td>Sleeping</td>
                      </tr>
                      <tr>
                        <td>Bio</td>
                        <td>Chopper is a talking reindeer who is a good doctor and loves to eat meat.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;