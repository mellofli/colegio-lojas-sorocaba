/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const isPastEvent = (dateStr: string) => {
  if (!dateStr) return false;
  
  const now = new Date();
  // Reset to start of today for comparison
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Find all date pattern matches (DD/MM/YYYY)
  const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/g;
  const matches = Array.from(dateStr.matchAll(datePattern));
  
  if (matches.length > 0) {
    // Get the last matched date (end of event if it's a range)
    const lastMatch = matches[matches.length - 1];
    const day = parseInt(lastMatch[1]);
    const month = parseInt(lastMatch[2]) - 1;
    const year = parseInt(lastMatch[3]);
    
    const eventDate = new Date(year, month, day);
    return eventDate < today;
  }
  return false;
};
