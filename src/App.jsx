// App.jsx

import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return <ProductList />;
}

export default App;


// import React from 'react';
// import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import  ProductList from './components/ProductList';

// // Create a children-friendly theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#ff4081', // Pink color for primary actions
//     },
//     secondary: {
//       main: '#4caf50', // Green color for discounts
//     },
//     background: {
//       default: '#f5f5f5', // Light gray background
//     },
//   },
//   typography: {
//     fontFamily: [
//       '"Comic Sans MS"',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif'
//     ].join(','),
//     h1: {
//       fontSize: '2.5rem',
//       fontWeight: 700,
//       color: '#ff4081',
//     },
//     h2: {
//       fontSize: '2rem',
//       fontWeight: 600,
//       color: '#2196f3',
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: '8px',
//           textTransform: 'none',
//           fontWeight: 'bold',
//           padding: '8px 16px',
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: '16px',
//         },
//       },
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div className="App" style={{ minHeight: '100vh', padding: '16px' }}>
//         <KidsWearStore />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;