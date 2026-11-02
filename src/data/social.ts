import type { SocialLinksConfig } from '../types'

/**
 * Central social media links configuration.
 * Profile URLs must only be populated when genuine accounts are provided by the client.
 * When left undefined or empty, the UI renders non-interactive placeholders or omits live links
 * to prevent broken anchors (#) or fabricated social proof.
 */
export const SOCIAL_LINKS: SocialLinksConfig = {
  // Configurable destinations — left empty pending verified client profile setup
  instagram: undefined,
  youtube: undefined,
}
