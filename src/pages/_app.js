import React from "react";
import "styles/global.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
import Chat from "components/Chat";
import { AuthProvider } from "util/auth";
import { QueryClientProvider } from "util/db";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Chat />
        <>
          <Navbar bgColor="bg-white" />

          <Component {...pageProps} />

          <Footer
            size="md"
            bgColor="bg-white"
            bgImage=""
            bgImageOpacity={1}
            textColor=""
            sticky={true}
          />
        </>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
