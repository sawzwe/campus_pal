// _app.js

import Layout from "./layout";
import { AuthContextProvider } from "./auth/AuthContext";
import withAuth from "./auth/WithAuth";



// export default function MyApp({ Component, pageProps }) {
//     return (
//     //   <AuthContextProvider>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//     //   </AuthContextProvider>
//     );
//   }
  

function MyApp({ Component, pageProps }) {
    return (
    //   <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    //   </AuthContextProvider>
    );
  }

export default withAuth(MyApp);
