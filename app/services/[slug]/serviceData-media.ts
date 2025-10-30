// Media & Entertainment Services
import { ServiceData } from "./serviceData";

export const mediaServices: Record<string, ServiceData> = {
  "video-streaming": {
    title: "Video Streaming & OTT Platform",
    tagline: "Scalable video delivery with DRM, monetization, and personalized content discovery.",
    tags: ["Streaming", "OTT", "Video", "CDN"],
    overview:
      "Launch video streaming service with adaptive bitrate streaming, multi-DRM protection, subscription and ad-based monetization, personalized recommendations, and global CDN delivery. Support live and on-demand content across all devices.",
    features: [
      { title: "Adaptive Streaming", description: "HLS/DASH with automatic quality adjustment for smooth playback on any bandwidth." },
      { title: "Multi-DRM", description: "Content protection with Widevine, FairPlay, and PlayReady for premium content." },
      { title: "Monetization", description: "Subscription tiers, pay-per-view, advertising integration, and bundling options." },
      { title: "Personalization", description: "AI-powered content recommendations and personalized homepages." },
    ],
    whenYouNeedThis: [
      { title: "OTT Launch", description: "Starting streaming service but need enterprise-grade infrastructure." },
      { title: "Scalability", description: "Current platform can't handle traffic spikes during popular releases." },
      { title: "Monetization", description: "Want to test different business models like AVOD, SVOD, or hybrid." },
    ],
    industries: [
      { title: "Media Companies", category: "ENTERTAINMENT" },
      { title: "Content Creators", category: "DIGITAL MEDIA" },
      { title: "Sports Leagues", category: "SPORTS" },
    ],
  },
};

const createPlaceholder = (title: string, industry: string): ServiceData => ({
  title,
  tagline: `Professional ${title.toLowerCase()} solutions for modern businesses.`,
  tags: [industry, "Enterprise", "Digital Transformation", "Automation"],
  overview: `Comprehensive ${title.toLowerCase()} platform designed to streamline operations, improve efficiency, and drive business growth. Built with modern technology stack for scalability and performance.`,
  features: [
    { title: "Core Functionality", description: `Essential ${title.toLowerCase()} features for day-to-day operations.` },
    { title: "Integration Capabilities", description: "Connect with existing tools and systems via APIs and webhooks." },
    { title: "Analytics & Reporting", description: "Actionable insights with customizable dashboards and reports." },
    { title: "Security & Compliance", description: "Enterprise-grade security with role-based access and audit trails." },
  ],
  whenYouNeedThis: [
    { title: "Operational Efficiency", description: "Manual processes causing delays and errors; need automation." },
    { title: "Scalability", description: "Current solution can't grow with business; hitting limitations." },
    { title: "Integration", description: "Disconnected systems creating data silos and inefficiency." },
  ],
  industries: [
    { title: "Enterprise", category: industry },
    { title: "Mid-Market", category: industry },
    { title: "Startups", category: industry },
  ],
});

export const allMediaServices = {
  ...mediaServices,
  "music-platform": createPlaceholder("Music Streaming", "MEDIA"),
  "podcast-hosting": createPlaceholder("Podcast Hosting", "MEDIA"),
  "live-broadcasting": createPlaceholder("Live Broadcasting", "MEDIA"),
  "content-cms": createPlaceholder("Content CMS", "MEDIA"),
  "subscription-platform": createPlaceholder("Subscription Platform", "MEDIA"),
  "ad-server": createPlaceholder("Ad Server", "ADTECH"),
  "recommendation-ai": createPlaceholder("Content Recommendations", "AI"),
  "social-network": createPlaceholder("Social Network", "SOCIAL"),
  "creator-tools": createPlaceholder("Creator Tools", "MEDIA"),
  "ticketing-system": createPlaceholder("Event Ticketing", "ENTERTAINMENT"),
  "gaming-platform": createPlaceholder("Gaming Platform", "GAMING"),
  "nft-marketplace": createPlaceholder("NFT Marketplace", "WEB3"),
  "photo-gallery": createPlaceholder("Photo Gallery", "MEDIA"),
  "news-portal": createPlaceholder("News Portal", "MEDIA"),
  "fan-engagement": createPlaceholder("Fan Engagement", "ENTERTAINMENT"),
  "video-editor": createPlaceholder("Video Editor", "MEDIA"),
  "rights-management": createPlaceholder("Rights Management", "MEDIA"),
  "analytics-dashboard": createPlaceholder("Media Analytics", "ANALYTICS"),
  "cdn-management": createPlaceholder("CDN Management", "INFRASTRUCTURE"),
};
