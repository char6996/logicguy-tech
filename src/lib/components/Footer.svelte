<script>
  const year = new Date().getFullYear();
  import Logo from '$lib/assets/logo.png'; // Make sure your logo is in this path
</script>

<footer class="footer py-12 bg-orange-100">
  <div class="footer-container container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">

    <!-- Company Info / Logo & Tagline -->
    <div class="footer-section flex-1">
      <a href="/" class="footer-brand flex items-center gap-3 mb-4">
        <!-- Reduced logo size here -->
        <img src="{Logo}" alt="Logicguy Technologies Logo" class="h-6 w-auto" />
        <div class="flex flex-col">
          <span class="font-bold text-white text-lg">Logicguy Technologies</span> <br>
          <small class="text-white text-sm">Empowering Learning and Innovation</small>
        </div>
      </a>
      <p class="text-white text-sm">
        Logicguy Technologies provides top-notch IT solutions and training for individuals and businesses worldwide.
      </p>
    </div>

    <!-- Quick Links / Navigation -->
    <div class="footer-section flex-1">
      <h4 class="text-white font-semibold mb-2">Quick Links</h4>
      <ul class="flex flex-col gap-2">
        <li><a href="/" class="footer-link hover:text-orange-400 transition-colors">Home</a></li>
        <li><a href="/about" class="footer-link hover:text-orange-400 transition-colors">About Us</a></li>
        <li><a href="/services" class="footer-link hover:text-orange-400 transition-colors">Services</a></li>
        <li><a href="/portfolio" class="footer-link hover:text-orange-400 transition-colors">Portfolio</a></li>
        <li><a href="/industries" class="footer-link hover:text-orange-400 transition-colors">Industries</a></li>
        <li><a href="/why-us" class="footer-link hover:text-orange-400 transition-colors">Why Us</a></li>
        <li><a href="/contact" class="footer-link hover:text-orange-400 transition-colors">Contact</a></li>
      </ul>
    </div>

    <!-- Contact Info -->
    <div class="footer-section flex-1 text-white text-sm">
      <h4 class="font-semibold mb-2">Contact Info</h4>
      <p>Email Us Via: logicguytechnologies@gmail.com</p>
      <p>Call/Whatsapp: +254 712 458 323</p>
      <p>Location: Kenya · Serving Global Clients</p>
    </div>

  </div>

  <!-- Footer Bottom / Copyright -->
  <div class="footer-bottom mt-8 text-center text-sm text-white border-t border-white/20 pt-4">
    &copy; {year} Logicguy Technologies. All rights reserved.
  </div>
</footer>
