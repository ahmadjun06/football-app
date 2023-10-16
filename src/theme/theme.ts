import { colors } from "./colors";
import { spacing } from "./spacing";

export const theme = {
  colors: { ...colors },
  spacing: { ...spacing },
};

export type Theme = typeof theme;
