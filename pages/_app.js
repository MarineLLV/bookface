import { ThemeProvider } from "@mui/material";
import theme from "../components/ui/Theme";

//import App from 'next/app' // Custom App
/* class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Component />
    );
  }
} */




function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp;
