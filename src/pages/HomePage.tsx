import { lazy, memo } from 'react'
import { SEO } from '@/components/shared/SEO'
import { HeroSection } from '@/sections/HeroSection'
import { LazySection } from '@/components/shared/LazyLoad'

const AboutSection = lazy(() =>
  import('@/sections/AboutSection').then((m) => ({ default: m.AboutSection })),
)
const ExperienceSection = lazy(() =>
  import('@/sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection })),
)
const SkillsSection = lazy(() =>
  import('@/sections/SkillsSection').then((m) => ({ default: m.SkillsSection })),
)
const ProjectsSection = lazy(() =>
  import('@/sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection })),
)
const GitHubSection = lazy(() =>
  import('@/sections/GitHubSection').then((m) => ({ default: m.GitHubSection })),
)
const AchievementsSection = lazy(() =>
  import('@/sections/AchievementsSection').then((m) => ({ default: m.AchievementsSection })),
)
const ServicesSection = lazy(() =>
  import('@/sections/ServicesSection').then((m) => ({ default: m.ServicesSection })),
)
const TestimonialsSection = lazy(() =>
  import('@/sections/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection })),
)
const TechStackSection = lazy(() =>
  import('@/sections/TechStackSection').then((m) => ({ default: m.TechStackSection })),
)
const EducationSection = lazy(() =>
  import('@/sections/EducationSection').then((m) => ({ default: m.EducationSection })),
)
const CompanySection = lazy(() =>
  import('@/sections/CompanySection').then((m) => ({ default: m.CompanySection })),
)
const ContactCTA = lazy(() =>
  import('@/sections/ContactCTA').then((m) => ({ default: m.ContactCTA })),
)

function HomePageComponent() {
  return (
    <>
      <SEO />
      <HeroSection />
      <LazySection id="about" section={AboutSection} />
      <LazySection id="experience" section={ExperienceSection} />
      <LazySection id="skills" section={SkillsSection} />
      <LazySection id="projects" section={ProjectsSection} tall />
      <LazySection id="github" section={GitHubSection} />
      <LazySection id="company" section={CompanySection} />
      <LazySection id="education" section={EducationSection} />
      <LazySection id="achievements" section={AchievementsSection} />
      <LazySection id="services" section={ServicesSection} />
      <LazySection id="testimonials" section={TestimonialsSection} />
      <LazySection id="tech-stack" section={TechStackSection} />
      <LazySection id="contact-cta" section={ContactCTA} />
    </>
  )
}

/** Memoized so theme toggles in the shell don't rebuild the home tree. */
export const HomePage = memo(HomePageComponent)
