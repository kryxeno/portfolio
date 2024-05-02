import './fonts.css';
import './globals.css';
import './reset.css';
import StyledComponentsRegistry from './lib/registry';

export const metadata = {
  title: 'Tim van Ingen',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
