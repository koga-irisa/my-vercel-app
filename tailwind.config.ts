import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',  // srcフォルダ内のすべてのファイルを対象にする
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-noto-serif-jp)'],
      },
    },
  },
  plugins: [],
}
export default config