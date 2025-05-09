import GalleryCard from "./GalleryCard"
import SocialMediaLink from "./SocialMediaLink"
import "./AboutSection.css";

function AboutSection() {
    return(
        // TODO space for Artist Statement
        // TODO Contact Me section
        // TODO Card with Lydia photo
        <section className="about-section">
            <div>
                <GalleryCard
                            title="Lydia Harris"
                            imgLink="...\assets\Lydia Harris Profile Picture.jpg"
                            altText="Picture of Lydia Harris"
                            desc="A Ceramics student at Brigham Young University-Idaho"/> 
            </div>
            <section className="about-text-section">
                <div className="about-statement">
                    <h2>Artist's Statement</h2>
                    <p>
                        Artist statement text
                    </p>
                </div>
                <div className="about-socials">
                    <ul>
                        <li>
                            <SocialMediaLink />
                        </li>
                        <li>
                            <SocialMediaLink />
                        </li>
                        <li>    
                            <SocialMediaLink />
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default AboutSection