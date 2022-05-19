import React, {useState, useEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    IntroSectionContainer,
    TitleText,
    Title,
    SectionHeaderImage,
    CollectionDescription,
    Wrapper,
    CardWrapper,
    SectionHeading,
    Card
} from './style';
import { lanyardDescriptions } from './strings';
import LightningBugPassFinal from '../../images/LightningBugPassFinal.png';
import PlayerAsset from '../../images/PlayerAsset.png';
import ProRel from '../../images/ProRel.png';
import BasicBBall from '../../images/BasicBBall.png';
import KrazyShoe from '../../images/KrazyShoe.png';

gsap.registerPlugin(ScrollTrigger);

export const InfoSections = () => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(el.querySelector(".title"),
        {
            opacity: 0,
            y: -50
        },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "bottom 20%",
            }
        }
        )
    }, []);

    return (
    <IntroSectionContainer ref={ref}>
        <Title className="title">
            Welcome to the MBA
        </Title>
        <CollectionDescription>
            The Metaverse Baller Association... blah blah blah
        </CollectionDescription>
        <Wrapper>
            <CardWrapper topsProp='30'>
                <SectionHeading>ROADMAP</SectionHeading>
                <Card>
                    <TitleText>Part 1: Team Ownership Badge Sale</TitleText>
                    <div>
                        <SectionHeaderImage src={LightningBugPassFinal} alt="Badge" />
                    </div>
                </Card>
            </CardWrapper>
            <CardWrapper topsProp='160'>
                <Card>
                    <TitleText>Part 2: Player Airdrop / Mint</TitleText>
                    <SectionHeaderImage src={PlayerAsset} alt="Player image" />
                </Card>
            </CardWrapper>
            <CardWrapper topsProp='165'>
                <Card>
                <TitleText>Part 3: League Simulation Game</TitleText>
                <SectionHeaderImage src={BasicBBall} alt="Player image" />
                </Card>
            </CardWrapper>
            <CardWrapper topsProp='170'>
                <Card>
                    <TitleText>
                        <div>
                            Part 4:
                        </div>
                        <div>
                            League Expansion
                        </div>
                    </TitleText>
                    <TitleText>Part 4: League Expansion</TitleText>
                    <SectionHeaderImage src={KrazyShoe} alt="Player image" />
                </Card>
            </CardWrapper>
            <CardWrapper topsProp='175'>
                <Card>
                    <TitleText>
                        <div>
                            Part 5:
                        </div>
                        <div>
                            Promotion / Relegation Begins
                        </div>
                    </TitleText>
                    <SectionHeaderImage src={ProRel} alt="Player image" />
                </Card>
            </CardWrapper>
            <CardWrapper topsProp='180'>
                <Card>
                    <TitleText>
                        <div>
                            Part 6:
                        </div>
                        <div>
                            The Distant Future
                        </div>
                    </TitleText>
                    <SectionHeaderImage src={PlayerAsset} alt="Player image" />
                </Card>
            </CardWrapper>
        </Wrapper>
    </IntroSectionContainer>
    );
};
