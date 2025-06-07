import BlobsBackground from './components/BlobsBackground'
import ContactCTA from './components/ContactCTA'
import Education from './components/Education'
import Hero from './components/Hero'
import ProjectPreview from './components/ProjectPreview'
import Specialties from './components/Specialties'

const App = () => {
  return (
    <main className="flex flex-col">
      <BlobsBackground />
      <Hero />
      <Specialties />
      <Education />
      <ProjectPreview />
      <ContactCTA />
    </main>
  )
}

export default App