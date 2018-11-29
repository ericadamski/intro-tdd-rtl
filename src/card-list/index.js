import React, { Fragment, PureComponent } from "react";
import Card from "../card";
import {
  Wrapper,
  SearchContainer,
  Search,
  SearchIcon
} from "./card-list.styled";

export default class CardList extends PureComponent {
  static cards = [
    {
      title: "Ottawa",
      location: "Canada",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula diam varius felis luctus, in gravida elit cursus. Aliquam quis.",
      img: "https://source.unsplash.com/500x500/?ottawa,city"
    },
    {
      title: "Toronto",
      location: "Canada",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula diam varius felis luctus, in gravida elit cursus. Aliquam quis.",
      img: "https://source.unsplash.com/500x500/?toronto,city"
    },
    {
      title: "Paris",
      location: "France",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula diam varius felis luctus, in gravida elit cursus. Aliquam quis.",
      img: "https://source.unsplash.com/500x500/?paris,city"
    },
    {
      title: "Berlin",
      location: "Germany",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula diam varius felis luctus, in gravida elit cursus. Aliquam quis.",
      img: "https://source.unsplash.com/500x500/?berlin,city"
    },
    {
      title: "Warsaw",
      location: "Poland",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula diam varius felis luctus, in gravida elit cursus. Aliquam quis.",
      img: "https://source.unsplash.com/500x500/?poland,city"
    },
    {
      title: "Frankfurt",
      location: "Germany",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula diam varius felis luctus, in gravida elit cursus. Aliquam quis.",
      img: "https://source.unsplash.com/500x500/?frankfurt,city"
    },
    {
      title: "Las Vegas",
      location: "USA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula diam varius felis luctus, in gravida elit cursus. Aliquam quis.",
      img: "https://source.unsplash.com/500x500/?las%20vegas,city"
    },
    {
      title: "San Jose",
      location: "USA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula diam varius felis luctus, in gravida elit cursus. Aliquam quis.",
      img: "https://source.unsplash.com/500x500/?san%20jose,city"
    }
  ];

  state = { searchTerm: "" };

  render() {
    return (
      <Fragment>
        <SearchContainer>
          <Search
            onChange={event =>
              this.setState({ searchTerm: event.target.value.toLowerCase() })
            }
          />
        </SearchContainer>
        <Wrapper>
          {CardList.cards
            .filter(card =>
              JSON.stringify(card).toLowerCase().includes(this.state.searchTerm)
            )
            .map(card => (
              <Card key={card.title} {...card} />
            ))}
        </Wrapper>
      </Fragment>
    );
  }
}
