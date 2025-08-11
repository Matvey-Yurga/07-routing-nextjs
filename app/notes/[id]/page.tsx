import {fetchNoteById} from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NoteDetails from './NoteDetails.client';
interface NotePageProps {
    params: Promise<{ id: string }>;
}
const NotePage = async ({ params }: NotePageProps) => {
    const queryClient = new QueryClient();
    const {id} = await params;
    
    await queryClient.prefetchQuery({
        queryKey: ['note', id],
        queryFn: () => fetchNoteById(id),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetails/>
        </HydrationBoundary>
    );
};
export default NotePage;
