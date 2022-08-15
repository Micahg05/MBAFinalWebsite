import { Title, ButtonsContainer, StyledLink } from './style';

export const Footer = () => {
    return (
        <ButtonsContainer>
            <StyledLink to="/gameplay">
                <Title>
                    Gameplay
                </Title>
            </StyledLink>
            <StyledLink to="/mint">
                <Title>
                    Mint
                </Title>
            </StyledLink>
            <StyledLink to="/teams">  
                <Title>
                    Teams
                </Title>
            </StyledLink>
        </ButtonsContainer>
    );
}