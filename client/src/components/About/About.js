import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="p-3 mb-2  ">

            <div className="container">

                <div>
                    <h1 className="text-center m-3" >About Us</h1>

                    <div className="mt-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                        <div className="p-4">


                            <p className="fw-bold" >There's no one-size-fits-all model for healthy living. Let us help you find a way to eat
                                well and stay active that works best for you, wherever you are on your journey.  Our mission is simple—empower you to reach your diet and fitness goals. </p>
                        </div>
                    </div>

                    <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                        <div className="p-4">


                            <p className="aboutjust">The small, everyday choices you make about your diet, fitness, and
                                overall well-being have the power to transform your life. But that doesn't mean they're
                                always easy to sustain. We understand you're an individual with specific goals and we're
                                here to support you with trusted information and tools to help you feel your best.
                                Online searches for nutrition or exercise topics can be overwhelming and result in a
                                black hole of bogus falsi ads and false claims. You need easy-to-understand and credible
                                advice that cuts through the clutter—advice that's written by experts who know what
                                they're talking about and who genuinely care. Every year, we help 120 million people who
                                come to Nutri-Fit seeking answers to their health questions.
                                It's our duty and responsibility to make sure you're getting science-backed facts with
                                clear, actionable steps suited to your needs. We work hard to break down complex health
                                terms, reflect the latest research, and present the most accurate information in a way
                                that motivates you to take an active role in your diet and fitness. We're here to cheer
                                you on, not scare you off.
                            </p>

                        </div>
                    </div>



                    <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                        <div className="p-4">

                            <h5 className="fw-bold mb-3" >Subject-Matter Expert Writers</h5>

                            <p className="aboutjust">Our writers are notable voices in their respective disciplines, from
                                registered dietitians to certified personal trainers to physicians. These leading
                                experts are specifically selected for their extensive knowledge and real-world
                                experience, as well as their ability to communicate complex information in a clear,
                                helpful, and unbiased way.
                            </p>

                        </div>
                    </div>

                    <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                        <div className="p-4">

                            <h5 className="fw-bold mb-3" >Diverse Voices</h5>

                            <p className="aboutjust">We have a renewed commitment to help all people navigate their health
                                and well-being—regardless of race, gender identity, sexual orientation, age, religion,
                                culture, geography, body type, ability, or experience. We are invested in working with
                                BIPOC health writers, Review Board members, expert sources, illustrators, photographers,
                                and more to create, edit, and enhance our content—not just on isolated topics of race,
                                but across our brands' coverage. Read Verywell's Diversity and Inclusion Pledge to learn
                                more about our promise of diversity, inclusion, and equity.
                            </p>

                        </div>
                    </div>

                    <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                        <div className="p-4">

                            <h5 className="fw-bold mb-3" >Editorial Team</h5>

                            <p className="aboutjust">Our highly-skilled editorial team manages all of the content you read.
                                Each individual article has several people behind it working to make sure it's
                                responsible, accurate, understandable, helpful, trustworthy, comprehensive, up-to-date,
                                and inclusive.
                            </p>

                        </div>
                    </div>

                    <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                        <div className="p-4">

                            <h5 className="fw-bold mb-3" >Fact Check</h5>

                            <p className="aboutjust">Our team of qualified and experienced fact checkers provides a
                                critical step in our commitment to content integrity. Fact checkers rigorously
                                review medical statements, claims, and recommendations for accuracy and timeliness.
                                We rely only on the most current and reputable primary references, including
                                peer-reviewed medical journals, government organizations, academic institutions, and
                                advocacy associations. Sources are listed both inline and at the bottom of every
                                article.
                            </p>

                        </div>
                    </div>

                    <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                        <div className="p-4">

                            <h5 className="fw-bold mb-3" >News</h5>

                            <p className="aboutjust">Now, more than ever, people are going online for their news. It is our
                                responsibility to ensure that every piece of news published on Nutri-Fit is held to the
                                highest standards of clarity, accuracy, thoughtfulness, and trustworthy reporting.
                                We rely on primary sources, input from credentialed medical experts, and a team of
                                conscientious news writers and thorough fact checkers to provide you with the latest and
                                most important updates in the world of fitness and nutrition. From groundbreaking
                                research to the latest guidelines, Nuti-Fit goes beyond breaking news—we provide the
                                context and insights needed to keep you and your family informed.

                            </p>

                        </div>
                    </div>

                    <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                        <div className="p-4">

                            <h5 className="fw-bold mb-3" >Up-to-Date Information</h5>

                            <p className="aboutjust">Times change and so does information. With help from our
                                subject-matter experts and Review Board, our editorial team routinely evaluates our
                                existing content every few months to ensure all information is updated and reflective of
                                the most current research, guidelines, and statistics.
                            </p>

                        </div>
                    </div>



                    


                </div>




                {/* <!-- footer start --> */}
                <div className="container">
                    <div className="text-center mt-5 ">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Web Squad'5'</span></strong>. All Rights Reserved | <a className="blulink" onClick={() => navigate("/help")}>Help</a>
                        </div>
                    </div>
                </div>
                {/* <!-- footer end --> */}

            </div>
        </div>
    );
}

export default About;