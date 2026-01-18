<script>
  import Logo from '$lib/assets/logo.png';
  let menuOpen = false; // Mobile menu toggle
</script>

<nav class="navbar border-b">
  <div class="container flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

    <!-- Logo / Brand -->
    <a href="/" class="navbar-brand flex items-center gap-3">
      <img src="{Logo}" alt="Logicguy Technologies Logo" class="h-12 w-auto" />
      <div class="flex flex-col">
        <span class="text-primary font-bold text-xl">Logicguy Technologies</span>
        <small class="text-muted text-sm">Empowering Learning and Innovation</small>
      </div>
    </a>

    <!-- Desktop Menu -->
    <ul class="navbar-menu hidden md:flex gap-6 text-sm font-medium">
      <li><a href="/" class="nav-link">Home</a></li>
      <li><a href="/about" class="nav-link">About</a></li>
      <li><a href="/services" class="nav-link">Services</a></li>
      <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
      <li><a href="/industries" class="nav-link">Industries</a></li>
      <li><a href="/why-us" class="nav-link">Why Us</a></li>
      <li><a href="/contact" class="nav-link">Contact</a></li>
    </ul>

    <!-- Mobile Hamburger -->
    <button
      class="md:hidden flex flex-col justify-between h-12 w-12 p-2 rounded hover:bg-gray-100 transition"
      on:click={() => menuOpen = !menuOpen}
      aria-label="Toggle Menu"
    >
      <span
        class="block h-1.5 bg-primary rounded transition-all duration-300"
        class:rotate-45={menuOpen}
        class:translate-y-5={menuOpen}
      ></span>
      <span
        class="block h-1.5 bg-primary rounded transition-all duration-300"
        class:opacity-0={menuOpen}
      ></span>
      <span
        class="block h-1.5 bg-primary rounded transition-all duration-300"
        class:-rotate-45={menuOpen}
        class:-translate-y-5={menuOpen}
      ></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div
    class="mobile-menu-wrapper md:hidden overflow-hidden transition-all duration-300"
    style="max-height: {menuOpen ? '500px' : '0'}"
  >
    <ul class="mobile-menu flex flex-col gap-4 px-6 py-4 bg-white border-t">
      <li><a href="/" class="nav-link">Home</a></li>
      <li><a href="/about" class="nav-link">About</a></li>
      <li><a href="/services" class="nav-link">Services</a></li>
      <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
      <li><a href="/industries" class="nav-link">Industries</a></li>
      <li><a href="/why-us" class="nav-link">Why Us</a></li>
      <li><a href="/contact" class="nav-link">Contact</a></li>
    </ul>
  </div>
</nav>