import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../styles/globals.css';
import '../styles/media.css';
import '../styles/customcheckbox.css';
import '../styles/dashboard.css';

function MyApp({ Component, pageProps }) {
  const DashboardLaout = Component.Layout || EmptyLayout;
  return (

    <DashboardLaout>
      <Component {...pageProps} />
    </DashboardLaout>

  )
}
const EmptyLayout = ({ children }) => <> {children}</>
export default MyApp


