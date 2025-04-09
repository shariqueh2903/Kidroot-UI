import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Rating,
  Chip,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import products from "./products";
import { BorderColor } from "@mui/icons-material";

// Styled components
const StyledCard = styled(Card)(({isMobile}) => ({
  height: "100%",
  margin: isMobile ? "0 auto" : "initial",
  maxHeight: isMobile ? "100%" : "600px",
  borderRadius: 5,
  border: "2px solid transparent",
  backgroundColor: "#ffff",
  transition: "all 0.2s",
  "&:hover": {
    transform: "scale(1.01)",
    boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
    borderColor:"#2196f3",
  },
}));

const Price = styled("div")(() => ({
  fontWeight: 600,
  fontSize: "20px",
  color: "#ff4081",
}));

const OldPrice = styled("span")(() => ({
  textDecoration: "line-through",
  color: "#888",
  marginLeft: 8,
  fontSize: "16px",
}));

const Discount = styled(Chip)(() => ({
  backgroundColor: "#ffeb3b",
  color: "#000",
  fontWeight: "bold",
  fontSize: "14px",
  height: "26px",
  mt: 1,
}));

function ProductList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ padding: isMobile ? 1 : 1, margin: "auto" }}>

      <Typography
        variant={isMobile ? "h5" : "h4"}
        gutterBottom
        sx={{ fontWeight: "bold", color: "#ff4081", textAlign: "center", marginBottom: 3 }}
      >
        KidRoot Child Fashion Store
      </Typography>

      <Grid container spacing={2} sx={{cursor:"pointer"}} >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <StyledCard sx={{width:"100%", maxWidth: "355px", height:'100%', display: "flex", flexDirection: isMobile ? "row" : "column", }}>
              
              <CardMedia
                component="img" 
                height={isMobile ? 160 : 260}
                image={product.image}
                alt={product.title}
                sx={{ width: { xs: "0%", sm: "100%" }, objectFit: "contain", backgroundColor: "#fff", padding: 1, borderRadius: 1, border: "1px solid #eee", }}
              />

              <CardContent sx={{ padding: 1, flex: 1, display:"flex", flexDirection: "column",justifyContent: "space-between", }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "#333", fontSize: isMobile ? "0.85rem" : "1rem", whiteSpace: "nowrap",
                    overflow: "hidden",textOverflow: "ellipsis", }}
                >
                  {product.brand}
                </Typography>

                <Typography variant="body2" color="textSecondary" sx={{
                  fontSize: isMobile ? "0.75rem" : "0.875rem",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                }}>
                  {product.title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating
                    value={parseFloat(product.rating)}
                    precision={0.1}
                    readOnly
                    size="small"
                  />

                  <Typography variant="caption" sx={{ ml: 1 }}>
                    ({product.reviews})
                  </Typography>
                </Box>

                <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                  <Price>
                    ₹{product.price}
                    <OldPrice>₹{product.oldPrice}</OldPrice>
                  </Price>

                  <Discount
                    label={`${Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) * 100
                    )}% OFF`}
                  />
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
