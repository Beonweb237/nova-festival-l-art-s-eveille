import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import ProgrammationPage from '@/pages/ProgrammationPage'
import ArtistesPage from '@/pages/ArtistesPage'
import BilletteriePage from '@/pages/BilletteriePage'
import InfosPage from '@/pages/InfosPage'
import AProposPage from '@/pages/AProposPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/programmation" element={<ProgrammationPage />} />
        <Route path="/artistes" element={<ArtistesPage />} />
        <Route path="/billetterie" element={<BilletteriePage />} />
        <Route path="/infos" element={<InfosPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
      </Route>
    </Routes>
  )
}
