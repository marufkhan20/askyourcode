"use client";

import { AnimatedDemo } from "@/components/animated-demo";
import { FloatingDots } from "@/components/floating-dots";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Github,
  MessageSquare,
  Search,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary/10 via-primary/5 to-background pt-2 pb-5 md:pt-2 md:pb-8">
        <FloatingDots />

        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary rounded-lg p-2">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">AskYourCode</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="outline" className="rounded-full px-6">
                  Login
                </Button>
              </Link>
              <Link href="/login?tab=register">
                <Button className="rounded-full px-6">Signup</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                AskYourCode <span className="text-primary">Software</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Connect your GitHub repositories and get instant answers about
                your codebase using AI-powered insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/login?tab=register">
                <Button size="lg" className="rounded-full px-8 py-6">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Wave */}
          <div className="flex justify-center mt-16">
            <motion.svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <path
                d="M0,20 C20,10 40,30 60,20 C80,10 100,30 120,20 C140,10 160,30 180,20 C200,10 220,30 240,20"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>

          {/* Browser Mockup */}
          <motion.div
            className="mt-5 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <AnimatedDemo />
          </motion.div>
        </section>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to understand and navigate your codebase
                with ease
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start for free and upgrade as your needs grow
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-sm border ${
                plan.featured ? "border-primary" : "border-gray-100"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.featured && (
                <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="ml-1 text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-gray-600">{plan.description}</p>

              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Zap className="mr-2 h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href} className="mt-8 block">
                <Button
                  className={`w-full rounded-full py-6 ${
                    !plan.featured &&
                    "bg-white text-primary border border-primary hover:bg-primary/10"
                  }`}
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Understand Your Code Better?
              </h2>
              <p className="text-lg mb-8 text-white/80">
                Join thousands of developers who are using our platform to
                navigate their codebase with ease.
              </p>
              <Link href="/login?tab=register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90"
                >
                  Get Started for Free
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="bg-primary rounded-lg p-2">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CodeQA</span>
            </div>

            <div className="flex flex-wrap gap-8 mb-6 md:mb-0 justify-center">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Contact
              </Link>
            </div>

            <div className="text-sm text-gray-500">
              © 2025 CodeQA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <Github className="h-6 w-6 text-primary" />,
    title: "GitHub Integration",
    description:
      "Connect your public and private repositories with a few clicks.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "AI-Powered Q&A",
    description:
      "Ask questions about your code and get accurate answers instantly.",
  },
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "Code Navigation",
    description:
      "Find functions, classes, and files across your entire codebase.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for individual developers or small projects.",
    features: [
      "1 GitHub repository",
      "Basic Q&A functionality",
      "Limited queries per day",
      "Community support",
    ],
    buttonText: "Get Started",
    href: "/login?tab=register",
    featured: false,
  },
  {
    name: "Premium",
    price: "19",
    description: "Ideal for professional developers and teams.",
    features: [
      "Unlimited GitHub repositories",
      "Advanced Q&A capabilities",
      "Unlimited queries",
      "Priority support",
      "API access",
    ],
    buttonText: "Upgrade Now",
    href: "/login?tab=register&plan=premium",
    featured: true,
  },
];
