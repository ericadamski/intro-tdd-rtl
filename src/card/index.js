import React, { PureComponent } from "react";
import {
  Wrapper,
  Img,
  Details,
  Title,
  TitleGroup,
  Location,
  Description,
  Icon
} from "./card.styled";

export default class Card extends PureComponent {
  render() {
    return (
      <Wrapper className={this.props.className}>
        <Img src={this.props.img} />
        <Details>
          <TitleGroup>
            <Location>{this.props.location}</Location>
            <Title>{this.props.title}</Title>
          </TitleGroup>
          <Icon>
            <ion-icon name="airplane" />
          </Icon>
          <Description>
            {this.props.description}
          </Description>
        </Details>
      </Wrapper>
    );
  }
}
