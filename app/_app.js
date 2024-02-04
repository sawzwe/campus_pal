// _app.js

import Layout from "./layout";
import { AuthContextProvider } from "./auth/AuthContext";



export default function MyApp({ Component, pageProps }) {
    return (
    //   <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    //   </AuthContextProvider>
    );
  }
  