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
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// GetInitialprops = way to get server side rendering in the app
MyApp.getInitialProps = async (Component, ctx) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };

}

export default MyApp;
