'use client';

import React from "react";
import styled from "styled-components";

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

const SecurityPage: React.FC = () => (
  <PolicyContainer>
    <ContentWrapper>
      <h1>Security</h1>
      <p><strong>Last Updated: October 19, 2025</strong></p>
      <p>
        At TextClip, security is synonymous with privacy. Because the app performs its core functions locally on your device, the need for external security measures and data transmission is eliminated, offering the highest level of data protection.
      </p>

      <h2>1. Local Processing and Zero Server-Side Storage</h2>
      <p>
        The most important security feature of TextClip is that it **never sends your captured screen data or recognized text to a remote server.**
      </p>
      <ul>
        <li>**Screen Capture:** The screenshot is captured on your Mac.</li>
        <li>**OCR Engine:** The text recognition process uses Apple&apos;s native Vision framework, which is a highly secure, on-device technology.</li>
        <li>**Result:** The recognized text is passed directly to your local clipboard (`NSPasteboard`). No data is ever stored on our systems or transmitted outside of your device.</li>
      </ul>

      <h2>2. Required macOS Permissions</h2>
      <p>
        TextClip requires specific macOS permissions to function, which are governed by Apple&apos;s built-in security controls, giving you full transparency and control:
      </p>
      <ul>
        <li>**Screen Recording Permission:** Required to capture the pixels of the area you select on your screen. This permission must be explicitly granted by you in System Settings.</li>
        <li>**Accessibility Permission:** Required to listen for the global **Cmd+Shift+2** hotkey and to activate the app for capture.</li>
      </ul>
      <p>
        Your control over these permissions ensures that the app only performs its function when you authorize it.
      </p>

      <h2>3. Data Handling and Storage</h2>
      <p>
        TextClip stores only minimal configuration data (settings) locally using standard macOS storage mechanisms, which are inherently protected by the encryption and access controls of your operating system (e.g., password, Touch ID, or Face ID). We do not use servers, cloud databases, or third-party storage for any user data.
      </p>

      <h2>4. Analytics and App Improvement</h2>
      <p>
        We rely on **anonymized, aggregated crash and usage data** provided by the Apple App Store, subject to your device privacy settings. This data is used purely for performance monitoring and fixing bugs. It is never linked to your identity or your captured text.
      </p>
    </ContentWrapper>
  </PolicyContainer>
);

export default SecurityPage;