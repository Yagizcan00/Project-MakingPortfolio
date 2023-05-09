import React from 'react'
import "./About.css"
import Piano from "../../img/Piano.jpg"
import Award from "../../img/Award.jpg"

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Piano} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam quasi perspiciatis suscipit accusamus, incidunt quod!
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas laboriosam beatae?
                    Maiores totam voluptatem, numquam delectus nisi velit doloremque! Quo quisquam vel error sit,
                    debitis nulla ut sed provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                    similique!
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Certificates</h4>
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nesciunt,
                            rem obcaecati neque nihil perferendis unde ab odio quisquam aliquid?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
