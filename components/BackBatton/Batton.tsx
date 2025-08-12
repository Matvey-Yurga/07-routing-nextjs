'use client';
import { useRouter } from 'next/navigation';
const BackBatton = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
  const handleBack = () => {
    router.back();
    }
    return <button onClick={handleBack}>{ children}</button>
}
export default BackBatton;