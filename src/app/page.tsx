'use client';

import Link from 'next/link';

import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from 'react';
// Import relevant Lucide Icons for TextClip's features
import { Scan, Command, Copy, Lock, Plus } from 'lucide-react';

// STYLED COMPONENTS =============================================

// --- Global Styles ---
// Reusing Mapr's styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

// --- Page & Layout ---
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #F0F4F8; 
  color: #1A202C;

  @media (prefers-color-scheme: dark) {
    background: #1A202C;
    color: #EDF2F7;
  }
`;

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

// --- Hero Section ---
const HeroSection = styled(Section)`
  justify-content: center;
  background: linear-gradient(135deg, #2D3748 0%, #1A202C 100%);
  color: #fff;
  padding-top: 120px; 
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`;

// Assuming a TextClip logo or a simple text-based logo
const HeroTextClipLogo = styled(Image)`
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin: 1.5rem 0;
  letter-spacing: -2px;
  background: linear-gradient(90deg, #fff, #E2E8F0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  max-width: 700px;
  color: #E2E8F0;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1A202C;
  background-color: #fff;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryCTA = styled(CTAButton)`
  background-color: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.8);
  margin-left: 1rem;
  box-shadow: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: none;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  text-align: left;
`;

const FeatureCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  }

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
    border-color: #4A5568;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
  }
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EBF4FF;
  color: #4A90E2;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background: #1A202C;
    color: #63B3ED;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (prefers-color-scheme: dark) {
    color: #EDF2F7;
  }
`;

const FeatureDescription = styled.p`
  color: #718096;
  line-height: 1.6;

  @media (prefers-color-scheme: dark) {
    color: #CBD5E0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(90deg, #1A202C, #4A5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(90deg, #EDF2F7, #CBD5E0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

// Reusing testimonial structure
const TestimonialsSection = styled(Section)`
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    background-color: #1A202C;
  }
`;
const ActionSection = styled(Section)``;

const DemoCaption = styled.p`
  margin-top: 2rem;
  font-size: 1.1rem;
  color: #718096;
  max-width: 600px;

  @media (prefers-color-scheme: dark) {
    color: #A0AEC0;
  }
`;

const FaqSection = styled(Section)`
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    background-color: #1A202C;
  }
`;

const FaqContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaqItem = styled.div`
  background: #F7FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: #2D3748;
    border-color: #4A5568;
  }
`;

const FaqQuestion = styled.button`
  width: 100%;
  padding: 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  transition: background 0.2s;
  color: #1A202C;

  svg {
    transition: transform 0.3s ease;
    flex-shrink: 0;
    color: #1A202C;
  }

  &[aria-expanded='true'] svg {
    transform: rotate(45deg);
  }

  &:hover {
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    color: #EDF2F7;
    svg {
      color: #EDF2F7;
    }
    &:hover {
      background: #4A5568;
    }
  }
`;

const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  padding: 0 1.75rem;
  max-height: ${props => (props.$isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  p {
    padding-bottom: 1.75rem;
    color: #4A5568;
    line-height: 1.8;
    text-align: left;
  }

  @media (prefers-color-scheme: dark) {
    p {
      color: #CBD5E0;
    }
  }
`;

// --- Video Components ---
const VideoContainer = styled.div`
  position: relative;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
`;

const DemoVideo = styled.video`
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  border: 1px solid #E2E8F0;
  width: 100%;
  height: auto;

  @media (prefers-color-scheme: dark) {
    border-color: #4A5568;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
  }
`;


const FinalCTASection = styled(Section)`
  background: linear-gradient(135deg, #2D3748 0%, #1A202C 100%);
  color: #fff;
`;

const FinalCTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const FinalCTASubtitle = styled.p`
  color: #A0AEC0;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  max-width: 600px;
`;

const FaqRow = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FaqItem>
      <FaqQuestion onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {question}
        <Plus size={24} />
      </FaqQuestion>
      <FaqAnswer $isOpen={isOpen}>
        <p>{answer}</p>
      </FaqAnswer>
    </FaqItem>
  );
};

