import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is Sweet Life Animes?",
      answer: "Sweet Life Animes is your creative universe where anime art meets emotion and technique! I'm Sweet, your sensei and friend, and I've created a comprehensive course to help you master anime art, from basic anatomy to advanced digital illustration. With over 500 creative otakus in our community, we're building something special together! 💜"
    },
    {
      question: "Who is this course for?",
      answer: "This course is perfect for aspiring anime artists, digital illustrators, hobbyists, and anyone passionate about anime art! Whether you're a complete beginner with zero experience or an intermediate artist looking to refine your skills, my teaching style makes complex techniques feel approachable and fun. If you love anime and want to create your own characters, this is for you!"
    },
    {
      question: "What will I learn in the course?",
      answer: "You'll master anime techniques from foundation to professional level! Including: character anatomy and proportions, emotional expression and storytelling, digital illustration workflows, advanced shading and lighting, composition and layout design, AI tools for anime creation, plus how to grow and monetize your art brand. We have 50+ comprehensive lessons covering everything you need!"
    },
    {
      question: "Do I need previous drawing experience?",
      answer: "Not at all! The course is designed for all skill levels. I start from the basics and gradually build up to advanced techniques. My teaching style is friendly and encouraging - I remember what it's like to be a beginner, so I make everything easy to understand. You'll be amazed at your progress in just a few weeks!"
    },
    {
      question: "What's included in the course?",
      answer: "Course members get access to everything: 50+ video lessons, exclusive brush packs and art resources, weekly art challenges, downloadable reference materials, private Discord community access, priority support from me personally, and lifetime access to all future updates. Plus, I add fresh content every week!"
    },
    {
      question: "How long does it take to complete?",
      answer: "The course is self-paced, so you go at your own speed! Most students see significant improvement within 3 months, but you have lifetime access, so there's no rush. Whether you dedicate 1 hour or 10 hours per week, you'll make progress. The important thing is consistency - and our supportive community helps keep you motivated! ✨"
    },
    {
      question: "Is there a community?",
      answer: "Yes! Our vibrant community is one of the best parts. You'll join 500+ creative otakus in our private Discord server where everyone shares their art, gives feedback, and supports each other. It's like having a creative family where everyone encourages your growth! 💜"
    },
    {
      question: "What software do I need?",
      answer: "You can use any digital art software you prefer! Most students use Procreate (iPad), Clip Studio Paint, Photoshop, or free options like Krita and MediBang Paint. The techniques I teach work across all platforms. I also show you how to integrate AI tools like Stable Diffusion and ChatGPT into your workflow for next-level creativity."
    },
    {
      question: "How much does it cost?",
      answer: "Visit the enrollment page to see current pricing and any special offers! The course provides incredible value - think of it as investing in yourself and your creative future. You get lifetime access, weekly updates, community support, and personal guidance from me. Plus, I share strategies to monetize your art so you can turn your passion into income! 🎨"
    },
    {
      question: "How do I get started?",
      answer: `Simply click the "Enroll Now" button to join the course! After enrollment, you'll get immediate access to all lessons, resources, and the community. You can start learning right away and join the weekly art challenges. I'll be there to guide you every step of the way. Ready to level up your art skills? Let's create something magical together! 💜✨`
    }
  ];

  return (
    <section id="faq" className={cn("relative overflow-hidden", SPACING.section.y)} aria-labelledby="faq-heading">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className={cn("container relative z-10", SPACING.section.x)}>
        {/* Header */}
        <div className={cn("text-center animate-slide-up", SPACING.container.narrow, SPACING.stack.normal, SPACING.margin.hero)}>
          <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow", SPACING.margin.close)}>
            <HelpCircle className="text-primary" size={20} />
            <span className={cn(TYPOGRAPHY.badge, "gradient-text")}>Got Questions?</span>
          </div>
          <h2 id="faq-heading" className={cn(TYPOGRAPHY.heading.h2, "gradient-text")}>
            Frequently Asked Questions
          </h2>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
            Everything you need to know about joining Sweet's creative universe! ✨
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={SPACING.container.content}>
          <Card className={cn(SPACING.card.spacious, "card-elevated animate-slide-up")} style={{ contain: 'layout style paint' }} role="region" aria-label="Frequently Asked Questions List">
            <Accordion type="single" collapsible className={SPACING.stack.normal}>
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-primary/20 last:border-0"
                >
                  <AccordionTrigger 
                    className={cn(TYPOGRAPHY.body.intro, "text-left hover:text-primary transition-colors py-4 font-semibold hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded flex items-start gap-3")}
                    aria-label={`Question: ${faq.question}`}
                  >
                    <Sparkles className="text-muted-foreground/60 mt-1 flex-shrink-0" size={16} />
                    <span className="flex-1">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className={cn(TYPOGRAPHY.body.default, "text-muted-foreground leading-relaxed pb-4 pt-2 pl-8")} role="region" aria-label={`Answer to: ${faq.question}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};
