import react from "@vitejs/plugin-react";
import { defineConfig, PluginOption } from "vite";

function I18nHotReload(): PluginOption {
  return {
    name: "i18n-hot-reload",
    handleHotUpdate({ file, server }) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (file.includes("locales") && file.endsWith(".json")) {
        server.ws.send({
          type: "custom",
          event: "locales-update",
        });
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), I18nHotReload()],
});