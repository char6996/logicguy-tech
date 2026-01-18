<script>
  import Logo from '$lib/assets/logo.png';
  let menuOpen = false;
</script>

<nav class="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
  <div class="container max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

    <!-- Logo / Brand -->
    <a href="/" class="flex items-center gap-2">
      <img
        src={Logo}
        alt="Logicguy Technologies Logo"
        class="h-8 md:h-10 w-auto"
      />
      <div class="flex flex-col leading-tight">
        <span class="text-primary font-bold text-base md:text-lg">
          Logicguy Technologies
        </span>
        <small class="text-gray-500 text-xs md:text-sm">
          Empowering Learning and Innovation
        </small>
      </div>
    </a>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
      <li><a href="/" class="hover:text-primary transition">Home</a></li>
      <li><a href="/about" class="hover:text-primary transition">About</a></li>
      <li><a href="/services" class="hover:text-primary transition">Services</a></li>
      <li><a href="/portfolio" class="hover:text-primary transition">Portfolio</a></li>
      <li><a href="/industries" class="hover:text-primary transition">Industries</a></li>
      <li><a href="/why-us" class="hover:text-primary transition">Why Us</a></li>
      <li>
        <a
          href="/contact"
          class="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
        >
          Contact
        </a>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden text-2xl text-gray-700 focus:outline-none"
      aria-label="Toggle navigation"
      on:click={() => (menuOpen = !menuOpen)}
    >
      ☰
    </button>
  </div>

  <!-- Mobile Navigation -->
  {#if menuOpen}
    <div class="md:hidden bg-white border-t shadow-md">
      <ul class="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-gray-700">
        <li><a href="/" on:click={() => (menuOpen = false)}>Home</a></li>
        <li><a href="/about" on:click={() => (menuOpen = false)}>About</a></li>
        <li><a href="/services" on:click={() => (menuOpen = false)}>Services</a></li>
        <li><a href="/portfolio" on:click={() => (menuOpen = false)}>Portfolio</a></li>
        <li><a href="/industries" on:click={() => (menuOpen = false)}>Industries</a></li>
        <li><a href="/why-us" on:click={() => (menuOpen = false)}>Why Us</a></li>
        <li>
          <a
            href="/contact"
            class="inline-block text-center px-4 py-2 bg-primary text-white rounded-lg"
            on:click={() => (menuOpen = false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  {/if}
</nav>

<!-- Spacer -->
<div class="h-16 md:h-20"></div>
