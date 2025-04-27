/**
 * @typedef {object} TextSegment
 * @description Describes a single segment of processed text, indicating whether it's plain text or should be highlighted.
 * @property {'text' | 'highlight'} type - The type of the segment. 'text' for plain text, 'highlight' for text that was enclosed in **...**.
 * @property {string} content - The actual textual content of the segment.
 */
export type TextSegment = {
  /**
   * @type {'text' | 'highlight'}
   * The type of the segment: either plain 'text' or 'highlight'ed.
   */
  type: "text" | "highlight";
  /**
   * @type {string}
   * The textual content of the segment.
   */
  content: string;
};

/**
 * Composable to process text containing **...** markers into segments
 * for safe rendering with highlighting.
 *
 * @param rawText A ref, getter, or plain value of the raw text string to process.
 * @returns An object containing the reactive `processedSegments` computed property.
 */
export function useProcessedText(rawText: MaybeRefOrGetter<string | undefined>) {
  /**
   * A computed property that returns an array of text segments.
   * It recalculates whenever the input `rawText` changes.
   */
  const processedSegments = computed<TextSegment[]>(() => {
    const text = toValue(rawText);

    // Return an empty array if the text is null, undefined, or empty
    if (!text) {
      return [];
    }

    // Initialize an array to hold the resulting segments
    const segments: TextSegment[] = [];
    // Split the text into parts using '**' as the delimiter
    const parts = text.split("**");

    parts.forEach((part, index) => {
      // Skip empty parts which might occur from adjacent delimiters (e.g., "****")
      if (!part) return;

      // Check if the index is even or odd
      if (index % 2 === 0) {
        // Even indices correspond to plain text segments (outside **)
        segments.push({ type: "text", content: part });
      } else {
        // Odd indices correspond to highlighted text segments (inside **)
        segments.push({ type: "highlight", content: part });
      }
    });

    return segments;
  });

  return {
    processedSegments,
  };
}
