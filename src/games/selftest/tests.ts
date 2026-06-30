import type {
  TestDefinition,
  TestType,
  MBTIResult,
  SBTIResult,
  EightValuesResult,
} from "./types";

export const MBTI_TEST: TestDefinition = {
  id: "mbti",
  titleKey: "selftest.mbti.title",
  subtitleKey: "selftest.mbti.subtitle",
  descriptionKey: "selftest.mbti.description",
  dimensions: [
    { key: "ei", leftKey: "selftest.mbti.e", rightKey: "selftest.mbti.i" },
    { key: "sn", leftKey: "selftest.mbti.s", rightKey: "selftest.mbti.n" },
    { key: "tf", leftKey: "selftest.mbti.t", rightKey: "selftest.mbti.f" },
    { key: "jp", leftKey: "selftest.mbti.j", rightKey: "selftest.mbti.p" },
  ],
  questions: [
    {
      textKey: "selftest.mbti.q1",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q2",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q3",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q4",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q5",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q6",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q7",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q8",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q9",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q10",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q11",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
    {
      textKey: "selftest.mbti.q12",
      options: [
        { value: -2, labelKey: "selftest.mbti.o.stronglyAgreeLeft" },
        { value: -1, labelKey: "selftest.mbti.o.agreeLeft" },
        { value: 0, labelKey: "selftest.mbti.o.neutral" },
        { value: 1, labelKey: "selftest.mbti.o.agreeRight" },
        { value: 2, labelKey: "selftest.mbti.o.stronglyAgreeRight" },
      ],
    },
  ],
};

// Question index -> dimension index mapping (0=EI, 1=SN, 2=TF, 3=JP)
const MBTI_QUESTION_DIMENSIONS = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];

export function scoreMBTI(answers: number[]): MBTIResult {
  const sums = [0, 0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    const dim = MBTI_QUESTION_DIMENSIONS[i];
    sums[dim] += answers[i];
  }
  const code = [
    sums[0] >= 0 ? "I" : "E",
    sums[1] >= 0 ? "N" : "S",
    sums[2] >= 0 ? "F" : "T",
    sums[3] >= 0 ? "P" : "J",
  ].join("");
  return {
    code,
    titleKey: `selftest.mbti.result.${code.toLowerCase()}.title`,
    descKey: `selftest.mbti.result.${code.toLowerCase()}.desc`,
  };
}

export const SBTI_TEST: TestDefinition = {
  id: "sbti",
  titleKey: "selftest.sbti.title",
  subtitleKey: "selftest.sbti.subtitle",
  descriptionKey: "selftest.sbti.description",
  dimensions: [
    { key: "energy", leftKey: "selftest.sbti.energyLeft", rightKey: "selftest.sbti.energyRight" },
    { key: "social", leftKey: "selftest.sbti.socialLeft", rightKey: "selftest.sbti.socialRight" },
    { key: "money", leftKey: "selftest.sbti.moneyLeft", rightKey: "selftest.sbti.moneyRight" },
  ],
  questions: [
    { textKey: "selftest.sbti.q1", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q2", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q3", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q4", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q5", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q6", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q7", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q8", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q9", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q10", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q11", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
    { textKey: "selftest.sbti.q12", options: [
      { value: -2, labelKey: "selftest.sbti.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.sbti.o.left" },
      { value: 0, labelKey: "selftest.sbti.o.neutral" },
      { value: 1, labelKey: "selftest.sbti.o.right" },
      { value: 2, labelKey: "selftest.sbti.o.stronglyRight" },
    ]},
  ],
};

const SBTI_QUESTION_DIMENSIONS = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2];

export function scoreSBTI(answers: number[]): SBTIResult {
  const sums = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    sums[SBTI_QUESTION_DIMENSIONS[i]] += answers[i];
  }
  const bits = sums.map((s) => (s >= 0 ? 1 : 0));
  // bits: [energy, social, money]; 1 = right pole
  const type = [bits[0] ? "A" : "D", bits[1] ? "B" : "M", bits[2] ? "R" : "P"].join("");
  return {
    code: type,
    titleKey: `selftest.sbti.result.${type.toLowerCase()}.title`,
    descKey: `selftest.sbti.result.${type.toLowerCase()}.desc`,
  };
}

export const EIGHT_VALUES_TEST: TestDefinition = {
  id: "8values",
  titleKey: "selftest.8values.title",
  subtitleKey: "selftest.8values.subtitle",
  descriptionKey: "selftest.8values.description",
  dimensions: [
    { key: "equality", leftKey: "selftest.8values.equality", rightKey: "selftest.8values.markets" },
    { key: "nation", leftKey: "selftest.8values.nation", rightKey: "selftest.8values.globe" },
    { key: "liberty", leftKey: "selftest.8values.liberty", rightKey: "selftest.8values.authority" },
    { key: "tradition", leftKey: "selftest.8values.tradition", rightKey: "selftest.8values.progress" },
  ],
  questions: [
    { textKey: "selftest.8values.q1", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q2", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q3", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q4", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q5", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q6", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q7", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q8", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q9", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q10", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q11", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q12", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q13", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q14", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q15", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
    { textKey: "selftest.8values.q16", options: [
      { value: -2, labelKey: "selftest.8values.o.stronglyLeft" },
      { value: -1, labelKey: "selftest.8values.o.left" },
      { value: 0, labelKey: "selftest.8values.o.neutral" },
      { value: 1, labelKey: "selftest.8values.o.right" },
      { value: 2, labelKey: "selftest.8values.o.stronglyRight" },
    ]},
  ],
};

const EIGHT_VALUES_DIMENSIONS = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];

function clampPercent(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function score8Values(answers: number[]): EightValuesResult {
  const sums = [0, 0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    sums[EIGHT_VALUES_DIMENSIONS[i]] += answers[i];
  }
  // Max absolute sum per dimension: 4 questions * 2 = 8
  const equality = clampPercent(50 - (sums[0] / 8) * 50);
  const nation = clampPercent(50 - (sums[1] / 8) * 50);
  const liberty = clampPercent(50 - (sums[2] / 8) * 50);
  const tradition = clampPercent(50 - (sums[3] / 8) * 50);

  const economic = equality >= 50 ? "left" : "right";
  const civil = liberty >= 50 ? "lib" : "auth";
  const quadrant = `${civil}${economic}`;

  return {
    equality,
    nation,
    liberty,
    tradition,
    labelKey: `selftest.8values.result.${quadrant}.title`,
    descKey: `selftest.8values.result.${quadrant}.desc`,
  };
}

export const TESTS = {
  mbti: MBTI_TEST,
  sbti: SBTI_TEST,
  "8values": EIGHT_VALUES_TEST,
} as const;

export function scoreTest(type: TestType, answers: number[]) {
  if (type === "mbti") return scoreMBTI(answers);
  if (type === "sbti") return scoreSBTI(answers);
  return score8Values(answers);
}
