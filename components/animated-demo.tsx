"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Github, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AnimatedDemo() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [url, setUrl] = useState("https://codeqa.app");
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Click positions for each step (targeting buttons)
  const clickPositions = [
    { x: "50%", y: "70%" }, // Landing page - Connect button
    { x: "50%", y: "80%" }, // GitHub OAuth - Authorize button
    { x: "80%", y: "40%" }, // Repository selection - Connect button
    { x: "50%", y: "80%" }, // Ask question - Get Answer button
    { x: "20%", y: "30%" }, // Answer display - File path
  ];

  const fullQuestion =
    "Where is the authentication middleware defined and how does it work?";

  const handleNextStep = () => {
    setStep((prev) => (prev + 1) % screens.length);
  };

  // Typing animation effect
  useEffect(() => {
    if (step === 3 && isPlaying) {
      setIsTyping(true);
      setTypedText("");

      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < fullQuestion.length) {
          setTypedText(fullQuestion.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);

          // Add delay after typing completes before showing click animation
          setTimeout(() => {
            showClickAnimation(clickPositions[step].x, clickPositions[step].y);
          }, 800);
        }
      }, 50); // Adjust typing speed here

      return () => clearInterval(typingInterval);
    }
  }, [step, isPlaying]);

  // Handle step transitions and click animations
  useEffect(() => {
    if (!isPlaying) return;

    let timeout: NodeJS.Timeout;

    // Don't show click animation immediately for typing step
    if (step !== 3) {
      timeout = setTimeout(() => {
        showClickAnimation(clickPositions[step].x, clickPositions[step].y);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [step, isPlaying]);

  // Function to show click animation at specific coordinates
  const showClickAnimation = (x: string, y: string) => {
    // Create click element
    const clickElement = document.createElement("div");
    clickElement.className =
      "absolute w-8 h-8 rounded-full bg-primary/30 -ml-4 -mt-4 pointer-events-none z-50";
    clickElement.style.left = x;
    clickElement.style.top = y;

    // Add to container
    if (containerRef.current) {
      const browserContent =
        containerRef.current.querySelector(".browser-content");
      if (browserContent) {
        browserContent.appendChild(clickElement);

        // Animate the click
        setTimeout(() => {
          clickElement.style.transform = "scale(1.5)";
          clickElement.style.opacity = "0";
          clickElement.style.transition = "all 0.5s ease-out";

          // Move to next step after click animation
          setTimeout(() => {
            clickElement.remove();
            handleNextStep();
          }, 500);
        }, 100);
      }
    }
  };

  useEffect(() => {
    // Update URL based on current step
    const urls = [
      "https://codeqa.app",
      "https://github.com/login/oauth/authorize",
      "https://codeqa.app/dashboard",
      "https://codeqa.app/dashboard/ask",
      "https://codeqa.app/dashboard/answer",
    ];

    // Animate URL change
    const urlTimer = setTimeout(() => {
      setUrl(urls[step]);
    }, 500); // Slight delay after screen transition

    return () => clearTimeout(urlTimer);
  }, [step]);

  const screens = [
    // Landing Page
    <motion.div
      key="landing"
      className="w-full h-full bg-background p-6 rounded-b-lg select-none pointer-events-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Ask Questions About Your Code</h2>
        <p className="text-muted-foreground">
          Connect your GitHub repositories and get instant answers
        </p>
        <Button id="connect-github-btn" size="lg" className="rounded-full">
          <Github className="mr-2 h-4 w-4" /> Connect with GitHub
        </Button>
      </div>
    </motion.div>,

    // GitHub OAuth
    <motion.div
      key="github"
      className="w-full h-full bg-[#0d1117] text-white p-6 rounded-b-lg select-none pointer-events-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center justify-center">
          <Github className="h-10 w-10" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Authorize CodeQA</h3>
          <p className="text-sm text-gray-400 mt-2">
            This application will be able to:
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Read your repositories</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Access repository code</span>
          </div>
        </div>
        <Button
          id="authorize-btn"
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Authorize
        </Button>
      </div>
    </motion.div>,

    // Repository Selection
    <motion.div
      key="repos"
      className="w-full h-full bg-background p-6 rounded-b-lg select-none pointer-events-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md mx-auto space-y-4">
        <h3 className="text-lg font-semibold">Select Repositories</h3>
        <Input placeholder="Search repositories..." />
        <div className="space-y-2">
          {[
            { name: "next-auth", desc: "Authentication for Next.js" },
            { name: "react-query", desc: "Data synchronization for React" },
          ].map((repo, i) => (
            <Card key={repo.name} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5" />
                  <div>
                    <p className="font-medium">{repo.name}</p>
                    <p className="text-xs text-muted-foreground">{repo.desc}</p>
                  </div>
                </div>
                <Button
                  id={i === 0 ? "connect-repo-btn" : ""}
                  variant="outline"
                  size="sm"
                >
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>,

    // Ask Question
    <motion.div
      key="ask"
      className="w-full h-full bg-background p-6 rounded-b-lg select-none pointer-events-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md mx-auto space-y-4">
        <h3 className="text-lg font-semibold">Ask about next-auth</h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3 },
          }}
        >
          <textarea
            className="w-full min-h-[150px] p-4 rounded-lg border bg-background resize-none"
            placeholder="e.g., How does the authentication middleware work?"
            value={typedText}
            readOnly
          />
          {isTyping && (
            <div className="absolute right-8 bottom-[140px] h-5 w-[1px] bg-primary animate-pulse" />
          )}
        </motion.div>
        <Button id="get-answer-btn" className="w-full">
          <MessageSquare className="mr-2 h-4 w-4" /> Get Answer
        </Button>
      </div>
    </motion.div>,

    // Answer Display
    <motion.div
      key="answer"
      className="w-full h-full bg-background p-6 rounded-b-lg select-none pointer-events-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Authentication Middleware</h3>
          <Button variant="outline" size="sm">
            Copy
          </Button>
        </div>
        <motion.div
          className="p-4 rounded-lg bg-muted/50 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2 },
          }}
        >
          <p id="file-path" className="text-sm font-medium">
            File: middleware.ts
          </p>
          <pre className="text-sm bg-background p-3 rounded border overflow-x-auto">
            {`export async function middleware(req) {
  const token = await getToken({ req })
  if (!token) {
    return NextResponse.redirect('/login')
  }
}`}
          </pre>
        </motion.div>
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4 },
          }}
        >
          The authentication middleware is defined in middleware.ts. It checks
          for a valid token and redirects unauthorized users to the login page.
        </motion.p>
      </div>
    </motion.div>,
  ];

  return (
    <div className="py-20" ref={containerRef}>
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Browser Window */}
          <div className="rounded-lg border shadow-xl relative">
            {/* Browser Header */}
            <div className="border-b bg-muted/50 p-4 rounded-t-lg">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 ml-2">
                  <div className="bg-background rounded-md flex items-center px-3 py-1.5">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={url}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-muted-foreground"
                      >
                        {url}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Content */}
            <div className="h-[400px] relative overflow-hidden browser-content">
              <AnimatePresence mode="wait">{screens[step]}</AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
