import { Stack, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  const { totalQuantityCart } = useContext(CartContext);

  return (
    <Stack spacing={2} direction="row" color="black">
      <Badge badgeContent={totalQuantityCart} color="success">
        <ShoppingCartIcon />
      </Badge>
    </Stack>
  );
};
