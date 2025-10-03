(cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF'
diff --git a/reown-app/postcss.config.mjs b/reown-app/postcss.config.mjs
--- a/reown-app/postcss.config.mjs
+++ b/reown-app/postcss.config.mjs
@@ -0,0 +1,6 @@
+const config = {
+  plugins: ["@tailwindcss/postcss"],
+};
+
+export default config;
+
EOF
)
