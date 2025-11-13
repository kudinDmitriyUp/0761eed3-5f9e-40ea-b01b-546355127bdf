"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BookOpen, Briefcase, Clock, DollarSign, FolderOpen, Heart, HelpCircle, MessageSquare, Palette, Star, TrendingUp, User } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="grid"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Portfolio", id: "feature" },
            { name: "Services", id: "product" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Idan Zeidman"
          button={{
            text: "Get in Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Creative Design Studio"
          description="Transforming ideas into compelling visual experiences through innovative design solutions"
          tag="Portfolio Designer"
          tagIcon={Palette}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/gfd31d57eb79a726c4a16a12824072968ad574a3b7a0cf0fe4888cd5e755c916df5dd6c214f3fa46d789c9c0349ce2d161b6a4f86af00108e050f1902326bef19_1280.jpg",
              imageAlt: "Design showcase"
            },
            {
              imageSrc: "https://pixabay.com/get/gf93964dbdd48c4fcbefe1b9ececed838e771402fa98467871458e22048c4725807f003ffcbd22a29d72e3942703b949877f453a5be7817f00f953f6ae452c107_1280.jpg",
              imageAlt: "Creative workspace"
            },
            {
              imageSrc: "https://pixabay.com/get/g642c3933cc1f5c34878d19945227000e0a0fc2b41fae7877a23ffa06431e476cef95fe0e026b2dd83f517ed8edb6ae7f77fd58bb71108cb099551ca1b039097a_1280.jpg",
              imageAlt: "Brand identity"
            },
            {
              imageSrc: "https://pixabay.com/get/g9ffb5d04c1ca6aa9937d6bb1bc813ddec0d2966e538764c26f604f68c037f707b6b4671fce77debdbb3a8f144ef9d28800e4cb209511255acc9c355e1621cae5_1280.jpg",
              imageAlt: "Web interface"
            },
            {
              imageSrc: "https://pixabay.com/get/g586dfe212c7aa9458db3c212d2f11c8983db67ee009f9837200cb685b888b7e64eca8a9cd0649fd10ef2892fb449f88f9d32f7dd8e78a4b6ad7b3116ccd20e6d_1280.jpg",
              imageAlt: "Design process"
            }
          ]}
          buttons={[
            { text: "View Portfolio", href: "feature" },
            { text: "Get in Touch", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Idan"
          description={[
            "I'm a passionate designer dedicated to creating meaningful visual experiences that connect brands with their audiences.",
            "My approach combines strategic thinking with creative execution, ensuring every project delivers both aesthetic appeal and functional results."
          ]}
          buttons={[
            { text: "View My Work", href: "feature" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Design Services"
          description="Comprehensive design solutions tailored to your unique needs and vision"
          tag="What I Offer"
          tagIcon={Briefcase}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Brand Identity Design",
              description: "Complete brand identity development including logo design, color palettes, typography, and brand guidelines that establish a strong visual presence.",
              imageSrc: "https://pixabay.com/get/g4ada75b2e27cd1d109575c64b7b6175257377a9743fe581f9c3ec826d281e6d50b7dc08fee1b76e3a8cfd92f2669bab9fd380ca0015931884c24a23e96484504_1280.jpg",
              imageAlt: "Brand identity design"
            },
            {
              id: "2",
              title: "Web Design & Development",
              description: "Modern, responsive websites that combine beautiful design with seamless functionality and optimal user experience.",
              imageSrc: "https://pixabay.com/get/g9d5464ee7a9545d869d882171d323f5454dc20332912c4d4f78fa073c8330fa103a73716e64d3dbdab9075750535e228765464cac3a1eceba6e8cedbb2923163_1280.jpg",
              imageAlt: "Web design development"
            },
            {
              id: "3",
              title: "Creative Strategy",
              description: "Strategic design thinking that aligns visual communication with business goals and target audience needs.",
              imageSrc: "https://pixabay.com/get/g8ac0227b7e7f1004599ae55f61f49331d3f05e1777b6b119c413c8746baa3fe2936f58f16794bdcd886c1377be51f86e1bdfa951b173465d81c0af1fe0f204f3_1280.jpg",
              imageAlt: "Creative strategy"
            },
            {
              id: "4",
              title: "Visual Design Systems",
              description: "Cohesive design systems that ensure consistency across all touchpoints and scalable brand experiences.",
              imageSrc: "https://pixabay.com/get/g7cb38c2b4e0d7248292d06014792b887ab36637d46f5ff1f08008b7da5b496567c446919b2812685e887e17393e311d7eaf64ac94aecef5ae128afd723c6dd5d_1280.jpg",
              imageAlt: "Visual design systems"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Projects"
          description="A selection of recent work showcasing diverse design solutions"
          tag="Portfolio"
          tagIcon={FolderOpen}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "Brand Identity",
              name: "Modern Corporate Rebrand",
              price: "View Case Study",
              rating: 5,
              reviewCount: "Completed 2024",
              imageSrc: "https://pixabay.com/get/g0d4a0858453e4a88649cd70063d3e03f673853cc01933ce4b1fcacb1dad2523e10ded12e0261f4005ff9ebefbd95b9a14876ca5957430cc57e7504b6ab1e4b3f_1280.jpg",
              imageAlt: "Brand identity project"
            },
            {
              id: "2",
              brand: "Web Design",
              name: "E-commerce Platform",
              price: "View Project",
              rating: 5,
              reviewCount: "Live Site",
              imageSrc: "https://pixabay.com/get/gc6b5f291899f66a0810b98670f33a582424b07ec56690bbf7c992f8c7f6eac76fed4a2561dcb6e7034f118ddaedf068207e7df3fcd4124b941aba5172458b470_1280.jpg",
              imageAlt: "Website design project"
            },
            {
              id: "3",
              brand: "Digital Marketing",
              name: "Campaign Design Suite",
              price: "View Work",
              rating: 5,
              reviewCount: "Multi-channel",
              imageSrc: "https://pixabay.com/get/g0aef3562b2bf2dfc820bb33f62110e14ece56d70a1481fca53a1f783cc628efcbb175df3d347105c21f1ca1ada1eb094934fbacba0b3b3b832066639471af19c_1280.jpg",
              imageAlt: "Marketing design project"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Design Packages"
          description="Flexible pricing options to fit your project needs and budget"
          tag="Investment"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              badge: "Popular",
              badgeIcon: Star,
              price: "$2,500",
              subtitle: "Perfect for small businesses and startups",
              features: [
                "Complete brand identity",
                "Logo design & variations",
                "Color palette & typography",
                "Brand guidelines document",
                "Business card design"
              ]
            },
            {
              id: "2",
              badge: "Comprehensive",
              badgeIcon: Award,
              price: "$5,000",
              subtitle: "Ideal for established businesses",
              features: [
                "Everything in Starter",
                "Website design (5 pages)",
                "Marketing materials",
                "Social media templates",
                "Brand strategy consultation",
                "3 months support"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Design Impact"
          description="Proven results that showcase the effectiveness of strategic design"
          tag="Results"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "50+",
              title: "Projects",
              description: "Successfully completed design projects",
              icon: Briefcase
            },
            {
              id: "2",
              value: "98%",
              title: "Satisfaction",
              description: "Client satisfaction rate",
              icon: Heart
            },
            {
              id: "3",
              value: "5+",
              title: "Years",
              description: "Years of design experience",
              icon: Clock
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet the Designer"
          description="The creative mind behind the designs"
          tag="About"
          tagIcon={User}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Idan Zeidman",
              role: "Lead Designer",
              imageSrc: "https://pixabay.com/get/g2a2fcd6cee64702223ea62aee7415830f6bd977d16df338082183c3174baa6826da80667addd27c502f3cd5bd48866c97b36575838709c550f5dfea70adf6ca7_1280.jpg",
              imageAlt: "Idan Zeidman"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Clients Say"
          description="Real feedback from satisfied clients"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Marketing Director",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gd775336821b0a6046e7dd166896d9263766cf1f7fcaaaef73adc66307a93d4480796d1c687c991c758216d27a41987793795eee956e634514fa9948b09af4fb5_1280.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Founder",
              company: "Bloom Wellness",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g18433785520c45a7aa00851e93b6055bf0c5eb060981dc3702f5cb408f5c4879e3462f96fc9df29a7f562cd04df73af260c0a1895600737f796f6d0384057e98_1280.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Brand Manager",
              company: "Urban Collective",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g72070cb94fd8b896ce4bac5d839812260a0b2fd8098ce2a329157e1d02c4dcb57bc868f223fd0b83fa88898ddae07f7999a9278e3bd8e62d0b1ceadae8b429eb_1280.jpg",
              imageAlt: "Emma Thompson"
            },
            {
              id: "4",
              name: "David Park",
              role: "CEO",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9c1a1bbcf3b33f10d5ea4ff3f93e0483311f364477911cefb84ad06ed01b25250cb1d8129d30b170a0e42fa548a7b9b7f830d05f289181c08ddc33d16b721572_1280.jpg",
              imageAlt: "David Park"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Common questions about my design process and services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://pixabay.com/get/g3f66fa8efbe55fe97098678cc5b46a85be08517c121dcf5bbc0c1ea89ea34ae29984732b0025ad68a9c10139ac07aabc9cdd7e42b1f1e457eb23ccc4f4cb3156_1280.jpg"
          imageAlt="Design consultation"
          faqs={[
            {
              id: "1",
              title: "What's included in your design process?",
              content: "My design process includes initial consultation, research and strategy, concept development, design execution, and final delivery with all necessary files and guidelines."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary depending on scope. Brand identity projects typically take 2-3 weeks, while website design can take 4-6 weeks from concept to completion."
            },
            {
              id: "3",
              title: "Do you work with clients remotely?",
              content: "Yes, I work with clients globally through video calls, collaborative tools, and clear communication processes to ensure seamless project delivery."
            },
            {
              id: "4",
              title: "What files will I receive?",
              content: "You'll receive all source files, various format exports, brand guidelines (when applicable), and detailed documentation for future reference and use."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Design Insights"
          description="Thoughts and insights on design, creativity, and visual communication"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Design Trends",
              title: "The Evolution of Modern Branding",
              excerpt: "Exploring how brand identities have evolved in the digital age and what it means for businesses today.",
              imageSrc: "https://pixabay.com/get/g237f76bd6685d6208f42e25b064e6f98943ce28239a38b97099a9cfbf1af21472a465cb4a3468c84ca6120bae81bd14fb971fa5a954a1bdfc0b62f28e8adebde_1280.jpg",
              imageAlt: "Design trends",
              authorName: "Idan Zeidman",
              authorAvatar: "https://pixabay.com/get/g2a2fcd6cee64702223ea62aee7415830f6bd977d16df338082183c3174baa6826da80667addd27c502f3cd5bd48866c97b36575838709c550f5dfea70adf6ca7_1280.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Creative Process",
              title: "Finding Inspiration in Everyday Design",
              excerpt: "How to cultivate a designer's eye and find creative inspiration in the world around us.",
              imageSrc: "https://pixabay.com/get/g0ab3e324d02205ae9bf5aebc32681bc1879e6c3fa6c04584fa2d0fdfc9eb21b97b20cbe0c8331365cf21dc28915ac94129f351863299b1eef16843ac07b8a73a_1280.jpg",
              imageAlt: "Creative inspiration",
              authorName: "Idan Zeidman",
              authorAvatar: "https://pixabay.com/get/g2a2fcd6cee64702223ea62aee7415830f6bd977d16df338082183c3174baa6826da80667addd27c502f3cd5bd48866c97b36575838709c550f5dfea70adf6ca7_1280.jpg",
              date: "08 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Let's Create Something Amazing"
          description="Ready to bring your vision to life? Let's discuss your project and explore how we can work together to create impactful design solutions."
          imageSrc="https://pixabay.com/get/g3f66fa8efbe55fe97098678cc5b46a85be08517c121dcf5bbc0c1ea89ea34ae29984732b0025ad68a9c10139ac07aabc9cdd7e42b1f1e457eb23ccc4f4cb3156_1280.jpg"
          imageAlt="Design collaboration"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Send Message"
          termsText="I'll get back to you within 24 hours to discuss your project needs."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Idan Zeidman"
          copyrightText="© 2025 | Idan Zeidman Design"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Brand Identity", href: "feature" },
                { label: "Web Design", href: "feature" },
                { label: "Creative Strategy", href: "feature" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Portfolio", href: "feature" },
                { label: "Process", href: "about" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}