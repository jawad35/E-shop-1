import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { validateToken } from '../api/authentication/login';
import Loading from '../src/resusable/spinner';
export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     // setIsLoading(false);
  //     let Token = null;
  //     try {
  //       Token = await localStorage.getItem('userToken');
  //     } catch (e) {
  //       console.log('Error Fetching Token');
  //       setLoadingAuth(false);
  //     }

  //     if (Token != null) {
  //       //validate Token Here from server or async storage to find user state
  //       //validating through server
  //       try {
  //         const response = await validateToken(Token);
  //         let result = await response.json();
  //         if (result.data?.data?.user !== null) {
  //           setUserToken(Token);
  //           setUser(result.data.data.user);
  //         }
  //         setLoadingAuth(false);
  //       } catch (e) {
  //         setLoadingAuth(false);
  //       }
  //     } else {
  //       setLoadingAuth(false);
  //     }
  //   };
  //   fetchToken();
  // }, []);
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {loadingAuth ? (
          <Loading />
        ) : (
          <Component
            {...pageProps}
            user={user}
            setUser={setUser}
            userToken={userToken}
            setUserToken={setUserToken}
          />
        )}
      </ThemeProvider>
      <style jsx>{`
        @font-face {
          font-family: 'Averta';
          src: url('/fonts/AvertaDemoPECuttedDemo-Regular.otf');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        @font-face {
          font-family: 'Averta Bold';
          src: url('/fonts/AvertaDemoPE-ExtraBold.otf');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
      `}</style>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
