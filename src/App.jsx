import { Route, Routes } from 'react-router-dom'
import SigninForm from "./_auth/forms/SigninForm"
import Sidebar from './_root/components/Sidebar'
import Header from './_root/components/Header'

import Home from "./_root/pages/Home"
import Agents from "./_root/pages/Agents"
import Articles from "./_root/pages/Articles"
import Contacts from "./_root/pages/Contacts"
import Ideas from "./_root/pages/Ideas"
import Tickets from "./_root/pages/Tickets"
import Settings from "./_root/pages/Settings"
import Subs from "./_root/pages/Subs"
import './App.css'

function App() {
  return (
    <main>
      <div className='flex relative'>
        <aside className='w-72 fixed shadow-md h-screen'>
          <Sidebar />
        </aside>

        <div className='fixed md:w-[80%] ml-72'>
          <Header />
        </div>

        <div className='fixed lg:w-[80%] mt-20 ml-72 p-5'>
          <Routes>
            {/* Public Route */}
            <Route path='/sign-in' element={<SigninForm />} />

            {/* Admin Route */}
            <Route index element={<Home />} />
            <Route path='/agents' element={<Agents />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/ideas' element={<Ideas />} />
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/subs' element={<Subs />} />
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default App
