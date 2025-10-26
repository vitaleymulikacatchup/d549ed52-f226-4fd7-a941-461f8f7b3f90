"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Anchor, Calendar, Crown, DollarSign, MapPin, Quote, Ship, Sparkles, Star, Sun, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Yachts", id: "yachts" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Nautilus"
          button={{
            text: "Charter Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Luxury Yacht Charters"
          description="Experience the ultimate luxury on pristine waters with our exclusive fleet of world-class yachts"
          tag="Premium Experience"
          tagIcon={Anchor}
          buttons={[
            { text: "View Fleet", href: "yachts" },
            { text: "Book Charter", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/238367/pexels-photo-238367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Experience serene sailing at sunset aboard a yacht navigating open waters."
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Nautilus Yachts"
          description={[
            "For over two decades, we have been the premier destination for luxury yacht charters, offering unparalleled service and an exclusive fleet of world-class vessels.",
            "Our commitment to excellence ensures every voyage becomes an unforgettable journey, where luxury meets the endless horizon of possibility."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
        />
      </div>

      <div id="yachts" data-section="yachts">
        <ProductCardTwo
          title="Premium Fleet"
          description="Discover our collection of luxury yachts, each vessel meticulously maintained and equipped for the ultimate charter experience"
          tag="Our Fleet"
          tagIcon={Ship}
          products={[
            {
              id: "1",
              brand: "Azimut",
              name: "Ocean Majesty",
              price: "$15,000/day",
              rating: 5,
              reviewCount: "48",
              imageSrc: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A modern luxury yacht cruising swiftly on a calm river under a clear blue sky."
            },
            {
              id: "2",
              brand: "Sunseeker",
              name: "Azure Dream",
              price: "$22,000/day",
              rating: 5,
              reviewCount: "62",
              imageSrc: "https://images.pexels.com/photos/34427759/pexels-photo-34427759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Free stock photo of 2025 travel, adventure photographer, adventure travel"
            },
            {
              id: "3",
              brand: "Ferretti",
              name: "Neptune's Crown",
              price: "$35,000/day",
              rating: 5,
              reviewCount: "31",
              imageSrc: "https://images.pexels.com/photos/33544864/pexels-photo-33544864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Man enjoys coffee on yacht deck overlooking the serene sea, providing a sense of adventure and relaxation."
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Luxury Services"
          description="Every detail crafted to perfection for your ultimate yachting experience"
          tag="Services"
          tagIcon={Crown}
          features={[
            {
              id: "01",
              title: "Professional Crew",
              description: "Experienced captains and crew members ensure your safety and comfort throughout your voyage",
              imageSrc: "https://images.pexels.com/photos/3582560/pexels-photo-3582560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ship captain operates navigation systems overlooking Istanbul waters. Maritime expertise at its finest."
            },
            {
              id: "02",
              title: "Concierge Service",
              description: "Personal concierge to handle dining reservations, activities, and all special requests during your charter",
              imageSrc: "https://images.pexels.com/photos/6169650/pexels-photo-6169650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Two warehouse employees organizing and packing parcels for delivery in a modern indoor setting."
            },
            {
              id: "03",
              title: "Luxury Amenities",
              description: "State-of-the-art facilities including spa services, gourmet dining, and entertainment systems",
              imageSrc: "https://images.pexels.com/photos/6510307/pexels-photo-6510307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Experience a serene journey on a yacht with this spiral staircase leading to an ocean view."
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Charter Packages"
          description="Choose the perfect charter experience tailored to your desires"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "1",
              badge: "Day Charter",
              badgeIcon: Sun,
              price: "$8,000",
              subtitle: "Perfect for day adventures",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "services" }
              ],
              features: [
                "8-hour charter",
                "Professional crew",
                "Fuel included",
                "Water sports equipment",
                "Refreshments provided"
              ]
            },
            {
              id: "2",
              badge: "Weekend Getaway",
              badgeIcon: Calendar,
              price: "$25,000",
              subtitle: "Two-day luxury escape",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "services" }
              ],
              features: [
                "2-day charter",
                "Overnight accommodation",
                "All meals included",
                "Premium amenities",
                "Concierge service"
              ]
            },
            {
              id: "3",
              badge: "Weekly Charter",
              badgeIcon: Sparkles,
              price: "$120,000",
              subtitle: "Ultimate luxury experience",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "services" }
              ],
              features: [
                "7-day charter",
                "Multiple destinations",
                "Gourmet chef service",
                "Spa treatments",
                "Helicopter transfers"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Two decades of delivering extraordinary yachting experiences"
          tag="Our Record"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "Charters",
              description: "Successful luxury charters completed",
              icon: Ship
            },
            {
              id: "2",
              value: "50+",
              title: "Destinations",
              description: "Exclusive locations worldwide",
              icon: MapPin
            },
            {
              id: "3",
              value: "98%",
              title: "Satisfaction",
              description: "Client satisfaction rate",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Experiences"
          description="Hear from our distinguished guests about their unforgettable journeys"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "James Morrison",
              role: "CEO",
              company: "Morrison Industries",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Free stock photo of 12th architecture, active man, american classic"
            },
            {
              id: "2",
              name: "Isabella Chen",
              role: "Entrepreneur",
              company: "Tech Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34445309/pexels-photo-34445309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "elegant woman portrait - Photo by don chowdhury"
            },
            {
              id: "3",
              name: "Robert Hamilton",
              role: "Investment Director",
              company: "Hamilton Capital",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "4",
              name: "Victoria Sterling",
              role: "Founder",
              company: "Sterling Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "5",
              name: "Alexandra Dubois",
              role: "Art Collector",
              company: "Dubois Gallery",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389638/pexels-photo-34389638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "luxury lifestyle woman portrait - Photo by Đan Thy Nguyễn Mai"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Begin Your Journey"
          description="Contact our charter specialists to plan your perfect luxury yacht experience. We'll handle every detail to make your voyage extraordinary."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "dates", type: "text", placeholder: "Preferred Dates", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your ideal charter experience...",
            rows: 5,
            required: true
          }}
          buttonText="Request Charter"
          imageSrc="https://images.pexels.com/photos/15141414/pexels-photo-15141414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A luxury yacht sailing on calm blue sea under a clear sky, perfect for travel enthusiasts."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                { label: "Day Charters", href: "services" },
                { label: "Weekly Charters", href: "services" },
                { label: "Event Hosting", href: "contact" },
                { label: "Concierge Service", href: "services" }
              ]
            },
            {
              title: "Fleet",
              items: [
                { label: "Motor Yachts", href: "yachts" },
                { label: "Sailing Yachts", href: "yachts" },
                { label: "Mega Yachts", href: "yachts" },
                { label: "Luxury Catamarans", href: "yachts" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "about" },
                { label: "Careers", href: "contact" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Nautilus Yachts"
        />
      </div>
    </ThemeProvider>
  );
}