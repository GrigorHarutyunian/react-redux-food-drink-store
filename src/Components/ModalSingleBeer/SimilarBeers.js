import { Carousel } from "@trendyol-js/react-carousel";
import "./CaruselSlider.css";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

export const SimilarBeers = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

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
        <div
          style={{
            width: "39px",
            cursor: "pointer",
            height: "40px",
            background: "red",
          }}
        >
          1
        </div>
        <div
          style={{
            width: "39px",
            cursor: "pointer",
            height: "40px",
            background: "yellow",
          }}
        >
          2
        </div>
        <div
          style={{
            width: "39px",
            cursor: "pointer",
            height: "40px",
            background: "green",
          }}
        >
          3
        </div>
        <div
          style={{
            width: "39px",
            cursor: "pointer",
            height: "40px",
            background: "grey",
          }}
        >
          4
        </div>
        <div
          style={{
            width: "39px",
            cursor: "pointer",
            height: "40px",
            background: "black",
          }}
        >
          5
        </div>
      </Carousel>
    </div>
  );
};
