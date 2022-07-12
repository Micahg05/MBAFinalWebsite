import React from 'react';
import {NavContainer, MainLogo, LinkContainer, ExternalLinkImage} from './style';
import MBA from '../images/MBA.png';
import TwitterLink from '../images/twitterLogo.png';
import DiscordLink from '../images/discordLogo.png';

export const Navbar = () => {
    return(
        <NavContainer>
            <MainLogo src={MBA} alt="Metaverse Baller Association" />
            <LinkContainer >
                <a href='https://discord.gg/X26wqgPUmC' target='_blank' rel="noreferrer">
                    <ExternalLinkImage src={DiscordLink} alt="Discord Logo"/>
                </a>
                <a href='https://twitter.com/MetaverseBaller' target='_blank' rel="noreferrer">
                    <ExternalLinkImage src={TwitterLink} alt="Twitter logo"/>
                </a>
            </LinkContainer>
        </NavContainer>
        );
}