import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Privacy Policy"
        title="Privacy & Important Notices"
        links={[
          { label: "Back to People of NASA", href: "/" },
          { label: "Honorary Crew", href: "/honorary-nasa-employees" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Join the Team", href: "/join-the-team" },
          { label: "Starship Game", href: "/starship-game" }
        ]}
      />

      <section className="hero hero--compact">
        <div className="hero__backdrop">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Legal & Security</span>
            <h2>Your privacy is a priority in the mission.</h2>
            <p>
              NasaEmployees.com is committed to protecting your privacy and
              providing a secure online experience. This policy explains how we
              handle information and protect the integrity of our digital services.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">General Policy</span>
          <h3>Privacy Policy and Important Notices</h3>
          <p>
            We believe that your information should be used only for its intended
            purpose. Any personal information you provide is voluntary, but it
            may be required to access specific services or interactive features
            of the site.
          </p>
          <p>
            We do not sell, rent, or lease our visitor lists to third parties.
            Your information is protected and handled with the care required to
            maintain public trust.
          </p>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Data Collection</span>
          <h3>Automatically Collected Information</h3>
          <p>
            When you visit NasaEmployees.com, we may automatically collect and
            store technical information about your visit. This includes your IP
            address, browser type, operating system, the date and time of your
            visit, and the pages you view.
          </p>
          <p>
            This information is used to help us make the site more useful to
            visitors to learn about the number of visitors to our site and the
            types of technology our visitors use. We do not track or record
            information about individuals and their visits.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Tracking</span>
            <h3>Cookies and Customization</h3>
          </div>
        </div>
        <div className="callout-grid">
          <article className="callout-card">
            <h4>Session Cookies</h4>
            <p>
              We may use session cookies to provide streamlined navigation. These
              are temporary files that are deleted as soon as you close your web
              browser.
            </p>
          </article>
          <article className="callout-card">
            <h4>Persistent Cookies</h4>
            <p>
              We may use persistent cookies to remember your preferences across
              visits. These remain on your device until they expire or are
              manually deleted.
            </p>
          </article>
          <article className="callout-card">
            <h4>User Control</h4>
            <p>
              You can set your browser to refuse cookies or to alert you when
              cookies are being sent. If you do so, please note that some parts
              of this site may not function properly.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Safeguards</span>
          <h3>Interaction with Children (COPPA)</h3>
          <p>
            NasaEmployees.com complies with the Children’s Online Privacy
            Protection Act (COPPA). We do not knowingly collect personal
            information from children under the age of 13 without parental
            consent.
          </p>
          <p>
            If we learn that we have collected personal information from a child
            under age 13 without verification of parental consent, we will
            delete that information as quickly as possible.
          </p>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Security</span>
          <h3>Web Site Security Notice</h3>
          <p>
            For site security purposes and to ensure that this service remains
            available to all users, we employ software programs to monitor
            network traffic to identify unauthorized attempts to upload or change
            information, or otherwise cause damage.
          </p>
          <p>
            Unauthorized attempts to upload information or change information on
            this service are strictly prohibited and may be punishable under the
            Computer Fraud and Abuse Act of 1986.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Accessibility</span>
            <h3>Accessibility Statement</h3>
          </div>
          <p>
            We are committed to making our website accessible to all visitors,
            including those with disabilities. We strive to follow the standards
            set forth in Section 508 of the Rehabilitation Act.
          </p>
        </div>
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Contact</span>
            <h3>Contact Information</h3>
          </div>
          <p>
            If you have any questions or comments about our privacy policy or
            how we handle your data, please contact us at mission-control@nasaemployees.com.
          </p>
        </div>
      </section>

      <PublicFooter
        title="Protecting the mission and its people."
        text="Integrity is at the heart of everything we do. Our privacy practices are designed to reflect the same rigor we bring to exploration."
      />
    </main>
  );
}
