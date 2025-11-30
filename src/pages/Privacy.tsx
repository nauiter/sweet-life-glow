import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FooterNauiterMaster } from "@/components/shared/FooterNauiterMaster";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";
import { Shield, Mail, Lock, Eye, Database, UserCheck } from "lucide-react";

const Privacy = () => {
  const lastUpdated = "November 30, 2025";

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className={cn("container", SPACING.section.x)}>
          {/* Header */}
          <div className={cn("text-center max-w-3xl mx-auto", SPACING.margin.hero)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow mb-6">
              <Shield className="text-primary" size={20} />
              <span className={cn(TYPOGRAPHY.badge)}>Your Privacy Matters</span>
            </div>
            
            <h1 className={cn(TYPOGRAPHY.heading.h1, "gradient-text mb-4")}>
              Privacy Policy
            </h1>
            
            <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-invert">
            <Section
              icon={<Eye className="text-primary" size={24} />}
              title="1. Information We Collect"
              content={
                <>
                  <p>We collect information that you provide directly to us when you:</p>
                  <ul>
                    <li>Create an account or enroll in our courses</li>
                    <li>Make a purchase or transaction</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Contact us for support or inquiries</li>
                    <li>Participate in our community (Discord, social media)</li>
                  </ul>
                  <p><strong>Information collected may include:</strong></p>
                  <ul>
                    <li>Name and email address</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Profile information and preferences</li>
                    <li>Communication records and support tickets</li>
                    <li>Usage data and analytics</li>
                  </ul>
                </>
              }
            />

            <Section
              icon={<Database className="text-secondary" size={24} />}
              title="2. How We Use Your Information"
              content={
                <>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our courses and services</li>
                    <li>Process transactions and send purchase confirmations</li>
                    <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                    <li>Respond to your comments, questions, and support requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, prevent, and address technical issues or fraud</li>
                    <li>Personalize your learning experience</li>
                  </ul>
                </>
              }
            />

            <Section
              icon={<Lock className="text-accent" size={24} />}
              title="3. Data Security"
              content={
                <>
                  <p>We take data security seriously and implement appropriate technical and organizational measures to protect your personal information:</p>
                  <ul>
                    <li>Secure SSL/TLS encryption for data transmission</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal data (need-to-know basis)</li>
                    <li>Secure payment processing through trusted third-party providers</li>
                    <li>Data backup and recovery procedures</li>
                  </ul>
                  <p>However, no method of transmission over the Internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.</p>
                </>
              }
            />

            <Section
              icon={<UserCheck className="text-primary" size={24} />}
              title="4. Your Rights"
              content={
                <>
                  <p>You have the following rights regarding your personal data:</p>
                  <ul>
                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Data Portability:</strong> Request your data in a structured, commonly used format</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                  </ul>
                  <p>To exercise these rights, please contact us at the email below.</p>
                </>
              }
            />

            <Section
              icon={<Shield className="text-secondary" size={24} />}
              title="5. Cookies and Tracking"
              content={
                <>
                  <p>We use cookies and similar tracking technologies to:</p>
                  <ul>
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our website</li>
                    <li>Improve our services and user experience</li>
                    <li>Provide personalized content and recommendations</li>
                  </ul>
                  <p>You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
                </>
              }
            />

            <Section
              icon={<Database className="text-accent" size={24} />}
              title="6. Third-Party Services"
              content={
                <>
                  <p>We may share your information with third-party service providers who assist us in:</p>
                  <ul>
                    <li>Payment processing (Stripe, PayPal, etc.)</li>
                    <li>Email delivery and marketing (email service providers)</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Customer support and community management (Discord)</li>
                    <li>Course hosting and content delivery</li>
                  </ul>
                  <p>These providers are contractually obligated to protect your data and use it only for the purposes we specify.</p>
                </>
              }
            />

            <Section
              icon={<Mail className="text-primary" size={24} />}
              title="7. Contact Us"
              content={
                <>
                  <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                  <ul>
                    <li><strong>Email:</strong> privacy@sweetlifeanimes.com</li>
                    <li><strong>Instagram:</strong> <a href="https://www.instagram.com/sweetlifeanimes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@sweetlifeanimes</a></li>
                    <li><strong>Response Time:</strong> We aim to respond within 48 hours</li>
                  </ul>
                </>
              }
            />

            <div className={cn("bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 mt-8", SPACING.stack.tight)}>
              <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground italic")}>
                <strong>Note:</strong> We reserve the right to update this Privacy Policy at any time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FooterNauiterMaster />
      <ScrollToTop />
    </div>
  );
};

const Section = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
  <div className={cn("bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/20 mb-8")}>
    <div className="flex items-start gap-4 mb-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h2 className={cn(TYPOGRAPHY.heading.h3, "gradient-text mt-2")}>{title}</h2>
    </div>
    <div className={cn(TYPOGRAPHY.body.default, "text-muted-foreground space-y-4 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_strong]:text-foreground [&_strong]:font-semibold")}>
      {content}
    </div>
  </div>
);

export default Privacy;
