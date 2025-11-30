import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FooterNauiterMaster } from "@/components/shared/FooterNauiterMaster";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";
import { FileText, AlertCircle, DollarSign, Users, Copyright, Ban } from "lucide-react";

const Terms = () => {
  const lastUpdated = "November 30, 2025";

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className={cn("container", SPACING.section.x)}>
          {/* Header */}
          <div className={cn("text-center max-w-3xl mx-auto", SPACING.margin.hero)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow mb-6">
              <FileText className="text-primary" size={20} />
              <span className={cn(TYPOGRAPHY.badge)}>Legal Agreement</span>
            </div>
            
            <h1 className={cn(TYPOGRAPHY.heading.h1, "gradient-text mb-4")}>
              Terms of Service
            </h1>
            
            <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-invert">
            <Section
              icon={<FileText className="text-primary" size={24} />}
              title="1. Agreement to Terms"
              content={
                <>
                  <p>By accessing and using Sweet Life Animes website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                  <p><strong>If you do not agree with any of these terms, you are prohibited from using or accessing this site.</strong></p>
                  <ul>
                    <li>These terms apply to all visitors, users, and customers</li>
                    <li>You must be at least 13 years old to use our services</li>
                    <li>Users under 18 require parental consent</li>
                    <li>By using our services, you represent that you have the legal capacity to enter into this agreement</li>
                  </ul>
                </>
              }
            />

            <Section
              icon={<DollarSign className="text-secondary" size={24} />}
              title="2. Course Access and Payments"
              content={
                <>
                  <p><strong>Course Enrollment:</strong></p>
                  <ul>
                    <li>All course purchases are final and non-refundable after 14 days</li>
                    <li>You will receive lifetime access to purchased course content</li>
                    <li>Course content may be updated, but core curriculum remains accessible</li>
                    <li>Access is granted for personal, non-commercial use only</li>
                  </ul>
                  <p><strong>Pricing and Payments:</strong></p>
                  <ul>
                    <li>All prices are in USD unless otherwise stated</li>
                    <li>Promotional offers are subject to availability and may expire</li>
                    <li>Payment processing is handled securely by third-party providers</li>
                    <li>You are responsible for any applicable taxes</li>
                  </ul>
                  <p><strong>Refund Policy:</strong></p>
                  <ul>
                    <li>14-day money-back guarantee (no questions asked)</li>
                    <li>Refund requests must be submitted via email</li>
                    <li>Processing time: 5-10 business days</li>
                    <li>Access to course materials is revoked upon refund</li>
                  </ul>
                </>
              }
            />

            <Section
              icon={<Copyright className="text-accent" size={24} />}
              title="3. Intellectual Property Rights"
              content={
                <>
                  <p><strong>Our Content:</strong></p>
                  <ul>
                    <li>All course materials, videos, images, and text are protected by copyright</li>
                    <li>Sweet Life Animes retains all rights to original content</li>
                    <li>Unauthorized reproduction or distribution is strictly prohibited</li>
                    <li>You may not share, sell, or redistribute course materials</li>
                  </ul>
                  <p><strong>Your Content:</strong></p>
                  <ul>
                    <li>You retain ownership of artwork you create using our courses</li>
                    <li>By sharing in our community, you grant us permission to display your work</li>
                    <li>We may feature student artwork in marketing materials (with attribution)</li>
                    <li>You can request removal of your work at any time</li>
                  </ul>
                </>
              }
            />

            <Section
              icon={<Users className="text-primary" size={24} />}
              title="4. User Conduct and Community"
              content={
                <>
                  <p>As a member of Sweet Life Animes community, you agree to:</p>
                  <p><strong>Do's:</strong></p>
                  <ul>
                    <li>Be respectful and supportive of fellow students</li>
                    <li>Share your artwork and progress for feedback</li>
                    <li>Provide constructive criticism</li>
                    <li>Follow community guidelines in Discord and social media</li>
                  </ul>
                  <p><strong>Don'ts:</strong></p>
                  <ul>
                    <li>Harass, bully, or discriminate against others</li>
                    <li>Share inappropriate or offensive content</li>
                    <li>Spam or promote external products/services</li>
                    <li>Share course login credentials with others</li>
                    <li>Distribute pirated or copyrighted materials</li>
                  </ul>
                  <p><strong>Consequences of Violation:</strong> We reserve the right to suspend or terminate access without refund for violations of these terms.</p>
                </>
              }
            />

            <Section
              icon={<Ban className="text-secondary" size={24} />}
              title="5. Prohibited Uses"
              content={
                <>
                  <p>You may NOT use our services to:</p>
                  <ul>
                    <li>Violate any local, state, national, or international law</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit viruses, malware, or harmful code</li>
                    <li>Attempt to hack or compromise system security</li>
                    <li>Collect user information without consent</li>
                    <li>Create multiple accounts to abuse promotions</li>
                    <li>Use automated systems (bots) to access services</li>
                    <li>Reverse engineer or decompile course materials</li>
                  </ul>
                </>
              }
            />

            <Section
              icon={<AlertCircle className="text-accent" size={24} />}
              title="6. Disclaimers and Limitations"
              content={
                <>
                  <p><strong>No Guarantees:</strong></p>
                  <ul>
                    <li>We do not guarantee specific results or skill improvements</li>
                    <li>Success depends on individual effort and practice</li>
                    <li>Course content is for educational purposes only</li>
                  </ul>
                  <p><strong>Service Availability:</strong></p>
                  <ul>
                    <li>We strive for 99% uptime but cannot guarantee uninterrupted access</li>
                    <li>Maintenance and updates may temporarily affect availability</li>
                    <li>We are not liable for technical issues or data loss</li>
                  </ul>
                  <p><strong>Limitation of Liability:</strong></p>
                  <p>Sweet Life Animes shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service, even if we have been advised of the possibility of such damages.</p>
                </>
              }
            />

            <Section
              icon={<FileText className="text-primary" size={24} />}
              title="7. Changes to Terms"
              content={
                <>
                  <p>We reserve the right to modify these Terms of Service at any time:</p>
                  <ul>
                    <li>Changes will be posted on this page with an updated date</li>
                    <li>Material changes will be communicated via email</li>
                    <li>Continued use after changes constitutes acceptance</li>
                    <li>You are responsible for reviewing terms periodically</li>
                  </ul>
                </>
              }
            />

            <Section
              icon={<Users className="text-secondary" size={24} />}
              title="8. Contact Information"
              content={
                <>
                  <p>For questions, concerns, or disputes regarding these Terms of Service:</p>
                  <ul>
                    <li><strong>Email:</strong> support@sweetlifeanimes.com</li>
                    <li><strong>Instagram:</strong> <a href="https://www.instagram.com/sweetlifeanimes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@sweetlifeanimes</a></li>
                    <li><strong>Response Time:</strong> Within 48 hours</li>
                  </ul>
                  <p>For legal matters, please include "LEGAL" in your email subject line.</p>
                </>
              }
            />

            <div className={cn("bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 mt-8", SPACING.stack.tight)}>
              <p className={cn(TYPOGRAPHY.body.default, "text-foreground font-semibold mb-2")}>
                🎨 Thank You for Choosing Sweet Life Animes!
              </p>
              <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground")}>
                We're excited to have you in our creative community. By following these terms, you help us maintain a positive, supportive environment where everyone can grow their anime art skills. Let's create something magical together! 💜
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

export default Terms;
