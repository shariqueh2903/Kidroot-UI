import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import shirt1 from '../assets/shirt1.png';
import cargo from '../assets/cargo1.png';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  flexWrap: 'wrap',
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  flex: '1',
  marginRight: '20px',
}));

const RightContainer = styled(Box)(({ theme }) => ({
  width: '320px',
}));

const AddressSection = styled(Box)(() => ({
  background: '#fff',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  marginBottom: '15px',
}));

const OffersSection = styled(Box)(() => ({
  background: '#fff',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  marginBottom: '15px',
}));

const CartSection = styled(Box)(() => ({
  background: '#fff',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  marginTop: '15px',
}));

const CartItem = styled(Box)(() => ({
  display: 'flex',
  borderBottom: '1px solid #eee',
  padding: '10px 0',
  position: 'relative',
}));

const ItemImage = styled('img')(() => ({
  width: '200pxpx',
  height: '160px',
  objectFit: 'contain',
  marginRight: '15px',
}));

const ItemContent = styled(Box)(() => ({
  flexGrow: 1,
}));

const RemoveButton = styled(Button)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  minWidth: '30px',
  fontSize: '20px',
  color: '#999',
}));

const Coupons = styled(Box)(() => ({
  background: '#fff',
  padding: '15px',
  marginBottom: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
}));

const GiftBox = styled(Box)(() => ({
  background: '#fff',
  padding: '15px',
  marginBottom: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
}));

const Donation = styled(Box)(() => ({
  background: '#fff',
  padding: '15px',
  marginBottom: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
}));

const PriceSummary = styled(Box)(() => ({
  background: '#fff',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
}));

const SummaryRow = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
}));

const Payment = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Men Opaque Casual Shirt',
      brand: 'HERE&NOW',
      seller: 'Sixth Sense',
      size: '40',
      quantity: 1,
      price: 735,
      originalPrice: 2299,
      discount: '68%',
      returnPolicy: '14 days return available',
      delivery: 'Delivery by 7 Apr 2025',
      image: shirt1,
    },
    {
      id: 2,
      name: 'Men Loose Relaxed Fit Cotton Cargo Jeans',
      brand: 'HERE&NOW',
      seller: 'IGE IGNITE GLOBAL EDUCATION PRIVATE LIMITED',
      size: '30',
      quantity: 1,
      price: 999,
      originalPrice: 2499,
      discount: '60%',
      returnPolicy: '14 days return available',
      delivery: 'Delivery by 9 Apr 2025',
      image: cargo,
    },
  ]);

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <MainContainer>
      <LeftContainer>
        <AddressSection
          sx={{
            backgroundColor: '#fff0f0', // light pink or any color you prefer
            padding: 2,
            borderRadius: 2,
          }}>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">
              Deliver to: <b>Ram Lichade, 441401</b>
            </Typography>
            <Button
              size="small"
              variant="outlined"
              sx={{
                ml: 'auto',
                color: 'red',
                borderColor: 'red',
                textTransform: 'none',
              }} >
              CHANGE ADDRESS
            </Button>
          </Box>
          <Typography variant="body2">
            At. Khandala, Post. Rewral Th. Mauda Dist. Nagpur
          </Typography>
        </AddressSection>
        <OffersSection>
          <Typography variant="h6">Available Offers</Typography>
          <Typography variant="body2">10% Instant Discount on ICICI Bank Credit & Debit Cards on a min spend of ₹3,500. TCA</Typography>
          <Typography variant="body2" sx={{ color: 'red', cursor: 'pointer' }}>Show More</Typography>
        </OffersSection>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2">
            <strong>{cartItems.length}/{cartItems.length} ITEMS SELECTED</strong>
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'gray' }}>
            REMOVE | WISHLIST
          </Typography>
        </Box>

        <CartSection>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              sx={{
                display: 'flex',
                gap: 2,
                padding: 2,
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: 2,
                marginBottom: 2,
                position: 'relative',
              }}
            >
              <ItemImage src={item.image} alt={item.name} />
              <ItemContent>
                <Typography variant="subtitle1">{item.brand}</Typography>
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2" sx={{ color: '#777' }}>
                  Sold by: {item.seller}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography variant="body2">Size: {item.size}</Typography>
                  <Typography variant="body2">Qty: {item.quantity}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    ₹{item.price}
                  </Typography>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                    ₹{item.originalPrice}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'green' }}>
                    {item.discount} OFF
                  </Typography>
                </Box>
                <Typography variant="body2">{item.returnPolicy}</Typography>
                <Typography variant="body2">{item.delivery}</Typography>
              </ItemContent>
              <RemoveButton>&times;</RemoveButton>
            </CartItem>
          ))}
        </CartSection>
      </LeftContainer>

      <RightContainer>
        <Box
          sx={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: 2,
            backgroundColor: '#f9f9f9',
          }}
        >
          <Coupons>
            <Typography variant="h6">COUPONS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="body2">🎟️ <strong>Apply Coupons</strong></Typography>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: 'red',
                  borderColor: 'red',
                  textTransform: 'none',
                }}
              >
                APPLY
              </Button>
            </Box>
          </Coupons>

          <GiftBox>
            <Typography variant="body2">🎁 <strong>Buying for a loved one?</strong></Typography>
            <Typography variant="body2">
              Gift packaging and personalized message on card, only for ₹35
            </Typography>
            <Button variant="outlined" fullWidth sx={{
              mt: 1,
              color: 'red',
              borderColor: 'red',
              textTransform: 'none',
            }}>
              ADD GIFT PACKAGE
            </Button>
          </GiftBox>

          <Donation>
            <Typography variant="body2">❤️ <strong>Donate and make a difference</strong></Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap',  }}>
              {[10, 20, 50, 100].map(amount => (
                <Button key={amount} variant="outlined" sx={{
                  mt: 1,
                  color: 'red',
                  borderColor: 'red',
                  textTransform: 'none',
                }}>
                  ₹{amount}
                </Button>
              ))}
            </Box>
          </Donation>

          <PriceSummary>
            <Typography variant="h6">PRICE DETAILS</Typography>
            <SummaryRow>
              <span>Total MRP</span>
              <span>₹{getTotal()}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Discount on MRP</span>
              <span style={{ color: 'red' }}>-₹{2299 - 735}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Coupon Discount</span>
              <span style={{ color: 'blue', cursor: 'pointer' }}>Apply Coupon</span>
            </SummaryRow>
            <SummaryRow>
              <span>Platform Fee</span>
              <span style={{ color: 'green' }}>FREE</span>
            </SummaryRow>
            <SummaryRow>
              <span>Shipping Fee</span>
              <span style={{ color: 'green' }}>FREE</span>
            </SummaryRow>
            <SummaryRow sx={{ fontWeight: 'bold' }}>
              <span>Total Amount</span>
              <span>₹{getTotal()}</span>
            </SummaryRow>
            <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: 'red'}}>
              PLACE ORDER
            </Button>
          </PriceSummary>
        </Box>
      </RightContainer>
    </MainContainer>
  );
};

export default Payment;