diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..8eed725e9f69c7d9c4e318b3e2cc5cc7f5f22b71
--- /dev/null
+++ b/script.js
@@ -0,0 +1,45 @@
+// Mobile navigation toggle
+const menuToggle = document.querySelector('.menu-toggle');
+const navMenu = document.querySelector('#nav-menu');
+
+if (menuToggle && navMenu) {
+  menuToggle.addEventListener('click', () => {
+    const isOpen = navMenu.classList.toggle('open');
+    menuToggle.setAttribute('aria-expanded', String(isOpen));
+  });
+
+  // Close mobile menu when a link is selected
+  navMenu.querySelectorAll('a').forEach((link) => {
+    link.addEventListener('click', () => {
+      navMenu.classList.remove('open');
+      menuToggle.setAttribute('aria-expanded', 'false');
+    });
+  });
+}
+
+// Simple mock order tracking
+const trackingForm = document.querySelector('#tracking-form');
+const orderInput = document.querySelector('#order-number');
+const trackingResult = document.querySelector('#tracking-result');
+
+if (trackingForm && orderInput && trackingResult) {
+  const mockStatuses = [
+    'Order received and being prepared.',
+    'Order packed and ready for courier pickup.',
+    'Order is in transit to your delivery address.',
+    'Order delivered successfully. Enjoy your drip!'
+  ];
+
+  trackingForm.addEventListener('submit', (event) => {
+    event.preventDefault();
+
+    const orderNumber = orderInput.value.trim().toUpperCase();
+    if (!orderNumber) {
+      trackingResult.textContent = 'Please enter a valid order number.';
+      return;
+    }
+
+    const index = orderNumber.length % mockStatuses.length;
+    trackingResult.textContent = `${orderNumber}: ${mockStatuses[index]}`;
+  });
+}
