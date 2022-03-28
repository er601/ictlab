import React, { useEffect } from "react";
import Glider from "glider-js";
import styled from "styled-components";
import "glider-js/glider.min.css";

import team from '../../images/team.png';
import team2 from '../../images/team2.png';
import team3 from '../../images/team3.png'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const GliderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;

function Team() {
    useEffect(() => {
        new Glider(document.querySelector(".glider"), {
            // Mobile-first defaults
            slidesToShow: 1,
            slidesToScroll: 1,
            scrollLock: true,
            draggable: true,
            dots: "#resp-dots",
            arrows: {
                prev: ".glider-prev",
                next: ".glider-next"
            },
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 775,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        itemWidth: 150,
                        duration: 0.25
                    }
                },
                {
                    // screens greater than >= 1024px
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        itemWidth: 150,
                        duration: 0.25
                    }
                }
            ]
        });
    }, []);

    return (
        <>
            <div className="team" id='team'>
                <div className="container">
                    <div className="team-content">
                        <h1>Наша команда</h1>
                        <Container className="App">
                            <div className="glider-contain">
                                <GliderContainer className="glider">
                                    <div>
                                        <img src={team} alt="bingo" />
                                        <h2>Рамвилас Шарма</h2>
                                        <h4>Главный инженер</h4>
                                    </div>
                                    <div>
                                        <img src={team2} alt="bingo" />
                                        <h2>Марианна Кузнецова</h2>
                                        <h4>Дизайнер</h4>
                                    </div>
                                    <div>
                                        <img src={team3} alt="bingo" />
                                        <h2>Ян Хуэй</h2>
                                        <h4>Программист</h4>
                                    </div>
                                    <div>
                                        <img src={team} alt="bingo" />
                                        <h2>Рамвилас Шарма</h2>
                                        <h4>Главный инженер</h4>
                                    </div>
                                    <div>
                                        <img src={team2} alt="bingo" />
                                        <h2>Марианна Кузнецова</h2>
                                        <h4>Дизайнер</h4>
                                    </div>
                                    <div>
                                        <img src={team3} alt="bingo" />
                                        <h2>Ян Хуэй</h2>
                                        <h4>Программист</h4>
                                    </div>
                                </GliderContainer>
                                <button aria-label="Previous" id="glider-prev-1" className="glider-prev">
                                    «
                                </button>
                                <button aria-label="Next" id="glider-next-1" className="glider-next">
                                    »
                                </button>
                                <div role="tablist" className="dots" />
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Team;
