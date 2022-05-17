import React from 'react';
import {NavContainer, MainLogo, LinkContainer, ExternalLinkImage} from './style';
import MBALogo from '../images/MBALogo.png';
import TwitterLink from '../images/TwitterLogo.svg';
import DiscordLink from '../images/DiscordLogo.svg';

export const Navbar = () => {
    return(
        <NavContainer>
            <MainLogo src={MBALogo} alt="Metaverse Baller Association" />
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