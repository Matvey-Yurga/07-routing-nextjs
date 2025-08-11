'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
type props = {
    children: React.ReactNode;
}
const TanstackProvider = ({ children }: props) => {
    const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
export default TanstackProvider;