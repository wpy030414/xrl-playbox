<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps<{
  open: boolean;
  message: string;
}>();

const emit = defineEmits<{
  confirm: [];
  cancel: [];
}>();

const { t } = useI18n();

function onBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    emit("cancel");
  }
}
</script>

<template>
  <div v-if="open" class="exit-backdrop" @click="onBackdropClick"
    >
    <div class="exit-modal"
      >
      <div class="exit-modal-title">{{ t("common.confirm") }}</div>
      <div class="exit-modal-content">{{ message }}</div>
      <div class="exit-modal-actions"
        >
        <button class="exit-btn secondary" @click="emit('cancel')"
          >{{ t("common.cancel") }}</button
        >
        <button class="exit-btn primary" @click="emit('confirm')"
          >{{ t("common.confirm") }}</button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.exit-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  z-index: 100;
  padding: 24px;
}

.exit-modal {
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  border-radius: 20px;
  padding: 24px;
  min-width: 320px;
  max-width: 90vw;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.exit-modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.exit-modal-content {
  margin-bottom: 20px;
  line-height: 1.6;
}

.exit-modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.exit-btn {
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.875rem;
  transition: opacity 0.2s;
}

.exit-btn:hover {
  opacity: 0.9;
}

.exit-btn.primary {
  background: var(--md-sys-color-error);
  color: var(--md-sys-color-on-error);
}

.exit-btn.secondary {
  background: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface-variant);
}
</style>
