// useZakoCounter.ts
// redo by ChatGPT 3.5
// 感谢 @krau 提供功能灵感
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { snackbar } from 'mdui/functions/snackbar.js';

export default function useZakoCounter() {
  const zako = ref<any>(null);
  const zakozako = ref<number>(0);

  const clickHandler = () => {
    // 检查 localStorage 是否存在 'zako' 键
    if (!localStorage.getItem('zako')) {
      // 如果不存在，将计数器重置为零
      zakozako.value = 0;
    }

    zakozako.value++;
    snackbar({
      message: "zako~ 怎么才点了 " + zakozako.value + " 次啊~",
      autoCloseDelay: 1000
    });
    localStorage.setItem('zako', zakozako.value.toString());
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('zako');
    zakozako.value = 0;
    snackbar({
      message: "zako~ 难道你还想再来一次？",
    });
  };

  onMounted(() => {
    if (localStorage.getItem('zako')) {
      zakozako.value = parseInt(localStorage.getItem('zako') || '0', 10);
    }

    zako.value.addEventListener('click', clickHandler);

    onBeforeUnmount(() => {
      zako.value.removeEventListener('click', clickHandler);
    });
  });

  return { zako, zakozako, clearLocalStorage };
}
