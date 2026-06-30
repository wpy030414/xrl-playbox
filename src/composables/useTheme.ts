import { watch, onMounted, onUnmounted } from "vue";
import { useSettingsStore } from "@/stores/useSettingsStore";
import type { ThemeMode, ThemeColor } from "@/types";

interface ColorTokens {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
}

const THEME_COLORS: Record<ThemeColor, { light: ColorTokens; dark: ColorTokens }> = {
  purple: {
    light: {
      primary: "#6750a4",
      onPrimary: "#ffffff",
      primaryContainer: "#eaddff",
      onPrimaryContainer: "#21005d",
    },
    dark: {
      primary: "#d0bcff",
      onPrimary: "#381e72",
      primaryContainer: "#4f378b",
      onPrimaryContainer: "#eaddff",
    },
  },
  blue: {
    light: {
      primary: "#005cbb",
      onPrimary: "#ffffff",
      primaryContainer: "#d7e3ff",
      onPrimaryContainer: "#001b3f",
    },
    dark: {
      primary: "#abc7ff",
      onPrimary: "#002f65",
      primaryContainer: "#00458f",
      onPrimaryContainer: "#d7e3ff",
    },
  },
  green: {
    light: {
      primary: "#386a20",
      onPrimary: "#ffffff",
      primaryContainer: "#b7f397",
      onPrimaryContainer: "#062100",
    },
    dark: {
      primary: "#9cd67d",
      onPrimary: "#14380a",
      primaryContainer: "#235314",
      onPrimaryContainer: "#b7f397",
    },
  },
  red: {
    light: {
      primary: "#ba1a1a",
      onPrimary: "#ffffff",
      primaryContainer: "#ffdad6",
      onPrimaryContainer: "#410002",
    },
    dark: {
      primary: "#ffb4ab",
      onPrimary: "#690005",
      primaryContainer: "#93000a",
      onPrimaryContainer: "#ffdad6",
    },
  },
  orange: {
    light: {
      primary: "#8c5000",
      onPrimary: "#ffffff",
      primaryContainer: "#ffdcbd",
      onPrimaryContainer: "#2c1600",
    },
    dark: {
      primary: "#ffb86d",
      onPrimary: "#492900",
      primaryContainer: "#6d3b00",
      onPrimaryContainer: "#ffdcbd",
    },
  },
  pink: {
    light: {
      primary: "#984062",
      onPrimary: "#ffffff",
      primaryContainer: "#ffd9e2",
      onPrimaryContainer: "#3e001d",
    },
    dark: {
      primary: "#ffb1c8",
      onPrimary: "#5e1133",
      primaryContainer: "#7b2949",
      onPrimaryContainer: "#ffd9e2",
    },
  },
  teal: {
    light: {
      primary: "#006a60",
      onPrimary: "#ffffff",
      primaryContainer: "#74f8e5",
      onPrimaryContainer: "#00201c",
    },
    dark: {
      primary: "#52dbc9",
      onPrimary: "#003731",
      primaryContainer: "#005047",
      onPrimaryContainer: "#74f8e5",
    },
  },
};

function applyTheme(theme: ThemeMode) {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

export function applyThemeColor(color: ThemeColor, isDark: boolean) {
  const tokens = THEME_COLORS[color] ?? THEME_COLORS.purple;
  const set = isDark ? tokens.dark : tokens.light;
  const root = document.documentElement;
  root.style.setProperty("--md-sys-color-primary", set.primary);
  root.style.setProperty("--md-sys-color-on-primary", set.onPrimary);
  root.style.setProperty("--md-sys-color-primary-container", set.primaryContainer);
  root.style.setProperty("--md-sys-color-on-primary-container", set.onPrimaryContainer);
}

export function isDarkMode(theme: ThemeMode): boolean {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useTheme() {
  const settingsStore = useSettingsStore();

  function apply() {
    const theme = settingsStore.settings.theme;
    applyTheme(theme);
    applyThemeColor(settingsStore.settings.themeColor, isDarkMode(theme));
  }

  let systemMedia: MediaQueryList | null = null;
  function onSystemChange() {
    if (settingsStore.settings.theme === "system") {
      apply();
    }
  }

  onMounted(() => {
    apply();
    systemMedia = window.matchMedia("(prefers-color-scheme: dark)");
    systemMedia.addEventListener("change", onSystemChange);
  });

  onUnmounted(() => {
    systemMedia?.removeEventListener("change", onSystemChange);
  });

  watch(
    () => [settingsStore.settings.theme, settingsStore.settings.themeColor] as const,
    () => apply()
  );
}
