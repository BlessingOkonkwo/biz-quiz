import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';

import React from 'react'
import Footer from './Footer';

const Page = () => {
  return (
    <div>
      <NavBar />
      <main className="min-h-[50vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Page;

// export default function Page() {
//   return (
//     <PageHeaderColorContextProvider>
//       <Header />

//       <NavBar />
//       <main className="min-h-[50vh]">
//         <Outlet />
//       </main>

//       <Footer />
//       <GoToTop />
//     </PageHeaderColorContextProvider>
//   );
// }