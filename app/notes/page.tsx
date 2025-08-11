import {fetchNotes} from '@/lib/api';
import NotesClient from './Notes.client';
export default async function NotesPage() {
    const query = "";
    const page = 1;
      const initialData = await fetchNotes(page, query);
    return (<NotesClient initialData={initialData} /> );
}

