import {fetchNotes} from '@/lib/api';
import NotesClient from './Notes.client';
type Props = {
  params: Promise<{slug: string[]}>;
}
export default async function NotesPage({params}: Props) {
  const { slug } = await params;
  const tag = slug ? slug[0] : undefined;
    const query = "";
    const page = 1;
      const initialData = await fetchNotes(page, query);
    return (<NotesClient initialData={initialData} tag={tag} /> );
}

