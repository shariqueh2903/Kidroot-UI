// src/components/ProductList.jsx
import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import products from "../data/products";

const ProductList = () => {
  return (
    <Box sx={{ padding: "0", backgroundColor: "#ffff", margin:0, width:"100%", paddingTop: '2rem' }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#ff4081", fontWeight: 600, textAlign: "center" }}>
        👕 Kids T-Shirts Collection
      </Typography>
      <Grid container spacing={4} justifyContent={"center"} sx={{mt:4}}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={2} >
            <Card
              sx={{
                backgroundColor: "#fdf5e6",
                borderRadius: 3,
                transition: "0.4s",
                height: "100%",
                ":hover": { boxShadow: 7 },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {product.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Brand: {product.brand}
                </Typography>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: 700 }}>
                  ₹{product.price}{" "}
                  <span style={{ textDecoration: "line-through", color: "#999", marginLeft: 6 }}>
                    ₹{(product.price * (1 + product.discount / 100)).toFixed(0)}
                  </span>{" "}

                  <span style={{ color: "#e91e63" }}>({product.discount}% OFF)</span>

                </Typography>

                <Rating
                  name="read-only"
                  value={parseFloat(product.rating)}
                  precision={0.1}
                  readOnly
                  size="small"
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;


// import React from 'react';
// import { 
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Chip,
//   Divider,
//   Box,
//   Paper,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Checkbox,
//   FormControlLabel
// } from '@mui/material';
// import  ExpandMore from '@mui/icons-material';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import { styled } from '@mui/system';

// // Styled components for children-friendly design
// const KidFriendlyCard = styled(Card)({
//   borderRadius: '16px',
//   boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//   transition: 'transform 0.3s',
//   '&:hover': {
//     transform: 'scale(1.02)',
//     boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
//   },
// });

// const PriceTypography = styled(Typography)({
//   color: '#ff4081',
//   fontWeight: 'bold',
//   fontSize: '1.2rem',
// });

// const DiscountChip = styled(Chip)({
//   backgroundColor: '#4caf50',
//   color: 'white',
//   fontWeight: 'bold',
// });

// const ProductGrid = styled(Grid)({
//   padding: '16px',
// });

// // Sample product data
// const products = [
//   { id: 1, name: 'Kids Pack of 2 Cotton T-shirt', brand: 'Minkult', price: 499, discountPrice: 249, discount: '50% off', image: 'https://via.placeholder.com/200x200/ffebee/ff4081?text=T-Shirt' },
//   { id: 2, name: 'Kids Printed Cotton T-shirt', brand: 'Minkult', price: 499, discountPrice: 248, discount: '50% off', image: 'https://via.placeholder.com/200x200/e8f5e9/4caf50?text=T-Shirt' },
//   { id: 3, name: 'Round Neck Printed T-shirt', brand: 'Gogoo Gaspa', price: 999, discountPrice: 899, discount: '10% off', image: 'https://via.placeholder.com/200x200/e3f2fd/2196f3?text=T-Shirt' },
//   { id: 4, name: 'Kids Printed Cotton T-shirt', brand: 'BE AWARA', price: 999, discountPrice: 899, discount: '10% off', image: 'https://via.placeholder.com/200x200/fff8e1/ffc107?text=T-Shirt' },
//   { id: 5, name: 'Box-Pack Of 5 Printed T-shirt', brand: 'KUCHIPOO', price: 1999, discountPrice: 899, discount: '55% off', image: 'https://via.placeholder.com/200x200/f3e5f5/9c27b0?text=T-Shirt' },
//   { id: 6, name: 'Cartoon Character T-shirt', brand: 'Marvel', price: 599, discountPrice: 299, discount: '50% off', image: 'https://via.placeholder.com/200x200/ffebee/ff4081?text=Marvel' },
//   { id: 7, name: 'Cotton Track Pants', brand: 'Pantaloons Junior', price: 799, discountPrice: 399, discount: '50% off', image: 'https://via.placeholder.com/200x200/e8f5e9/4caf50?text=Pants' },
//   { id: 8, name: 'Girls Printed Dress', brand: 'Wear Your Mind', price: 899, discountPrice: 449, discount: '50% off', image: 'https://via.placeholder.com/200x200/e3f2fd/2196f3?text=Dress' },
//   { id: 9, name: 'Boys Casual Shirt', brand: 'U.S. Polo Asan. Kids', price: 1299, discountPrice: 649, discount: '50% off', image: 'https://via.placeholder.com/200x200/fff8e1/ffc107?text=Shirt' },
//   { id: 10, name: 'Night Suit Set', brand: 'NUSTL', price: 999, discountPrice: 499, discount: '50% off', image: 'https://via.placeholder.com/200x200/f3e5f5/9c27b0?text=Night+Set' },
//   // Add more products as needed up to 30
//   // ... (I've shown 10, you can expand this array to 30 items)
// ];

// const ProductList = () => {
//   const [expanded, setExpanded] = React.useState('panel1');
//   const [wishlist, setWishlist] = React.useState([]);

//   const handleExpand = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const toggleWishlist = (productId) => {
//     if (wishlist.includes(productId)) {
//       setWishlist(wishlist.filter(id => id !== productId));
//     } else {
//       setWishlist([...wishlist, productId]);
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', backgroundColor: '#f5f5f5' }}>
//       {/* Filters Sidebar */}
//       <Paper sx={{ width: '250px', p: 2, mr: 2, borderRadius: '16px' }}>
//         <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ff4081' }}>
//           FILTERS
//         </Typography>
        
//         <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')}>
//           <AccordionSummary expandIcon={<ExpandMore />}>
//             <Typography>Categories</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//               <FormControlLabel control={<Checkbox />} label="T-shirts (36,000)" />
//               <FormControlLabel control={<Checkbox />} label="Girls Dress Set (100,000)" />
//               <FormControlLabel control={<Checkbox />} label="Shirts (24,000)" />
//               <FormControlLabel control={<Checkbox />} label="Party Sets (127,000)" />
//               <Typography sx={{ color: '#2196f3', cursor: 'pointer' }}>+360 more</Typography>
//             </Box>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')}>
//           <AccordionSummary expandIcon={<ExpandMore />}>
//             <Typography>Brand</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//               <FormControlLabel control={<Checkbox />} label="Girl and Jury (17,000)" />
//               <FormControlLabel control={<Checkbox />} label="BASED (2,000)" />
//               <FormControlLabel control={<Checkbox />} label="NUSTL (10,000)" />
//               <FormControlLabel control={<Checkbox />} label="Friskers (5,000)" />
//               <Typography sx={{ color: '#2196f3', cursor: 'pointer' }}>+420 more</Typography>
//             </Box>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion expanded={expanded === 'panel3'} onChange={handleExpand('panel3')}>
//           <AccordionSummary expandIcon={<ExpandMore />}>
//             <Typography>Price</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//               <FormControlLabel control={<Checkbox />} label="Under ₹500" />
//               <FormControlLabel control={<Checkbox />} label="₹500 - ₹1000" />
//               <FormControlLabel control={<Checkbox />} label="₹1000 - ₹2000" />
//               <FormControlLabel control={<Checkbox />} label="Over ₹2000" />
//             </Box>
//           </AccordionDetails>
//         </Accordion>
//       </Paper>

//       {/* Main Product Grid */}
//       <Box sx={{ flexGrow: 1 }}>
//         <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#ff4081' }}>
//           Kids Wear Online Store - {products.length} Items
//         </Typography>
        
//         <ProductGrid container spacing={3}>
//           {products.map((product) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//               <KidFriendlyCard>
//                 <Box sx={{ position: 'relative' }}>
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={product.image}
//                     alt={product.name}
//                     sx={{ objectFit: 'contain' }}
//                   />
//                   <Box sx={{ 
//                     position: 'absolute', 
//                     top: 8, 
//                     right: 8, 
//                     backgroundColor: 'white', 
//                     borderRadius: '50%',
//                     padding: '4px',
//                     cursor: 'pointer'
//                   }}
//                   onClick={() => toggleWishlist(product.id)}>
//                     {wishlist.includes(product.id) ? 
//                       <Favorite color="error" /> : 
//                       <FavoriteBorder color="action" />}
//                   </Box>
//                   {product.discount && (
//                     <DiscountChip 
//                       label={product.discount} 
//                       size="small" 
//                       sx={{ position: 'absolute', bottom: 8, left: 8 }}
//                     />
//                   )}
//                 </Box>
//                 <CardContent>
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     {product.brand}
//                   </Typography>
//                   <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
//                     {product.name}
//                   </Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
//                     <PriceTypography>₹{product.discountPrice}</PriceTypography>
//                     <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', ml: 1 }}>
//                       ₹{product.price}
//                     </Typography>
//                   </Box>
//                   <Button 
//                     variant="contained" 
//                     fullWidth 
//                     sx={{ 
//                       mt: 2, 
//                       backgroundColor: '#ff4081',
//                       '&:hover': {
//                         backgroundColor: '#e91e63'
//                       },
//                       borderRadius: '8px'
//                     }}
//                   >
//                     Add to Cart
//                   </Button>
//                 </CardContent>
//               </KidFriendlyCard>
//             </Grid>
//           ))}
//         </ProductGrid>
//       </Box>
//     </Box>
//   );
// };

// export default ProductList;