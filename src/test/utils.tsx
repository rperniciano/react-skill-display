
import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/LanguageContext';
import { translations } from '@/components/translations';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// The suite asserts Italian copy, so the language and its dictionary slice are
// passed explicitly - exactly the way the server layout passes them in the app.
// (This used to rely on mocking `navigator.language` to 'it-IT' and on the
// provider's prop-less fallback, which no longer exists: keeping that fallback
// alive forced all three dictionaries into the client bundle.)
const TEST_LANGUAGE = 'it' as const;

// Create a custom render method that includes providers used in the app
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function Providers({ children }: PropsWithChildren<unknown>) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider language={TEST_LANGUAGE} dictionary={translations[TEST_LANGUAGE]}>
        <ThemeProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export function renderWithProviders(ui: React.ReactElement) {
  return render(<Providers>{ui}</Providers>);
}

// Helper test wrapper if you need to pass custom context
export function TestWrapper({ children }: PropsWithChildren<unknown>) {
  return <Providers>{children}</Providers>;
}
