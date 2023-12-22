import "./Header.css";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { thereIsModalBasket } from "../../State/Slices/basketModal";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Header = ({ allItemsCount }) => {
  const dispatch = useDispatch();
  return (
    <header className="headerApp">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <a href="#">Home</a>
      <a href="#">Prev</a>
      <a href="#">Next</a>
      <IconButton
        onClick={() => dispatch(thereIsModalBasket(true))}
        aria-label="cart"
      >
        <StyledBadge badgeContent={allItemsCount} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </header>
  );
};
