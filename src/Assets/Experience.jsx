function Experience(){
    return (
        <section  id="experience">
          <h3>Experience</h3>
          <div className="inner">
              <div className="logo"><img src="/deepsoft_logo.jpeg"></img></div>
              <div className="description">
                  <h6>Data Science Intern, DeepSoft Technologies</h6>
                  <p>April 2024</p>
                  <br></br>
                  <div>
                      <ul>
                          <li>Leveraged Pinecone Vector Databases, Sentence Transformer e5-small, and Streamlit to develop a custom search engine featuring a user-friendly interface for text data input and indexing.</li>
                          <li>Implemented a system to process user queries and return the top 5 relevant results, optimizing performance for diverse text datasets.</li>
                      </ul>                
                  </div>
              </div>
          </div>
          <div className="inner">
              <div className="logo"><img src="/Uit_logo.png"></img></div>
              <div className="description">
                  <h6>Machine Learning Intern under Dr.Anowarul habib, UiT- The Arctic University of Norway</h6>
                  <p> Jan 2024 - Present</p>
                  <br></br>
                  <div>
                      <ul>
                          <li>Developed an innovative library for reconstructing image data from sparse wavefield signals of piezoelectric sensors based on Optimal sensor placement.</li>
                          <li>Fine-tuned ResNet50 for damage detection and created a novel approach for localizing damage, leveraging wavefield signal data for precise and efficient analysis.</li>
                      </ul>                
                  </div>
              </div>
          </div>
          <div className="inner">
              <div className="logo"><img src="/UNSWlogo-opengraph-squaresafe.png"></img></div>
              <div className="description">
                  <h6>NLP Research Intern under Dr.Rohitash Chandra, University of New South Wales, Sydney</h6>
                  <p> Jan 2024 - Present</p>
                  <br></br>
                  <div>
                      <ul>
                          <li>Fine-tuned BERT on SenWave dataset of tweets for multi-label sentiment classification in 11 categories. Conducted inference and analysis on the Global COVID-19 Twitter Dataset, specifically targeting anti-vaxxer sentiments.</li>
                          <li>Analysis identified a strong correlation between tweet volume, COVID-19 case numbers, and mean sentiment polarity scores (range: -1 to 1), which normalized towards 0 post-vaccine rollout.</li>
                      </ul>                
                  </div>
              </div>
          </div>
        </section>
    )
}
export default Experience;