// REACT COMPONENT ===============================================
export default function Home() {

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <MainContent>
          {/* === HERO SECTION === */}
          <HeroSection>
            {/* The actual logo image would need to be provided, using a placeholder for now */}
            <HeroTextClipLogo
                src="/images/logo.png" 
                alt="TextClip App Logo"
                width={140}
                height={140}
                priority
              />
            <Title>Capture Text. Instantly Copy.</Title>
            <Subtitle>
              The fastest way to recognize and extract text from any part of your screen, powered by native macOS Vision technology.
            </Subtitle>
            <div>
            <Link href="/download" passHref>
              <CTAButton>
                Download for macOS
              </CTAButton>
            </Link>
              <SecondaryCTA href="#demo">
                See It In Action
              </SecondaryCTA>
            </div>
          </HeroSection>
          
          {/* === FEATURE SHOWCASE SECTION (Modified) === */}
          <Section id="features">
            <SectionTitle>Seamless OCR Built for Speed</SectionTitle>
            <FeatureGrid>
               <FeatureCard>
                <FeatureIcon><Scan size={24} /></FeatureIcon>
                <FeatureTitle>Pixel-Perfect OCR</FeatureTitle>
                <FeatureDescription>
                  Extract text from images, videos, or protected documents with outstanding accuracy using Apple&apos;s Vision framework.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><Command size={24} /></FeatureIcon>
                <FeatureTitle>Global Hotkey</FeatureTitle>
                <FeatureDescription>
                  Activate the screen capture instantly with the powerful and customizable keyboard shortcut: **Cmd+Shift+2**.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><Copy size={24} /></FeatureIcon>
                <FeatureTitle>Auto-Copy to Clipboard</FeatureTitle>
                <FeatureDescription>
                  The moment text is recognized, it&apos;s instantly copied to your clipboard, ready to paste without any extra clicks.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><Lock size={24} /></FeatureIcon>
                <FeatureTitle>Privacy First</FeatureTitle>
                <FeatureDescription>
                  Text recognition is performed **locally** on your device. No data leaves your machine, ensuring your privacy remains intact.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </Section>

          {/* === "IN ACTION" VIDEO DEMO SECTION === */}
          <ActionSection id="demo">
            <SectionTitle>TextClip in Action</SectionTitle>
            <VideoContainer>
              <DemoVideo controls autoPlay loop muted>
                <source src="/videos/TexClipDemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </DemoVideo>
            </VideoContainer>
            <DemoCaption>
              Watch how quickly you can capture, recognize, and copy text from any part of your screen.
            </DemoCaption>
          </ActionSection>
          
          {/* === TESTIMONIALS SECTION (Modified) === */}
          <TestimonialsSection>
            <SectionTitle>What Users Are Saying</SectionTitle>
            <FeatureGrid>
              <FeatureCard>
                <FeatureDescription style={{fontStyle: "italic", marginBottom: "1rem"}}>
                  &quot;The Cmd+Shift+2 shortcut has completely changed my workflow. Extracting text is now faster than manually typing it.&quot;
                </FeatureDescription>
                <FeatureTitle style={{fontSize: "1.1rem"}}>- Alex K., Developer</FeatureTitle>
              </FeatureCard>
              <FeatureCard>
                <FeatureDescription style={{fontStyle: "italic", marginBottom: "1rem"}}>
                  &quot;I didn&apos;t realize how much time I was wasting until I started using TextClip. It&apos;s clean, fast, and does exactly what it promises.&quot;
                </FeatureDescription>
                <FeatureTitle style={{fontSize: "1.1rem"}}>- Sarah J., Researcher</FeatureTitle>
              </FeatureCard>
              <FeatureCard>
                <FeatureDescription style={{fontStyle: "italic", marginBottom: "1rem"}}>
                  &quot;Blazing fast and extremely accurate. Plus, knowing it all happens locally gives me peace of mind.&quot;
                </FeatureDescription>
                <FeatureTitle style={{fontSize: "1.1rem"}}>- Mark R., Consultant</FeatureTitle>
              </FeatureCard>
            </FeatureGrid>
          </TestimonialsSection>

          {/* === FAQ SECTION === */}
          <FaqSection id="faq">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FaqContainer>
              <FaqRow 
                question="What permissions does TextClip require?"
                answer="TextClip requires **Screen Recording** permission to capture the screen region you select. It also requires **Accessibility** permission to enable the global Cmd+Shift+2 shortcut."
              />
              <FaqRow 
                question="How does the shortcut work?"
                answer="The default shortcut is Cmd+Shift+2. When pressed, the screen enters selection mode, allowing you to drag a box around the text you want to recognize. The app uses an Accessibility event tap to listen for this combination globally."
              />
               <FaqRow 
                question="What technology is used for text recognition?"
                answer="TextClip leverages Apple's native Vision framework for on-device Optical Character Recognition (OCR), ensuring maximum speed, accuracy, and privacy."
              />
            </FaqContainer>
          </FaqSection>

          {/* === FINAL CTA SECTION === */}
          <FinalCTASection>
              <FinalCTATitle>Stop Retyping. Start Clipping.</FinalCTATitle>
              <FinalCTASubtitle>Download TextClip today and unlock the text trapped on your screen.</FinalCTASubtitle>
            <Link href="/download" passHref>
              <CTAButton>
                Download for macOS
              </CTAButton>
            </Link>
          </FinalCTASection>

        </MainContent>
      </PageWrapper>
    </>
  );
}