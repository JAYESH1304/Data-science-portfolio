function Project(){
    return (
        <section id="projects">
            <h3>Projects</h3>

            <div className="inner">
                <div className="logo"><img src="/adobelogo.jpeg"></img></div>
                <div className="description">
                    <h6>Adobe Behavior Simulation Challenge, Inter IIT Tech Meet 12.0, IIT Madras</h6>
                    <p>Nov 2023 - Dec 2023</p>
                    <a href="https://github.com/JAYESH1304/Adobe-Behavior-Simulation-Challenge">Github link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>The challenge focusing on behavior and content simulation to enhance user engagement on social media. Utilized Deep Learning and Generative AI to predict and increase interaction metrics like likes, retweets, and comments on platforms such as Twitter and Instagram.</li>
                            <li>Developed two critical tasks: 1. Predicting tweet engagement (likes) using DistilBERT for classification and regression within engagement levels with inference time of 1 s, and 2. Content generation by merging AI-generated media captions with tweet metadata, employing PaddleOCR and a fine-tuned Llama2 model for text generation, with average inference time 5.4 s.</li>
                        </ul>                
                    </div>
                </div>
            </div>
            <br></br>
            <div className="inner">
                <div className="logo"><img src="/cldphy_logo.png"></img></div>
                <div className="description">
                    <h6>Cloudphysician’s The Vital Extraction Challenge, Inter IIT Tech Meet 11.0, IIT Kanpur</h6>
                    <p>Jan 2023 - Feb 2023 </p>
                    <a href="https://github.com/JAYESH1304/CloudPhysician-s-Vital-Extraction-Challenge">Github link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>Developed a system for monitoring patient vital, allowing professionals to track vital signs like heart rate, blood pressure, and oxygen levels. Extracting these from ECG machine images is a core problem statement. </li>
                            <li>The proposed pipeline consists of a total of four stages Screen Extraction, Digit Localization, Digit Recognition, and Vital Mapping.</li>
                            <li>The whole pipeline is made such that it can work in two modes: Fast and Accurate. The Fast mode ensures that the whole pipeline runs under 2 seconds on CPU, while the Accurate mode ensures maximum accuracy at each stage, thus ensuring the best overall performance.</li>
                        </ul>                
                    </div>
                </div>
            </div>
            <br></br>
        </section>
    )
}
export default Project;