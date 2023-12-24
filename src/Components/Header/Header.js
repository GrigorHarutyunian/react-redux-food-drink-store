import "./Header.css";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { thereIsModalBasket } from "../../State/Slices/basketModal";
import { changeValue } from "../../State/Slices/searchByName";
import SvgIcon from "@mui/material/SvgIcon";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Header = ({ allItemsCount }) => {
  const dispatch = useDispatch();
  return (
    <header className="headerApp">
      <TextField
        onChange={(evt) => dispatch(changeValue(evt.target.value))}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />

      <IconButton aria-label="cart">
        <StyledBadge color="secondary">
          <HomeIcon sx={{ fontSize: 40 }} />
        </StyledBadge>
      </IconButton>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateRangePicker
            localeText={{ start: "Brewed After", end: "Brewed Before" }}
          />
        </DemoContainer>
      </LocalizationProvider>

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
