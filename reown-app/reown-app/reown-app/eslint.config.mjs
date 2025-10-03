(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/reown-app/eslint.config.mjs b/reown-app/eslint.config.mjs
--- a/reown-app/eslint.config.mjs
+++ b/reown-app/eslint.config.mjs
@@ -0,0 +1,26 @@
+import { dirname } from "path";
+import { fileURLToPath } from "url";
+import { FlatCompat } from "@eslint/eslintrc";
+
+const __filename = fileURLToPath(import.meta.url);
+const __dirname = dirname(__filename);
+
+const compat = new FlatCompat({
+  baseDirectory: __dirname,
+});
+
+const eslintConfig = [
+  ...compat.extends("next/core-web-vitals", "next/typescript"),
+  {
+    ignores: [
+      "node_modules/**",
+      ".next/**",
+      "out/**",
+      "build/**",
+      "next-env.d.ts",
+    ],
+  },
+];
+
+export default eslintConfig;
+
EOF
)
