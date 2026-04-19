import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import VideoIntroOverlay from '@/components/VideoIntroOverlay';

const PillarsSection = dynamic(() => import('@/components/home/PillarsSection'), { ssr: true });
const MissionSection = dynamic(() => import('@/components/home/MissionSection'), { ssr: true });
const CTASection = dynamic(() => import('@/components/home/CTASection'), { ssr: true });
const GallerySection = dynamic(() => import('@/components/home/GallerySection'), { ssr: true });

export default function HomePage() {
  return (
    <>
      <VideoIntroOverlay />
      <HeroSection />
      <PillarsSection />
      <MissionSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
