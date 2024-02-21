<template>
  <div class="w-100 h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      
      <a
        href="https://app.plataformaevoluir.com.br"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >Plataforma Evoluir</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="#"
        target="noopener noreferrer"
      >Licença e Termos de uso</a>
    </span>
  </div>
</template>
