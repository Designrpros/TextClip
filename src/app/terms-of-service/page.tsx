'use client';

import styled from "styled-components";
import Link from 'next/link';

// Using the styles from the second example for a consistent look
const PolicyContainer = styled.div`
  background: #fff;
  padding: 8rem 2rem 4rem 2rem;
  margin-top: 60px; // Standard space for the fixed navbar
  width: 100%;
  display: flex;
  justify-content: center;

  @media (prefers-color-scheme: dark) {
    background: #1A202C; // Dark background
    color: #A0AEC0; // Lighter text for dark mode
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

  p, ul {
    margin-bottom: 1.5rem;
  }
  
  ul {
    list-style-position: inside;
    padding-left: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
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

export default function TermsOfServicePage() {
  return (
    <PolicyContainer>
      <ContentWrapper>
        <h1>Terms of Service</h1>
        <p><strong>Last Updated: October 19, 2025</strong></p>
        <p>
          By using the **TextClip** app, you agree to the following terms and conditions. These terms are designed to ensure a safe and reliable experience for all users.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the **TextClip** app, you agree to comply with and be bound by these Terms of Service and our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree to these terms, you must not use the app.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Any changes will be posted in this section, and you are encouraged to review these terms periodically. Your continued use of the app after any changes constitutes your acceptance of the updated terms.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          You agree to use **TextClip** for lawful purposes only. You must not:
        </p>
        <ul>
          <li>Violate any applicable laws or regulations.</li>
          <li>Infringe upon any intellectual property rights.</li>
          <li>Engage in any activity that could damage or disrupt the app or its services.</li>
        </ul>
        {/* Removed section about account confidentiality since TextClip does not use accounts */}

        <h2>4. Privacy and Data Usage</h2>
        <p>
          Your privacy is important to us. For more information on how we handle data (by not collecting it), please refer to our <Link href="/privacy-policy">Privacy Policy</Link>. By using the app, you acknowledge and consent to our data handling practices as described in the Privacy Policy.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          The content, design, and functionality of the **TextClip** app, including logos, trademarks, software, and other proprietary materials, are protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the app for personal or business purposes as outlined in these terms.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, **TextClip**, its affiliates, employees, or partners are not liable for any indirect, incidental, special, or consequential damages arising from your use of the app, including but not limited to data loss, service interruptions, or security breaches.
        </p>

        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate your access to the **TextClip** app at any time, without notice, for any reason, including if you violate any terms of service or engage in any behavior that we deem harmful to the app or other users.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          The **TextClip** app is provided “as is” and “as available,” without any warranties of any kind, either express or implied. We do not guarantee that the app will be free from errors or disruptions, and we are not responsible for any damage caused by the app’s use.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms of Service will be governed by and construed in accordance with the laws of Norway. Any legal actions related to these terms must be filed in the appropriate courts within that jurisdiction.
        </p>
      </ContentWrapper>
    </PolicyContainer>
  );
}