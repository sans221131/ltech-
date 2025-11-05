// Helper utilities for menu filtering
export const slugFromHref = (href: string): string => {
  return href.replace(/^\/services\//, "").replace(/\/$/, "");
};
