import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { GAMES } from "@/games";

export function useGames() {
  const { t } = useI18n();
  const games = computed(() =>
    [...GAMES].sort((a, b) => t(a.titleKey).localeCompare(t(b.titleKey)))
  );
  return { games };
}
