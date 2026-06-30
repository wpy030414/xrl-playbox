import { ref } from "vue";
import { useRouter } from "vue-router";

export function useExitConfirm() {
  const router = useRouter();
  const open = ref(false);
  const target = ref("/");
  let onConfirmCallback: (() => void) | null = null;

  function requestExit(to: string = "/", onConfirm?: () => void) {
    target.value = to;
    onConfirmCallback = onConfirm ?? null;
    open.value = true;
  }

  function confirm() {
    open.value = false;
    onConfirmCallback?.();
    onConfirmCallback = null;
    router.push(target.value);
  }

  function cancel() {
    open.value = false;
    onConfirmCallback = null;
  }

  return { open, requestExit, confirm, cancel };
}
