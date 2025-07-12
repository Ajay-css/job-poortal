import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJobs from './pages/ApplyJobs'
import Application from './pages/Application'
import RecuriterLogin from './components/RecuriterLogin'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import Managejobs from './pages/Managejobs'
import ViewApplications from './pages/ViewApplications'
import 'quill/dist/quill.snow.css'

const App = () => {

  const { showRecuriterLogin } = useContext(AppContext)

  return (
    <div>
      {showRecuriterLogin && <RecuriterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-jobs/:id' element={<ApplyJobs />} />
        <Route path='/applications' element={<Application />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='add-job' element={<AddJob />} />
          <Route path='manage-job' element={<Managejobs />} />
          <Route path='view-applications' element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App 