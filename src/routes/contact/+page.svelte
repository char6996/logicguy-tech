<script>
  // Optional: import Navbar or Footer if implemented
  // import Navbar from '$lib/components/Navbar.svelte';
  // import Footer from '$lib/components/Footer.svelte';
</script>

<section class="section section-light">
  <div class="container max-w-2xl mx-auto px-6 py-20">
    
    <!-- Page Title -->
    <h1 class="text-center text-4xl font-bold text-primary mb-12">
      Get in Touch
    </h1>

    <!-- Contact Form -->
    <form class="bg-white p-8 rounded-lg shadow-lg space-y-6">
      
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        />
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          placeholder="Your Message"
          rows="5"
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="btn btn-primary w-full text-center"
      >
        Get in Touch
      </button>
    </form>

    <!-- Contact Info -->
    <div class="text-center text-gray-700 mt-12 space-y-3">
      <p class="flex items-center justify-center gap-2">
        <span class="text-primary">📍</span> Kenya
      </p>
      <p class="flex items-center justify-center gap-2">
        <span class="text-primary">📧</span> logicguytechnologies@gmail.com
      </p>
      <p class="flex items-center justify-center gap-2">
        <span class="text-primary">📞</span> +254 712 458 323
      </p>
      <p class="mt-4 text-gray-500 text-sm">
        Logicguy Technologies – Empowering Learning and Innovation (Serving Global Clients)
      </p>
    </div>

  </div>
</section>
