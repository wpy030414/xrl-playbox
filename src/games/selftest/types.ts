export type TestType = "mbti" | "sbti" | "8values";

export interface Option {
  value: number;
  labelKey: string;
}

export interface Question {
  textKey: string;
  options: Option[];
}

export interface Dimension {
  key: string;
  leftKey: string;
  rightKey: string;
}

export interface MBTIResult {
  code: string;
  titleKey: string;
  descKey: string;
}

export interface SBTIResult {
  code: string;
  titleKey: string;
  descKey: string;
}

export interface EightValuesResult {
  equality: number;
  nation: number;
  liberty: number;
  tradition: number;
  labelKey: string;
  descKey: string;
}

export interface TestDefinition {
  id: TestType;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  dimensions: Dimension[];
  questions: Question[];
}

export type TestResult = MBTIResult | SBTIResult | EightValuesResult;
