// E-Commerce Services Data
import { ServiceData } from "./serviceData";

export const ecommerceServices: Record<string, ServiceData> = {
  "online-storefront": {
    title: "Custom E-Commerce Storefronts",
    tagline: "Headless commerce architecture with blazing-fast performance and conversion-optimized checkout.",
    tags: ["E-Commerce", "Headless CMS", "Performance", "Conversion"],
    overview:
      "Build high-converting online stores with modern headless architecture that decouples frontend from backend. Achieve sub-second page loads, personalized shopping experiences, and seamless checkout flows that maximize conversion rates and average order value.",
    features: [
      {
        title: "Headless Architecture",
        description: "Decouple storefront from commerce engine for ultimate flexibility in design and performance optimization.",
      },
      {
        title: "Performance Optimization",
        description: "Edge caching, image optimization, code splitting, and lazy loading for sub-2-second page loads.",
      },
      {
        title: "Conversion Tools",
        description: "A/B testing, personalization engine, abandoned cart recovery, and one-click checkout options.",
      },
      {
        title: "Multi-Channel Commerce",
        description: "Sell across web, mobile app, social media, and marketplaces from single product catalog.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Slow Site Performance",
        description: "Current platform has slow page loads hurting SEO and causing high bounce rates on product pages.",
      },
      {
        title: "Low Conversion Rates",
        description: "Traffic is good but conversion rates lag behind industry benchmarks; need better checkout experience.",
      },
      {
        title: "Design Limitations",
        description: "Current platform template restricts design creativity; need custom UX to differentiate brand.",
      },
    ],
    industries: [
      { title: "Fashion & Apparel", category: "RETAIL" },
      { title: "Consumer Electronics", category: "RETAIL" },
      { title: "Home Goods", category: "RETAIL" },
    ],
  },

  "marketplace-platform": {
    title: "Multi-Vendor Marketplace Platforms",
    tagline: "Scalable marketplace infrastructure with vendor onboarding, commission management, and dispute resolution.",
    tags: ["Marketplace", "Multi-Vendor", "Commission", "Vendor Management"],
    overview:
      "Launch and scale marketplace businesses with complete vendor management systems. Handle seller onboarding, product catalog aggregation, split payments, commission tracking, review moderation, and dispute resolution—all while maintaining quality and trust.",
    features: [
      {
        title: "Vendor Portal",
        description: "Self-service onboarding, product uploads, inventory management, and sales analytics for sellers.",
      },
      {
        title: "Commission Engine",
        description: "Flexible commission structures with automated split payments, fee calculations, and payout scheduling.",
      },
      {
        title: "Quality Controls",
        description: "Product approval workflows, seller ratings, review moderation, and automated fraud detection.",
      },
      {
        title: "Dispute Management",
        description: "Order dispute resolution workflows with evidence collection, mediation, and refund processing.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Marketplace Launch",
        description: "Starting multi-vendor marketplace but don't want to build complex vendor infrastructure from scratch.",
      },
      {
        title: "Vendor Scalability",
        description: "Growing vendor base overwhelming manual onboarding and management processes.",
      },
      {
        title: "Trust & Safety",
        description: "Need robust controls to maintain quality, prevent fraud, and resolve disputes fairly.",
      },
    ],
    industries: [
      { title: "B2B Marketplaces", category: "WHOLESALE" },
      { title: "Services Marketplace", category: "GIG ECONOMY" },
      { title: "Product Marketplace", category: "RETAIL" },
    ],
  },

  "product-catalog": {
    title: "Product Information Management (PIM)",
    tagline: "Centralized product data with multi-channel syndication and enrichment workflows.",
    tags: ["PIM", "Product Data", "Multi-Channel", "Content Management"],
    overview:
      "Master product information with centralized PIM that ensures consistent, accurate data across all sales channels. Manage SKUs, attributes, images, descriptions, and translations with workflow approvals, version control, and automated syndication to marketplaces and partners.",
    features: [
      {
        title: "Centralized Product Database",
        description: "Single source of truth for product data with hierarchical categories, variants, and relationships.",
      },
      {
        title: "Content Enrichment",
        description: "Workflow tools for adding descriptions, specs, images, videos, and marketing content to products.",
      },
      {
        title: "Multi-Channel Syndication",
        description: "Automated publishing to e-commerce platform, marketplaces, print catalogs, and partner systems.",
      },
      {
        title: "Localization",
        description: "Manage translations, regional pricing, and market-specific attributes for international commerce.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Inconsistent Product Data",
        description: "Different product info on website, Amazon, and retail stores causing customer confusion and returns.",
      },
      {
        title: "Channel Expansion",
        description: "Selling across multiple channels but manual product data synchronization is error-prone and slow.",
      },
      {
        title: "Large Catalog Management",
        description: "Thousands or millions of SKUs making spreadsheet-based management impossible to maintain.",
      },
    ],
    industries: [
      { title: "Manufacturing", category: "B2B" },
      { title: "Retail Chains", category: "OMNICHANNEL" },
      { title: "Distributors", category: "WHOLESALE" },
    ],
  },

  "shopping-cart": {
    title: "Optimized Shopping Cart & Checkout",
    tagline: "Friction-free checkout with guest options, saved carts, and multiple payment methods.",
    tags: ["Checkout", "Cart Optimization", "Conversion", "Payment"],
    overview:
      "Maximize checkout conversion with optimized cart and payment flows. Support guest checkout, account creation, saved carts, address autocomplete, multiple shipping options, and diverse payment methods—all with mobile-first responsive design and security best practices.",
    features: [
      {
        title: "Guest Checkout",
        description: "Optional account creation with email-based order tracking; no forced registration barriers.",
      },
      {
        title: "Saved Cart Sync",
        description: "Persistent carts across devices with email reminders for abandoned items and low-stock alerts.",
      },
      {
        title: "Payment Flexibility",
        description: "Support cards, wallets (Apple Pay, Google Pay), BNPL, bank transfers, and cryptocurrency.",
      },
      {
        title: "Checkout Optimization",
        description: "Single-page checkout, address autocomplete, shipping calculator, and trust badges.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Cart Abandonment",
        description: "High cart abandonment rates indicating friction in checkout process or limited payment options.",
      },
      {
        title: "Mobile Conversion Gap",
        description: "Mobile traffic high but mobile conversion rates significantly lower than desktop.",
      },
      {
        title: "International Sales",
        description: "Expanding globally but need to support local payment methods and shipping logistics.",
      },
    ],
    industries: [
      { title: "Direct-to-Consumer", category: "DTC" },
      { title: "B2C E-Commerce", category: "RETAIL" },
      { title: "Subscription Commerce", category: "SUBSCRIPTIONS" },
    ],
  },

  "order-management": {
    title: "Order Management & Fulfillment",
    tagline: "End-to-end order orchestration from placement to delivery with inventory synchronization.",
    tags: ["OMS", "Fulfillment", "Inventory", "Logistics"],
    overview:
      "Streamline order processing with comprehensive OMS that routes orders, manages inventory across locations, coordinates fulfillment, tracks shipments, and handles returns. Support dropshipping, multi-warehouse fulfillment, and 3PL integrations for scalable operations.",
    features: [
      {
        title: "Order Orchestration",
        description: "Intelligent order routing based on inventory location, shipping costs, and delivery speed preferences.",
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory sync across warehouses, stores, and 3PLs with automated reorder points.",
      },
      {
        title: "Fulfillment Integration",
        description: "Connect to WMS, shipping carriers, and 3PL systems with label generation and tracking updates.",
      },
      {
        title: "Returns Processing",
        description: "Self-service returns portal with RMA generation, restocking workflows, and refund automation.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Operational Inefficiency",
        description: "Manual order processing and fulfillment causing delays, errors, and high operational costs.",
      },
      {
        title: "Inventory Accuracy",
        description: "Overselling or stock-outs due to poor inventory visibility across multiple locations.",
      },
      {
        title: "Fulfillment Scalability",
        description: "Growing order volume exceeding capacity of current processes and systems.",
      },
    ],
    industries: [
      { title: "E-Commerce Brands", category: "RETAIL" },
      { title: "Omnichannel Retail", category: "RETAIL" },
      { title: "Wholesale Distribution", category: "B2B" },
    ],
  },

  "customer-reviews": {
    title: "Customer Reviews & Ratings Platform",
    tagline: "Authentic review collection with moderation, syndication, and sentiment analysis.",
    tags: ["Reviews", "UGC", "Social Proof", "Sentiment Analysis"],
    overview:
      "Build trust and drive conversions with comprehensive review management. Collect post-purchase reviews via email and SMS, moderate content for authenticity, syndicate to Google and other platforms, analyze sentiment, and showcase reviews strategically across the site.",
    features: [
      {
        title: "Review Collection",
        description: "Automated email/SMS campaigns post-purchase with incentives and photo/video upload options.",
      },
      {
        title: "Content Moderation",
        description: "AI-powered spam detection, profanity filtering, and manual review workflows for quality control.",
      },
      {
        title: "Review Syndication",
        description: "Push reviews to Google Shopping, Facebook, and other platforms to maximize visibility.",
      },
      {
        title: "Sentiment Analysis",
        description: "Analyze review sentiment by product, category, and time period to identify improvement areas.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Low Review Volume",
        description: "Few customer reviews making it hard for prospects to trust products and make purchase decisions.",
      },
      {
        title: "Trust & Credibility",
        description: "Competing with established brands; need social proof to overcome buyer hesitation.",
      },
      {
        title: "Product Insights",
        description: "Want to understand customer sentiment and common issues to improve products and messaging.",
      },
    ],
    industries: [
      { title: "Consumer Products", category: "RETAIL" },
      { title: "Hospitality", category: "SERVICES" },
      { title: "Local Services", category: "SMB" },
    ],
  },

  "recommendation-engine": {
    title: "AI-Powered Product Recommendations",
    tagline: "Personalized product discovery with collaborative filtering and real-time behavioral signals.",
    tags: ["Personalization", "Machine Learning", "Recommendation", "Conversion"],
    overview:
      "Increase average order value and customer lifetime value with intelligent product recommendations. Use collaborative filtering, content-based algorithms, and real-time behavioral signals to suggest relevant products across homepage, product pages, cart, and email.",
    features: [
      {
        title: "Collaborative Filtering",
        description: "Recommend products based on similar customer purchase patterns and browsing behavior.",
      },
      {
        title: "Real-Time Personalization",
        description: "Adjust recommendations based on current session behavior, cart contents, and browsing history.",
      },
      {
        title: "Cross-Sell & Upsell",
        description: "Suggest complementary products and higher-value alternatives at strategic touchpoints.",
      },
      {
        title: "A/B Testing",
        description: "Test recommendation strategies and placements to optimize for conversion and revenue impact.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Low Average Order Value",
        description: "Customers buying single items; need to increase basket size through relevant product suggestions.",
      },
      {
        title: "Product Discovery",
        description: "Large catalog making it hard for customers to discover relevant products; need personalization.",
      },
      {
        title: "Customer Retention",
        description: "Want to increase repeat purchases by helping customers discover more products they'll love.",
      },
    ],
    industries: [
      { title: "Fashion E-Commerce", category: "RETAIL" },
      { title: "Electronics", category: "RETAIL" },
      { title: "Subscription Boxes", category: "SUBSCRIPTIONS" },
    ],
  },

  "loyalty-programs": {
    title: "Customer Loyalty & Rewards Programs",
    tagline: "Points, tiers, and gamification to drive repeat purchases and customer lifetime value.",
    tags: ["Loyalty", "Rewards", "Customer Retention", "Gamification"],
    overview:
      "Increase customer retention and lifetime value with engaging loyalty programs. Award points for purchases and actions, create VIP tiers with exclusive benefits, enable points redemption, run challenges and campaigns, and measure program impact on retention and revenue.",
    features: [
      {
        title: "Points & Rewards",
        description: "Award points for purchases, reviews, referrals, and social shares with flexible redemption options.",
      },
      {
        title: "Tiered Programs",
        description: "Create VIP tiers with escalating benefits like free shipping, early access, and exclusive discounts.",
      },
      {
        title: "Gamification",
        description: "Challenges, badges, streak bonuses, and progress bars to drive engagement and repeat visits.",
      },
      {
        title: "Program Analytics",
        description: "Track participation, redemption rates, incremental revenue, and member lifetime value.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Low Repeat Purchase Rate",
        description: "Most customers make only one purchase; need incentives to drive repeat business.",
      },
      {
        title: "Customer Acquisition Costs",
        description: "High CAC making first purchase unprofitable; need to increase lifetime value through retention.",
      },
      {
        title: "Competitive Pressure",
        description: "Competitors have loyalty programs attracting your customers; need parity or differentiation.",
      },
    ],
    industries: [
      { title: "Retail Chains", category: "OMNICHANNEL" },
      { title: "Food & Beverage", category: "QSR" },
      { title: "Beauty & Cosmetics", category: "RETAIL" },
    ],
  },

  "dynamic-pricing": {
    title: "Dynamic Pricing & Revenue Optimization",
    tagline: "AI-driven pricing strategies based on demand, competition, and inventory levels.",
    tags: ["Pricing", "Revenue Management", "AI", "Competition"],
    overview:
      "Maximize revenue and margins with intelligent dynamic pricing that adjusts in real-time. Factor in competitor prices, demand signals, inventory levels, customer segments, and historical data to find optimal price points. Support promotional strategies, markdown optimization, and A/B price testing.",
    features: [
      {
        title: "Competitive Pricing",
        description: "Monitor competitor prices and automatically adjust to maintain position while protecting margins.",
      },
      {
        title: "Demand-Based Pricing",
        description: "Increase prices during high demand periods and discount slow-movers to optimize inventory turnover.",
      },
      {
        title: "Segmented Pricing",
        description: "Offer personalized prices based on customer segment, loyalty status, and purchase history.",
      },
      {
        title: "Markdown Optimization",
        description: "AI recommends optimal timing and depth of discounts to clear seasonal inventory profitably.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Margin Pressure",
        description: "Manual pricing unable to react quickly to market changes; leaving money on table or losing competitively.",
      },
      {
        title: "Inventory Issues",
        description: "Excess inventory or frequent stockouts; pricing not aligned with demand and inventory levels.",
      },
      {
        title: "Competitive Market",
        description: "Competitors frequently change prices; need automation to stay competitive without constant monitoring.",
      },
    ],
    industries: [
      { title: "Travel & Hospitality", category: "TRAVEL" },
      { title: "Electronics Retail", category: "RETAIL" },
      { title: "Fashion & Apparel", category: "RETAIL" },
    ],
  },

  "ar-try-on": {
    title: "Augmented Reality Try-On Experiences",
    tagline: "Virtual fitting rooms and product visualization to reduce returns and increase confidence.",
    tags: ["AR", "Virtual Try-On", "3D Visualization", "Experience"],
    overview:
      "Reduce returns and increase conversion with AR-powered virtual try-on experiences. Enable customers to visualize furniture in their space, try on glasses or makeup virtually, or see how clothing fits—all through web AR without app downloads, driving confidence in online purchases.",
    features: [
      {
        title: "Web AR Technology",
        description: "No-app-required AR experiences using WebXR standard works on both iOS and Android browsers.",
      },
      {
        title: "Virtual Try-On",
        description: "Face tracking for glasses/makeup or body tracking for clothing and accessories with accurate rendering.",
      },
      {
        title: "Room Visualization",
        description: "Place furniture and decor in real spaces using smartphone cameras with scale accuracy.",
      },
      {
        title: "3D Product Models",
        description: "Interactive 360-degree product views with zoom, material swatches, and customization options.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "High Return Rates",
        description: "Products don't meet expectations when delivered; customers can't visualize fit or appearance online.",
      },
      {
        title: "Purchase Hesitation",
        description: "Customers abandon carts due to uncertainty; need immersive preview to build confidence.",
      },
      {
        title: "Differentiation",
        description: "Commodity products need experiential marketing to stand out and justify premium pricing.",
      },
    ],
    industries: [
      { title: "Furniture & Home Decor", category: "RETAIL" },
      { title: "Fashion & Accessories", category: "RETAIL" },
      { title: "Beauty & Cosmetics", category: "RETAIL" },
    ],
  },

  "subscription-box": {
    title: "Subscription Box & Recurring Commerce",
    tagline: "Subscription management with flexible billing, personalization, and churn reduction tools.",
    tags: ["Subscriptions", "Recurring Revenue", "Retention", "Billing"],
    overview:
      "Build sustainable subscription businesses with flexible subscription management. Support multiple subscription types, personalized curation, flexible billing cycles, easy skip/pause/cancel options, and churn reduction workflows—while providing predictable recurring revenue.",
    features: [
      {
        title: "Subscription Flexibility",
        description: "Weekly, monthly, quarterly plans with easy customer modifications, skips, and cancellations.",
      },
      {
        title: "Curation & Personalization",
        description: "Product quiz for custom selection algorithms and member preferences for ongoing personalization.",
      },
      {
        title: "Billing Management",
        description: "Automated recurring billing with dunning management, payment method updates, and proration.",
      },
      {
        title: "Churn Reduction",
        description: "Retention offers, pause options, skip reminders, and win-back campaigns for cancelled subscribers.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Subscription Launch",
        description: "Starting subscription business but e-commerce platform lacks recurring billing capabilities.",
      },
      {
        title: "High Churn Rate",
        description: "Subscribers canceling after few months; need tools to understand reasons and reduce churn.",
      },
      {
        title: "Billing Complexity",
        description: "Managing subscription billing, proration, and payment failures manually is error-prone.",
      },
    ],
    industries: [
      { title: "Food & Beverage", category: "CPG" },
      { title: "Beauty & Personal Care", category: "RETAIL" },
      { title: "Media & Entertainment", category: "CONTENT" },
    ],
  },

  "live-shopping": {
    title: "Live Shopping & Video Commerce",
    tagline: "Interactive livestream shopping experiences with real-time engagement and instant purchasing.",
    tags: ["Live Shopping", "Video Commerce", "Social Selling", "Livestream"],
    overview:
      "Bring the excitement of TV shopping to digital with live commerce platforms. Enable influencers and brands to showcase products via livestream video, interact with viewers through chat and polls, feature products during streams, and enable instant one-click purchasing—creating engaging shopping experiences that drive conversion.",
    features: [
      {
        title: "Live Streaming",
        description: "HD livestream with chat, emoji reactions, viewer counts, and screen sharing for product demos.",
      },
      {
        title: "Product Showcasing",
        description: "Pin products to video with instant 'Add to Cart' buttons; viewers purchase without leaving stream.",
      },
      {
        title: "Audience Engagement",
        description: "Live chat, polls, Q&A sessions, limited-time offers, and flash sales during broadcasts.",
      },
      {
        title: "Analytics & Recording",
        description: "Track viewership, engagement, conversion by product, and save recordings for on-demand viewing.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Engagement Innovation",
        description: "Static product pages not engaging customers; need interactive format to showcase product benefits.",
      },
      {
        title: "Product Education",
        description: "Complex products requiring demonstration or styling advice; video format allows real-time education.",
      },
      {
        title: "Social Commerce Strategy",
        description: "Want to leverage influencers and create social shopping events to drive traffic and sales spikes.",
      },
    ],
    industries: [
      { title: "Fashion & Beauty", category: "RETAIL" },
      { title: "Home Shopping Networks", category: "MEDIA" },
      { title: "Creator Economy", category: "SOCIAL" },
    ],
  },

  "social-commerce": {
    title: "Social Commerce & Shoppable Content",
    tagline: "Shoppable posts, influencer marketplaces, and social media integrations for native shopping.",
    tags: ["Social Commerce", "Influencer", "Shoppable Posts", "Instagram Shopping"],
    overview:
      "Turn social media into sales channels with integrated social commerce. Create shoppable posts and stories, manage influencer partnerships, enable native checkout on social platforms, track social attribution, and build community-driven shopping experiences—meeting customers where they already spend time.",
    features: [
      {
        title: "Shoppable Content",
        description: "Tag products in social posts and stories with direct purchase links; integrate with Instagram, TikTok, Pinterest.",
      },
      {
        title: "Influencer Marketplace",
        description: "Connect with influencers, manage campaigns, provide affiliate links, and track sales attribution.",
      },
      {
        title: "Social Checkout",
        description: "Enable native in-app purchasing on social platforms with integrated inventory and order management.",
      },
      {
        title: "UGC Integration",
        description: "Collect and display user-generated content as social proof; enable customers to shop looks from photos.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Social Media ROI",
        description: "Strong social media presence but can't track or drive direct sales from social channels.",
      },
      {
        title: "Discovery Shopping",
        description: "Target audience discovers products through social media; need frictionless path from discovery to purchase.",
      },
      {
        title: "Influencer Marketing",
        description: "Running influencer campaigns but lack infrastructure to manage partnerships and attribute sales.",
      },
    ],
    industries: [
      { title: "Fashion & Apparel", category: "RETAIL" },
      { title: "Beauty & Cosmetics", category: "RETAIL" },
      { title: "Lifestyle Brands", category: "DTC" },
    ],
  },
};
