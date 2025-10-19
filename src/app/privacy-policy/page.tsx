'use client';

import React from "react";
import styled from "styled-components";
import Link from 'next/link';

// Consistent styles from your template
const PolicyContainer = styled.div`
  background: #fff;
  padding: 8rem 2rem 4rem 2rem;
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (prefers-color-scheme: dark) {
    background: #1A202C;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #4A5568;

  @media (prefers-color-scheme: dark) {
    color: #CBD5E0;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: #1A202C;
    margin-bottom: 1rem;

    @media (prefers-color-scheme: dark) {
      color: #EDF2F7;
    }
  }
  
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1A202C;
    margin-top: 3rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #E2E8F0;
    padding-bottom: 0.5rem;

    @media (prefers-color-scheme: dark) {
      color: #E2E8F0;
      border-bottom-color: #4A5568;
    }
  }

  p {
    margin-bottom: 1.5rem;
  }
  
  a {
    color: #2B6CB0;
    text-decoration: none;
    font-weight: 600;

    @media (prefers-color-scheme: dark) {
      color: #63B3ED;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PrivacyPolicyPage: React.FC = () => (
  <PolicyContainer>
    <ContentWrapper>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated: October 19, 2025</strong></p>
      <p>
        At TextClip, your privacy is our core principle. This Privacy Policy explains how we handle your data—specifically, by ensuring we **do not collect or store** any of your captured text.
      </p>

      <h2>1. Information We Collect (None)</h2>
      <p>
        **TextClip is designed to be a local-only utility.** We do not collect, store, or transmit the screen contents you capture or the text that is recognized.
      </p>
      <p>
        The only interaction that involves data is the text recognition process itself, which is performed **entirely on your device** using Apple&apos;s native Vision framework.
      </p>

      <h2>2. Data Processing and Clipboard</h2>
      <p>
        When you use TextClip:
      </p>
      <ul>
        <li>A screenshot of the selected area is captured locally.</li>
        <li>The OCR process runs on your Mac.</li>
        <li>The recognized text is immediately copied to your Mac&apos;s system clipboard (NSPasteboard).</li>
      </ul>
      <p>
        **We do not have access to your clipboard, your recognized text, or the content of your screen.** The app acts solely as a bridge between the screen and the clipboard, executed securely on your local hardware.
      </p>

      <h2>3. App Settings</h2>
      <p>
        TextClip stores minimal settings locally on your device, such as your preference for **&quot;Don&apos;t show this again&quot;** or **&quot;Start at Login.&quot;** These preferences are stored securely using standard macOS mechanisms (`UserDefaults`) and are not synced to any developer-controlled server.
      </p>

      <h2>4. Analytics</h2>
      <p>
        TextClip may use basic, anonymized analytics to monitor app crashes and improve performance. This data is non-personal and does not contain any of your captured text or identifiable information. We rely primarily on **Apple&apos;s built-in App Store analytics**, which you can manage via your device settings.
      </p>

      <h2>5. Data Security</h2>
      <p>
        Since TextClip does not collect or transmit personal data, its security is rooted in its local nature. For more details on how TextClip leverages macOS and Apple&apos;s security features, please see our <Link href="/security">Security page</Link>.
      </p>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Please check this page periodically for any updates.
      </p>
    </ContentWrapper>
  </PolicyContainer>
);

export default PrivacyPolicyPage;