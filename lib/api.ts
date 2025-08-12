import axios from "axios";
import type { Note, NoteData } from "../types/note";
axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

interface PaginatedResponse {
    notes: Note[]; 
    page: number;
    totalPages: number;
}

export const fetchNotes = async (page: number, query: string, tag?: string): Promise<PaginatedResponse> => {
     
    const response = await axios.get<PaginatedResponse>('/notes', {
        headers: {
            Authorization: `Bearer ${token}`,
        }, 
        params: {
            search: query.trim() !== "" ? query : undefined,
            page,
            perPage: 12,
            tag: tag && tag !== 'All' ? tag : undefined, 

        }
        
    });
    return response.data;
}
export const fetchNoteById = async (noteId: string) => {
    const response = await axios.get<Note>(`/notes/${noteId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
export const createNote = async (noteData: NoteData): Promise<Note> => {
    const response = await axios.post<Note>('/notes', noteData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}


export const deleteNote = async (noteId: string | number): Promise<Note> => { 
    const response = await axios.delete<Note>(`/notes/${noteId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}