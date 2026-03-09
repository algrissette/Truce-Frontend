import { ReactNode, Suspense } from 'react';

export default function ResetPasswordLayout({ children }: { children: ReactNode }) {
    return (
        // Suspense ensures client components inside a server layout build properly
        <Suspense fallback={<div className="h-[100dvh] flex items-center justify-center text-white">
            Loading...
        </div>}>
            {children}
        </Suspense>
    );
}