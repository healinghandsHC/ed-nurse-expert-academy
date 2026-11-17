import type { ModuleContent } from "./types";
import { ED_CONTENT_A } from "./ed-content-a";
import { ED_CONTENT_B } from "./ed-content-b";
import { ED_CONTENT_C } from "./ed-content-c";
import { ED_CONTENT_D } from "./ed-content-d";
import { ED_CONTENT_E } from "./ed-content-e";

export type { Lesson, ModuleContent } from "./types";

export const MODULE_CONTENTS: Record<string, ModuleContent> = {
  ...ED_CONTENT_A,
  ...ED_CONTENT_B,
  ...ED_CONTENT_C,
  ...ED_CONTENT_D,
  ...ED_CONTENT_E,
};
