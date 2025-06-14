/**
 * Format time in seconds to MM:SS format
 */
export const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds === Infinity) {
    return '0:00';
  }
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

/**
 * Clamp a number between min and max values
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Debounce function to limit rapid function calls
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Generate a random ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

/**
 * Parse markdown content to extract chapters
 */
export const parseStoryContent = (content: string): Array<{ title: string; content: string }> => {
  const chapters = content.split(/^## /gm).filter(Boolean);
  return chapters.map((chapter) => {
    const lines = chapter.trim().split('\n');
    const title = lines[0].replace(/^Chapter \d+: /, '');
    const content = lines.slice(1).join('\n').trim();
    return { title, content };
  });
};
