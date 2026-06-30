import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Settings } from "@/types";
import { storageGet, storageSet } from "@/composables/useStorage";

const STORAGE_KEY = "settings";

const DEFAULT_SETTINGS: Settings = {
  locale: "zh-CN",
  theme: "system",
  themeColor: "purple",
};

export const useSettingsStore = defineStore("settings", () => {
  const settings = ref<Settings>({ ...DEFAULT_SETTINGS });
  const loaded = ref(false);

  async function load() {
    if (loaded.value) return;
    const data = await storageGet<Partial<Settings>>(STORAGE_KEY);
    if (data) {
      settings.value = { ...DEFAULT_SETTINGS, ...data };
    }
    loaded.value = true;
  }

  async function save() {
    await storageSet(STORAGE_KEY, settings.value);
  }

  function setLocale(locale: Settings["locale"]) {
    settings.value.locale = locale;
    save();
  }

  function setTheme(theme: Settings["theme"]) {
    settings.value.theme = theme;
    save();
  }

  function setThemeColor(themeColor: Settings["themeColor"]) {
    settings.value.themeColor = themeColor;
    save();
  }

  function reset() {
    settings.value = { ...DEFAULT_SETTINGS };
    save();
  }

  watch(
    settings,
    () => {
      if (loaded.value) save();
    },
    { deep: true }
  );

  return {
    settings,
    load,
    save,
    setLocale,
    setTheme,
    setThemeColor,
    reset,
  };
});
