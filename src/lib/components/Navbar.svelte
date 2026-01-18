<script>
  import Logo from '$lib/assets/logo.png';
  let menuOpen = false;

  // Close drawer when a link is clicked
  function handleLinkClick() {
    menuOpen = false;
  }
</script>

<nav class="navbar border-b sticky top-0 bg-white z-50">
  <div class="container flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

    <!-- Logo -->
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

    <!-- Mobile Hamburger Icon with Phone Icon -->
    <button
      type="button"
      class="md:hidden flex items-center justify-center h-14 w-14 p-3 rounded-lg transition-colors duration-300 hover:bg-primary hover:text-white"
      on:click={() => menuOpen = !menuOpen}
      aria-label="Toggle Menu"
      aria-expanded={menuOpen}
    >
      <!-- Phone Icon SVG -->
      <svg
        class="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5h2l3.6 7.59-1.35 2.45a11.04 11.04 0 005.45 5.45l2.45-1.35L19 19v2a1 1 0 01-1 1h-2C7.477 22 2 16.523 2 10V8a1 1 0 011-1z"
        ></path>
      </svg>
    </button>
  </div>

  <!-- Drawer Sidebar (right corner) -->
  <aside
    class="mobile-drawer md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 rounded-l-lg"
    class:translate-x-full={!menuOpen}
    class:translate-x-0={menuOpen}
    aria-hidden={!menuOpen}
  >
    <div class="flex flex-col h-full">

      <!-- Close Button -->
      <button
        type="button"
        class="self-end m-4 p-2 rounded hover:bg-gray-100 transition"
        on:click={() => menuOpen = false}
        aria-label="Close Menu"
      >
        ✕
      </button>

      <!-- Drawer Name / Title -->
      <h2 class="text-xl font-semibold px-6 mb-4 text-primary">Menu</h2>

      <!-- Menu Items -->
      <ul class="flex flex-col gap-4 px-6 py-4">
        <li><a href="/" class="nav-link hover:text-primary" on:click={handleLinkClick}>Home</a></li>
        <li><a href="/about" class="nav-link hover:text-primary" on:click={handleLinkClick}>About</a></li>
        <li><a href="/services" class="nav-link hover:text-primary" on:click={handleLinkClick}>Services</a></li>
        <li><a href="/portfolio" class="nav-link hover:text-primary" on:click={handleLinkClick}>Portfolio</a></li>
        <li><a href="/industries" class="nav-link hover:text-primary" on:click={handleLinkClick}>Industries</a></li>
        <li><a href="/why-us" class="nav-link hover:text-primary" on:click={handleLinkClick}>Why Us</a></li>
        <li><a href="/contact" class="nav-link hover:text-primary" on:click={handleLinkClick}>Contact</a></li>
      </ul>
    </div>
  </aside>

  <!-- Overlay -->
  {#if menuOpen}
    <button
      type="button"
      class="mobile-menu-overlay md:hidden fixed inset-0 bg-black bg-opacity-30 z-40"
      on:click={() => menuOpen = false}
      aria-label="Close Menu"
    ></button>
  {/if}
</nav>
