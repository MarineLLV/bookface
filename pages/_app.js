//import App from 'next/app' // Custom App
import '../styles/globals.css';

/* class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Component />
    );
  }
} */


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
