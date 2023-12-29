import { Carousel } from "@trendyol-js/react-carousel";
import "./CaruselSlider.css";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFetchSimilarBeers } from "../../State/Slices/beerListApi";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { SimilarBeerItem } from "./SimilarBeersItem";

export const SimilarBeers = ({ similarBeersInPage }) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  if (!similarBeersInPage.length) {
    return;
  }

  return (
    <div className="carusel">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        show={3.5}
        slide={3}
        swiping={false}
        showArrows={true}
        useArrowKeys={false}
        rightArrow={
          <IconButton aria-label="cart">
            <StyledBadge color="secondary">
              <ChevronRightRoundedIcon />
            </StyledBadge>
          </IconButton>
        }
        leftArrow={
          <IconButton aria-label="cart">
            <StyledBadge color="secondary">
              <ChevronLeftRoundedIcon />
            </StyledBadge>
          </IconButton>
        }
      >
        {similarBeersInPage.map((beer) => {
          return <SimilarBeerItem description={beer} key={beer.id} />;
        })}
      </Carousel>
    </div>
  );
};
