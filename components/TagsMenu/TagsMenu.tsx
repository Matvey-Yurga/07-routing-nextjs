'use client';
import { useState } from 'react';
import Link from 'next/link';
import css from './TagsMenu.module.css';
import type { NoteTag } from '@/types/note';
const TagsMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeClick = () => setIsOpen(false);
    const tags: NoteTag[] = ["Work", "Personal", "Meeting", "Shopping", "Todo"];
    return (<div className={css.menuContainer}>
        <button className={css.menuButton} onClick={toggleMenu}>
            Notes ▾
        </button>
        {isOpen &&
            <ul className={css.menuList}>
                <li><Link href={`/notes/filter/All`} className={css.menuLink} onClick={closeClick}>All</Link></li>
                {tags.map((note) => (
                    <li key={note} className={css.menuItem}>
                        <Link href={`/notes/filter/${note}`} className={css.menuLink} onClick={closeClick}>
                            {note}
                        </Link></li>
                ))}
            </ul>}
    </div>
    ); 
};
export default TagsMenu;