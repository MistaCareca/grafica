import '../app/globals.css';

export const metadata = {
  title: 'Minha Landing Page',
  description: 'Uma landing page incrível com Next.js e Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}