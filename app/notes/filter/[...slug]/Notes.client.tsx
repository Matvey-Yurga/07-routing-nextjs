'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { fetchNotes } from '@/lib/api';
import { Note } from '@/types/note';

import NoteList from '@/components/NoteList/NoteList';
import Pagination from '@/components/Pagination/Pagination';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';
import SearchBox from '@/components/SearchBox/SearchBox';

import css from './NotesPage.module.css';

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface NotesClientProps {
  initialData: FetchNotesResponse;
  tag?: string;
}

const NotesClient = ({ initialData, tag }: NotesClientProps) => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [debouncedQuery] = useDebounce(query, 300);

  const { data } = useQuery({
    queryKey: ['notes', debouncedQuery, currentPage, tag],
    queryFn: () => fetchNotes(currentPage, debouncedQuery , tag),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
    initialData,
  });

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 1;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  }
  useEffect(() => {
  setCurrentPage(1);
  }, [tag]);
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox onSearch={handleSearch} />
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
      </header>
      {notes.length > 0 ? (
        <>
        <NoteList notes={notes} />
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            page={currentPage}
            onPageChange={setCurrentPage}
        />
      )}
      </>
      
      ) : (
        <p className={css.noNotes}>No notes found</p>)}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NoteForm onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default NotesClient;
