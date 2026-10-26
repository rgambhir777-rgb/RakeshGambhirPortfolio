import type { CSSProperties } from "react";

// Sets the --c accent custom property that tiles, layers and tags read.
export const accent = (color: string) => ({ "--c": color }) as CSSProperties;
