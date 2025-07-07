export default function debounce(callback, delay) {
  let timer
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
      timer = null
    }, delay);
  }
}

// Esse código implementa uma função chamada debounce, cujo objetivo é controlar a frequência com que uma função (callback) é executada.
// Certos eventos realizam uma quantidade excessiva de execuções de funções, como scroll, resize, etc.