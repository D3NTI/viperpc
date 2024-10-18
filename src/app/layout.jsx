import './globals.css';
import AuthWrapper from './auth-wrapper';

export const metadata = {
  title: 'Viperr PC CLUB',
  description: 'Created by Danil, Artur, Uladzimir, Valeriy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}
