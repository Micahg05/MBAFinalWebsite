import React from 'react';
import {
    OwnershipLanyardContainer,
    LanyardImage,
    Title,
    ImageContainer,
    NumberContainer,
    Number,
    SubText,
    Description,
    DescriptionContainer,
    LanyardContainer
} from './style';

export const OwnershipLanyardModal = ({imageUrl, descriptionTitle, descriptionText, number, bg}) => {
    return (
        <OwnershipLanyardContainer bg={bg}>
            <LanyardContainer>
                <NumberContainer>
                    <Number>
                        {number}
                    </Number>
                    <SubText>
                        Items
                    </SubText>
                </NumberContainer>
                <ImageContainer>
                    <LanyardImage src={imageUrl} alt={descriptionTitle}/>
                </ImageContainer>
            </LanyardContainer>
            <DescriptionContainer>
                <Title>
                    <span>{descriptionTitle}</span>
                </Title>
                <Description>
                    <p>{descriptionText?.mainText}</p>
                    {descriptionText?.perks.map(x => {
                        return (<div>{`* ${x}`}</div>)
                    })}
                </Description>
            </DescriptionContainer>
        </OwnershipLanyardContainer>
    );
};