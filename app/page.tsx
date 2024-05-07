import ContainerPage from "@/components/container";
import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className='flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover'>
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
